[h: options = getLibProperty("KalenderOpt", "com.github.naxos84.tools")]

[h: kalenderTyp = getStrProp(options, "kalenderTyp")]
[h,if(kalenderTyp == "Zwoelfgoettlicher Kalender"): zgCheck = "selected='selected'"; zgCheck = ""]
[h,if(kalenderTyp == "Novadischer Kalender"): novadiCheck = "selected='selected'"; novadiCheck = ""]
[h,if(kalenderTyp == "Norbadischer Kalender"): norCheck = "selected='selected'"; norCheck = ""]
[h,if(kalenderTyp == "Orkischer Kalender"): orkCheck = "selected='selected'"; orkCheck = ""]
[h,if(kalenderTyp == "Gjalsker Kalender"): gjalskCheck = "selected='selected'"; gjalskCheck = ""]
[h,if(kalenderTyp == "Echsischer Kalender"): echsCheck = "selected='selected'"; echsCheck = ""]
[h,if(kalenderTyp == "Imperialer Kalender"): impCheck = "selected='selected'"; impCheck = ""]

[h: uhrzeit = getStrProp(options, "uhrzeit")]
[h,if(uhrzeit == "00.00 Uhr"): u0Check = "selected='selected'"; u0Check = ""]
[h,if(uhrzeit == "01.00 Uhr"): u1Check = "selected='selected'"; u1Check = ""]
[h,if(uhrzeit == "02.00 Uhr"): u2Check = "selected='selected'"; u2Check = ""]
[h,if(uhrzeit == "03.00 Uhr"): u3Check = "selected='selected'"; u3Check = ""]
[h,if(uhrzeit == "04.00 Uhr"): u4Check = "selected='selected'"; u4Check = ""]
[h,if(uhrzeit == "05.00 Uhr"): u5Check = "selected='selected'"; u5Check = ""]
[h,if(uhrzeit == "06.00 Uhr"): u6Check = "selected='selected'"; u6Check = ""]
[h,if(uhrzeit == "07.00 Uhr"): u7Check = "selected='selected'"; u7Check = ""]
[h,if(uhrzeit == "08.00 Uhr"): u8Check = "selected='selected'"; u8Check = ""]
[h,if(uhrzeit == "09.00 Uhr"): u9Check = "selected='selected'"; u9Check = ""]
[h,if(uhrzeit == "10.00 Uhr"): u10Check = "selected='selected'"; u10Check = ""]
[h,if(uhrzeit == "11.00 Uhr"): u11Check = "selected='selected'"; u11Check = ""]
[h,if(uhrzeit == "12.00 Uhr"): u12Check = "selected='selected'"; u12Check = ""]
[h,if(uhrzeit == "13.00 Uhr"): u13Check = "selected='selected'"; u13Check = ""]
[h,if(uhrzeit == "14.00 Uhr"): u14Check = "selected='selected'"; u14Check = ""]
[h,if(uhrzeit == "15.00 Uhr"): u15Check = "selected='selected'"; u15Check = ""]
[h,if(uhrzeit == "16.00 Uhr"): u16Check = "selected='selected'"; u16Check = ""]
[h,if(uhrzeit == "17.00 Uhr"): u17Check = "selected='selected'"; u17Check = ""]
[h,if(uhrzeit == "18.00 Uhr"): u18Check = "selected='selected'"; u18Check = ""]
[h,if(uhrzeit == "19.00 Uhr"): u19Check = "selected='selected'"; u19Check = ""]
[h,if(uhrzeit == "20.00 Uhr"): u20Check = "selected='selected'"; u20Check = ""]
[h,if(uhrzeit == "21.00 Uhr"): u21Check = "selected='selected'"; u21Check = ""]
[h,if(uhrzeit == "22.00 Uhr"): u22Check = "selected='selected'"; u22Check = ""]
[h,if(uhrzeit == "23.00 Uhr"): u23Check = "selected='selected'"; u23Check = ""]

[h: actionLinkKalender = macroLinkText("kalenderProcess@this", "")]
[h: actionLinkUhr = macroLinkText("uhrzeitProcess@this", "")]
[h: actionLinkOptions = macroLinkText("kalenderOptions@this", "")]
[h: actionLinkJahrNull = macroLinkText("kalenderJahrNullInfo@this", "")]
[frame5("kalender", "width=280; height=420; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Kalender</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		[r,macro("kalZG@this"): ""]
		<br>
		<form action="[r:actionLinkUhr]">
			<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
				<tr>
					<td style='font-weight: bold; text-align: center;'>
						Aktuelle Uhrzeit:
					</td>
				</tr>
				<tr>
					<td>
						<table style='border-spacing: 0px;' cellpadding='0'>
							<tr>
								<td>
									<span title='Uhrzeit auswählen'>Uhrzeit:&nbsp;</span>
								</td>
								<td>
									<select name='fUhr' size='1'>
										<option [r: u0Check]>00.00 Uhr</option>
										<option [r: u1Check]>01.00 Uhr</option>
										<option [r: u2Check]>02.00 Uhr</option>
										<option [r: u3Check]>03.00 Uhr</option>
										<option [r: u4Check]>04.00 Uhr</option>
										<option [r: u5Check]>05.00 Uhr</option>
										<option [r: u6Check]>06.00 Uhr</option>
										<option [r: u7Check]>07.00 Uhr</option>
										<option [r: u8Check]>08.00 Uhr</option>
										<option [r: u9Check]>09.00 Uhr</option>
										<option [r: u10Check]>10.00 Uhr</option>
										<option [r: u11Check]>11.00 Uhr</option>
										<option [r: u12Check]>12.00 Uhr</option>
										<option [r: u13Check]>13.00 Uhr</option>
										<option [r: u14Check]>14.00 Uhr</option>
										<option [r: u15Check]>15.00 Uhr</option>
										<option [r: u16Check]>16.00 Uhr</option>
										<option [r: u17Check]>17.00 Uhr</option>
										<option [r: u18Check]>18.00 Uhr</option>
										<option [r: u19Check]>19.00 Uhr</option>
										<option [r: u20Check]>20.00 Uhr</option>
										<option [r: u21Check]>21.00 Uhr</option>
										<option [r: u22Check]>22.00 Uhr</option>
										<option [r: u23Check]>23.00 Uhr</option>
									</select>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td style='text-align: center'>
						[h: button = tableImage("forms", 151)]
						<button type="submit" name="actionUhr">
							<img src="[r: button]"/>
						</button>
					</td>
				</tr>
			</table>
		</form>
		<br>
		<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
			<tr>
				<td style='font-weight: bold; text-align: center;'>
					Optionen:
				</td>
			</tr>
			<tr>
				<td style='text-align: center;'>
					<form action="[r:actionLinkOptions]">
						[h: button = tableImage("forms", 152)]
						<button type="submit" name="actionOptions">
							<img src="[r: button]"/>
						</button>
					</form>
				</td>
			</tr>
			<tr>
				<td style='text-align: center;'>
					<form action="[r:actionLinkJahrNull]">
						[h: button = tableImage("forms", 153)]
						<button type="submit" name="actionUhr">
							<img src="[r: button]"/>
						</button>
					</form>
				</td>
			</tr>
		</table>
		<br>
	</body>
</html>
}]