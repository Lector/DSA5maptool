[h: uebergabe = macro.args]
[h,if(uebergabe == ""): uebergabe = "{}"]

[h: lAnzahl = json.get(uebergabe, "fAnzahl")]
[h,if(lAnzahl == ""): lAnzahl = 1]
[h,if(isNumber(lAnzahl) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numText"]
	};{}
]
[h,if(lAnzahl < 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numNegative"]
	};{}
]

[h: quellLaenge = json.get(uebergabe, "quellLaenge")]
[h,if(quellLaenge == ""): quellLaenge = "qIrdisch"]
[h: mIrdisch = json.get(uebergabe, "mIrdisch")]
[h,if(mIrdisch == ""): mIrdisch = "Zentimeter"]
[h,switch(quellLaenge), Code:
	case "qIrdisch": { 
		[aktTyp = "Irdisch"]
		[aktEinheit = mIrdisch]
		[switch(aktEinheit):
			case "Millimeter": uCM = lAnzahl * 0.1;
			case "Zentimeter": uCM = lAnzahl;
			case "Dezimeter": uCM = lAnzahl * 10;
			case "Meter": uCM = lAnzahl * 100;
			case "Kilometer": uCM = lAnzahl * 100000;
			default: uCM = 0
		]
	};
	case "qDerisch": { 
		[aktTyp = "Derisch"]
		[aktEinheit = json.get(uebergabe, "mDerisch")]
		[switch(aktEinheit):
			case "Halbfinger": uCM = lAnzahl;
			case "Finger": uCM = lAnzahl * 2;
			case "Spann": uCM = lAnzahl * 20;
			case "Kaiserarm - veraltet": uCM = lAnzahl * 80;
			case "Schritt": uCM = lAnzahl * 100;
			case "Lot - Tiefenmessung": uCM = lAnzahl * 1000;
			case "Meile": uCM = lAnzahl * 100000;
			case "Nivesische Tagesreise": uCM = lAnzahl * 1200000;
			case "Novadisches Baryd": uCM = lAnzahl * 1500000;
			default: uCM = 0
		]
	};
	case "qZwergisch": { 
		[aktTyp = "Zwergisch"]
		[aktEinheit = json.get(uebergabe, "mZwergisch")]
		[switch(aktEinheit):
			case "Rim": uCM = lAnzahl * 0.4;
			case "Drom": uCM = lAnzahl * 28;
			case "Drumod": uCM = lAnzahl * 170;
			case "Drasch": uCM = lAnzahl * 670;
			case "Dumad": uCM = lAnzahl * 7400;
			case "Pakasch": uCM = lAnzahl * 2500000;
			default: uCM = 0
		]
	}
]

