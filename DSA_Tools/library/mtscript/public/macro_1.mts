[h: uebergabe = macro.args]

				<table style='border-spacing: 0px; font-size: 12pt; font-weight: bold; color: #441e13;'>
					<tr>	
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qAlanfa' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qAlanfa"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Alanfanisches Imperium
										<br>
										<select name='wAlanfa' size='1'>
											[h: sAlanfa = getStrProp(uebergabe, "wAlanfa")]
											<option [r,if(sAlanfa == "Dirham"): output = "selected='selected'"; output = ""]>Dirham</option>
											<option [r,if(sAlanfa == "Kleiner Oreal"): output = "selected='selected'"; output = ""]>Kleiner Oreal</option>
											<option [r,if(sAlanfa == "Oreal / Schilling"): output = "selected='selected'"; output = ""]>Oreal / Schilling</option>
											<option [r,if(sAlanfa == "Dublone"): output = "selected='selected'"; output = ""]>Dublone</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qKalifat' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qKalifat"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Kalifat
										<br>
										<select name='wKalifat' size='1'>
											[h: sKalifat = getStrProp(uebergabe, "wKalifat")]
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
										<input type='radio' name='quellWaehrung' value='qAranien' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qAranien"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Mhaharanyat Aranien
										<br>
										<select name='wAranien' size='1'>
											[h: sAranien = getStrProp(uebergabe, "wAranien")]
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
										<input type='radio' name='quellWaehrung' value='qBergkoenigreich' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qBergkoenigreich"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Bergk&ouml;nigreich
										<br>
										<select name='wBergkoenigreich' size='1'>
											[h: sBergkoenigreich = getStrProp(uebergabe, "wBergkoenigreich")]
											<option [r,if(sBergkoenigreich == "Atebrox - Zwergengroschen"): output = "selected='selected'"; output = ""]>Atebrox - Zwergengroschen</option>
											<option [r,if(sBergkoenigreich == "Arganbrox - Zwergenschilling"): output = "selected='selected'"; output = ""]>Arganbrox - Zwergenschilling</option>
											<option [r,if(sBergkoenigreich == "Auromox - Zwergentaler"): output = "selected='selected'"; output = ""]>Auromox - Zwergentaler</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qAmazonen' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qAmazonen"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										K&ouml;niginnenreich der Amazonen
										<br>
										<select name='wAmazonen' size='1'>
											<option selected='selected'>Amazonenkrone</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qMittelreich' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qMittelreich"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Mittelreich
										<br>
										<select name='wMittelreich' size='1'>
											[h: sMittelreich = getStrProp(uebergabe, "wMittelreich")]
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
										<input type='radio' name='quellWaehrung' value='qBornland' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qBornland"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Bornland
										<br>
										<select name='wBornland' size='1'>
											[h: sBornland = getStrProp(uebergabe, "wBornland")]
											<option [r,if(sBornland == "Deut"): output = "selected='selected'"; output = ""]>Deut</option>
											<option [r,if(sBornland == "Groschen / Silbergroschen"): output = "selected='selected'"; output = ""]>Groschen / Silbergroschen</option>
											<option [r,if(sBornland == "Batzen"): output = "selected='selected'"; output = ""]>Batzen</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qAndergast' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qAndergast"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										K&ouml;nigreich Andergast
										<br>
										<select name='wAndergast' size='1'>
											<option selected='selected'>Andrataler</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qSchwarzeLande' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qSchwarzeLande"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Schwarze Lande
										<br>
										<select name='wSchwarzeLande' size='1'>
											[h: sSchwarzeLande = getStrProp(uebergabe, "wSchwarzeLande")]
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