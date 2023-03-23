[h: uebergabe = macro.args]
[h,if(uebergabe == ""): uebergabe = "{}"]

[h: anzahl = json.get(uebergabe, "fAnzahl")]
[h,if(anzahl == ""): anzahl = 1]
[h: gebuehr = json.get(uebergabe, "fGebuehr")]
[h,if(gebuehr == ""): gebuehr = 0]

[h,if(isNumber(anzahl) == 0 || isNumber(gebuehr) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numText"]
	};{}
]
[h,if(gebuehr != round(gebuehr)), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numInteger"]
	};{}
]
[h,if(anzahl < 0 || gebuehr < 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numNegative"]
	};{}
]

[h: quellWaehrung = json.get(uebergabe, "quellWaehrung")]
[h,if(quellWaehrung == ""): quellWaehrung = "qMittelreich"]
[h,switch(quellWaehrung), Code:
	case "qAlanfa": { 
		[aktLand = "Alanfanisches Imperium"]
		[aktWaehrung = json.get(uebergabe, "wAlanfa")]
	};
	case "qKalifat": { 
		[aktLand = "Kalifat"]
		[aktWaehrung = json.get(uebergabe, "wKalifat")]
	};
	case "qAranien": { 
		[aktLand = "Mhaharanyat Aranien"]
		[aktWaehrung = json.get(uebergabe, "wAranien")]
	};
	case "qBergkoenigreich": { 
		[aktLand = "Bergkönigreich"]
		[aktWaehrung = json.get(uebergabe, "wBergkoenigreich")]
	};
	case "qAmazonen": { 
		[aktLand = "Könnigenreich der Amazonen"]
		[aktWaehrung = json.get(uebergabe, "wAmazonen")]
	};
	case "qMittelreich": { 
		[aktLand = "Mittelreich"]
		[aktWaehrung = json.get(uebergabe, "wMittelreich")]
		[h,if(aktWaehrung == ""): aktWaehrung = "Silbertaler"]
	};
	case "qBornland": { 
		[aktLand = "Bornland"]
		[aktWaehrung = json.get(uebergabe, "wBornland")]
	};
	case "qAndergast": { 
		[aktLand = "Königreich Andergast"]
		[aktWaehrung = json.get(uebergabe, "wAndergast")]
	};
	case "qSchwarzeLande": { 
		[aktLand = "Schwarze Lande"]
		[aktWaehrung = json.get(uebergabe, "wSchwarzeLande")]
	};
	case "qMengbilla": { 
		[aktLand = "Großemirat Mengbilla"]
		[aktWaehrung = json.get(uebergabe, "wMengbilla")]
	};
	case "qBrabak": { 
		[aktLand = "Königreich Brabak"]
		[aktWaehrung = json.get(uebergabe, "wBrabak")]
	};
	case "qTulamidenlande": { 
		[aktLand = "Tulamidenlande"]
		[aktWaehrung = json.get(uebergabe, "wTulamidenlande")]
	};
	case "qPaavi": { 
		[aktLand = "Herzogtum Paavi"]
		[aktWaehrung = json.get(uebergabe, "wPaavi")]
	};
	case "qNostria": { 
		[aktLand = "Königreich Nostria"]
		[aktWaehrung = json.get(uebergabe, "wNostria")]
	};
	case "qVallusa": { 
		[aktLand = "Vallusa"]
		[aktWaehrung = json.get(uebergabe, "wVallusa")]
	};
	case "qHorasreich": { 
		[aktLand = "Horasreich"]
		[aktWaehrung = json.get(uebergabe, "wHorasreich")]
	};
	case "qTrahelien": { 
		[aktLand = "Königreich Trahelien"]
		[aktWaehrung = json.get(uebergabe, "wTrahelien")]
	};
	case "qSonstige": { 
		[aktLand = "Weitere Münzen"]
		[aktWaehrung = json.get(uebergabe, "wSonstige")]
	};
	default: {
		[aktLand = "Unbekannt"]
		[aktWaehrung = "Unbekannt"]
	}
]

