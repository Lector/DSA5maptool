[h: uebergabe = macro.args]
[h,if(uebergabe == ""): uebergabe = "{}"]

[h: gAnzahl = json.get(uebergabe, "fAnzahl")]
[h,if(gAnzahl == ""): gAnzahl = 1]
[h,if(isNumber(gAnzahl) == 0), Code:
	{
		[h,macro("inputFail@this"): "numText"]
	};{}
]
[h,if(gAnzahl < 0), Code:
	{
		[h,macro("inputFail@this"): "numNegative"]
	};{}
]

[h: quellGewicht = json.get(uebergabe, "quellGewicht")]
[h,if(quellGewicht == ""): quellGewicht = "qIrdisch"]
[h: mIrdisch = json.get(uebergabe, "mIrdisch")]
[h,if(mIrdisch == ""): mIrdisch = "Gramm"]
[h,switch(quellGewicht), Code:
	case "qIrdisch": { 
		[aktTyp = "Irdisch"]
		[aktEinheit = mIrdisch]
		[switch(aktEinheit):
			case "Milligramm": uGR = gAnzahl * 0.001;
			case "Gramm": uGR = gAnzahl;
			case "Kilogramm": uGR = gAnzahl * 1000;
			case "Zentner": uGR = gAnzahl * 50000;
			case "Doppelzentner": uGR = gAnzahl * 100000;
			case "Tonne": uGR = gAnzahl * 1000000;
			default: uGR = 0
		]
	};
	case "qDerisch": { 
		[aktTyp = "Derisch"]
		[aktEinheit = json.get(uebergabe, "mDerisch")]
		[switch(aktEinheit):
			case "Gran": uGR = gAnzahl * 0.04;
			case "Karat": uGR = gAnzahl * 0.2;
			case "Skrupel": uGR = gAnzahl;
			case "Unze": uGR = gAnzahl * 25;
			case "Stein": uGR = gAnzahl * 1000;
			case "Sack": uGR = gAnzahl * 100000;
			case "Quader": uGR = gAnzahl * 1000000;
			default: uGR = 0
		]
	};
	case "qZwergisch": { 
		[aktTyp = "Zwergisch"]
		[aktEinheit = json.get(uebergabe, "mZwergisch")]
		[switch(aktEinheit):
			case "Brox": uGR = gAnzahl * 10;
			case "Boruk": uGR = gAnzahl * 125;
			case "Brok": uGR = gAnzahl * 6500;
			default: uGR = 0
		]
	}
]

