[h: uebergabe = macro.args]
						
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qMengbilla' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qMengbilla"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Großemirat Mengbilla
										<br>
										<select name='wMengbilla' size='1'>
											[h: sMengbilla = getStrProp(uebergabe, "wMengbilla")]
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
										<input type='radio' name='quellWaehrung' value='qBrabak' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qBrabak"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Königreich Brabak
										<br>
										<select name='wBrabak' size='1'>
											[h: sBrabak = getStrProp(uebergabe, "wBrabak")]
											<option [r,if(sBrabak == "Brabaker Kreuzer"): output = "selected='selected'"; output = ""]>Brabaker Kreuzer</option>
											<option [r,if(sBrabak == "Brabaker Krone - in Brabak"): output = "selected='selected'"; output = ""]>Brabaker Krone - in Brabak</option>
											<option [r,if(sBrabak == "Brabaker Krone - ausserhalb Brabak"): output = "selected='selected'"; output = ""]>Brabaker Krone - ausserhalb Brabak</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qTulamidenlande' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qTulamidenlande"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Tulamidenlande
										<br>
										<select name='wTulamidenlande' size='1'>
											[h: sTulamidenlande = getStrProp(uebergabe, "wTulamidenlande")]
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
										<input type='radio' name='quellWaehrung' value='qPaavi' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qPaavi"): output = "checked='checked'"; output = ""]>
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
										<input type='radio' name='quellWaehrung' value='qNostria' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qNostria"): output = "checked='checked'"; output = ""]>
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
										<input type='radio' name='quellWaehrung' value='qVallusa' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qVallusa"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Vallusa
										<br>
										<select name='wVallusa' size='1'>
											[h: sVallusa = getStrProp(uebergabe, "wVallusa")]
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
										<input type='radio' name='quellWaehrung' value='qHorasreich' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qHorasreich"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Horasreich
										<br>
										<select name='wHorasreich' size='1'>
											[h: sHorasreich = getStrProp(uebergabe, "wHorasreich")]
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
										<input type='radio' name='quellWaehrung' value='qTrahelien' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qTrahelien"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Königreich Trahelien
										<br>
										<select name='wTrahelien' size='1'>
											[h: sTrahelien = getStrProp(uebergabe, "wTrahelien")]
											<option [r,if(sTrahelien == "Truemmer"): output = "selected='selected'"; output = ""]>Truemmer</option>
											<option [r,if(sTrahelien == "Ch-ryskl"): output = "selected='selected'"; output = ""]>Ch-ryskl</option>
											<option [r,if(sTrahelien == "Hedsch"): output = "selected='selected'"; output = ""]>Hedsch</option>
											<option [r,if(sTrahelien == "Suvar"): output = "selected='selected'"; output = ""]>Suvar</option>
										</select>
									</td>
								</tr>
								<tr>
									<td valign='top'>
										<input type='radio' name='quellWaehrung' value='qSonstige' [r,if(getStrProp(uebergabe, "quellWaehrung") == "qSonstige"): output = "checked='checked'"; output = ""]>
									</td>
									<td style='font-weight: bold;'>
										Weitere Münzen
										<br>
										<select name='wSonstige' size='1'>
											[h: sSonstige = getStrProp(uebergabe, "wSonstige")]
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