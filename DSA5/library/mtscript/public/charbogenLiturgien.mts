[h: switchToken(arg(0))]

[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "5")]

[frame5("charbogen", "width=517; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Liturgien
		</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charsheet.css?cachelib=false'/>
	</head>
	
	<div class="header">
		<div class="charactername">
			<a href='[r: macroLinkText("gotoToken@this", "", currentToken())]' title='Zum Charaktertoken wechseln'>[r: getName()]</a>
		</div>
		[r, macro("charsheetNavigation@this"): json.append(currentToken(), 4)]
	</div>
	<div class="content">
		[r, macro("eigLeiste@this"): currentToken()]
		<div class="splitterH">
			[r, macro("energyBar@this"): json.append(currentToken(), "le")]
			[r, macro("energyBar@this"): json.append(currentToken(), "ke")]
		</div>
		<div class="panel-round">
			[r, macro("charsheetSpell@this"): json.append(currentToken(), "chant")]
			[r, macro("charsheetSpell@this"): json.append(currentToken(), "ceremony")]
		</div>
		<div class="panel-ornament">
			<div class="heading heading-additional">
				Karmale Sonderfertigkeiten
				<div title="Neue karmale Sonderfertigkeit hinzufügen">
					<a href="[r: macroLinkText('chareditTraitAdd@this', '', json.append('[]', currentToken(), 'KarmaleSF'))]">
						<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' border="0" alt="Eine neue karmale Sonderfertigkeit hinzufügen"></image>
					</a>
				</div>
			</div>
			[r: charbogenTraits(currentToken(), "KarmaleSF")]
		</div>
		<div class="panel-ornament">
			<div class="heading heading-additional">
				Segnungen
				<div title="Neue Segnung hinzufügen">
					<a href="[r: macroLinkText('chareditTraitAdd@this', '', json.append('[]', currentToken(), 'Segnungen'))]">
						<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' border="0" alt="Eine neue Segnung hinzufügen"></image>
					</a>
				</div>
			</div>
			[r: charbogenTraits(currentToken(), "Segnungen")]
		</div>
	</div>
	<div class="footer"/>
	</body>
</html>
}]