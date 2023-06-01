[h: switchToken(arg(0))]

[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "4")]

[frame5("charbogen", "width=517; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Zauber
		</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charsheet.css?cachelib=false'/>
	</head>
	<body>
		<div class="header">
			<div class="charactername">
				<a href='[r: macroLinkText("gotoToken@this", "", currentToken())]' title='Zum Charaktertoken wechseln'>[r: getName()]</a>
			</div>
			[r, macro("charsheetNavigation@this"): json.append(currentToken(), 3)]
		</div>
		<div class="content">
			[r, macro("eigLeiste@this"): currentToken()]
			<div class="splitterH">
				[r, macro("energyBar@this"): json.append(currentToken(), "le")]
				[r, macro("energyBar@this"): json.append(currentToken(), "ae")]
			</div>
			<div class="panel-round">
				[r, macro("charsheetSpell@this"): json.append(currentToken(), "spell")]
				[r, macro("charsheetSpell@this"): json.append(currentToken(), "ritual")]
				[r, macro("charsheetSpell@this"): json.append(currentToken(), "magic")]
			</div>
			<div class="panel-ornament">
				<div class="heading">Magische Sonderfertigkeiten</div>
				[r,macro("charbogenTraits@this"): MagieSF]
			</div>
			<div class="panel-ornament">
				<div class="heading">Zaubertricks</div>
				[r,macro("charbogenTraits@this"): Zaubertricks]
			</div>
			
		</div>
		<div class="footer"/>
	</body>
</html>
}]