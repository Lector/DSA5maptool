[h,if(getLibProperty("OptHideNSCAction", "com.github.lector.dsa5maptool") == 1): cNSCAction = "checked"; cNSCAction = ""]
[h,if(getLibProperty("RestoreFogOfWarOnMove", "com.github.lector.dsa5maptool") != 1): cKeepFOW = "checked"; cKeepFOW = ""]
[h,if(getLibProperty("WildnisSpieltisch", "com.github.lector.dsa5maptool") == 1): cSpieltisch = "checked"; cSpieltisch = ""]

[h: cWunden = ""]
[h,if(getLibProperty("OptWunden", "com.github.lector.dsa5maptool") == 1): cWunden = "checked"]
[h: cRestrictMovement = ""]
[h,if(getLibProperty("OptRestrictMovement", "com.github.lector.dsa5maptool") == 1): cRestrictMovement = "checked"]
[h: cFacing = ""]
[h,if(getLibProperty("OptFacing", "com.github.lector.dsa5maptool") == 1): cFacing = "checked"]

[h: actionLink = macroLinkText("gameOptionsProcess@this", "")]
[dialog5("gameOptions", "width=650; height=420; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Spiel-Einstellungen</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Einstellungen")]
				<table style='border-spacing: 0px; font-weight: bold;'>
					<tr>
						<td>
							Optionale Regeln
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px;' cellpadding='1'>
					<tr>
						<td>
							<input type='checkbox' name='fWunden' value='1' [r: cWunden]>
						</td>
						<td>
							Spiel mit Wundeffekten (Kompendium I S. 131)
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; font-weight: bold; margin-top: 7px;'>
					<tr>
						<td>
							Verschiedenes
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px;' cellpadding='1'>
					<!-- <tr>
						<td>
							<input type='checkbox' name='fRestrictMovement' value='1' [r: cRestrictMovement]>
						</td>
						<td>
							Bewegung von Tokens während der<br>Initiative-Phase auf die GS beschränken
						</td>
					</tr> -->
					<tr>
						<td>
							<input type='checkbox' name='fNSCAction' value='1' [r: cNSCAction]>
						</td>
						<td>
							Verdecktes Würfeln bei NSCs vorselektieren/anwenden
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='fKeepFOW' value='1' [r: cKeepFOW]>
						</td>
						<td>
							Einmal erkundete Kartenbereiche bleiben sichtbar
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='fFacing' value='1' [r: cFacing]>
						</td>
						<td>
							Blickrichtung nach Bewegung und Attacke automatisch ausrichten
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='fSpieltisch' value='1' [r: cSpieltisch]>
						</td>
						<td>
							Bei Jagd und Kräutersuche immer auch die Tokens auf dem Spieltisch anbieten<br>
							(Wird diese Option deaktiviert, werden nur Jagdwild und Kräuter auf der aktuellen Karte angeboten)
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