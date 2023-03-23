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

[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "4")]
[h: plus = strformat("<image src='%s' border='0'/>", tableImage("misc", 6))]
[h: minus = strformat("<image src='%s' border='0'/>", tableImage("misc", 7))]

[frame("charbogen", "width=517; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Zauber
		</title>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 12pt; font-weight: bold; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",1)]'); background-repeat: no-repeat; height: 122; margin: 0px;" width="500">
			<div style='margin-top: 18px; font-size: 22pt; text-align: center;' width='500'>
				<span style='color: #eee5c8; text-decoration: none;' title='Zum Charaktertoken wechseln'>[r: macroLink(getName(), "gotoToken@lib:this", "", currentToken())]</span>
			</div>
			<table style='border-spacing: 0px; margin-top: 3px;' width='500'>
				<tr>
					<td width='58'>
						&nbsp;
					</td>
					<td width='383'>
						<a href="[r: macroLinkText("charbogenEigenschaften@this")]"><image src='[r: tableImage("mainTheme", 4)]' border="0" alt="Eigenschaftsbogen aufrufen"></image></a>
						<a href="[r: macroLinkText("charbogenKampf@this")]"><image src='[r: tableImage("mainTheme", 6)]' border="0" alt="Kampfbogen aufrufen"></image></a>
						<a href="[r: macroLinkText("charbogenTalente@this", "", "Koerper")]"><image src='[r: tableImage("mainTheme", 8)]' border="0" alt="Talentbogen aufrufen"></image></a>
						<image src='[r: tableImage("mainTheme", 11)]'></image>
						<a href="[r: macroLinkText("charbogenLiturgien@this")]"><image src='[r: tableImage("mainTheme", 12)]' border="0" alt="Liturgiebogen aufrufen"></image></a>
						<a href="[r: macroLinkText("charbogenNotizen@this")]"><image src='[r: tableImage("mainTheme", 14)]' border="0" alt="Notizen &amp; Handouts aufrufen"></image></a>
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
						[r,macro("eigLeiste@this"): ""]
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
			</table>	
			<table style='border-spacing: 0px; padding: 0px;' width='500' cellpadding='0' cellspacing='0'>
				<tr>
					<td width='28'>
						&nbsp;
					</td>
					<td style='padding: 0px; height: 33;' width='20'>
						LE:
					</td>
					<td style='padding: 0px; text-align: center;' width='40'>		
						[r: LeP]/[r: MaxLeP]<br>
						<span style='color: #eee5c8; text-decoration: none;' title='LeP addieren'>[r: macroLink(plus, "changeEnergie@this", "", "lePlus")]</span>
						&nbsp;
						<span style='color: #eee5c8; text-decoration: none;' title='LeP subtrahieren'>[r: macroLink(minus, "changeEnergie@this", "", "leMinus")]</span>
					</td>
					<td width='152'>
						<table style="background-image: url('[r: tblImage("mainTheme",39)]'); background-repeat: no-repeat; border-spacing: 0px;" width='152'>
							<tr>
							[h,if(MaxLeP <=0): barMaxLeP = 1; barMaxLeP = MaxLeP]
							[h: barLE = round(1.5 * (LeP / (barMaxLeP / 100)))]
								<td style="background-image: url('[r: tblImage("mainTheme",40)]'); background-repeat: no-repeat; height: 33; padding: 0px;" width="[r: barLE]">						
								</td>
								<td style='padding: 0px;'>
									&nbsp;
								</td>
							</tr>
						</table>
					</td>
					<td width='20'>
						&nbsp;
					</td>
					<td style='padding: 0px; height: 33;' width='20'>
						AE:
					</td>
					<td style='padding: 0px; text-align: center;' width='40'>		
						[r: AsP]/[r: MaxAsP]<br>
						<span style='color: #eee5c8; text-decoration: none;' title='LeP addieren'>[r: macroLink(plus, "changeEnergie@this", "", "aePlus")]</span>
						&nbsp;
						<span style='color: #eee5c8; text-decoration: none;' title='LeP subtrahieren'>[r: macroLink(minus, "changeEnergie@this", "", "aeMinus")]</span>
					</td>
					<td width='152'>
						<table style="background-image: url('[r: tblImage("mainTheme",39)]'); background-repeat: no-repeat; border-spacing: 0px;" width='152'>
							<tr>
							[h,if(MaxAsP <=0): barMaxAsP = 1; barMaxAsP = MaxAsP]
							[h: barAE = round(1.5 * (AsP / (barMaxAsP / 100)))]
								<td style="background-image: url('[r: tblImage("mainTheme",42)]'); background-repeat: no-repeat; height: 33; padding: 0px;" width="[r: barAE]">						
								</td>
								<td style='padding: 0px;'>
									&nbsp;
								</td>
							</tr>
						</table>
					</td>
					<td width='28'>
						&nbsp;
					</td>
				</tr>
			</table>			
			<table style='border-spacing: 0px; margin-top: 15px;' width='500'>
				<tr>
					<td width='25'>
						&nbsp;
					</td>
					<td style="background-image: url('[r: tblImage("mainTheme",36)]'); background-repeat: no-repeat; height: 26;" width='450'>								
					</td>
					<td>
						&nbsp;
					</td>
				</tr>				
				<tr>
					<td width='25'>
						&nbsp;
					</td>
					<td style="background-image: url('[r: tblImage("mainTheme",23)]'); background-repeat: repeat-y;" width='450'>																	
						<table style='border-spacing: 0px;' width='450'>
							<tr>
								<td width='16'>
									&nbsp;
								</td>
								<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; height: 23;' width='300'>
									ZAUBERSPRüCHE
								</td>
								<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8;' width='60'>
									<image src='[r: tableImage("mainTheme", 26)]'></image>
								</td>
								<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; text-align: right;' width='52'>
									FW
								</td>
								<td>
									&nbsp;
								</td>
							</tr>
						</table>										
						<table style='border-spacing: 0px; margin-top: 5px;' width='450'>						
						[h: tBaum = eval("Zauber")]
						[Foreach(tDaten, tBaum,""), CODE:
							{
								[h: tName = json.get(tDaten, "Talent")]
								[h: tWiki = 'https://www.ulisses-regelwiki.de/zauber.html?zauber='+replace(tName, ' ', '+')]
								[h: tProbe = json.get(tDaten, "Probe")]
								[h: tEigenschaft1 = json.get(tProbe, "Eigenschaft1")]
								[h: tEigenschaft2 = json.get(tProbe, "Eigenschaft2")]
								[h: tEigenschaft3 = json.get(tProbe, "Eigenschaft3")]
								[h: tWert = json.get(tDaten, "Talentwert")]
								[h: tMerkmal = json.get(tDaten, "Merkmal")]
								[h: tUebergabe = ""]
								[h: tUebergabe = listAppend(tUebergabe, tName)]
								[h: tUebergabe = listAppend(tUebergabe, tEigenschaft1)]
								[h: tUebergabe = listAppend(tUebergabe, tEigenschaft2)]
								[h: tUebergabe = listAppend(tUebergabe, tEigenschaft3)]
								[h: tUebergabe = listAppend(tUebergabe, tWert)]
								[h: tUebergabe = listAppend(tUebergabe, tWiki)]
								[h: tUebergabe = listAppend(tUebergabe, tMerkmal)]
								[h: tUebergabe = listAppend(tUebergabe, "Zauber")]
							<tr>
								<td style='padding-left: 15px' width='280'>
									<a href=[r: tWiki]>
										<image border=0 alt='Zauber in der Regelwiki nachschlagen' src='[r: tblImage('mainTheme', 113)]'/>
									</a>
									<span style='padding-left: 20px; color: #eee5c8; text-decoration: none;' title='Probe auf &quot;[r: tName]&quot; ablegen'>
										[r: macroLink(tName, "probeZauber@this", "", tUebergabe)]
									</span>
								</td>
								<td width='15'>
									&nbsp;
								</td>
								<td style='font-weight: normal; text-align: center;' width='20'>
									[r: tEigenschaft1]
								</td>
								<td style='text-align: center;'  width='5'>
									&middot;
								</td>
								<td style='font-weight: normal; text-align: center;' width='20'>
									[r: tEigenschaft2]
								</td>
								<td style='text-align: center;'  width='5'>
									&middot;
								</td>
								<td style='font-weight: normal; text-align: center;' width='20'>
									[r: tEigenschaft3]
								</td>
								<td style='text-align: right;' width='40'>
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;[r: tName]&quot; ablegen'>[r: macroLink(tWert, "probeZauber@this", "", tUebergabe)]</span>
								</td>
								<td>
									&nbsp;
								</td>
							</tr>
							}
						]
						</table>
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
				<tr>
					<td width='25'>
						&nbsp;
					</td>
					<td style="background-image: url('[r: tblImage("mainTheme",23)]'); background-repeat: repeat-y;" width='450'>																	
						<table style='border-spacing: 0px;' width='450'>
							<tr>
								<td width='16'>
									&nbsp;
								</td>
								<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; height: 23;' width='300'>
										RITUALE
								</td>
								<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8;' width='60'>
									<image src='[r: tableImage("mainTheme", 26)]'></image>
								</td>
								<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; text-align: right;' width='52'>
									FW
								</td>
								<td>
									&nbsp;
								</td>
							</tr>
						</table>										
						<table style='border-spacing: 0px; margin-top: 5px;' width='450'>						
						[h: tBaum = eval("Rituale")]
						[Foreach(tDaten, tBaum,""), CODE:
							{
								[h: tName = json.get(tDaten, "Talent")]
								[h: tWiki = 'https://www.ulisses-regelwiki.de/ritual.html?ritual='+replace(tName, ' ', '+')]
								[h: tProbe = json.get(tDaten, "Probe")]
								[h: tEigenschaft1 = json.get(tProbe, "Eigenschaft1")]
								[h: tEigenschaft2 = json.get(tProbe, "Eigenschaft2")]
								[h: tEigenschaft3 = json.get(tProbe, "Eigenschaft3")]
								[h: tWert = json.get(tDaten, "Talentwert")]
								[h: tMerkmal = json.get(tDaten, "Merkmal")]
								[h: tUebergabe = ""]
								[h: tUebergabe = listAppend(tUebergabe, tName)]
								[h: tUebergabe = listAppend(tUebergabe, tEigenschaft1)]
								[h: tUebergabe = listAppend(tUebergabe, tEigenschaft2)]
								[h: tUebergabe = listAppend(tUebergabe, tEigenschaft3)]
								[h: tUebergabe = listAppend(tUebergabe, tWert)]
								[h: tUebergabe = listAppend(tUebergabe, tWiki)]
								[h: tUebergabe = listAppend(tUebergabe, tMerkmal)]
							<tr>
								<td style='padding-left: 15px;' width='280'>
									<a href=[r: tWiki]>
										<image border=0 alt='Ritual in der Regelwiki nachschlagen' src='[r: tblImage('mainTheme', 113)]'/>
									</a>
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;[r: tName]&quot; ablegen'>[r: macroLink(tName, "probeRitual@this", "", tUebergabe)]</span>
								</td>
								<td width='15'>
									&nbsp;
								</td>
								<td style='font-weight: normal; text-align: center;' width='20'>
									[r: tEigenschaft1]
								</td>
								<td style='text-align: center;'  width='5'>
									&middot;
								</td>
								<td style='font-weight: normal; text-align: center;' width='20'>
									[r: tEigenschaft2]
								</td>
								<td style='text-align: center;'  width='5'>
									&middot;
								</td>
								<td style='font-weight: normal; text-align: center;' width='20'>
									[r: tEigenschaft3]
								</td>
								<td style='text-align: right;' width='40'>
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;[r: tName]&quot; ablegen'>[r: macroLink(tWert, "probeRitual@this", "", tUebergabe)]</span>
								</td>
								<td>
									&nbsp;
								</td>
							</tr>
							}
						]
						</table>
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
				<tr>
					<td width='25'>
						&nbsp;
					</td>
					<td style="background-image: url('[r: tblImage("mainTheme",23)]'); background-repeat: repeat-y;" width='450'>																	
						<table style='border-spacing: 0px;' width='450'>
							<tr>
								<td width='16'>
									&nbsp;
								</td>
								<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; height: 23;' width='300'>
										[r: upper(MagischeHandlungenPlural)]
								</td>
								<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8;' width='60'>
									<image src='[r: tableImage("mainTheme", 26)]'></image>
								</td>
								<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; text-align: right;' width='52'>
									FW
								</td>
								<td>
									&nbsp;
								</td>
							</tr>
						</table>										
						<table style='border-spacing: 0px; margin-top: 5px;' width='450'>						
						[h: tBaum = eval("MagischeHandlungen")]
						[Foreach(tDaten, tBaum,""), CODE:
						{
							[h: tName = json.get(tDaten, "Talent")]
							[h: tWiki = 'https://www.ulisses-regelwiki.de/'+lower(MagischeHandlungenSingular)+'.html?'+lower(MagischeHandlungenSingular)+'='+replace(tName, ' ', '+')]
							[h: tProbe = json.get(tDaten, "Probe")]
							[h: tEigenschaft1 = json.get(tProbe, "Eigenschaft1")]
							[h: tEigenschaft2 = json.get(tProbe, "Eigenschaft2")]
							[h: tEigenschaft3 = json.get(tProbe, "Eigenschaft3")]
							[h: tWert = json.get(tDaten, "Talentwert")]
							[h: tMerkmal = json.get(tDaten, "Merkmal")]
							[h: tUebergabe = ""]
							[h: tUebergabe = listAppend(tUebergabe, tName)]
							[h: tUebergabe = listAppend(tUebergabe, tEigenschaft1)]
							[h: tUebergabe = listAppend(tUebergabe, tEigenschaft2)]
							[h: tUebergabe = listAppend(tUebergabe, tEigenschaft3)]
							[h: tUebergabe = listAppend(tUebergabe, tWert)]
							[h: tUebergabe = listAppend(tUebergabe, tWiki)]
							[h: tUebergabe = listAppend(tUebergabe, tMerkmal)]
							[h: tUebergabe = listAppend(tUebergabe, "Magische Handlung")]
							<tr>
								<td style='padding-left: 15px;' width='280'>
									<a href=[r: tWiki]>
										<image border=0 alt='[r: MagischeHandlungenSingular] in der Regelwiki nachschlagen' src='[r: tblImage('mainTheme', 113)]'/>
									</a>
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;[r: tName]&quot; ablegen'>[r: macroLink(tName, "probeZauber@this", "", tUebergabe)]</span>
								</td>
								<td width='15'>
									&nbsp;
								</td>
								<td style='font-weight: normal; text-align: center;' width='20'>
									[r: tEigenschaft1]
								</td>
								<td style='text-align: center;'  width='5'>
									&middot;
								</td>
								<td style='font-weight: normal; text-align: center;' width='20'>
									[r: tEigenschaft2]
								</td>
								<td style='text-align: center;'  width='5'>
									&middot;
								</td>
								<td style='font-weight: normal; text-align: center;' width='20'>
									[r: tEigenschaft3]
								</td>
								<td style='text-align: right;' width='40'>
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;[r: tName]&quot; ablegen'>[r: macroLink(tWert, "probeZauber@this", "", tUebergabe)]</span>
								</td>
								<td>
									&nbsp;
								</td>
							</tr>
						}]
						</table>
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
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
			
			<table style='border-spacing: 0px; margin-top: 15px;' width='500'>
				<tr>
					<td width='28'>
						&nbsp;
					</td>
					<td width='443'>			
						<table style='border-spacing: 0px;' width='443'>				
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",54)]'); background-repeat: no-repeat; height: 28;" width='443'>
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",55)]'); background-repeat: repeat-y; padding-left: 10px; padding-right: 10px; height: 28; font-weight: normal;">
									<div style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 3px 0px 3px 3px;' width='417'>
										MAGISCHE SONDERFERTIGKEITEN
									</div>
									[r,macro("charbogenTraits@this"): MagieSF]
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",56)]'); background-repeat: no-repeat; height: 28;">
								</td>
							</tr>
						</table>					
					</td>
					<td width='29'>
						&nbsp;
					</td>
				</tr>
			</table>

			<table style='border-spacing: 0px; margin-top: 15px;' width='500'>
				<tr>
					<td width='28'>
						&nbsp;
					</td>
					<td width='443'>			
						<table style='border-spacing: 0px;' width='443'>				
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",54)]'); background-repeat: no-repeat; height: 28;" width='443'>
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",55)]'); background-repeat: repeat-y; padding-left: 10px; padding-right: 10px; height: 28; font-weight: normal;">
									<div style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 3px 0px 3px 3px;' width='417'>
										ZAUBERTRICKS
									</div>
									[r,macro("charbogenTraits@this"): Zaubertricks]
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",56)]'); background-repeat: no-repeat; height: 28;">
								</td>
							</tr>
						</table>					
					</td>
					<td width='29'>
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