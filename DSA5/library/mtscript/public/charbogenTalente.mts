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
					<table style='border-spacing: 0px;' cellpadding='0'>
						<tr align='center'>
							<td style='padding-bottom: 4px;'>
								[h: gruppe = group]
								[r,if(gruppe == "Koerper"), Code:
									{
										<span style='color: #bbbbba;'>Körper</span>
									};
									{
										<span style='color: #eee5c8; text-decoration: none;' title='Körpertalente aufrufen'>[r: macroLink("Körper", "charbogenTalente@this", "", json.append(currentToken(), "Koerper"))]</span>				
									}
								]
								&middot; 
								[r,if(gruppe == "Gesellschaft"), Code:
									{
										<span style='color: #bbbbba;'>Gesellschaft</span>
									};
									{
										<span style='color: #eee5c8; text-decoration: none;' title='Gesellschaftstalente aufrufen'>[r: macroLink("Gesellschaft", "charbogenTalente@this", "", json.append(currentToken(),"Gesellschaft"))]</span>				
									}	
								]
								&middot; 
								[r,if(gruppe == "Natur"), Code:
									{
										<span style='color: #bbbbba;'>Natur</span>
									};
									{
										<span style='color: #eee5c8; text-decoration: none;' title='Naturtalente aufrufen'>[r: macroLink("Natur", "charbogenTalente@this", "", json.append(currentToken(),"Natur"))]</span>				
									}	
								]
								&middot; 
								[r,if(gruppe == "Wissen"), Code:
									{
										<span style='color: #bbbbba;'>Wissen</span>
									};
									{
										<span style='color: #eee5c8; text-decoration: none;' title='Wissenstalente aufrufen'>[r: macroLink("Wissen", "charbogenTalente@this", "", json.append(currentToken(),"Wissen"))]</span>				
									}	
								]
							</td>
						</tr>
						<tr align='center'>
							<td style='border-top: 1px solid #eee5c8; padding-top: 3px;'>
								[r,if(gruppe == "Handwerk"), Code:
									{
										<span style='color: #bbbbba;'>Handwerk</span>
									};
									{
										<span style='color: #eee5c8; text-decoration: none;' title='Handwerkstalente aufrufen'>[r: macroLink("Handwerk", "charbogenTalente@this", "", json.append(currentToken(),"Handwerk"))]</span>				
									}
								]
								&middot; 
								[r,if(gruppe == "Kampftechniken"), Code:
									{
										<span style='color: #bbbbba;'>Kampf</span>
									};
									{
										<span style='color: #eee5c8; text-decoration: none;' title='Kampftalente aufrufen'>[r: macroLink("Kampf", "charbogenTalente@this", "", json.append(currentToken(),"Kampftechniken"))]</span>				
									}	
								]
								&middot;
								<span style='color: #eee5c8; text-decoration: none;' title='Universelle Fertigkeitsprobe würfeln'>[r: macroLink("Univ. Probe", "probeUni@this")]</span>
								<!--
								[r,if(gruppe == "Gaben"), Code:
									{
										<span style='color: #bbbbba;'>Gaben</span>
									};
									{
										<span style='color: #eee5c8; text-decoration: none;' title='Gaben aufrufen'>[r: macroLink("Gaben", "charbogenTalente@this", "", "Gaben")]</span>				
									}	
								]
								-->
							</td>
						</tr>
					</table>
				</div>
				[r,switch(group),Code:
					case "Kampftechniken":
					{
						[r,macro("charbogenKampftechnik@this"): json.append(currentToken(), group)]
					};
					default:
					{
						[r,macro("charbogenTalent@this"): json.append(currentToken(), group)]
					}]
			</div>
		</div>
		<div class="footer"/>
	</body>
</html>
}]