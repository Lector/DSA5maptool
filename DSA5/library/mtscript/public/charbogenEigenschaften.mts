[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "1")]
[h: plus = strformat("<image src='%s' title='Erhöhen' border='0'/>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/misc/plus.png"))]
[h: minus = strformat("<image src='%s' title='Senken' border='0'/>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/misc/minus.png"))]

[frame5("charbogen", "width=525; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Eigenschaften
		</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charEigenschaften.css?cachelib=false'/>
	</head>
	<body >
		<div id="header">
			<div class="charactername">
				<a href='[r: macroLinkText("gotoToken@this", "", currentToken())]' title='Zum Charaktertoken wechseln'>[r: getName()]</a>
			</div>

			<div class="charbogenNav">
				<image src='[r: tableImage("mainTheme", 5)]'></image>
				<a href="[r: macroLinkText("charbogenKampf@this")]"><image src='[r: tableImage("mainTheme", 6)]' alt="Kampfbogen aufrufen"></image></a>
				<a href="[r: macroLinkText("charbogenTalente@this", "", "Koerper")]"><image src='[r: tableImage("mainTheme", 8)]' alt="Talentbogen aufrufen"></image></a>
				<a href="[r: macroLinkText("charbogenZauber@this")]"><image src='[r: tableImage("mainTheme", 10)]'alt="Zauberbogen aufrufen"></image></a>
				<a href="[r: macroLinkText("charbogenLiturgien@this")]"><image src='[r: tableImage("mainTheme", 12)]' alt="Liturgiebogen aufrufen"></image></a>
				<a href="[r: macroLinkText("charbogenNotizen@this")]"><image src='[r: tableImage("mainTheme", 14)]' alt="Notizen &amp; Handouts aufrufen"></image></a>
			</div>
		</div>
		
		<div id="content">
			<div id="leisteEigenschaften" style="display: flex;flex-direction: column;align-items:center; justify-content:center;">
				[r,macro("eigLeiste@this"): ""]
			</div>
			<div class="row-container">
				<div class="highlight column-container">
					<div class="highlightHeading">WERTE</div>
					<div class="row-container">
						<div>SK: [h: aktSK = getSK()]
								[h,if(aktSK < SK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
								[h,if(aktSK > SK): eigColor = "#0099ff"]	
								<span style='color: [r: eigColor];'>[r: aktSK]</span>
						</div>
						<div>
							[h: wID = getStrProp(PlayerOpt, "atWeapon")]
							[h: aktINI = getINI()]
							[h,if(aktINI < INI): eigColor = "#ff3333"; eigColor = "#eee5c8"]
							[h,if(aktINI > INI): eigColor = "#0099ff"]
							<a title='Initiative ermitteln' href="[r: macroLinkText("probeINI@this", "", wID)]">INI: <span style='color: [r: eigColor];' >[r: aktINI]</span>+1W6</a>
						</div>
						
					</div>
					<div class="row-container">
						<div>ZK: [h: aktZK = getZK()]												
								[h,if(aktZK < ZK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
								[h,if(aktZK > ZK): eigColor = "#0099ff"]
								<span style='color: [r: eigColor];'>[r: aktZK]</span>
						</div>
						<div>GS: [h: aktGS = getGS()]												
								[h,if(aktGS < GS): eigColor = "#ff3333"; eigColor = "#eee5c8"]
								[h,if(aktGS > GS): eigColor = "#0099ff"]	
								<span style='color: [r: eigColor];'>[r: aktGS]</span>
						</div>
					</div>
					<div class="charbogen-werte">
						<div>Schmerzstufen:</div><div>[r: schmerzStufe(1)]/[r: schmerzStufe(2)]/[r: schmerzStufe(3)]/[r: schmerzStufe(4)]</div>
						<div>Schips:</div><div>[r: SchipsAktuell]/[r: SchipsMax]</div>
						<div>AP gesamt:</div><div>[r: APgesamt]</div>
						<div>AP verfügbar:</div><div>[r: APverfuegbar]</div>
						<div>AP ausgegeben:</div><div>[r: APausgegeben]</div>
					</div>
				</div>

				<div style="display: flex; flex-direction: column; gap:4px">
				
					<!-- TokenImage-->
					<div style="display: flex; justify-content: center">
						<img src='[r:getTokenImage(85)]'></img>
					</div>
					<!-- Healthbar -->
					<div class="energyBar" title="Lebenspunkte">
						[h,if(MaxLeP <=0): barMaxLeP = 1; barMaxLeP = MaxLeP]
						[h: barLE = round(1.5 * (LeP / (barMaxLeP / 100)))]
						[h: imageLEBarEmpty = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/bar.png")]
						[h: imageLEBar = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/barLife.png")]

						<!-- These inline styles are neede cause they are dynamic -->
						<div style="background-image: url('[r:imageLEBarEmpty]'); width: 150px; height: 33px; overflow: hidden; position: relative">
							<div style="background-image: url('[r: imageLEBar]'); height: 33px; width: [r: barLE];"></div>
							<div class="energyBarText">[r: LeP]/[r: MaxLeP]</div>
						</div>
						<div class="energyBarModifiers">
							[r: macroLink(plus, "changeEnergie@this", "", "lePlus")]
							[r: macroLink(minus, "changeEnergie@this", "", "leMinus")]
						</div>
					</div>

					<!-- Zeige Astralbalken, falls nötig -->
					[r,if(MaxAsP > 0),Code:{
					<div class="energyBar" title="Astralpunkte">
						[h,if(MaxAsP <=0): barMaxAsP = 1; barMaxAsP = MaxAsP]
						[h: barAE = round(1.5 * (AsP / (barMaxAsP / 100)))]
						[h: imageLEBarEmpty = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/bar.png")]
						[h: imageMagicBar = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/barMagic.png")]

						<!-- These inline styles are neede cause they are dynamic -->
						<div style="background-image: url('[r:imageLEBarEmpty]'); width: 150px; height: 33px; overflow: hidden; position: relative">
							<div style="background-image: url('[r: imageMagicBar]'); height: 33px; width: [r: barAE];"></div>
							<div class="energyBarText">[r: AsP]/[r: MaxAsP]</div>
						</div>
						<div class="energyBarModifiers">
							[r: macroLink(plus, "changeEnergie@this", "", "aePlus")]
							[r: macroLink(minus, "changeEnergie@this", "", "aeMinus")]
						</div>
					</div>};{}]

					<!-- Zeige Karmabalken, falls nötig -->
					[r,if(MaxKaP > 0),Code:{
					<div class="energyBar" title="Karmalpunkte">
						[h,if(MaxKaP <=0): barMaxKaP = 1; barMaxKaP = MaxKaP]
						[h: barKE = round(1.5 * (KaP / (barMaxKaP / 100)))]
						[h: imageLEBarEmpty = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/bar.png")]
						[h: imageKarmaBar = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/barKarma.png")]

						<!-- These inline styles are neede cause they are dynamic -->
						<div style="background-image: url('[r:imageLEBarEmpty]'); width: 150px; height: 33px; overflow: hidden; position: relative">
							<div style="background-image: url('[r: imageKarmaBar]'); height: 33px; width: [r: barKE];"></div>
							<div class="energyBarText">[r: KaP]/[r: MaxKaP]</div>
						</div>
						<div class="energyBarModifiers">
							[r: macroLink(plus, "changeEnergie@this", "", "kePlus")]
							[r: macroLink(minus, "changeEnergie@this", "", "keMinus")]
						</div>
					</div>};{}]
				</div>
			</div>
			<div>
				[r,macro("charbogenTraitsDisplay@this"): ""]
			</div>
		</div>
		<div id="footer"></div>
	</body>
</html>
}]