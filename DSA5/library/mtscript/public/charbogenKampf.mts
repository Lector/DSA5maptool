[h: switchToken(arg(0))]
[h: group = arg(1)]

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



			<div class="skillContainer">
				<div class="skillNavigation">
					<div>
						<div [r,if(group == "Melee"): "class='disabled-link'"] title='Nahkampfwaffen aufrufen'>
							[r: macroLink("Nahkampf", "charbogenKampf@this", "", json.append(currentToken(), "Melee"))]
						</div>
						&middot;
						<div [r,if(group == "Ranged"): "class='disabled-link'"] title='Fernkampfwaffen aufrufen'>
							[r: macroLink("Fernkampf", "charbogenKampf@this", "", json.append(currentToken(), "Ranged"))]
						</div>
						&middot;
						<div [r,if(group == "Armor"): "class='disabled-link'"] title='Rüstungen aufrufen'>
							[r: macroLink("Rüstung", "charbogenKampf@this", "", json.append(currentToken(), "Armor"))]
						</div>
						
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
				<div class="heading">
					Kampfsonderfertigkeiten
				</div>
				<div>
					[r,macro("charbogenTraits@this"): KampfSF]
				</div>
			</div>
		</div>
		<div class="footer"/>
	</body>
</html>
}]