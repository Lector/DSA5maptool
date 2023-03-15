[h: options = getLibProperty("KalenderOpt", "com.github.naxos84.tools")]

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
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
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
							änderungen des Datums im Chat ausgeben
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
							änderungen der Uhrzeit im Chat ausgeben
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 10px auto 10px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 112)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]