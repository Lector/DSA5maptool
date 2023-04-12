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

[frame5("charbogen", "width=517; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Eigenschaften
		</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charEigenschaften.css?cachelib=false'/>
	</head>
	<body >
		<div id="header">
			<div class="charactername">
				<a href='[r: macroLinkText("gotoToken@this", "", currentToken())]' title='Zum Charaktertoken wechseln'>[r: getName()]</a>
			</div>
			<div style="display:flex; justify-content:center; align-items:center">
				<image src='[r: tableImage("mainTheme", 5)]'></image>
				<a href="[r: macroLinkText("charbogenKampf@this")]"><image src='[r: tableImage("mainTheme", 6)]' border="0" alt="Kampfbogen aufrufen"></image></a>
				<a href="[r: macroLinkText("charbogenTalente@this", "", "Koerper")]"><image src='[r: tableImage("mainTheme", 8)]' border="0" alt="Talentbogen aufrufen"></image></a>
				<a href="[r: macroLinkText("charbogenZauber@this")]"><image src='[r: tableImage("mainTheme", 10)]' border="0" alt="Zauberbogen aufrufen"></image></a>
				<a href="[r: macroLinkText("charbogenLiturgien@this")]"><image src='[r: tableImage("mainTheme", 12)]' border="0" alt="Liturgiebogen aufrufen"></image></a>
				<a href="[r: macroLinkText("charbogenNotizen@this")]"><image src='[r: tableImage("mainTheme", 14)]' border="0" alt="Notizen &amp; Handouts aufrufen"></image></a>
			</div>
		</div>
		
		<div id="content">
		<div id="leisteEigenschaften" style="display: flex;flex-direction: column;align-items:center; justify-content:center;">[r,macro("eigLeiste@this"): ""]</div>
		<div style="display:flex; justify-content:center; align-items:center;gap:12px;margin-left:38px;margin-right:38px">
		<div id="charakterwerte" class="highlight">
			<div class="highlightHeading">WERTE</div>
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
						<span class="hidden" style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Ausweichen&quot; ablegen'>[r: macroLink("Ausweichen:", "probeAW@this", "", "")]</span>
					</td>
					<td style='padding-left: 4px;'>
						[h: aktAW = AW + getStrProp(TempMod, "aw")]												
						[h,if(aktAW < AW): eigColor = "#ff3333"; eigColor = "#eee5c8"]
						[h,if(aktAW > AW): eigColor = "#0099ff"]
						<span class="hidden" style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Ausweichen&quot; ablegen'>[r: macroLink(aktAW, "probeAW@this", "", "")]</span>
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
						AP verfügbar:
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
		</div>
			<!--<table style='border-spacing: 0px;' width='206'>
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
									<span class="hidden" style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Ausweichen&quot; ablegen'>[r: macroLink("Ausweichen:", "probeAW@this", "", "")]</span>
								</td>
								<td style='padding-left: 4px;'>
									[h: aktAW = AW + getStrProp(TempMod, "aw")]												
									[h,if(aktAW < AW): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktAW > AW): eigColor = "#0099ff"]
									<span class="hidden" style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Ausweichen&quot; ablegen'>[r: macroLink(aktAW, "probeAW@this", "", "")]</span>
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
									AP verfügbar:
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
			</table>-->
			<div style="display: flex; flex-direction: column; gap:24px">
			<!-- Token image -->
				<table style='border-spacing: 0px; padding: 0px; margin-bottom: 8px;' width='212' cellpadding='0' cellspacing='0'>
					<tr>
						<td style='text-align: center'>
							<img src='[r:getTokenImage(85)]'></img>
						</td>	
					</tr>
				</table>
				<!-- Lebensbalken -->
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
				<!-- Zeige AstralPunkte Balken falls relevant-->
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
				<!-- Zeige KarmalPunkte Balken falls relevant-->
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
			</div>
			</div>
			[r,macro("charbogenTraitsDisplay@this"): ""]
		</div>
		<div id="footer"></div>
	</body>
</html>
}]