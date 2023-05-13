[h: target = arg(0)]
[h: viewer = arg(1)]

<!--
Here we check which points are visible from the observer's point of view.
For this, we temporarily set the vision to magical vision so that only walls and obstacles restrict vision.
-->
[h: sight = hasSight(viewer)]
[h: sightType = getSightType(viewer)]
[h: setSightType("Magiesinn", viewer)]
[h: setHasSight(true, viewer)]
[h: visiblePoints = canSeeToken(target, viewer)]
[h: setHasSight(sight, viewer)]
[h: setSightType(sightType, viewer)]

<!-- We determine the illumination of all relevant light sources in our campaign. -->

[h: cmp = json.indent(getInfo("campaign"), 2)]
[h: campaignLights = json.get(json.get(cmp, "light sources"), "DSA")]
[h: campaignLights = json.sort(campaignLights, "desc", "name")]

[h: map = json.indent(getInfo("map"), 2)]
[h: visiontype = json.get(map, "vision type")]
[h: grid = json.get(map, "grid")]
[h: cellWidth = json.get(grid, "cell width")]
[h: cellHeight = json.get(grid, "cell height")]
[h: targetSize = scale(getSize(target)) / 2.0]
[h: width = round(cellWidth * targetSize)]
[h: height = round(cellHeight * targetSize)]

<!--
We set the default lighting and shading here.
During the day, the lighting is at its maximum, and during the night, it is set to 0.
We only cover points that are visible from the viewer's perspective.
-->

<!-- Without vision, we cannot determine any sight hindrance and abort the process. -->
[h,if(visiontype == "OFF"): return(0, 0)]
<!-- Without any light sources the default illumination during night is 0. At daytime its 4 (maximum) -->
[h,if(visiontype == "NIGHT"): lightValue = 0; lightValue = 4]
[h: darkValue = 0]
[h: lightOutput = "{}"]
[h: darkOutput = "{}"]
[h,foreach(point, visiblePoints),Code:
{
	[h: lightOutput = json.set(lightOutput, point, lightValue)]
	[h: darkOutput = json.set(darkOutput, point, darkValue)]
}]

<!-- Since no more than 2 encapsulated Code-Blocks are allowed we determine the offset of the point by using a dictionary for some code. -->
[h: pointDict = json.set("",
"CENTER", "[h: offsetX = 0] [h: offsetY = 0]",
"TOP_LEFT", "[h: offsetX = -width] [h: offsetY = -width]",
"TOP_RIGHT", "[h: offsetX = width] [h: offsetY = -width]",
"BOTTOM_LEFT", "[h: offsetX = -width] [h: offsetY = width]",
"BOTTOM_RIGHT", "[h: offsetX = width] [h: offsetY = width]"
)]

<!-- We retrieve all tokens with a relevant light source within the corresponding radius around the target. -->
[h: tokens = getTokens("json", json.set("",
	"layer", json.append("[]", "token", "object", "background"),
	"range", json.set("", "token", target, "from", 0, "upto", 24),
	"light", json.set("", "value", 1, "category", "DSA")
))]
<!-- Since getTokens excludes the reference target, we add it manually if it contains a light source. -->
[h,if(getLights("DSA", ",", target) != ""): tokens = json.append(tokens, target)]

<!-- Here we create a dictionary with tokens and their largest light source. The whole thing is sorted by light source to enable fast search. -->
[h: lightSources = "[]"]
[h,foreach(lightSource, tokens),Code:
{
	[h: lights = getLights("DSA", "json", lightSource)]
	[h: lights = json.sort(lights, "desc")]
	[h: lightSources = json.append(lightSources, json.set("", "token", lightSource, "light", json.get(lights, 0)))]
}]
[h: lightSources = json.sort(lightSources, "desc", "light")]

[h: lightest = 0]
[h: darkest = 0]

<!-- Here we iterate through the lights, we found in all our relevant tokens.
Since the lights of our tokens and the light definitions in our campaign are all sorted by name,
we only need 1 loop and can iterate through both of them very quickly  -->
[h: i = 0]
[h: campaignLight = json.get(campaignLights, i)]
[h,foreach(lightSource, lightSources),Code:
{
	[h: illuminator = json.get(lightSource, "token")]
	[h: light = json.get(lightSource, "light")]

	<!-- Here we forward our light definition in the campaign to match the tokens light -->
	[h,while(light != json.get(campaignLight, "name")),Code:
	{
		[h: i = i + 1]
		[h: campaignLight = json.get(campaignLights, i)]
	}]

	[h: radius = json.get(campaignLight, "max range")]
	<!-- Its important to know wheather its a light or a dark source. So we check the lumens of the first segment -->
	[h: segments = json.get(campaignLight, "light segments")]
	[h: firstSegment = json.get(segments, 0)]
	[h,if(json.get(firstSegment, "lumens") < 0): sign = -1; sign = 1]
	[h: radiusStep = radius / json.length(segments)]

	<!-- We temporarily set the sight of our lightSource to an special sighttype.
	This is important because we want our light to only see what it illuminates so that canSeeToken() tells us what our lightsource is hits -->
	[h: sight = hasSight(illuminator)]
	[h: sightType = getSightType(illuminator)]
	[h: setSightType("Lightsource R"+radius, illuminator)]
	[h: setHasSight(true, illuminator)]
	<!-- This is a crucial part. When removing the broadcast canSeeToken crashes by throwing a java.util.ConcurrentModificationException... -->
	[h: broadcast("")]
	[h: illuminatedPoints = canSeeToken(target, illuminator)]
	[h: relevantPoints = json.intersection(illuminatedPoints, visiblePoints)]
	<!-- Revert the sight of our light source. There is still a problem. When having lots of light sources this change of view can result into flickering. -->
	[h: setHasSight(sight, illuminator)]
	[h: setSightType(sightType, illuminator)]

	[h: illuminatorSize = scale(getSize(illuminator)) / 2.0]
	<!-- Now we iterate through the illuminated/darkened sample points to determine their brightness. -->
	[h,foreach(point, relevantPoints),Code:
	{
		<!-- Determine offsetX and offsetY according the the sample point. We do this by calling our dictionary. -->
		[h: evalMacro(json.get(pointDict, point))]
		<!-- As getDistanceToXY apparently always starts from the bottom right point, we need to come up with a solution. -->
		[h: offsetX = offsetX + round(illuminatorSize * cellWidth)]
		[h: offsetY = offsetY + round(illuminatorSize * cellHeight)]
		[h: x = getTokenX(1, target) + offsetX]
		[h: y = getTokenY(1, target) + offsetY]
		[h: distance = getDistanceToXY(x, y, 1, illuminator, "NO_GRID", 1)]
		[h: lumens = 5 - ceil(distance / radiusStep)]
		[h: lumens = sign * max(0, min(4, lumens))]
		
		[h,if(distance <= radius && lumens > 0):
			lightOutput = json.set(lightOutput, point, max(json.get(lightOutput, point), lumens))]
		<!-- As own sources of darkness are excluded from the current visibility, we do not take them into account here. -->
		[h,if(distance <= radius && lumens < 0 && illuminator != viewer):
			darkOutput = json.set(darkOutput, point, min(json.get(darkOutput, point), lumens))]
	}]
}]

<!-- Now we weigh brightness and darkness for each point and note the brightest result. -->
[h: lumens = 0]
[h,foreach(point, visiblePoints),Code:
{
	[h: lumens = max(lumens, json.get(lightOutput, point) + json.get(darkOutput, point))]
}]

<!-- We cap our final result to value between 0 and 4. -->
[h: illumination = min(4, max(0, 4-lumens))]
[h: macro.return = illumination]