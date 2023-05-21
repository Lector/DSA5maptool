[h: switchToken(arg(0))]

[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "2")]

[frame5("charbogen", "width=517; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Kampf
		</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charsheet.css?cachelib=false'/>
	</head>
	<body>
		<div class="header">
			<div class="charactername">
				<a href='[r: macroLinkText("gotoToken@this", "", currentToken())]' title='Zum Charaktertoken wechseln'>[r: getName()]</a>
			</div>
			[r,macro("charsheetNavigation@this"): json.append(currentToken(), 1)]
		</div>
		<div class="content">
			[r,macro("eigLeiste@this"): currentToken()]
			<!-- Healthbar -->
			[r, macro("energyBar@this"): json.append(currentToken(), "le")]
			[r,macro("charbogenRuestung@this"): currentToken()]
			[r,macro("charbogenNahkampf@this"): currentToken()]
			[r,if(json.length(Fernkampfwaffen) > 0),Code:
			{
				[macro("charbogenFernkampf@this"): currentToken()]
			}]

			<div class="panel-ornament">
				<div class="heading">
					Kampfsonderfertigkeiten
				</div>
				<div>
					[r,macro("charbogenTraits@this"): KampfSF]
				</div>
			</div>
			
			[r,if(TrefferzonenModell == 0),Code:
			{
				[r,macro("charbogenMount@this"): currentToken()]	
			}]	
		</div>
		<div class="footer"/>
	</body>
</html>
}]