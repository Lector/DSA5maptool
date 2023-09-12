[h: switchToken(arg(0))]
[h: group = arg(1)]
[h,if(group == ""): group = "Melee"]

[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "2")]
[h: PlayerOpt = setStrProp(PlayerOpt, "openFrameCombat", group)]

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



			<div class="skillContainer">
				<div class="skillNavigation">
					<div>
						<div [r,if(group == "Melee"): "class='disabled-link'"] title='Nahkampfwaffen aufrufen'>
							[r: macroLink("Nahkampfwaffen", "charbogenKampf@this", "", json.append(currentToken(), "Melee"))]
						</div>
						&middot;
						<div [r,if(group == "Ranged"): "class='disabled-link'"] title='Fernkampfwaffen aufrufen'>
							[r: macroLink("Fernkampfwaffen", "charbogenKampf@this", "", json.append(currentToken(), "Ranged"))]
						</div>
						
						<div [r,if(group == "Armor"): "class='disabled-link'"] title='Rüstungen aufrufen'>
							[r: macroLink("Rüstung", "charbogenKampf@this", "", json.append(currentToken(), "Armor"))]
						</div>
						&middot;
						<div [r,if(group == "Mount"): "class='disabled-link'"] title='Reittiere aufrufen'>
							[r: macroLink("Reittier", "charbogenKampf@this", "", json.append(currentToken(), "Mount"))]
						</div>
						<hr class="skillNavigationLine"/>
					</div>
				</div>
				[r,switch(group),Code:
					case "Melee":
					{
						[r: charbogenNahkampf(currentToken())]
					};
					case "Ranged":
					{
						[r: charbogenFernkampf(currentToken())]
					};
					case "Armor":
					{
						[r: charbogenRuestung(currentToken())]
					};
					case "Mount":
					{
						[r: charbogenMount(currentToken())]
					};
					default:
					{
					}
				]
			</div>

			<div class="panel-ornament">
				<div class="heading heading-additional">
					Kampfsonderfertigkeiten
					<a href="[r: macroLinkText('chareditTraitAdd@this', '', json.append('[]', currentToken(), 'KampfSF'))]">
						<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' border="0" alt="Eine neue Kampfsonderfertigkeit hinzufügen"></image>
					</a>
				</div>
				<div>
					[r: charbogenTraits(currentToken(), "KampfSF")]
				</div>
			</div>
		</div>
		<div class="footer"/>
	</body>
</html>
}]