[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]
[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "3")]
[h: PlayerOpt = setStrProp(PlayerOpt, "openFrameTalente", uebergabe)]

[frame("charbogen", "width=517; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Talente
		</title>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 12pt; font-weight: bold; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",1)]'); background-repeat: no-repeat; height: 122; margin: 0px;" width="500">
			<div style='margin-top: 18px; font-size: 22pt; text-align: center;' width='500'>
				<span style='color: #eee5c8; text-decoration: none;' title='Zum Charaktertoken wechseln'>[r: macroLink(getName(), "gotoToken@lib:com.github.naxos.Macros2", "", currentToken())]</span>
			</div>
			<table style='border-spacing: 0px; margin-top: 3px;' width='500'>
				<tr>
					<td width='58'>
						&nbsp;
					</td>
					<td width='383'>
						<a href="[r: macroLinkText("charbogenEigenschaften@Lib:macros")]"><image src='[r: tableImage("mainTheme", 4)]' border="0" alt="Eigenschaftsbogen aufrufen"></image></a>
						<a href="[r: macroLinkText("charbogenKampf@Lib:macros")]"><image src='[r: tableImage("mainTheme", 6)]' border="0" alt="Kampfbogen aufrufen"></image></a>
						<image src='[r: tableImage("mainTheme", 9)]'></image>
						<a href="[r: macroLinkText("charbogenZauber@Lib:macros")]"><image src='[r: tableImage("mainTheme", 10)]' border="0" alt="Zauberbogen aufrufen"></image></a>
						<a href="[r: macroLinkText("charbogenLiturgien@Lib:macros")]"><image src='[r: tableImage("mainTheme", 12)]' border="0" alt="Liturgiebogen aufrufen"></image></a>
						<a href="[r: macroLinkText("charbogenNotizen@Lib:macros")]"><image src='[r: tableImage("mainTheme", 14)]' border="0" alt="Notizen &amp; Handouts aufrufen"></image></a>
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
						[r,macro("eigLeiste@Lib:macros"): ""]
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
												[h: gruppe = uebergabe]
												[r,if(gruppe == "Koerper"), Code:
													{
														<span style='color: #bbbbba;'>K&ouml;rper</span>
													};
													{
														<span style='color: #eee5c8; text-decoration: none;' title='K&ouml;rpertalente aufrufen'>[r: macroLink("K&ouml;rper", "charbogenTalente@Lib:macros", "", "Koerper")]</span>				
													}
												]
												&middot; 
												[r,if(gruppe == "Gesellschaft"), Code:
													{
														<span style='color: #bbbbba;'>Gesellschaft</span>
													};
													{
														<span style='color: #eee5c8; text-decoration: none;' title='Gesellschaftstalente aufrufen'>[r: macroLink("Gesellschaft", "charbogenTalente@Lib:macros", "", "Gesellschaft")]</span>				
													}	
												]
												&middot; 
												[r,if(gruppe == "Natur"), Code:
													{
														<span style='color: #bbbbba;'>Natur</span>
													};
													{
														<span style='color: #eee5c8; text-decoration: none;' title='Naturtalente aufrufen'>[r: macroLink("Natur", "charbogenTalente@Lib:macros", "", "Natur")]</span>				
													}	
												]
												&middot; 
												[r,if(gruppe == "Wissen"), Code:
													{
														<span style='color: #bbbbba;'>Wissen</span>
													};
													{
														<span style='color: #eee5c8; text-decoration: none;' title='Wissenstalente aufrufen'>[r: macroLink("Wissen", "charbogenTalente@Lib:macros", "", "Wissen")]</span>				
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
														<span style='color: #eee5c8; text-decoration: none;' title='Handwerkstalente aufrufen'>[r: macroLink("Handwerk", "charbogenTalente@Lib:macros", "", "Handwerk")]</span>				
													}
												]
												&middot; 
												[r,if(gruppe == "Kampftechniken"), Code:
													{
														<span style='color: #bbbbba;'>Kampf</span>
													};
													{
														<span style='color: #eee5c8; text-decoration: none;' title='Kampftalente aufrufen'>[r: macroLink("Kampf", "charbogenTalente@Lib:macros", "", "Kampftechniken")]</span>				
													}	
												]
												&middot;
												<span style='color: #eee5c8; text-decoration: none;' title='Universelle Fertigkeitsprobe würfeln'>[r: macroLink("Univ. Probe", "probeUni@Lib:macros")]</span>
												<!--
												[r,if(gruppe == "Gaben"), Code:
													{
														<span style='color: #bbbbba;'>Gaben</span>
													};
													{
														<span style='color: #eee5c8; text-decoration: none;' title='Gaben aufrufen'>[r: macroLink("Gaben", "charbogenTalente@Lib:macros", "", "Gaben")]</span>				
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
				[r,switch(uebergabe),Code:
				case "Kampftechniken":
				{
					[r,macro("charbogenKampftechnik@Lib:macros"): uebergabe]
				};
				default:
				{
					[r,macro("charbogenTalent@Lib:macros"): uebergabe]
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