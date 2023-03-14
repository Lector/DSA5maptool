[h: conditions = json.set("{}", "propertyType", "Basic", "layer", "Token")]

[h,if(arg(0) == "pc"),Code:{
	[h: tokenList = getTokens("json", json.set(conditions, "npc", 0, "pc", 1))]
	[h: setLibProperty("SLframe", 1, "Lib:macros")]
};{
	[h: tokenList = getTokens("json", json.set(conditions, "npc", 1, "pc", 0))]
	[h: setLibProperty("SLframe", 2, "Lib:macros")]
}]

[h: fTokenList = "[]"]
[h,foreach(tID, tokenList, ""),Code:
{
	[if(getVisible(tID) == 1),Code:
	{
		[tName = getName(tID)]
		[lCount = length(tName)]
		[if(substring(tName, 0, 1) == " " || substring(tName, lCount-1, lCount) == " "): setName(trim(tName), tID)]
		[fTokenList = json.append(fTokenList, json.set("{}", "id", tID, "name", tName))]
	}]
}]
[h: fTokenList = json.sort(fTokenList, "a", "name")]

[frame("meisterbogen", "width=528; height=500; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Meisterbogen - Spielercharaktere I
		</title>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 10pt; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",1)]'); background-repeat: no-repeat; height: 122; margin: 0px;" width="500">
			<div style='margin-top: 18px; font-size: 22pt; font-weight: bold; text-align: center;' width='500'>
				Spielercharaktere I
			</div>
			<table style='border-spacing: 0px; margin-top: 3px;' width='500'>
				<tr>
					<td width='58'>
						&nbsp;
					</td>
					<td width='383'>
					[r,if(arg(0) == "pc"),Code:{
						<image src='[r: tableImage("mainTheme", 81)]'/>};{
						<a href="[r: macroLinkText("meisterbogen1@Lib:macros2", "", "pc")]"><image src='[r: tableImage("mainTheme", 80)]' border="0" alt="Spielercharaktere I: Werte, Waffen &amp; R&uuml;stung"></image></a>
					}]
						<a href="[r: macroLinkText("meisterbogen2@Lib:macros2", "", "pc")]"><image src='[r: tableImage("mainTheme", 82)]' border="0" alt="Spielercharaktere II: Vorteile, Nachteile &amp; Notizen"></image></a>
					[r,if(arg(0) == "pc"),Code:{
						<a href="[r: macroLinkText("meisterbogen1@Lib:macros2", "", "npc")]"><image src='[r: tableImage("mainTheme", 87)]' border="0" alt="NSCs I: Werte, Waffen &amp; R&uuml;stung"></image></a>};{
						<image src='[r: tableImage("mainTheme", 88)]'></image>
					}]
						<a href="[r: macroLinkText("meisterbogen2@Lib:macros2", "", "npc")]"><image src='[r: tableImage("mainTheme", 89)]' border="0" alt="NSCs II: Vorteile, Nachteile &amp; Notizen"></image></a>
						<a href="[r: macroLinkText("meisterbogenHandouts@Lib:macros2", "")]"><image src='[r: tableImage("mainTheme", 91)]' border="0" alt="Handouts"></image></a>
						<a href="[r: macroLinkText("meisterbogenTools@Lib:macros2", "")]"><image src='[r: tableImage("mainTheme", 84)]' border="0" alt="Tools"></image></a>
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
					<td width='34'>
						&nbsp;
					</td>
					<td>
						<table style='border-spacing: 0px; margin-bottom: 8px;' width='431'>
							<tr>
								<td style='text-align: center;'>
									<a href="[r: macroLinkText("meisterbogen1@Lib:macros2", "", arg(0))]"><image src='[r: tableImage("mainTheme", 86)]' border="0" alt="Dieses Fenster aktualisieren"></image></a>
								</td>
							</tr>
						</table>
						<table style='border-spacing: 0px;' width='431'>				
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",48)]'); background-repeat: no-repeat; height: 28;" width='431'>
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",49)]'); background-repeat: repeat-y; padding-left: 10px; padding-right: 10px; height: 28;">
								[r,foreach(tok, fTokenList, ""), Code:
								{
									[h: id = json.get(tok, "id")]
									[h: switchToken(id)]
									<table style='border-spacing: 0px; border-bottom: 1px solid #eee5c8; padding: 4px 0px 2px 0px;' width='400'>
										<tr>
											<td style='text-align: center;' valign='top' width='138'>
												<table style='border-spacing: 0px;' width='138'>
													<tr>
														<td style='text-align: center;'>
															<a href="[r: macroLinkText("gotoToken@Lib:macros2", "", id)]"><image src='[r: getTokenImage(30)]' border="0" alt="Zum Token wechseln und ausw&auml;hlen"></image></a>
														</td>
													</tr>
													<tr>
														<td style='text-align: center; font-weight: bold;'>
															[r: getName()]
														</td>
													</tr>
												</table>
												<table style='border-spacing: 0px;'>
													<tr>
														<td>
															<table style='border-spacing: 0px;' width='45'>
																<tr>
																	<td style='font-weight: bold;'>
																		MU:
																	</td>
																	<td style='text-align: right;'>
																		[h: aktMU = getMU(id)]
																		[h,if(aktMU < MU): eigColor = "#ff3333"; eigColor = "#eee5c8"]
																		[h,if(aktMU > MU): eigColor = "#0099ff"]
																		<span style='color: [r: eigColor];'>[r: aktMU]</span>
																	</td>
																</tr>
																<tr>
																	<td style='font-weight: bold;'>
																		KL:
																	</td>
																	<td style='text-align: right;'>
																		[h: aktKL = getKL(id)]
																		[h,if(aktKL < KL): eigColor = "#ff3333"; eigColor = "#eee5c8"]
																		[h,if(aktKL > KL): eigColor = "#0099ff"]
																		<span style='color: [r: eigColor];'>[r: aktKL]</span>
																	</td>
																</tr>
																<tr>
																	<td style='font-weight: bold;'>
																		IN:
																	</td>
																	<td style='text-align: right;'>
																		[h: aktIN = getIN(id)]
																		[h,if(aktIN < IN): eigColor = "#ff3333"; eigColor = "#eee5c8"]
																		[h,if(aktIN > IN): eigColor = "#0099ff"]
																		<span style='color: [r: eigColor];'>[r: aktIN]</span>
																	</td>
																</tr>
																<tr>
																	<td style='font-weight: bold;'>
																		CH:
																	</td>
																	<td style='text-align: right;'>
																		[h: aktCH = getCH(id)]
																		[h,if(aktCH < CH): eigColor = "#ff3333"; eigColor = "#eee5c8"]
																		[h,if(aktCH > CH): eigColor = "#0099ff"]
																		<span style='color: [r: eigColor];'>[r: aktCH]</span>
																	</td>
																</tr>
																<tr>
																	<td style='font-weight: bold;'>
																		FF:
																	</td>
																	<td style='text-align: right;'>
																		[h: aktFF = getFF(id)]
																		[h,if(aktFF < FF): eigColor = "#ff3333"; eigColor = "#eee5c8"]
																		[h,if(aktFF > FF): eigColor = "#0099ff"]
																		<span style='color: [r: eigColor];'>[r: aktFF]</span>
																	</td>
																</tr>
																<tr>
																	<td style='font-weight: bold;'>
																		GE:
																	</td>
																	<td style='text-align: right;'>
																		[h: aktGE = getGE(id)]
																		[h,if(aktGE < GE): eigColor = "#ff3333"; eigColor = "#eee5c8"]
																		[h,if(aktGE > GE): eigColor = "#0099ff"]
																		<span style='color: [r: eigColor];'>[r: aktGE]</span>
																	</td>
																</tr>
																<tr>
																	<td style='font-weight: bold;'>
																		KO:
																	</td>
																	<td style='text-align: right;'>
																		[h: aktKO = getKO(id)]
																		[h,if(aktKO < KO): eigColor = "#ff3333"; eigColor = "#eee5c8"]
																		[h,if(aktKO > KO): eigColor = "#0099ff"]
																		<span style='color: [r: eigColor];'>[r: aktKO]</span>
																	</td>
																</tr>
																<tr>
																	<td style='font-weight: bold;'>
																		KK:
																	</td>
																	<td style='text-align: right;'>
																		[h: aktKK = getKK(id)]
																		[h,if(aktKK < KK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
																		[h,if(aktKK > KK): eigColor = "#0099ff"]
																		<span style='color: [r: eigColor];'>[r: aktKK]</span>
																	</td>
																</tr>
															</table>
														</td>
														<td width='1'>
														</td>
														<td valign='top'>
															<table style='border-spacing: 0px;' width='59'>
																<tr>
																	<td style='font-weight: bold;'>
																		LE:
																	</td>
																	<td style='text-align: right;'>
																		[h,if(LeP < (MaxLeP/3)*2): eigColor = "#ff6600"; eigColor = "#009900"]
																		[h,if(LeP < (MaxLeP/3)): eigColor = "#ff3333"]
																		<span style='color: [r: eigColor];'>[r: LeP]</span>/[r: MaxLeP]
																	</td>
																</tr>
															
																<tr>
																	<td style='font-weight: bold;'>
																		AE:
																	</td>
																	<td style='text-align: right;'>
																		[h,if(AsP < (MaxAsP/3)*2): eigColor = "#ff6600"; eigColor = "#009900"]
																		[h,if(AsP < (MaxAsP/3)): eigColor = "#ff3333"]
																		[h,if(MaxAsP == 0): eigColor = "#eee5c8"]
																		<span style='color: [r: eigColor];'>[r: AsP]</span>/[r: MaxAsP]
																	</td>
																</tr>
																<tr>
																	<td style='font-weight: bold;'>
																		SchiPs:
																	</td>
																	<td style='text-align: right;'>
																		[h,if(SchiPsAktuell <= (SchiPsMax/3)*2): eigColor = "#ff6600"; eigColor = "#009900"]
																		[h,if(SchiPsAktuell < (SchiPsMax/3)): eigColor = "#ff3333"]
																		[h,if(SchiPsMax == 0): eigColor = "#eee5c8"]
																		<span style='color: [r: eigColor];'>[r: SchiPsAktuell]</span>/[r: SchiPsMax]
																	</td>
																</tr>
																<tr>
																	<td style='font-weight: bold;'>
																		KE:
																	</td>
																	<td style='text-align: right;'>
																		[h,if(KaP < (MaxKaP/3)*2): eigColor = "#ff6600"; eigColor = "#009900"]
																		[h,if(KaP < (MaxKaP/3)): eigColor = "#ff3333"]
																		[h,if(MaxKaP == 0): eigColor = "#eee5c8"]
																		<span style='color: [r: eigColor];'>[r: KaP]</span>/[r: MaxKaP]
																	</td>
																</tr>
															</table>
															<table style='border-spacing: 0px;'>
																<tr>
																	<td style='font-weight: bold;'>
																		GS:
																	</td>
																	<td style='text-align: right;'>
																		[h: aktGS = getGS(id)]
																		[h,if(aktGS < GS): eigColor = "#ff3333"; eigColor = "#eee5c8"]
																		[h,if(aktGS > GS): eigColor = "#0099ff"]
																		<span style='color: [r: eigColor];'>[r: aktGS]</span>
																	</td>
																</tr>
																<tr>
																	<td style='font-weight: bold;'>
																		SK:
																	</td>
																	<td style='text-align: right;'>
																		[h: aktSK = getSK(id)]
																		[h,if(aktSK < SK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
																		[h,if(aktSK > SK): eigColor = "#0099ff"]
																		<span style='color: [r: eigColor];'>[r: aktSK]</span>
																	</td>
																</tr>
																<tr>
																	<td style='font-weight: bold;'>
																		ZK:
																	</td>
																	<td style='text-align: right;'>
																		[h: aktZK = getZK(id)]
																		[h,if(aktZK < ZK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
																		[h,if(aktZK > ZK): eigColor = "#0099ff"]
																		<span style='color: [r: eigColor];'>[r: aktZK]</span>
																	</td>
																</tr>
																<tr>
																	<td style='font-weight: bold;'>
																		INI:<br> <span style='font-size: 8pt;'>(+W6)</span>
																	</td>
																	<td style='text-align: right;'>
																		[h: aktINI = getINI(id)]
																		[h,if(aktINI < INI): eigColor = "#ff3333"; eigColor = "#eee5c8"]
																		[h,if(aktINI > INI): eigColor = "#0099ff"]
																		<span style='color: [r: eigColor];'>[r: aktINI]</span><br>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</table>
											</td>
											<td width='10'>
											</td>
											<td valign='top'>
												<table style='border-spacing: 0px;' width='225'>
													<tr style='font-weight: bold;'>
														<td>
															&nbsp;
														</td>
														<td>
															Ko
														</td>
														<td>
															To
														</td>
														<td>
															LA
														</td>
														<td>
															RA
														</td>
														<td>
															LB
														</td>
														<td>
															RB
														</td>
														<td>
															Ges.
														</td>
														<td>
															BE
														</td>
													</tr>
													[h: ruestung = resolveRS(getRuestung(RuestungAktiv, id), id)]
													<tr style='border-top: 1px solid #eee5c8;'>
														<td style='font-weight: bold;'>
															RS
														</td>
														<td style='text-align: center;'>
															[r: json.get(ruestung, "RSKopf")]
														</td>
														<td style='text-align: center;'>
															[r: json.get(ruestung, "RSTorso")]
														</td>
														<td style='text-align: center;'>
															[r: json.get(ruestung, "RSArmLinks")]
														</td>
														<td style='text-align: center;'>
															[r: json.get(ruestung, "RSArmRechts")]
														</td>
														<td style='text-align: center;'>
															[r: json.get(ruestung, "RSBeinLinks")]
														</td>
														<td style='text-align: center;'>
															[r: json.get(ruestung, "RSBeinRechts")]
														</td>
														<td style='text-align: center;'>
															[r: json.get(ruestung, "RS")]
														</td>
														<td style='text-align: center;'>
															[r: json.get(ruestung, "BE")]
														</td>
													</tr>
												</table>
												<table style='border-spacing: 0px; margin-top: 10px;' width='225'>
													<tr style='font-weight: bold; border-bottom: 1px solid #eee5c8;'>
														<td>
															Waffe / Schild
														</td>
														<td style='text-align: center;'>
															RW
														</td>
														<td style='text-align: center;'>
															AT
														</td>
														<td style='text-align: center;'>
															PA
														</td>
														<td style='text-align: center;'>
															TP
														</td>
													</tr>
													[r,foreach(waffe, Nahkampfwaffen, ""), Code:
													{
														[h: waffe = resolveNK(waffe, id)]
														<tr>
															<td width='125'>
																[r: json.get(waffe, "Name")]
															</td>
															<td style='text-align: center;'>
																[r,switch(json.get(waffe, "RW")):
																	case 1: "kurz";
																	case 2: "mittel";
																	case 3: "lang";
																	case 4: "&uuml;lang"
																]
															</td>
															<td style='text-align: center;'>
																[r: json.get(waffe, "AT")]
															</td>
															<td style='text-align: center;'>
																[r: json.get(waffe, "PA")]
															</td>
															<td style='text-align: center;'>
																[r: json.get(waffe, "TP")]
															</td>
														</tr>
													}]
												</table>
												<table style='border-spacing: 0px; margin-top: 10px;' width='225'>
													<tr style='font-weight: bold; border-bottom: 1px solid #eee5c8;'>
														<td>
															Fernkampf
														</td>
														<td style='text-align: center;'>
															RW
														</td>
														<td style='text-align: center;'>
															LZ
														</td>
														<td style='text-align: center;'>
															FK
														</td>
														<td style='text-align: center;'>
															TP
														</td>
													</tr>
													[r,foreach(waffe, Fernkampfwaffen, ""), Code:
													{
														[h: waffe = resolveFK(waffe, id)]
														<tr>
															<td width='125'>
																[r: json.get(waffe, "Name")]
															</td>
															<td style='text-align: center;'>
																[r: json.get(waffe, "RW1")]&middot;[r: json.get(waffe, "RW2")]&middot;[r: json.get(waffe, "RW3")]
															</td>
															<td style='text-align: center;'>
																[r: json.get(waffe, "Ladezeit")]
															</td>
															<td style='text-align: center;'>
																[r: json.get(waffe, "FK")]
															</td>
															<td style='text-align: center;'>
																[r: json.get(waffe, "TP")]
															</td>
														</tr>
													}]
												</table>
											</td>
											<td style='padding: 0px;' width='1'>
											</td>		
										</tr>
									</table>
									}
								]
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