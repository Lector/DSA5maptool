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

[frame("charbogenMini", "width=311; height=298; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Mini-Charakterbogen
		</title>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 10pt; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",67)]'); background-repeat: no-repeat; height: 28; margin: 0px;" width="300">
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",68)]'); background-repeat: repeat-y; margin: 0px; text-align: center;" width="300">
			<table style='border-spacing: 0px; font-size: 12pt; font-weight: bold;' cellpadding='0' width='270'> 
				<tr>
					<td>
						&nbsp;
					</td>
					<td style='text-align: center; border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 2px 0px 3px 0px;'>
						<span style='color: #eee5c8; text-decoration: none;' title='Zum Charaktertoken wechseln'>[r: macroLink(getName(), "gotoToken@lib:com.github.naxos.Macros2", "", currentToken())]</span>
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px; margin-top: 12px;' cellpadding='2' width='270'> 
				<tr>
					<td style='text-align: center; font-weight: bold;'>
						Quicklinks:
					</td>
					<td style='text-align: center;'>
						<span style='color: #eee5c8; text-decoration: underline;' title='Talentbogen aufrufen'>[r: macroLink("Talente", "charbogenTalente@this", "", "koerper")]</span>
					</td>
					<td style='text-align: center;'>
						<span style='color: #eee5c8; text-decoration: underline;' title='Zauberbogen aufrufen'>[r: macroLink("Zauber", "charbogenZauber@this", "")]</span>
					</td>
					<td style='text-align: center;'>
						<span style='color: #eee5c8; text-decoration: underline;' title='Liturgiebogen aufrufen'>[r: macroLink("Liturgien", "charbogenLiturgien@this", "")]</span>
					</td>
					<td style='text-align: center;'>
						<span style='color: #eee5c8; text-decoration: underline;' title='Notizen &amp; Handouts aufrufen'>[r: macroLink("Notizen", "charbogenNotizen@this", "")]</span>
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px; padding: 0px; margin-top: 10px;' cellpadding='0' width='270'>
				<tr>
					<td width='45'>
						<table style='border-spacing: 0px;' cellpadding='2'>
							<tr>
								<td>
									[h: aktMU = getMU()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Mut&quot; ablegen'>[r: macroLink("MU: ", "probeEig@this", "", "MU")]</span>
								</td>
								<td style='text-align: right;' width='17'>
									[h,if(aktMU < MU): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktMU > MU): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Mut&quot; ablegen'>[r: macroLink(aktMU, "probeEig@this", "", "MU")]</span>
								</td>
							</tr>
							<tr>
								<td>
									[h: aktKL = getKL()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Klugheit&quot; ablegen'>[r: macroLink("KL: ", "probeEig@this", "", "KL")]</span>
								</td>
								<td style='text-align: right;'>
									[h,if(aktKL < KL): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktKL > KL): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Klugheit&quot; ablegen'>[r: macroLink(aktKL, "probeEig@this", "", "KL")]</span>
								</td>
							</tr>
							<tr>
								<td>
									[h: aktIN = getIN()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Intuition&quot; ablegen'>[r: macroLink("IN: ", "probeEig@this", "", "IN")]</span>
								</td>
								<td style='text-align: right;'>
									[h,if(aktIN < IN): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktIN > IN): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Intuition&quot; ablegen'>[r: macroLink(aktIN, "probeEig@this", "", "IN")]</span>
								</td>
							</tr>
							<tr>
								<td>
									[h: aktCH = getCH()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Charisma&quot; ablegen'>[r: macroLink("CH: ", "probeEig@this", "", "CH")]</span>
								</td>
								<td style='text-align: right;'>
									[h,if(aktCH < CH): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktCH > CH): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Charisma&quot; ablegen'>[r: macroLink(aktCH, "probeEig@this", "", "CH")]</span>
								</td>
							</tr>
							<tr>
								<td>
									[h: aktFF = getFF()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Fingerfertigkeit&quot; ablegen'>[r: macroLink("FF: ", "probeEig@this", "", "FF")]</span>
								</td>
								<td style='text-align: right;'>
									[h,if(aktFF < FF): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktFF > FF): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Fingerfertigkeit&quot; ablegen'>[r: macroLink(aktFF, "probeEig@this", "", "FF")]</span>
								</td>
							</tr>
							<tr>
								<td>
									[h: aktGE = getGE()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Gewandheit&quot; ablegen'>[r: macroLink("GE: ", "probeEig@this", "", "GE")]</span>
								</td>
								<td style='text-align: right;'>
									[h,if(aktGE < GE): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktGE > GE): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Gewandheit&quot; ablegen'>[r: macroLink(aktGE, "probeEig@this", "", "GE")]</span>
								</td>
							</tr>
							<tr>
								<td>
									[h: aktKO = getKO()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Konstitution&quot; ablegen'>[r: macroLink("KO: ", "probeEig@this", "", "KO")]</span>
								</td>
								<td style='text-align: right;'>
									[h,if(aktKO < KO): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktKO > KO): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Konstitution&quot; ablegen'>[r: macroLink(aktKO, "probeEig@this", "", "KO")]</span>
								</td>
							</tr>
							<tr>
								<td>
									[h: aktKK = getKK()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;K&ouml;rperkraft&quot; ablegen'>[r: macroLink("KK: ", "probeEig@this", "", "KK")]</span>
								</td>
								<td style='text-align: right;'>
									[h,if(aktKK < KK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktKK > KK): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;K&ouml;rperkraft&quot; ablegen'>[r: macroLink(aktKK, "probeEig@this", "", "KK")]</span>
								</td>
							</tr>
						</table>
					</td>
					<td width='23'>
						&nbsp;
					</td>
					<td width='74'>
						<table style='border-spacing: 0px;' cellpadding='2'>
							<tr>
								<td>
									SK:
								</td>
								<td style='text-align: right;' width='17'>
									[h: aktSK = getSK()]												
									[h,if(aktSK < SK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktSK > SK): eigColor = "#0099ff"]	
									<span style='color: [r: eigColor];'>[r: aktSK]</span>
								</td>
							</tr>
							<tr>
								<td>
									ZK:
								</td>
								<td style='text-align: right;'>
									[h: aktZK = getZK()]												
									[h,if(aktZK < ZK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktZK > ZK): eigColor = "#0099ff"]	
									<span style='color: [r: eigColor];'>[r: aktZK]</span>
								</td>
							</tr>
							<tr>
								<td>
									INI<span style='font-weight: normal; font-size: 9pt;'>(+W6)</span>:
								</td>
								<td style='text-align: right;'>
									[h: aktINI = getINI()]
									[h,if(aktINI < INI): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktINI > INI): eigColor = "#0099ff"]
									<span style='color: [r: eigColor];'>[r: aktINI]</span>
								</td>
							</tr>
							<tr>
								<td>
									GS:
								</td>
								<td style='text-align: right;'>
									[h: aktGS = getGS()]
									[h,if(aktGS < GS ): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktGS > GS ): eigColor = "#0099ff"]
									<span style='color: [r: eigColor];'>[r: aktGS]</span>
								</td>
							</tr>
							<tr>
								<td>
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Ausweichen&quot; ablegen'>[r: macroLink("AW:", "probeAW@this", "")]</span>
								</td>
								<td style='text-align: right;'>
									[h: aktAW = getAW()]
									[h,if(aktAW < AW): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktAW > AW): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Ausweichen&quot; ablegen'>[r: macroLink(aktAW, "probeAW@this", "")]</span>
								</td>
							</tr>
							<tr>
								<td>
									Schmerzstufen:
								</td>
								<td style='text-align: right;'>
									&nbsp;
								</td>
							</tr>
							<tr>
								<td>
									[r: schmerzStufe(1)]/[r: schmerzStufe(2)]/[r: schmerzStufe(3)]/[r: schmerzStufe(4)]
								</td>
								<td style='text-align: right;'>
									&nbsp;
								</td>
							</tr>
							<tr>
								<td>
									&nbsp;
								</td>
								<td style='text-align: right;'>
									&nbsp;
								</td>
							</tr>
						</table>
					</td>
					<td width='17'>
						&nbsp;
					</td>
					<td valign='top' width='111'>
						<table style='border-spacing: 0px;' cellpadding='2'>
							<tr>
								<td width='20'>
									LE:
								</td>
								<td style='text-align: center;' width='37'>
									[r: LeP]/[r: MaxLeP]
								</td>
								<td width='56'>
									<table style="background-image: url('[r: tblImage("mainTheme",70)]'); background-repeat: no-repeat; border-spacing: 0px;" width='56'>
										<tr>
										[h,if(MaxLeP <=0): barMaxLeP = 1; barMaxLeP = MaxLeP]
										[h: barLE = round(0.56 * (LeP / (barMaxLeP / 100)))]
											<td style="background-image: url('[r: tblImage("mainTheme",71)]'); background-repeat: no-repeat; padding: 0px;" width="[r: barLE]">						
											</td>
											<td style='padding: 0px;'>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
		
						<table style='border-spacing: 0px;' cellpadding='2'>
							<tr>
								<td width='20'>
									AE:
								</td>
								<td style='text-align: center;' width='37'>
									[r: AsP]/[r: MaxAsP]
								</td>
								<td width='56'>
									<table style="background-image: url('[r: tblImage("mainTheme",70)]'); background-repeat: no-repeat; border-spacing: 0px;" width='56'>
										<tr>
										[h,if(MaxAsP <=0): barMaxAsP = 1; barMaxAsP = MaxAsP]
										[h: barAE = round(0.56 * (AsP / (barMaxAsP / 100)))]
											<td style="background-image: url('[r: tblImage("mainTheme",73)]'); background-repeat: no-repeat; padding: 0px;" width="[r: barAE]">						
											</td>
											<td style='padding: 0px;'>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
						<table style='border-spacing: 0px;' cellpadding='2'>
							<tr>
								<td width='20'>
									KE:
								</td>
								<td style='text-align: center;' width='37'>
									[r: KaP]/[r: MaxKaP]
								</td>
								<td width='56'>
									<table style="background-image: url('[r: tblImage("mainTheme",70)]'); background-repeat: no-repeat; border-spacing: 0px;" width='56'>
										<tr>
										[h,if(MaxKaP <=0): barMaxKaP = 1; barMaxKaP = MaxKaP]
										[h: barKE = round(0.56 * (KaP / (barMaxKaP / 100)))]
											<td style="background-image: url('[r: tblImage("mainTheme",74)]'); background-repeat: no-repeat; padding: 0px;" width="[r: barKE]">						
											</td>
											<td style='padding: 0px;'>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
						<table style='border-spacing: 0px; margin-top: 10px;'>
							<tr>
								<td width='19'>
									&nbsp;
								</td>
								<td style='text-align: center;' width='21'>
									&nbsp;
								</td>
								<td width='5'>
									&nbsp;
								</td>
								<td style='text-align: center;' width='21'>
									&nbsp;
								</td>
								<td width='5'>
									&nbsp;
								</td>
								<td style='text-align: center;' width='21'>
									&nbsp;
								</td>
								<td width='19'>
									&nbsp;
								</td>
							</tr>
							<tr>
								<td width='19'>
									&nbsp;
								</td>
								<td style='text-align: center; padding-top: 5px;' width='21'>
									&nbsp;
								</td>
								<td width='5'>
									&nbsp;
								</td>
								<td style='text-align: center; padding-top: 5px;' width='21'>
									&nbsp;
								</td>
								<td width='5'>
									&nbsp;
								</td>
								<td style='text-align: center; padding-top: 5px;' width='21'>
									&nbsp;
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",69)]'); background-repeat: no-repeat; height: 28; margin: 0px;" width="300">
		</div>
	</body>
</html>
}]