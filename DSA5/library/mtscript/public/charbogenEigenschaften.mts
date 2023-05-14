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

[frame5("charbogen", "width=525; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Eigenschaften
		</title>
		<link rel="preconnect" href="https://fonts.googleapis.com%22%3E/"
		<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Crete+Round&family=IM+Fell+Great+Primer&family=Wellfleet&display=swap" rel="stylesheet">
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charEigenschaften.css?cachelib=false'/>
	</head>
	<body>
		<div id="header">
			<div class="charactername">
				<a href='[r: macroLinkText("gotoToken@this", "", currentToken())]' title='Zum Charaktertoken wechseln'>[r: getName()]</a>
			</div>

			[r,macro("charsheetNavigation@this"): json.append(currentToken(), 0)]
		</div>
		
		<div id="content">
			[r,macro("eigLeiste@this"): currentToken()]
			<div class="row-container" style="justify-content: space-between; gap: 0;">
				<div class="panel">
					<div class="column-container">
						<div class="heading">WERTE</div>
						<div class="stat-table">
							<div>Seelenkraft:</div>
							[h: aktSK = getSK()]
							[h,if(aktSK < SK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
							[h,if(aktSK > SK): eigColor = "#0099ff"]
							<div style='color: [r: eigColor];'>[r: aktSK]</div>

							<div>Zähigkeit:</div>
							[h: aktZK = getZK()]												
							[h,if(aktZK < ZK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
							[h,if(aktZK > ZK): eigColor = "#0099ff"]
							<div style='color: [r: eigColor];'>[r: aktZK]</div>

							[h: wID = getStrProp(PlayerOpt, "atWeapon")]
							[h: aktINI = getINI()]
							[h,if(aktINI < INI): eigColor = "#ff3333"; eigColor = "#eee5c8"]
							[h,if(aktINI > INI): eigColor = "#0099ff"]
							[h: link = strformat("<a title='Initiative ermitteln' href='%s' style='font-weight: normal;'>", macroLinkText("probeINI@this", "", currentToken()))]
							<div>[r:link]Initiative:</a></div>
							<div style='color: [r: eigColor];' >[r: link][r: aktINI]+1W6</a></div>

							<div>Geschwindigkeit:</div>
							[h: aktGS = getGS()]												
							[h,if(aktGS < GS): eigColor = "#ff3333"; eigColor = "#eee5c8"]
							[h,if(aktGS > GS): eigColor = "#0099ff"]	
							<div style='color: [r: eigColor];'>[r: aktGS]</div>

							<div>Schmerzstufen:</div>
							<div>[r: schmerzStufe(1)] / [r: schmerzStufe(2)] / [r: schmerzStufe(3)] / [r: schmerzStufe(4)]</div>

							<div>Schicksalspunkte:</div>
							<div>[r: SchipsAktuell] / [r: SchipsMax]</div>

							<div>Abenteuerpunkte:</div>
							<div>[r: APverfuegbar] / [r: APgesamt]</div>
						</div>
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
		<div id="footer"/>
	</body>
</html>
}]