[h: actionLink = macroLinkText("laengenrechner@this", "")]
[dialog5("laengenrechner", "width=955; height=480; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>L&auml;ngenma&szlig;e umrechnen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Längenrechner")]
				<table style='border-spacing: 0px; font-size: 12pt; margin-bottom: 15px;'>
					<tr>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td>
										<input type='radio' name='quellLaenge' value='qIrdisch' [r,if(quellLaenge == "qIrdisch"): output = "checked='checked'"; output = ""]>
									</td>
									<td>
										Irdische Ma&szlig;e:
									</td>
									<td>
										<select name='mIrdisch' size='1'>
											[h: sIrdisch = mIrdisch]
											<option [r,if(sIrdisch == "Millimeter"): output = "selected='selected'"; output = ""]>Millimeter</option>
											<option [r,if(sIrdisch == "Zentimeter"): output = "selected='selected'"; output = ""]>Zentimeter</option>
											<option [r,if(sIrdisch == "Dezimeter"): output = "selected='selected'"; output = ""]>Dezimeter</option>
											<option [r,if(sIrdisch == "Meter"): output = "selected='selected'"; output = ""]>Meter</option>
											<option [r,if(sIrdisch == "Kilometer"): output = "selected='selected'"; output = ""]>Kilometer</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='quellLaenge' value='qDerisch' [r,if(quellLaenge == "qDerisch"): output = "checked='checked'"; output = ""]>
									</td>
									<td>
										Derische Ma&szlig;e:
									</td>
									<td>
										<select name='mDerisch' size='1'>
											[h: sDerisch = json.get(uebergabe, "mDerisch")]
											<option [r,if(sDerisch == "Halbfinger"): output = "selected='selected'"; output = ""]>Halbfinger</option>
											<option [r,if(sDerisch == "Finger"): output = "selected='selected'"; output = ""]>Finger</option>
											<option [r,if(sDerisch == "Spann"): output = "selected='selected'"; output = ""]>Spann</option>
											<option [r,if(sDerisch == "Kaiserarm - veraltet"): output = "selected='selected'"; output = ""]>Kaiserarm - veraltet</option>
											<option [r,if(sDerisch == "Schritt"): output = "selected='selected'"; output = ""]>Schritt</option>
											<option [r,if(sDerisch == "Lot - Tiefenmessung"): output = "selected='selected'"; output = ""]>Lot - Tiefenmessung</option>
											<option [r,if(sDerisch == "Meile"): output = "selected='selected'"; output = ""]>Meile</option>
											<option [r,if(sDerisch == "Nivesische Tagesreise"): output = "selected='selected'"; output = ""]>Nivesische Tagesreise</option>
											<option [r,if(sDerisch == "Novadisches Baryd"): output = "selected='selected'"; output = ""]>Novadisches Baryd</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='quellLaenge' value='qZwergisch' [r,if(quellLaenge == "qZwergisch"): output = "checked='checked'"; output = ""]>
									</td>
									<td>
										Zwergische Ma&szlig;e:
									</td>
									<td>
										<select name='mZwergisch' size='1'>
											[h: sZwergisch = json.get(uebergabe, "mZwergisch")]
											<option [r,if(sZwergisch == "Rim"): output = "selected='selected'"; output = ""]>Rim</option>
											<option [r,if(sZwergisch == "Drom"): output = "selected='selected'"; output = ""]>Drom</option>
											<option [r,if(sZwergisch == "Drumod"): output = "selected='selected'"; output = ""]>Drumod</option>
											<option [r,if(sZwergisch == "Drasch"): output = "selected='selected'"; output = ""]>Drasch</option>
											<option [r,if(sZwergisch == "Dumad"): output = "selected='selected'"; output = ""]>Dumad</option>
											<option [r,if(sZwergisch == "Pakasch"): output = "selected='selected'"; output = ""]>Pakasch</option>
										</select>
									</td>
								</tr>
							</table>
						</td>
						<td width='15'>
							&nbsp;
						</td>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td>
										Anzahl:
									</td>
									<td>
										<input type='text' name='fAnzahl' size='4' maxlength='4' value=''>
									</td>
								</tr>
							</table>
						</td>
						<td width='15'>
							&nbsp;
						</td>
						<td>
							[h: button = tableImage("tools", 10)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
						<td width='18'>
							&nbsp;
						</td>
						<td style='border-left: 1px solid #000000;' width='15'>
							&nbsp;
						</td>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td style='text-align: center;'>
										Aktuelle Einheit:
									</td>
								</tr>
								<tr>
									<td style='text-align: center; font-weight: bold; color: #441e13; font-size: 14pt;'>
										[r: lAnzahl] [r: aktEinheit] ([r: aktTyp])
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin-bottom: 10px;'>
					<tr>
						<td valign='top'>
							<table style='border-spacing: 0px;' width='100%'>
								<tr>
									<td style='font-weight: bold; color: #ffffff; text-align: center;' bgcolor='#875e34'>
										Irdische Ma&szlig;e
									</td>
								</tr>
								<tr>
									<td bgcolor='#ffffff'>
										<table style='border-spacing: 0px;' width='100%'>
											<tr>
												<td style='padding-right: 5px;'>
													Millimeter (mm)
													<br>Zentimeter (cm)
													<br>Dezimeter (dm)
													<br>Meter (m)
													<br>Kilometer (km)
												</td>
												<td style='text-align: right; border-left: 1px solid #000000; padding-left: 5px;' width='50'>
													[r: round(uCM / 0.1, 2)]
													<br>[r: round(uCM / 1, 2)]
													<br>[r: round(uCM / 10, 2)]
													<br>[r: round(uCM / 100, 2)]
													<br>[r: round(uCM / 100000, 2)]
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
							<table style='border-spacing: 0px;'>
								<tr>
									<td style='font-weight: bold; color: #ffffff; text-align: center;' bgcolor='#875e34'>
										Derische Ma&szlig;e
									</td>
								</tr>
								<tr>
									<td bgcolor='#ffffff'>
										<table style='border-spacing: 0px;'>
											<tr>
												<td style='padding-right: 5px;'>
													Halbfinger
													<br>Finger
													<br>Spann
													<br>Kaiserarm (veraltet)
													<br>Schritt
													<br>Lot (Tiefenmessung)
													<br>Meile
													<br>Nivesische Tagesreise
													<br>Novadisches Baryd
												</td>
												<td style='text-align: right; border-left: 1px solid #000000; padding-left: 5px;' width='50'>
													[r: round(uCM / 1, 2)]
													<br>[r: round(uCM / 2, 2)]
													<br>[r: round(uCM / 20, 2)]
													<br>[r: round(uCM / 80, 2)]
													<br>[r: round(uCM / 100, 2)]
													<br>[r: round(uCM / 1000, 2)]
													<br>[r: round(uCM / 100000, 2)]
													<br>[r: round(uCM / 1200000, 2)]
													<br>[r: round(uCM / 1500000, 2)]
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
							<table style='border-spacing: 0px;' width='100%'>
								<tr>
									<td style='font-weight: bold; color: #ffffff; text-align: center;' bgcolor='#875e34'>
										Zwergische Ma&szlig;e
									</td>
								</tr>
								<tr>
									<td bgcolor='#ffffff'>
										<table style='border-spacing: 0px;' width='100%'>
											<tr>
												<td style='padding-right: 5px;'>
													Rim
													<br>Drom
													<br>Drumod
													<br>Drasch
													<br>Dumad
													<br>Pakasch
												</td>
												<td style='text-align: right; border-left: 1px solid #000000; padding-left: 5px;' width='50'>
													[r: round(uCM / 0.4, 2)]
													<br>[r: round(uCM / 28, 2)]
													<br>[r: round(uCM / 170, 2)]
													<br>[r: round(uCM / 670, 2)]
													<br>[r: round(uCM / 7400, 2)]
													<br>[r: round(uCM / 2500000, 2)]
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]