[h: actionLink = macroLinkText("waehrung@this", "")]
[dialog5("waehrungsrechner", "width=1511; height=892; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Währungsrechner</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Währungsrechner")]
				<table style='border-spacing: 0px; font-size: 12pt; font-weight: bold; color: #441e13;'>
					<tr>	
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qAlanfa' [r,if(quellWaehrung == "qAlanfa"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Alanfanisches Imperium
										<br>
										<select name='wAlanfa' size='1'>
											[h: sAlanfa = json.get(uebergabe, "wAlanfa")]
											<option [r,if(sAlanfa == "Dirham"): output = "selected='selected'"; output = ""]>Dirham</option>
											<option [r,if(sAlanfa == "Kleiner Oreal"): output = "selected='selected'"; output = ""]>Kleiner Oreal</option>
											<option [r,if(sAlanfa == "Oreal / Schilling"): output = "selected='selected'"; output = ""]>Oreal / Schilling</option>
											<option [r,if(sAlanfa == "Dublone"): output = "selected='selected'"; output = ""]>Dublone</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qKalifat' [r,if(quellWaehrung == "qKalifat"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Kalifat
										<br>
										<select name='wKalifat' size='1'>
											[h: sKalifat = json.get(uebergabe, "wKalifat")]
											<option [r,if(sKalifat == "Muwlat"): output = "selected='selected'"; output = ""]>Muwlat</option>
											<option [r,if(sKalifat == "Zechine"): output = "selected='selected'"; output = ""]>Zechine</option>
											<option [r,if(sKalifat == "Marawedi"): output = "selected='selected'"; output = ""]>Marawedi</option>
											<option [r,if(sKalifat == "Shekel - veraltet"): output = "selected='selected'"; output = ""]>Shekel - veraltet</option>
											<option [r,if(sKalifat == "Denar - veraltet"): output = "selected='selected'"; output = ""]>Denar - veraltet</option>
											<option [r,if(sKalifat == "Piaster - veraltet"): output = "selected='selected'"; output = ""]>Piaster - veraltet</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qAranien' [r,if(quellWaehrung == "qAranien"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Mhaharanyat Aranien
										<br>
										<select name='wAranien' size='1'>
											[h: sAranien = json.get(uebergabe, "wAranien")]
											<option [r,if(sAranien == "Kurush - Rosenkreuzer"): output = "selected='selected'"; output = ""]>Kurush - Rosenkreuzer</option>
											<option [r,if(sAranien == "Hallah"): output = "selected='selected'"; output = ""]>Hallah</option>
											<option [r,if(sAranien == "Schekel"): output = "selected='selected'"; output = ""]>Schekel</option>
											<option [r,if(sAranien == "Dinar"): output = "selected='selected'"; output = ""]>Dinar</option>
										</select>
									</td>
								</tr>
							</table>
						</td>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qBergkoenigreich' [r,if(quellWaehrung == "qBergkoenigreich"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Bergkönigreich
										<br>
										<select name='wBergkoenigreich' size='1'>
											[h: sBergkoenigreich = json.get(uebergabe, "wBergkoenigreich")]
											<option [r,if(sBergkoenigreich == "Atebrox - Zwergengroschen"): output = "selected='selected'"; output = ""]>Atebrox - Zwergengroschen</option>
											<option [r,if(sBergkoenigreich == "Arganbrox - Zwergenschilling"): output = "selected='selected'"; output = ""]>Arganbrox - Zwergenschilling</option>
											<option [r,if(sBergkoenigreich == "Auromox - Zwergentaler"): output = "selected='selected'"; output = ""]>Auromox - Zwergentaler</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qAmazonen' [r,if(quellWaehrung == "qAmazonen"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Königinnenreich der Amazonen
										<br>
										<select name='wAmazonen' size='1'>
											<option selected='selected'>Amazonenkrone</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qMittelreich' [r,if(quellWaehrung == "qMittelreich"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Mittelreich
										<br>
										<select name='wMittelreich' size='1'>
											[h: sMittelreich = json.get(uebergabe, "wMittelreich")]
											<option [r,if(sMittelreich == "Kreuzer"): output = "selected='selected'"; output = ""]>Kreuzer</option>
											<option [r,if(sMittelreich == "Heller"): output = "selected='selected'"; output = ""]>Heller</option>
											<option [r,if(sMittelreich == "Silbertaler"): output = "selected='selected'"; output = ""]>Silbertaler</option>
											<option [r,if(sMittelreich == "Dukate"): output = "selected='selected'"; output = ""]>Dukate</option>
											<option [r,if(sMittelreich == "Nickel - veraltet"): output = "selected='selected'"; output = ""]>Nickel - veraltet</option>
											<option [r,if(sMittelreich == "Puniner Dublone - veraltet"): output = "selected='selected'"; output = ""]>Puniner Dublone - veraltet</option>
											<option [r,if(sMittelreich == "Balihoer Rad - veraltet"): output = "selected='selected'"; output = ""]>Balihoer Rad - veraltet</option>
											<option [r,if(sMittelreich == "Eslamo - veraltet"): output = "selected='selected'"; output = ""]>Eslamo - veraltet</option>
										</select>
									</td>
								</tr>
							</table>
						</td>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qBornland' [r,if(quellWaehrung == "qBornland"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Bornland
										<br>
										<select name='wBornland' size='1'>
											[h: sBornland = json.get(uebergabe, "wBornland")]
											<option [r,if(sBornland == "Deut"): output = "selected='selected'"; output = ""]>Deut</option>
											<option [r,if(sBornland == "Groschen / Silbergroschen"): output = "selected='selected'"; output = ""]>Groschen / Silbergroschen</option>
											<option [r,if(sBornland == "Batzen"): output = "selected='selected'"; output = ""]>Batzen</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qAndergast' [r,if(quellWaehrung == "qAndergast"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Königreich Andergast
										<br>
										<select name='wAndergast' size='1'>
											<option selected='selected'>Andrataler</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qSchwarzeLande' [r,if(quellWaehrung == "qSchwarzeLande"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Schwarze Lande
										<br>
										<select name='wSchwarzeLande' size='1'>
											[h: sSchwarzeLande = json.get(uebergabe, "wSchwarzeLande")]
											<option [r,if(sSchwarzeLande == "Kreuzer - Oron"): output = "selected='selected'"; output = ""]>Kreuzer - Oron</option>
											<option [r,if(sSchwarzeLande == "Heller - Oron"): output = "selected='selected'"; output = ""]>Heller - Oron</option>
											<option [r,if(sSchwarzeLande == "Silbertaler - Oron"): output = "selected='selected'"; output = ""]>Silbertaler - Oron</option>
											<option [r,if(sSchwarzeLande == "Dukate - Oron"): output = "selected='selected'"; output = ""]>Dukate - Oron</option>
											<option [r,if(sSchwarzeLande == "Splitter - Xeraanien"): output = "selected='selected'"; output = ""]>Splitter - Xeraanien</option>
											<option [r,if(sSchwarzeLande == "Zholvari - Xeraanien"): output = "selected='selected'"; output = ""]>Zholvari - Xeraanien</option>
											<option [r,if(sSchwarzeLande == "Borbaradstaler - Xeraanien"): output = "selected='selected'"; output = ""]>Borbaradstaler - Xeraanien</option>
											<option [r,if(sSchwarzeLande == "Gulden - Glorania"): output = "selected='selected'"; output = ""]>Gulden - Glorania</option>
										</select>
									</td>
								</tr>
							</table>
						</td>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qMengbilla' [r,if(quellWaehrung == "qMengbilla"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Großemirat Mengbilla
										<br>
										<select name='wMengbilla' size='1'>
											[h: sMengbilla = json.get(uebergabe, "wMengbilla")]
											<option [r,if(sMengbilla == "Ikossar"): output = "selected='selected'"; output = ""]>Ikossar</option>
											<option [r,if(sMengbilla == "Tessar"): output = "selected='selected'"; output = ""]>Tessar</option>
											<option [r,if(sMengbilla == "Telar"): output = "selected='selected'"; output = ""]>Telar</option>
											<option [r,if(sMengbilla == "Dekat"): output = "selected='selected'"; output = ""]>Dekat</option>
											<option [r,if(sMengbilla == "Mengbillaner Unze - veraltet"): output = "selected='selected'"; output = ""]>Mengbillaner Unze - veraltet</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qBrabak' [r,if(quellWaehrung == "qBrabak"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Königreich Brabak
										<br>
										<select name='wBrabak' size='1'>
											[h: sBrabak = json.get(uebergabe, "wBrabak")]
											<option [r,if(sBrabak == "Brabaker Kreuzer"): output = "selected='selected'"; output = ""]>Brabaker Kreuzer</option>
											<option [r,if(sBrabak == "Brabaker Krone - in Brabak"): output = "selected='selected'"; output = ""]>Brabaker Krone - in Brabak</option>
											<option [r,if(sBrabak == "Brabaker Krone - ausserhalb Brabak"): output = "selected='selected'"; output = ""]>Brabaker Krone - ausserhalb Brabak</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qTulamidenlande' [r,if(quellWaehrung == "qTulamidenlande"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Tulamidenlande
										<br>
										<select name='wTulamidenlande' size='1'>
											[h: sTulamidenlande = json.get(uebergabe, "wTulamidenlande")]
											<option [r,if(sTulamidenlande == "Alastren - Khunchom"): output = "selected='selected'"; output = ""]>Alastren - Khunchom</option>
											<option [r,if(sTulamidenlande == "Piaster - Rashdul"): output = "selected='selected'"; output = ""]>Piaster - Rashdul</option>
											<option [r,if(sTulamidenlande == "Selemer Kupferschilling - veraltet"): output = "selected='selected'"; output = ""]>Selemer Kupferschilling - veraltet</option>
										</select>
									</td>
								</tr>
							</table>
						</td>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qPaavi' [r,if(quellWaehrung == "qPaavi"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Herzogtum Paavi
										<br>
										<select name='wPaavi' size='1'>
											<option selected='selected'>Gulden</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qNostria' [r,if(quellWaehrung == "qNostria"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Königreich Nostria
										<br>
										<select name='wNostria' size='1'>
											<option selected='selected'>Nostrische Krone</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qVallusa' [r,if(quellWaehrung == "qVallusa"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Vallusa
										<br>
										<select name='wVallusa' size='1'>
											[h: sVallusa = json.get(uebergabe, "wVallusa")]
											<option [r,if(sVallusa == "Flindrich"): output = "selected='selected'"; output = ""]>Flindrich</option>
											<option [r,if(sVallusa == "Stueber"): output = "selected='selected'"; output = ""]>Stueber</option>
											<option [r,if(sVallusa == "Witten"): output = "selected='selected'"; output = ""]>Witten</option>
										</select>
									</td>
								</tr>
							</table>
						</td>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qHorasreich' [r,if(quellWaehrung == "qHorasreich"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Horasreich
										<br>
										<select name='wHorasreich' size='1'>
											[h: sHorasreich = json.get(uebergabe, "wHorasreich")]
											<option [r,if(sHorasreich == "Kreuzer"): output = "selected='selected'"; output = ""]>Kreuzer</option>
											<option [r,if(sHorasreich == "Heller"): output = "selected='selected'"; output = ""]>Heller</option>
											<option [r,if(sHorasreich == "Silbertaler"): output = "selected='selected'"; output = ""]>Silbertaler</option>
											<option [r,if(sHorasreich == "Dukate"): output = "selected='selected'"; output = ""]>Dukate</option>
											<option [r,if(sHorasreich == "Kusliker Rad / Horasdor"): output = "selected='selected'"; output = ""]>Kusliker Rad / Horasdor</option>
											<option [r,if(sHorasreich == "Schilling - veraltet"): output = "selected='selected'"; output = ""]>Schilling - veraltet</option>
											<option [r,if(sHorasreich == "Zehnt - veraltet"): output = "selected='selected'"; output = ""]>Zehnt - veraltet</option>
											<option [r,if(sHorasreich == "Arivorer Silberdukate - veraltet"): output = "selected='selected'"; output = ""]>Arivorer Silberdukate - veraltet</option>
											<option [r,if(sHorasreich == "Krone - veraltet"): output = "selected='selected'"; output = ""]>Krone - veraltet</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qTrahelien' [r,if(quellWaehrung == "qTrahelien"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Königreich Trahelien
										<br>
										<select name='wTrahelien' size='1'>
											[h: sTrahelien = json.get(uebergabe, "wTrahelien")]
											<option [r,if(sTrahelien == "Truemmer"): output = "selected='selected'"; output = ""]>Truemmer</option>
											<option [r,if(sTrahelien == "Ch-ryskl"): output = "selected='selected'"; output = ""]>Ch-ryskl</option>
											<option [r,if(sTrahelien == "Hedsch"): output = "selected='selected'"; output = ""]>Hedsch</option>
											<option [r,if(sTrahelien == "Suvar"): output = "selected='selected'"; output = ""]>Suvar</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qSonstige' [r,if(quellWaehrung == "qSonstige"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Weitere Münzen
										<br>
										<select name='wSonstige' size='1'>
											[h: sSonstige = json.get(uebergabe, "wSonstige")]
											<option [r,if(sSonstige == "Chorhoper Heller"): output = "selected='selected'"; output = ""]>Chorhoper Heller</option>
											<option [r,if(sSonstige == "Minisepe - Durchschnitt"): output = "selected='selected'"; output = ""]>Minisepe - Durchschnitt</option>
											<option [r,if(sSonstige == "Syllaner Taler"): output = "selected='selected'"; output = ""]>Syllaner Taler</option>
										</select>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; font-size: 12pt; margin: 15px 0px 15px 0px;'>
					<tr>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td>
										Anzahl der Münzen:
									</td>
									<td>
										<input type='text' name='fAnzahl' size='4' maxlength='4' value=''>
									</td>
								</tr>
								<tr>
									<td>
										Wechselgebühr (%):
									</td>
									<td>
										<input type='text' name='fGebuehr' size='4' maxlength='2' value=''>
									</td>
								</tr>
							</table>
						</td>
						<td width='10'>
							&nbsp;
						</td>
						<td>
						[h: convertImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/convertNow.png")]
							<button type="submit">
								<img src="[r: convertImage]"/>
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
									<td valign='top'>
										Aktuelle Währung:
									</td>
									<td>
										<span style='font-weight: bold; color: #441e13;'>[r: anzahl] [r: aktWaehrung] ([r: aktLand])</span>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										Wechselgebühr:
									</td>
									<td>
										<span style='font-weight: bold; color: #441e13;'>[r: gebuehr] %</span>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				[h,switch(quellWaehrung), Code:
					case "qAlanfa": { 
						[switch(json.get(uebergabe, "wAlanfa")):
							case "Dirham": uKreuzer = anzahl;
							case "Kleiner Oreal": uKreuzer = anzahl * 50;
							case "Oreal / Schilling": uKreuzer = anzahl * 100;
							case "Dublone": uKreuzer = anzahl * 2000;
							default: uKreuzer = 0
						]
					};
					case "qKalifat": { 
						[switch(json.get(uebergabe, "wKalifat")):
							case "Muwlat": uKreuzer = anzahl * 5;
							case "Zechine": uKreuzer = anzahl * 200;
							case "Marawedi": uKreuzer = anzahl * 2000;
							case "Shekel - veraltet": uKreuzer = anzahl;
							case "Denar - veraltet": uKreuzer = anzahl * 40;
							case "Piaster - veraltet": uKreuzer = anzahl * 150;
							default: uKreuzer = 0
						]
					};
					case "qAranien": { 
						[switch(json.get(uebergabe, "wAranien")):
							case "Kurush - Rosenkreuzer": uKreuzer = anzahl;
							case "Hallah": uKreuzer = anzahl * 10;
							case "Schekel": uKreuzer = anzahl * 100;
							case "Dinar": uKreuzer = anzahl * 1000;
							default: uKreuzer = 0
						]
					};
					case "qBergkoenigreich": { 
						[switch(json.get(uebergabe, "wBergkoenigreich")):
							case "Atebrox - Zwergengroschen": uKreuzer = anzahl * 20;
							case "Arganbrox - Zwergenschilling": uKreuzer = anzahl * 200;
							case "Auromox - Zwergentaler": uKreuzer = anzahl * 1200;
							default: uKreuzer = 0
						]
					};
					case "qAmazonen": { 
						[switch(json.get(uebergabe, "wAmazonen")):
							case "Amazonenkrone": uKreuzer = anzahl * 1200;
							default: uKreuzer = 0
						]
					};
					case "qMittelreich": { 
						[switch(json.get(uebergabe, "wMittelreich")):
							case "Kreuzer": uKreuzer = anzahl;
							case "Heller": uKreuzer = anzahl * 10;
							case "Silbertaler": uKreuzer = anzahl * 100;
							case "Dukate": uKreuzer = anzahl * 1000;
							case "Nickel - veraltet": uKreuzer = anzahl * 2;
							case "Puniner Dublone - veraltet": uKreuzer = anzahl * 800;
							case "Balihoer Rad - veraltet": uKreuzer = anzahl * 10000;
							case "Eslamo - veraltet": uKreuzer = anzahl * 10000;
							default: uKreuzer = 0
						]
					};
					case "qBornland": { 
						[switch(json.get(uebergabe, "wBornland")):
							case "Deut": uKreuzer = anzahl * 10;
							case "Groschen / Silbergroschen": uKreuzer = anzahl * 100;
							case "Batzen": uKreuzer = anzahl * 1000;
							default: uKreuzer = 0
						]
					};
					case "qAndergast": { 
						[switch(json.get(uebergabe, "wAndergast")):
							case "Andrataler": uKreuzer = anzahl * 500;
							default: uKreuzer = 0
						]
					};
					case "qSchwarzeLande": { 
						[switch(json.get(uebergabe, "wSchwarzeLande")):
							case "Kreuzer - Oron": uKreuzer = anzahl;
							case "Heller - Oron": uKreuzer = anzahl * 10;
							case "Silbertaler - Oron": uKreuzer = anzahl * 100;
							case "Dukate - Oron": uKreuzer = anzahl * 1000;
							case "Splitter - Xeraanien": uKreuzer = anzahl * 14;
							case "Zholvari - Xeraanien": uKreuzer = anzahl * 100;
							case "Borbaradstaler - Xeraanien": uKreuzer = anzahl * 700;
							case "Gulden - Glorania": uKreuzer = anzahl * 500;
							default: uKreuzer = 0
						]
					};
					case "qMengbilla": { 
						[switch(json.get(uebergabe, "wMengbilla")):
							case "Ikossar": uKreuzer = anzahl * 5;
							case "Tessar": uKreuzer = anzahl * 25;
							case "Telar": uKreuzer = anzahl * 100;
							case "Dekat": uKreuzer = anzahl * 1000;
							case "Mengbillaner Unze - veraltet": uKreuzer = anzahl * 1000;
							default: uKreuzer = 0
						]
					};
					case "qBrabak": { 
						[switch(json.get(uebergabe, "wBrabak")):
							case "Brabaker Kreuzer": uKreuzer = anzahl;
							case "Brabaker Krone - in Brabak": uKreuzer = anzahl * 1000;
							case "Brabaker Krone - ausserhalb Brabak": uKreuzer = anzahl * 500;
							default: uKreuzer = 0
						]
					};
					case "qTulamidenlande": { 
						[switch(json.get(uebergabe, "wTulamidenlande")):
							case "Alastren - Khunchom": uKreuzer = anzahl * 500000;
							case "Piaster - Rashdul": uKreuzer = anzahl * 5000;
							case "Selemer Kupferschilling - veraltet": uKreuzer = anzahl * 10;
							default: uKreuzer = 0
						]
					};
					case "qPaavi": { 
						[switch(json.get(uebergabe, "wPaavi")):
							case "Gulden": uKreuzer = anzahl * 500;
							default: uKreuzer = 0
						]
					};
					case "qNostria": { 
						[switch(json.get(uebergabe, "wNostria")):
							case "Nostrische Krone": uKreuzer = anzahl * 500;
							default: uKreuzer = 0
						]
					};
					case "qVallusa": { 
						[switch(json.get(uebergabe, "wVallusa")):
							case "Flindrich": uKreuzer = anzahl * 10;
							case "Stueber": uKreuzer = anzahl * 100;
							case "Witten": uKreuzer = anzahl * 1000;
							default: uKreuzer = 0
						]
					};
					case "qHorasreich": { 
						[switch(json.get(uebergabe, "wHorasreich")):
							case "Kreuzer": uKreuzer = anzahl;
							case "Heller": uKreuzer = anzahl * 10;
							case "Silbertaler": uKreuzer = anzahl * 100;
							case "Dukate": uKreuzer = anzahl * 1000;
							case "Kusliker Rad / Horasdor": uKreuzer = anzahl * 20000;
							case "Schilling - veraltet": uKreuzer = anzahl * 10;
							case "Zehnt - veraltet": uKreuzer = anzahl * 100;
							case "Arivorer Silberdukate - veraltet": uKreuzer = anzahl * 500;
							case "Krone - veraltet": uKreuzer = anzahl * 1000;
							default: uKreuzer = 0
						]
					};
					case "qTrahelien": { 
						[switch(json.get(uebergabe, "wTrahelien")):
							case "Truemmer": uKreuzer = anzahl;
							case "Ch-ryskl": uKreuzer = anzahl * 10;
							case "Hedsch": uKreuzer = anzahl * 100;
							case "Suvar": uKreuzer = anzahl * 1000;
							default: uKreuzer = 0
						]
					};
					case "qSonstige": { 
						[switch(json.get(uebergabe, "wSonstige")):
							case "Chorhoper Heller": uKreuzer = anzahl * 10;
							case "Minisepe - Durchschnitt": uKreuzer = anzahl * 10;
							case "Syllaner Taler": uKreuzer = anzahl * 100;
							default: uKreuzer = 0
						]
					};
				    default: {
						uKreuzer = 0
					}
				]
				[h: uKreuzer = uKreuzer - (uKreuzer * (gebuehr / 100))]
				[r,macro("waehrungTeil5@this"): uKreuzer]
				[r,macro("waehrungTeil6@this"): uKreuzer]
			</form>
		</div>
	</body>
</html>
}]