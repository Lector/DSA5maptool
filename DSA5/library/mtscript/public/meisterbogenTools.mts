[h: setLibProperty("SLframe", 6, "lib:com.github.lector.dsa5maptool")]

[frame("meisterbogen", "width=528; height=500; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Meisterbogen - Tools
		</title>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 12pt; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",1)]'); background-repeat: no-repeat; height: 122; margin: 0px;" width="500">
			<div style='margin-top: 18px; font-size: 22pt; font-weight: bold; text-align: center;' width='500'>
				Tools
			</div>
			<table style='border-spacing: 0px; margin-top: 3px;' width='500'>
				<tr>
					<td width='58'>
						&nbsp;
					</td>
					<td width='383'>
						<a href="[r: macroLinkText("meisterbogen1@this", "", "pc")]"><image src='[r: tableImage("mainTheme", 80)]' border="0" alt="Spielercharaktere I: Werte, Waffen &amp; Rüstung"></image></a>
						<a href="[r: macroLinkText("meisterbogen2@this", "", "pc")]"><image src='[r: tableImage("mainTheme", 82)]' border="0" alt="Spielercharaktere II: Vorteile, Nachteile &amp; Notizen"></image></a>
						<a href="[r: macroLinkText("meisterbogen1@this", "", "npc")]"><image src='[r: tableImage("mainTheme", 87)]' border="0" alt="NSCs I: Werte, Waffen &amp; Rüstung"></image></a>
						<a href="[r: macroLinkText("meisterbogen2@this", "", "npc")]"><image src='[r: tableImage("mainTheme", 89)]' border="0" alt="NSCs II: Vorteile, Nachteile &amp; Notizen"></image></a>
						<a href="[r: macroLinkText("meisterbogenHandouts@this", "")]"><image src='[r: tableImage("mainTheme", 91)]' border="0" alt="Handouts"></image></a>
						<image src='[r: tableImage("mainTheme", 85)]'></image>
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
						<table style='border-spacing: 0px;' width='431'>				
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",48)]'); background-repeat: no-repeat; height: 28;" width='431'>
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",49)]'); background-repeat: repeat-y; padding-left: 10px; padding-right: 10px; text-align: center;">
									<div style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 3px 0px 3px 3px; text-align: left;' width='405'>
										<image src='[r: tableImage("mainTheme", 107)]'></image>
									</div>
									<table style='border-spacing: 0px;' cellpadding='5'>
										<tr>
											<td style='text-align: center;'>
												[h: scaleImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/scale.png")]
												<image src='[r: scaleImage]'></image>
											</td>
											<td>
												<span style='color: #eee5c8; text-decoration: none;' title='Umrechner für Gewichtsmaße aufrufen'>[r: macroLink("Gewichtsrechner", "gewichtsrechner@lib:com.github.lector.dsa5maptool")]</span>
											</td>
										</tr>
										<tr>
											<td style='text-align: center;'>
												[h: rulerImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/ruler.png")]
												<image src='[r: rulerImage]'></image>
											</td>
											<td>
												<span style='color: #eee5c8; text-decoration: none;' title='Umrechner für Längenmaß aufrufen'>[r: macroLink("Längenrechner", "laengenrechner@lib:com.github.lector.dsa5maptool")]</span>
											</td>
										</tr>
										<tr>
											<td style='text-align: center;'>
												[h: moneyBagImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/moneyBag.png")]
												<image src='[r: moneyBagImage]'></image>
											</td>
											<td>
												<span style='color: #eee5c8; text-decoration: none;' title='Umrechner für Währungen aufrufen'>[r: macroLink("Währungsrechner", "waehrung@lib:com.github.lector.dsa5maptool")]</span>
											</td>
										</tr>
									</table>
									<br>
									<div style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 3px 0px 3px 3px; text-align: left;' width='405'>
										<image src='[r: tableImage("mainTheme", 109)]'></image>
									</div>
									<table style='border-spacing: 0px;' cellpadding='5'>
										<tr>
											<td style='text-align: center;'>
												[h: calendarImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/calendar.png")]
												<image src='[r: calendarImage]'></image>
											</td>
											<td>
												<span style='color: #eee5c8; text-decoration: none;' title='Das Steuerungsfenster für den Kalender aufrufen'>[r: macroLink("Kalender-Steuerung", "kalenderMain@lib:com.github.lector.dsa5maptool", "")]</span>
											</td>
										</tr>
									</table>
									<br>
									<div style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 3px 0px 3px 3px;' width='405'>
										<table style='border-spacing: 0px;' cellpadding='0' width='399'>
											<tr>
												<td width='373'>
													<image src='[r: tableImage("mainTheme", 108)]'></image>
												</td>
												<td style='text-align: center;' width='13'>
													<a href="[r: macroLinkText("weblinkAdd@lib:com.github.lector.dsa5maptool")]"><image src='[r: tableImage("mainTheme", 97)]' border="0" alt="Einen neuen Weblink hinzufügen"></image></a>
												</td>
												<td style='text-align: right;' width='13'>
													<a href="[r: macroLinkText("weblinkDel@lib:com.github.lector.dsa5maptool", "", "all")]"><image src='[r: tableImage("mainTheme", 98)]' border="0" alt="Alle Weblinks löschen"></image></a>
												</td>
											</tr>
										</table>
									</div>
									<table style='border-spacing: 0px;' cellpadding='5'>
										[h: linklist = getLibProperty("Weblinks", "com.github.lector.dsa5maptool")]
										[h: num = 0]
										[r,if(json.isEmpty(linklist) == 1): output = "<tr><td>Keine vorhanden</td></tr>"]
										[Foreach(link, linklist,""), CODE:
											{
												[h: lName = json.get(link, "linkname")]
												[h: lAdress = json.get(link, "linkadress")]
												<tr>
													<td style='text-align: center;'>
														[h: globeImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/globe.png")]
														<image src='[r: globeImage]'></image>
													</td>
													<td>
														[r: strformat("<a style='color: #eee5c8; text-decoration: none;' href='%s'>%s</a>", lAdress, lName)]
													</td>
													<td style='text-align: center;'>
														<a href="[r: macroLinkText("weblinkDel@lib:com.github.lector.dsa5maptool", "", num)]"><image src='[r: tableImage("mainTheme", 100)]' border="0" alt="Diesen Weblink löschen"></image></a>
													</td>
												</tr>
												[h: num = num + 1]
											}
										]
									</table>
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