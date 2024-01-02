[h: switchToken(arg(0))]

[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "6")]

[frame5("charbogen", "width=517; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Notizen &amp; Handouts
		</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charsheet.css?cachelib=false'/>
	</head>
	<body>
		<div class="header">
			<div class="charactername">
				<a href='[r: macroLinkText("gotoToken@this", "", currentToken())]' title='Zum Charaktertoken wechseln'>[r: getName()]</a>
			</div>
			[r,macro("charsheetNavigation@this"): json.append(currentToken(), 5)]
		</div>
		<div class="content">
			[r,macro("eigLeiste@this"): currentToken()]

			<div class="table" id="handouts">
				<div>Handouts</div>
				[h: hShared = getLibProperty("VisibleHandouts")]
				[h: hCount = json.length(hShared)]
				[h: hAusgabe = ""]
				[h: num = 0]
				[h,count(hCount, ""), Code:
				{
					[hNum = json.get(hShared, num)]
					[hTokenName = strformat("Handout %s", hNum)]
					[id = findToken(hTokenName, "Spieltisch")]

					[h: x = getTokenX(0, id, "Spieltisch")]
					[h: y = getTokenY(0, id, "Spieltisch")]
					[h,if(getCurrentMapName() != "Spieltisch"): moveTokenFromMap(id, "Spieltisch", x, y)]
					[h: switchToken(id)]
					
					[token(hTokenName): hTitle = getLabel()]
					[if(hTitle == ""): hTitle = "Handout"]
					[token(hTokenName): hShort = getNotes()]
					[if(hShort == ""): hShort = "Keine Beschreibung verfügbar"]

					[h,if(getCurrentMapName() != "Spieltisch"): moveTokenToMap(id, "Spieltisch", x, y)]
					
					[hLink = strformat("<a href='%s'><image src='%s' border='0' alt='Handout anzeigen'></image></a>", macroLinkText("handoutShow@this", "", id), data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/scroll.png"))]
					[hAusgabe = hAusgabe + strformat("
					<div>
						<table style='border-spacing: 0px; margin-bottom: 3px;' width='405' cellpadding='0'>
							<tr>
								<td>
									<b>%s</b>
									<br>%s
								</td>
								<td style='text-align: right; padding-right: 3px;'>
									%s
								</td>
							</tr>
						</table>
					</div>
					", hTitle, hShort, hLink)]
					[num = num + 1]
				}]
				[r,if(hAusgabe == ""), Code:
				{
					[r: "<div>Keine Vorhanden</div>"]
				};{
					[r: hAusgabe]
				}]
			</div>
		</div>
		<div class="footer"/>
	</body>
</html>
}]