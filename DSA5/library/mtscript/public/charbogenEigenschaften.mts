[h: switchToken(arg(0))]

[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "1")]

[frame5("charbogen", "width=525; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Eigenschaften
		</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charsheet.css?cachelib=false'/>
	</head>
	<body>
		<div class="header">
			<div class="charactername">
				<a href='[r: macroLinkText("gotoToken@this", "", currentToken())]' title='Zum Charaktertoken wechseln'>[r: getName()]</a>
			</div>

			[r,macro("charsheetNavigation@this"): json.append(currentToken(), 0)]
		</div>
		
		<div class="content">
			[r,macro("eigLeiste@this"): currentToken()]
			<div class="row-container" style="justify-content: space-between; gap: 0;">
				<div class="panel-round">
					<div class="heading heading-additional">
						Werte
						<a href="[r: macroLinkText('chareditEigenschaften@this', '', currentToken())]">
							<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesEdit.png")]' border="0" alt="Basiswerte editieren"></image>
						</a>
					</div>
					<div class="stat-table">
						<div>Seelenkraft:</div>
						[h: aktSK = getSK(currentToken())]
						[h,if(aktSK < SK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
						[h,if(aktSK > SK): eigColor = "#0099ff"]
						<div style='color: [r: eigColor];'>[r: aktSK]</div>

						<div>Zähigkeit:</div>
						[h: aktZK = getZK(currentToken())]
						[h,if(aktZK < ZK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
						[h,if(aktZK > ZK): eigColor = "#0099ff"]
						<div style='color: [r: eigColor];'>[r: aktZK]</div>

						[h: wID = getStrProp(PlayerOpt, "atWeapon")]
						[h: aktINI = getINI(currentToken())]
						[h,if(aktINI < INI): eigColor = "#ff3333"; eigColor = "#eee5c8"]
						[h,if(aktINI > INI): eigColor = "#0099ff"]
						[h: link = strformat("<a title='Initiative ermitteln' href='%s'>", macroLinkText("probeINI@this", "", currentToken()))]
						<div>[r:link]Initiative:</a></div>
						<div style='color: [r: eigColor];' >[r: link][r: aktINI]+[r: INIDiceCount]W6</a></div>

						<div>Geschwindigkeit:</div>
						[h: aktGS = getGS(currentToken())]												
						[h,if(aktGS < GS): eigColor = "#ff3333"; eigColor = "#eee5c8"]
						[h,if(aktGS > GS): eigColor = "#0099ff"]	
						<div style='color: [r: eigColor];'>[r: aktGS]</div>

						[h: aktAW = getAW(currentToken())]
						[h,if(aktAW < AW): eigColor = "#ff3333"; eigColor = "#eee5c8"]
						[h,if(aktAW > AW): eigColor = "#0099ff"]
						[h: link = strformat("<a href='%s'>", macroLinkText("probeAW@this", "", currentToken()))]
						[h: hands = usesHands(currentToken())]
						<div>[r: link][r,if(hands != 0):"Ausweichen";"Verteidigung"]:</a></div>
						<div style='color: [r: eigColor];'>[r: link][r: aktAW]</a></div>

						<div>Schicksalspunkte:</div>
						<div>[r: SchipsAktuell] / [r: SchipsMax]</div>

						<div>Schmerzstufen:</div>
						<div>[r: schmerzStufe(1)] / [r: schmerzStufe(2)] / [r: schmerzStufe(3)] / [r: schmerzStufe(4)]</div>

						<div>Abenteuerpunkte:</div>
						<div>[r: APverfuegbar] / [r: APgesamt]</div>
					</div>
				</div>

				<div style="display: flex; flex-direction: column; justify-content: start; flex: 1; gap:4px">
				
					<!-- TokenImage-->
					<div style="display: flex; justify-content: center">
						<img src='[r:getTokenImage(85)]'></img>
					</div>
					<!-- Healthbar -->
					[r, macro("energyBar@this"): json.append(currentToken(), "le")]

					<!-- Zeige Astralbalken, falls nötig -->
					[r,if(MaxAsP > 0),Code:{
						[r, macro("energyBar@this"): json.append(currentToken(), "ae")]
					}]

					<!-- Zeige Karmabalken, falls nötig -->
					[r,if(MaxKaP > 0),Code:{
						[r, macro("energyBar@this"): json.append(currentToken(), "ke")]
					}]
				</div>
			</div>
			[r,macro("charbogenTraitsDisplay@this"): currentToken()]
		</div>
		<div class="footer"/>
	</body>
</html>
}]