[h: switchToken(arg(0))]
[h: group = arg(1)]

[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "3")]
[h: PlayerOpt = setStrProp(PlayerOpt, "openFrameTalente", group)]

[frame("charbogen", "width=517; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Talente
		</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 12pt; font-weight: bold; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",1)]'); background-repeat: no-repeat; height: 122; margin: 0px;" width="500">
			<div style='margin-top: 18px; font-size: 22pt; text-align: center;' width='500'>
				<span style='color: #eee5c8; text-decoration: none;' title='Zum Charaktertoken wechseln'>[r: macroLink(getName(), "gotoToken@this", "", currentToken())]</span>
			</div>
			<table style='border-spacing: 0px; margin-top: 3px;' width='500'>
				<tr>
					<td width='58'>
						&nbsp;
					</td>
					<td width='383'>
						[r,macro("charsheetNavigation@this"): json.append(currentToken(), 2)]
					</td>
					<td width='59'>
						&nbsp;
					</td>
				</tr>
			</table>
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",2)]'); margin: 0px;" width="500">
			<table style='border-spacing: 0px;' width='500'>
				<tr>
					<td width='14'>
						&nbsp;
					</td>
					<td style="background-image: url('[r: tblImage("mainTheme",21)]'); background-repeat: no-repeat; height: 90;" width='471'>
						[r,macro("eigLeiste@this"): currentToken()]
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px;' width='500'>
				<tr>
					<td width='25'>
						&nbsp;
					</td>
					<td style="background-image: url('[r: tblImage("mainTheme",22)]'); background-repeat: no-repeat; height: 91;" valign='top' width='450'>					
						<table style='border-spacing: 0px;' width='450'>
							<tr>
								<td width='112'>
									&nbsp;
								</td>
								<td width='227'>					
									<table style='border-spacing: 0px; margin-top: 2px;' cellpadding='0' width='227'>
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
								</td>
								<td width='111'>
									&nbsp;
								</td>
							</tr>
						</table>			
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
				[r,switch(group),Code:
				case "Kampftechniken":
				{
					[r,macro("charbogenKampftechnik@this"): json.append(currentToken(), group)]
				};
				default:
				{
					[r,macro("charbogenTalent@this"): json.append(currentToken(), group)]
				}]
				<tr>
					<td width='25'>
						&nbsp;
					</td>
					<td style="background-image: url('[r: tblImage("mainTheme",24)]'); background-repeat: no-repeat; height: 27;" width='450'>	
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
			</table>
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",3)]'); background-repeat: no-repeat; height: 34; margin: 0px;" width="500">
		</div>
	</body>
</html>
}]