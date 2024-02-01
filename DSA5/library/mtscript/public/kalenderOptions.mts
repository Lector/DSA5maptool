[h: options = getLibProperty("KalenderOpt", "com.github.lector.dsa5maptool")]

[h,if(getStrProp(options, "kalender") == 1): cKal = "checked='checked'"; cKal = ""]
[h,if(getStrProp(options, "kalenderChat") == 1): cKalChat = "checked='checked'"; cKalChat = ""]
[h,if(getStrProp(options, "uhr") == 1): cUhr = "checked='checked'"; cUhr = ""]
[h,if(getStrProp(options, "uhrChat") == 1): cUhrChat = "checked='checked'"; cUhrChat = ""]
[h,if(getStrProp(options, "mada") == 1): cMada = "checked='checked'"; cMada = ""]

[h: actionLink = macroLinkText("kalenderOptionsProcess@this", "")]
[dialog5("kalenderOptions", "width=424; height=409; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Kalender-Einstellungen</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]" method="JSON">
				[r: header("Kalenderoptionen")]
				<table style='border-spacing: 0px; font-weight: bold;'>
					<tr>
						<td>
							Kalender
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px;' cellpadding='1'>
					<tr>
						<td>
							<input type='checkbox' name='fKal' value='1' [r: cKal]>
						</td>
						<td>
							Kalender aktivieren und aktuelles Datum anzeigen
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='fKalChat' value='1' [r: cKalChat]>
						</td>
						<td>
							Änderungen des Datums im Chat ausgeben
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='fMada' value='1' [r: cMada]>
						</td>
						<td>
							Madaphasen (Mondphasen) anzeigen
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; font-weight: bold; margin-top: 7px;'>
					<tr>
						<td>
							Uhr
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px;' cellpadding='1'>
					<tr>
						<td>
							<input type='checkbox' name='fUhr' value='1' [r: cUhr]>
						</td>
						<td>
							Uhr aktivieren und aktuelle Uhrzeit anzeigen
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='fUhrChat' value='1' [r: cUhrChat]>
						</td>
						<td>
							Änderungen der Uhrzeit im Chat ausgeben
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 10px auto 10px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Jetzt ändern</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]