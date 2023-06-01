[h: switchToken(arg(0))]
[h: group = arg(1)]

[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "3")]
[h: PlayerOpt = setStrProp(PlayerOpt, "openFrameTalente", group)]

[frame5("charbogen", "width=517; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Talente
		</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charsheet.css?cachelib=false'/>
	</head>
	<body>
		<div class="header">
			<div class="charactername">
				<a href='[r: macroLinkText("gotoToken@this", "", currentToken())]' title='Zum Charaktertoken wechseln'>[r: getName()]</a>
			</div>
			[r,macro("charsheetNavigation@this"): json.append(currentToken(), 2)]
		</div>
		<div class="content">
			[r,macro("eigLeiste@this"): currentToken()]
			<div class="skillContainer">
				<div class="skillNavigation">
					<div>
						[h: gruppe = group]
						<div [r,if(gruppe == "Koerper"): "class='disabled-link'"] title='Körpertalente aufrufen'>
							[r: macroLink("Körper", "charbogenTalente@this", "", json.append(currentToken(), "Koerper"))]
						</div>
						&middot;
						<div [r,if(gruppe == "Gesellschaft"): "class='disabled-link'"] title='Gesellschaftstalente aufrufen'>
							[r: macroLink("Gesellschaft", "charbogenTalente@this", "", json.append(currentToken(), "Gesellschaft"))]
						</div>
						&middot;
						<div [r,if(gruppe == "Natur"): "class='disabled-link'"] title='Naturtalente aufrufen'>
							[r: macroLink("Natur", "charbogenTalente@this", "", json.append(currentToken(), "Natur"))]
						</div>
						&middot;
						<div [r,if(gruppe == "Wissen"): "class='disabled-link'"] title='Wissenstalente aufrufen'>
							[r: macroLink("Wissen", "charbogenTalente@this", "", json.append(currentToken(), "Wissen"))]
						</div>
						
						<div [r,if(gruppe == "Handwerk"): "class='disabled-link'"] title='Handwerkstalente aufrufen'>
							[r: macroLink("Handwerk", "charbogenTalente@this", "", json.append(currentToken(), "Handwerk"))]
						</div>
						&middot;
						<div [r,if(gruppe == "Kampftechniken"): "class='disabled-link'"] title='Kampftalente aufrufen'>
							[r: macroLink("Kampf", "charbogenTalente@this", "", json.append(currentToken(), "Kampftechniken"))]
						</div>
						&middot;
						<div title='Universelle Fertigkeitsprobe würfeln'>
							[r: macroLink("Univ. Probe", "probeUni@this", "", currentToken())]
						</div>
						<hr class="skillNavigationLine"/>
					</div>
				</div>
				[r,switch(group),Code:
					case "Kampftechniken":
					{
						[r: charbogenKampftechnik(currentToken(), group)]
					};
					default:
					{
						[r: charbogenTalent(currentToken(), group)]
					}]
			</div>
		</div>
		<div class="footer"/>
	</body>
</html>
}]