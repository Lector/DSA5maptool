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

[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "1")]
[h: plus = strformat("<image src='%s' border='0'/>", tableImage("misc", 6))]
[h: minus = strformat("<image src='%s' border='0'/>", tableImage("misc", 7))]

[frame("charbogen", "width=517; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Eigenschaften
		</title>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 12pt; font-weight: bold; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",1)]'); background-repeat: no-repeat; height: 122; margin: 0px;" width="500">
			<div style='margin-top: 18px; font-size: 22pt; text-align: center;' width='500'>
				<span style='color: #eee5c8; text-decoration: none;' title='Zum Charaktertoken wechseln'>[r: macroLink(getName(), "gotoToken@lib:com.github.naxos84.macros2", "", currentToken())]</span>
			</div>
			<table style='border-spacing: 0px; margin-top: 3px;' width='500'>
				<tr>
					<td width='58'>
						&nbsp;
					</td>
					<td width='383'>
						<image src='[r: tableImage("mainTheme", 5)]'></image>
						<a href="[r: macroLinkText("charbogenKampf@this")]"><image src='[r: tableImage("mainTheme", 6)]' border="0" alt="Kampfbogen aufrufen"></image></a>
						<a href="[r: macroLinkText("charbogenTalente@this", "", "Koerper")]"><image src='[r: tableImage("mainTheme", 8)]' border="0" alt="Talentbogen aufrufen"></image></a>
						<a href="[r: macroLinkText("charbogenZauber@this")]"><image src='[r: tableImage("mainTheme", 10)]' border="0" alt="Zauberbogen aufrufen"></image></a>
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
			<table style='border-spacing: 0px;' width='500'>
				<tr>
					<td width='38'>
						&nbsp;
					</td>					
					<td valign='top' width='206'>
						<table style='border-spacing: 0px;' width='206'>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",44)]'); background-repeat: no-repeat; height: 26;" width='206'>	
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",45)]'); background-repeat: repeat-y;">	
									<div style='text-align: center; border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 3px 0px 3px 3px; margin-left: 12px;' width='185'>
										WERTE
									</div>
									<table style='border-spacing: 0px; margin-left: 9px;'>
										<tr>
											<td width='60'>
												SK:
											</td>
											<td style='text-align: center;' width='22'>
												[h: aktSK = getSK()]												
												[h,if(aktSK < SK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
												[h,if(aktSK > SK): eigColor = "#0099ff"]	
												<span style='color: [r: eigColor];'>[r: aktSK]</span>
											</td>
											<td width='17'>
												&nbsp;
											</td>
											<td width='55'>
												[h: wID = getStrProp(PlayerOpt, "atWeapon")]
												<span style='color: #eee5c8; text-decoration: none;' title='Initiative ermitteln'>[r: macroLink("INI", "probeINI@this", "", wID)]</span>
												<span style='font-weight: normal; font-size: 9pt;'>(+W6)</span>:
											</td>
											<td style='text-align: center;' width='22'>
												[h: aktINI = getINI()]
												[h,if(aktINI < INI): eigColor = "#ff3333"; eigColor = "#eee5c8"]
												[h,if(aktINI > INI): eigColor = "#0099ff"]
												<span style='color: [r: eigColor]; text-decoration: none;' title='Initiative ermitteln'>[r: macroLink(aktINI, "probeINI@this", "", wID)]</span>
											</td>
										</tr>
										<tr>
											<td>
												ZK:
											</td>
											<td style='text-align: center;'>
												[h: aktZK = getZK()]												
												[h,if(aktZK < ZK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
												[h,if(aktZK > ZK): eigColor = "#0099ff"]
												<span style='color: [r: eigColor];'>[r: aktZK]</span>
											</td>
											<td>
												&nbsp;
											</td>
											<td>
												GS:
											</td>
											<td style='text-align: center;'>
												[h: aktGS = getGS()]												
												[h,if(aktGS < GS): eigColor = "#ff3333"; eigColor = "#eee5c8"]
												[h,if(aktGS > GS): eigColor = "#0099ff"]	
												<span style='color: [r: eigColor];'>[r: aktGS]</span>
											</td>
										</tr>
										
									</table>
									<table style='border-spacing: 0px; margin: 5px 0px 0px 9px;'>
										<tr>
											<td>
												Schmerzstufen:
											</td>
											<td style='padding-left: 4px;'>
												[r: schmerzStufe(1)]/[r: schmerzStufe(2)]/[r: schmerzStufe(3)]/[r: schmerzStufe(4)]
											</td>
										</tr>
										<tr>
											<td>
												Schips:
											</td>
											<td style='padding-left: 4px;'>
												[r: SchipsAktuell]/[r: SchipsMax]
											</td>
										</tr>
										<tr>
											<td>
												<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Ausweichen&quot; ablegen'>[r: macroLink("Ausweichen:", "probeAW@this", "", "")]</span>
											</td>
											<td style='padding-left: 4px;'>
												[h: aktAW = AW + getStrProp(TempMod, "aw")]												
												[h,if(aktAW < AW): eigColor = "#ff3333"; eigColor = "#eee5c8"]
												[h,if(aktAW > AW): eigColor = "#0099ff"]
												<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Ausweichen&quot; ablegen'>[r: macroLink(aktAW, "probeAW@this", "", "")]</span>
											</td>
										</tr>
										<tr>
											<td>
												AP gesamt:
											</td>
											<td style='padding-left: 4px;'>
												[r: APgesamt]
											</td>
										</tr>
										<tr>
											<td>
												AP verf&uuml;gbar:
											</td>
											<td style='padding-left: 4px;'>
												[r: APverfuegbar]
											</td>
										</tr>
										<tr>
											<td>
												AP ausgegeben:
											</td>
											<td style='padding-left: 4px;'>
												[r: APausgegeben]
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",46)]'); background-repeat: no-repeat; height: 26;">	
								</td>
							</tr>
						</table>
					</td>										
					<td width='12' cellpadding='0'>
					</td>
					<td valign='top'>	
						<table style='border-spacing: 0px; padding: 0px; margin-bottom: 8px;' width='212' cellpadding='0' cellspacing='0'>
							<tr>
								<td style='text-align: center'>
									<img src='[r:getTokenImage(85)]'></img>
								</td>	
							</tr>
						</table>
						<table style='border-spacing: 0px; padding: 0px; margin-bottom: 8px;' width='212' cellpadding='0' cellspacing='0'>
							<tr>
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
							</tr>
						</table>
						[r,if(MaxAsP > 0),Code:{
						<table style='border-spacing: 0px; padding: 0px; margin-bottom: 8px;' width='212' cellpadding='0' cellspacing='0'>
							<tr>
								<td style='padding: 0px; height: 33;' width='20'>
									AE:
								</td>
								<td style='padding: 0px; text-align: center;' width='40'>		
									[r: AsP]/[r: MaxAsP]<br>
									<span style='color: #eee5c8; text-decoration: none;' title='AsP addieren'>[r: macroLink(plus, "changeEnergie@this", "", "aePlus")]</span>
									&nbsp;
									<span style='color: #eee5c8; text-decoration: none;' title='AsP subtrahieren'>[r: macroLink(minus, "changeEnergie@this", "", "aeMinus")]</span>
									
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
							</tr>
						</table>};{}]
						[r,if(MaxKaP > 0),Code:{
						<table style='border-spacing: 0px; padding: 0px;' width='212' cellpadding='0' cellspacing='0'>
							<tr>
								<td style='padding: 0px; height: 33;' width='20'>
									KE:
								</td>
								<td style='padding: 0px; text-align: center;' width='40'>		
									[r: KaP]/[r: MaxKaP]<br>
									<span style='color: #eee5c8; text-decoration: none;' title='KE addieren'>[r: macroLink(plus, "changeEnergie@this", "", "kePlus")]</span>
									&nbsp;
									<span style='color: #eee5c8; text-decoration: none;' title='KE subtrahieren'>[r: macroLink(minus, "changeEnergie@this", "", "keMinus")]</span>
								</td>
								<td width='152'>
									<table style="background-image: url('[r: tblImage("mainTheme",39)]'); background-repeat: no-repeat; border-spacing: 0px;" width='152'>
										<tr>
										[h,if(MaxKaP <=0): barMaxKaP = 1; barMaxKaP = MaxKaP]
										[h: barKE = round(1.5 * (KaP / (barMaxKaP / 100)))]
											<td style="background-image: url('[r: tblImage("mainTheme",43)]'); background-repeat: no-repeat; height: 33; padding: 0px;" width="[r: barKE]">						
											</td>
											<td style='padding: 0px;'>
												&nbsp;
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>};{}]
					</td>
					<td width='38'>
						&nbsp;
					</td>
				</tr>
			</table>		

			<table style='border-spacing: 0px; margin-top: 15px;' width='500'>
				<tr>
					<td width='34'>
						&nbsp;
					</td>
					<td width='431'>			
						<table style='border-spacing: 0px;' width='431'>				
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",48)]'); background-repeat: no-repeat; height: 28;" width='431'>
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",49)]'); background-repeat: repeat-y; padding-left: 10px; padding-right: 10px; height: 28; font-weight: normal;">
									<div style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 3px 0px 3px 3px;' width='405'>
										<image src='[r: tableImage("mainTheme", 51)]'></image>
									</div>
									[r,macro("charbogenTraits@this"): Vorteile]
									<br><br>
									<div style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 3px 0px 3px 3px;' width='405'>
										<image src='[r: tableImage("mainTheme", 52)]'></image>
									</div>
									[r,macro("charbogenTraits@this"): Nachteile]
									<br><br>
									<div style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 3px 0px 3px 3px;' width='405'>
										<image src='[r: tableImage("mainTheme", 53)]'></image>
									</div>
									[r,macro("charbogenTraits@this"): AllgemeineSF]
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",50)]'); background-repeat: no-repeat; height: 28;">
								</td>
							</tr>
						</table>					
					</td>
					<td width='35'>
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