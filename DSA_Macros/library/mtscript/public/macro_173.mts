[h: target = arg(0)]
[h: viewer = arg(1)]

<!--
Hier prüfen wir welche Punkte vom Betrachter aus sichtbar sind.
Dazu setzen wir temporär die Sicht auf Magiesicht damit nur Wände und Hindernisse die Sicht einschränken.
TODO: Prüfen ob man das wirklich braucht
-->
[h: sight = hasSight(viewer)]
[h: sightType = getSightType(viewer)]
[h: setSightType("Magiesinn", viewer)]
[h: setHasSight(true, viewer)]
[h: visiblePoints = canSeeToken(target, viewer)]
[h: setHasSight(sight, viewer)]
[h: setSightType(sightType, viewer)]

<!--
Zunächst besorgen wir uns alle Tokens mit relevanter Lichtquelle im entsprechenden Radius um das anvisierte Ziel
-->
[h: tokens = getTokens("json", json.set("",
	"layer", json.append("[]", "token", "object", "background"),
	"range", json.set("", "token", target, "from", 0, "upto", 24),
	"light", json.set("", "value", 1, "category", "DSA")
))]
<!-- Da getTokens, das Bezugstarget ausschließt fügen wir es manuell hinzu falls es eine Lichtquelle enthält -->
[h,if(getLights("DSA", ",", target) != ""): tokens = json.append(tokens, target)]

<!-- Hier erstellen wir ein dictionary mit Tokens und der größten Lichtquelle.
Das ganze ist nach Lichtquelle sortiert um eine schnelle Suche nach der Lichtquelle zu ermöglichen -->
[h: lightSources = "[]"]
[h,foreach(lightSource, tokens),Code:
{
	[h: lights = getLights("DSA", "json", lightSource)]
	[h: lights = json.sort(lights, "desc")]
	[h: lightSources = json.append(lightSources, json.set("", "token", lightSource, "light", json.get(lights, 0)))]
}]
[h: lightSources = json.sort(lightSources, "desc", "light")]

<!-- Anschließend stellen wir die Beleuchtung von allen relevanten Lichtquellen fest -->

[h: cmp = json.indent(getInfo("campaign"), 2)]
[h: dsalights = json.get(json.get(cmp, "light sources"), "DSA")]
[h: dsalights = json.sort(dsalights, "desc", "name")]

[h: map = json.indent(getInfo("map"), 2)]
[h: visiontype = json.get(map, "vision type")]
[h: grid = json.get(map, "grid")]
[h: cellWidth = json.get(grid, "cell width")]
[h: cellHeight = json.get(grid, "cell height")]
[h: targetSize = scale(getSize(target)) / 2.0]
[h: width = round(cellWidth * targetSize)]
[h: height = round(cellHeight * targetSize)]

<!--
Die Standardbeleuchtung und -verdunkelung legen wir hier fest.
Bei Tag ist die Beleuchtung maximal. Bei Nacht bei 0.
Wir belegen nur Punkte, welche vom Betrachter aus sichtbar sind.
-->
<!-- Ohne Sicht können wir keine Sichterschwernis feststellen und brechen ab -->
[h,if(visiontype == "OFF"): return(0, 0)]
[h,if(visiontype == "NIGHT"): lightValue = 0; lightValue = 4]
[h: darkValue = 0]
[h: lightOutput = "{}"]
[h: darkOutput = "{}"]
[h,foreach(point, visiblePoints),Code:
{
	[h: lightOutput = json.set(lightOutput, point, lightValue)]
	[h: darkOutput = json.set(darkOutput, point, darkValue)]
}]
[h: pointDict = json.set("",
"CENTER", "[offsetX = 0] [offsetY = 0]",
"TOP_LEFT", "[offsetX = -width] [offsetY = -width]",
"TOP_RIGHT", "[offsetX = width] [offsetY = -width]",
"BOTTOM_LEFT", "[offsetX = -width] [offsetY = width]",
"BOTTOM_RIGHT", "[offsetX = width] [offsetY = width]"
)]

[h: lightest = 0]
[h: darkest = 0]

[h: i = 0]
[h: dsalight = json.get(dsalights, i)]

[h,foreach(lightSource, lightSources),Code:
{
	[h: illuminator = json.get(lightSource, "token")]
	[h: light = json.get(lightSource, "light")]

	[h,while(light != json.get(dsalight, "name")),Code:
	{
		[h: i = i + 1]
		[h: dsalight = json.get(dsalights, i)]
	}]
	[h: radius = json.get(dsalight, "max range")]
	[h: lastDigit = number(substring(light, length(light) - 1))]
	[h,if(startsWith(light, "Dunkelheit") == 1 || startsWith(light, "Bann des Lichts") == 1): sign = -1; sign = 1]
	[h: radiusStep = radius / lastDigit]

	[h: sight = hasSight(illuminator)]
	[h: sightType = getSightType(illuminator)]
	[h: setSightType("Lightsource R"+radius, illuminator)]
	[h: setHasSight(true, illuminator)]
	[h: illuminatedPoints = canSeeToken(target, illuminator)]
	[h: relevantPoints = json.intersection(illuminatedPoints, visiblePoints)]
	[h: setHasSight(sight, illuminator)]
	[h: setSightType(sightType, illuminator)]

	[h: illuminatorSize = scale(getSize(illuminator)) / 2.0]
	<!-- Nun iterieren wir die beleuchteten/verdunkelten Samplepunkte um ihre Helligkeit zu bestimmen -->
	[h,foreach(point, relevantPoints),Code:
	{
		[h: evalMacro(json.get(pointDict, point))]
		<!-- Da getDistanceToXY anscheinend immer vom unten rechten Punkt ausgeht müssen wir uns was überlegen -->
		[h: offsetX = offsetX + round(illuminatorSize * cellWidth)]
		[h: offsetY = offsetY + round(illuminatorSize * cellHeight)]
		[h: x = getTokenX(1, target) + offsetX]
		[h: y = getTokenY(1, target) + offsetY]
		[h: distance = getDistanceToXY(x, y, 1, illuminator, "NO_GRID", 1)]
		[h: lumens = (lastDigit + 1) - ceil(distance / radiusStep)]
		[h: lumens = sign * max(0, min(lastDigit, lumens))]
		
		[h,if(distance <= radius && lumens > 0):
			lightOutput = json.set(lightOutput, point, max(json.get(lightOutput, point), lumens))]
		<!-- Da eigene Dunkelheitsquellen von der aktuellen Sicht ausgenommen sind beachten wir sie hier nicht -->
		[h,if(distance <= radius && lumens < 0 && illuminator != viewer):
			darkOutput = json.set(darkOutput, point, min(json.get(darkOutput, point), lumens))]
	}]
}]

<!-- Nun wägen wir für jeden Punkt Helligkeit und Dunkelheit ab und merken uns das hellste Ergebnis -->
[h: lumens = 0]
[h,foreach(point, visiblePoints),Code:
{
	[h: lumens = max(lumens, json.get(lightOutput, point) + json.get(darkOutput, point))]
}]

[h: illumination = min(4, max(0, 4-lumens))]
[h: macro.return = illumination]