[h: actionLink = macroLinkText("gewichtsrechner@this", "")]
[dialog5("gewichtsrechner", "width=955; height=450; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Gewichtsmaße umrechnen</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Gewichtsrechner")]
				<table style='border-spacing: 0px; font-size: 12pt; margin-bottom: 15px;'>
					<tr>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td>
										<input type='radio' name='quellGewicht' value='qIrdisch' [r,if(quellGewicht == "qIrdisch"): output = "checked='checked'"; output = ""]>
									</td>
									<td>
										Irdische Maße:
									</td>
									<td>
										<select name='mIrdisch' size='1'>
											[h: sIrdisch = mIrdisch]
											<option [r,if(sIrdisch == "Milligramm"): output = "selected='selected'"; output = ""]>Milligramm</option>
											<option [r,if(sIrdisch == "Gramm"): output = "selected='selected'"; output = ""]>Gramm</option>
											<option [r,if(sIrdisch == "Kilogramm"): output = "selected='selected'"; output = ""]>Kilogramm</option>
											<option [r,if(sIrdisch == "Zentner"): output = "selected='selected'"; output = ""]>Zentner</option>
											<option [r,if(sIrdisch == "Doppelzentner"): output = "selected='selected'"; output = ""]>Doppelzentner</option>
											<option [r,if(sIrdisch == "Tonne"): output = "selected='selected'"; output = ""]>Tonne</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='quellGewicht' value='qDerisch' [r,if(quellGewicht == "qDerisch"): output = "checked='checked'"; output = ""]>
									</td>
									<td>
										Derische Maße:
									</td>
									<td>
										<select name='mDerisch' size='1'>
											[h: sDerisch = json.get(uebergabe, "mDerisch")]
											<option [r,if(sDerisch == "Gran"): output = "selected='selected'"; output = ""]>Gran</option>
											<option [r,if(sDerisch == "Karat"): output = "selected='selected'"; output = ""]>Karat</option>
											<option [r,if(sDerisch == "Skrupel"): output = "selected='selected'"; output = ""]>Skrupel</option>
											<option [r,if(sDerisch == "Unze"): output = "selected='selected'"; output = ""]>Unze</option>
											<option [r,if(sDerisch == "Stein"): output = "selected='selected'"; output = ""]>Stein</option>
											<option [r,if(sDerisch == "Sack"): output = "selected='selected'"; output = ""]>Sack</option>
											<option [r,if(sDerisch == "Quader"): output = "selected='selected'"; output = ""]>Quader</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='quellGewicht' value='qZwergisch' [r,if(quellGewicht == "qZwergisch"): output = "checked='checked'"; output = ""]>
									</td>
									<td>
										Zwergische Maße:
									</td>
									<td>
										<select name='mZwergisch' size='1'>
											[h: sZwergisch = json.get(uebergabe, "mZwergisch")]
											<option [r,if(sZwergisch == "Brox"): output = "selected='selected'"; output = ""]>Brox</option>
											<option [r,if(sZwergisch == "Boruk"): output = "selected='selected'"; output = ""]>Boruk</option>
											<option [r,if(sZwergisch == "Brok"): output = "selected='selected'"; output = ""]>Brok</option>
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
							[h: convertImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]
							<button type="submit">
								<table>
									<tr>
										<td><img src="[r: convertImage]"/></td>
										<td>Jetzt umrechnen</td>
									</tr>
								</table>
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
										[r: gAnzahl] [r: aktEinheit] ([r: aktTyp])
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
										Irdische Maße
									</td>
								</tr>
								<tr>
									<td bgcolor='#ffffff'>
										<table style='border-spacing: 0px;' width='100%'>
											<tr>
												<td style='padding-right: 5px;'>
													Milligramm (mg)
													<br>Gramm (g)
													<br>Kilogramm (kg)
													<br>Zentner (Ztr)
													<br>Doppelzentner (dz)
													<br>Tonne (t)
												</td>
												<td style='text-align: right; border-left: 1px solid #000000; padding-left: 5px;' width='50'>
													[r: round(uGR / 0.001, 2)]
													<br>[r: round(uGR / 1, 2)]
													<br>[r: round(uGR / 1000, 2)]
													<br>[r: round(uGR / 50000, 2)]
													<br>[r: round(uGR / 100000, 2)]
													<br>[r: round(uGR / 1000000, 2)]
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
										Derische Maße
									</td>
								</tr>
								<tr>
									<td bgcolor='#ffffff'>
										<table style='border-spacing: 0px;'>
											<tr>
												<td style='padding-right: 5px;'>
													Gran
													<br>Karat
													<br>Skrupel
													<br>Unze
													<br>Stein
													<br>Sack
													<br>Quader
												</td>
												<td style='text-align: right; border-left: 1px solid #000000; padding-left: 5px;' width='50'>
													[r: round(uGR / 0.04, 2)]
													<br>[r: round(uGR / 0.2, 2)]
													<br>[r: round(uGR / 1, 2)]
													<br>[r: round(uGR / 25, 2)]
													<br>[r: round(uGR / 1000, 2)]
													<br>[r: round(uGR / 100000, 2)]
													<br>[r: round(uGR / 1000000, 2)]
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
										Zwergische Maße
									</td>
								</tr>
								<tr>
									<td bgcolor='#ffffff'>
										<table style='border-spacing: 0px;' width='100%'>
											<tr>
												<td style='padding-right: 5px;'>
													Brox
													<br>Boruk
													<br>Brok
												</td>
												<td style='text-align: right; border-left: 1px solid #000000; padding-left: 5px;' width='50'>
													[r: round(uGR / 10, 2)]
													<br>[r: round(uGR / 125, 2)]
													<br>[r: round(uGR / 6500, 2)]
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