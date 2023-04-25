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
		<link rel="preconnect" href="https://fonts.googleapis.com%22%3E/"
		<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Crete+Round&family=IM+Fell+Great+Primer&family=Wellfleet&display=swap" rel="stylesheet">
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
			[r,macro("eigLeiste@this"): currentToken()]
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
		<div id="footer"></div>
	</body>
</html>
}]