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

			<table style='border-spacing: 0px;' width='431'>
				<tr>
					<td class="panel-middle">
						<div width='405'>
							<table style='border-spacing: 0px;' cellpadding='0' width='399'>
								<tr>
									<td width='373'>
										<image src='[r: tableImage("mainTheme", 93)]'></image>
									</td>
									<td style='text-align: center;' width='13'>
										<a href="[r: macroLinkText("notizAdd@this")]"><image src='[r: tableImage("mainTheme", 97)]' border="0" alt="Eine neue Notiz hinzufügen"></image></a>
									</td>
									<td style='text-align: right;' width='13'>
										<a href="[r: macroLinkText("notizDelAll@this")]"><image src='[r: tableImage("mainTheme", 98)]' border="0" alt="Alle Notizen löschen"></image></a>
									</td>
								</tr>
							</table>
						</div>
						[h: nAusgabe = ""]
						[h: nTitel = ""]
						[h: nText = ""]
						[h: num = 1]
						[h,count(getStrProp(Notizen, "nAnzahl"), ""), Code:
							{
								[nTitel = getStrProp(Notizen, strformat("n%{num}Titel"))]
								[nText = getStrProp(Notizen, strformat("n%{num}Text"))]
								[editLink = strformat("<a href='%s'><image src='%s' border='0' alt='Diese Notiz editieren'></image></a>", macroLinkText("notizEdit@this", "", num), tableImage("mainTheme", 99))]
								[delLink = strformat("<a href='%s'><image src='%s' border='0' alt='Diese Notiz löschen'></image></a>", macroLinkText("notizDel@this", "", num), tableImage("mainTheme", 100))]
								[nAusgabe = nAusgabe + strformat("
								<table style='border-spacing: 0px; margin-bottom: 3px;' cellpadding='0'>
									<tr>
										<td>
											<b>%s - </b>%s&nbsp;%s
											<br>
											%s
										</td>
									</tr>
								</table>
								", nTitel, editLink, delLink, nText)]
								[num = num + 1]
							}
						]
						[r,if(getStrProp(Notizen, "nAnzahl") == 0), Code:
							{
								[r: "Keine Vorhanden<br>&nbsp;"]
							};
							{
								[r: nAusgabe+"<br>"]
							}
						]
						<div width='405'>
							<image src='[r: tableImage("mainTheme", 95)]'></image>
						</div>
						[h: hShared = getLibProperty("SharedHandouts", "com.github.lector.dsa5maptool")]
						[h: hCount = listCount(hShared)]
						[h: hAusgabe = ""]
						[h: num = 0]
						[h,count(hCount, ""), Code:
						{
							[hNum = listGet(hShared, num)]
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
							
							[hLink = strformat("<a href='%s'><image src='%s' border='0' alt='Handout anzeigen'></image></a>", macroLinkText("handoutShow@this", "", id), tableImage("mainTheme", 101))]
							[hAusgabe = hAusgabe + strformat("
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
							", hTitle, hShort, hLink)]
							[num = num + 1]
						}]
						[r,if(hAusgabe == ""), Code:
							{
								[r: "Keine Vorhanden<br>&nbsp;"]
							};
							{
								[r: hAusgabe+"<br>"]
							}
						]
						<div width='405'>
							<table style='border-spacing: 0px;' cellpadding='0' width='399'>
								<tr>
									<td width='370'>
										<image src='[r: tableImage("mainTheme", 94)]'></image>
									</td>
									<td style='text-align: center;' width='16'>
										<a href="[r: macroLinkText("notizSLEdit@this")]"><image src='[r: tableImage("mainTheme", 96)]' border="0" alt="SL-Notizen hinzufügen oder bearbeiten"></image></a>
									</td>
									<td style='text-align: right;' width='13'>
										<a href="[r: macroLinkText("notizSLDel@this")]"><image src='[r: tableImage("mainTheme", 98)]' border="0" alt="Alle SL-Notizen löschen"></image></a>
									</td>
								</tr>
							</table>
						</div>
						[r,if(getGMNotes() == ""): output = "Keine Vorhanden"; output = getGMNotes()]
					</td>
				</tr>
			</table>

		</div>
		<div class="footer"/>
	</body>
</html>
}]