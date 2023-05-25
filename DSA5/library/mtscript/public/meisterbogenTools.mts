[h: setLibProperty("SLframe", 6, "lib:com.github.lector.dsa5maptool")]

[frame5("meisterbogen", "width=525; height=500; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Meisterbogen - Tools
		</title>
		[r: linkGoogleFonts()]
		<!-- <link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/> -->
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charsheet.css?cachelib=false'/>
	</head>
	<body>
		<div class="header">
			<div class="charactername">
				Tools
			</div>
			[r: gmsheetNavigation(5)]
		</div>
		<div class="content">
			<div class="row-container"  style="justify-content: space-between; gap: 0;">
				<div class="panel-ornament">
					<div class="heading">Meistertools</div>
					<div>
						[h: scaleImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/scale.png")]
						<image src='[r: scaleImage]'></image>
						<span style='color: #eee5c8; text-decoration: none;' title='Umrechner für Gewichtsmaße aufrufen'>[r: macroLink("Gewichtsrechner", "gewichtsrechner@this")]</span>
					</div>
					<div>
						[h: rulerImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/ruler.png")]
						<image src='[r: rulerImage]'></image>
						<span style='color: #eee5c8; text-decoration: none;' title='Umrechner für Längenmaß aufrufen'>[r: macroLink("Längenrechner", "laengenrechner@this")]</span>
					</div>
					<div>
						[h: moneyBagImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/moneyBag.png")]
						<image src='[r: moneyBagImage]'></image>
						<span style='color: #eee5c8; text-decoration: none;' title='Umrechner für Währungen aufrufen'>[r: macroLink("Währungsrechner", "waehrung@this")]</span>
					</div>

					<div class="heading">Sonstige Funktionen</div>
					<div>
						[h: calendarImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/calendar.png")]
						<image src='[r: calendarImage]'></image>
						<span style='color: #eee5c8; text-decoration: none;' title='Das Steuerungsfenster für den Kalender aufrufen'>[r: macroLink("Kalender-Steuerung", "kalenderMain@this", "")]</span>
					</div>

					<div class="heading heading-additional">
						<div>WebLinks</div>
						<div>
							<a href="[r: macroLinkText("weblinkAdd@this")]">
								<image src='[r: tableImage("mainTheme", 97)]' border="0" alt="Einen neuen Weblink hinzufügen"></image>
							</a>
							<a href="[r: macroLinkText("weblinkDel@this", "", "all")]">
								<image src='[r: tableImage("mainTheme", 98)]' border="0" alt="Alle Weblinks löschen"></image>
							</a>
						</div>
					</div>
					[h: linklist = getLibProperty("Weblinks", "com.github.lector.dsa5maptool")]
					[h: num = 0]
					[r,if(json.isEmpty(linklist) == 1): output = "<tr><td>Keine vorhanden</td></tr>"]
					[Foreach(link, linklist,""), CODE:
						{
							[h: lName = json.get(link, "linkname")]
							[h: lAdress = json.get(link, "linkadress")]
							<div class="row-container heading-additional">
									[h: globeImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/globe.png")]
									<div>
										<image src='[r: globeImage]'></image>
										[r: strformat("<a style='color: #eee5c8; text-decoration: none;' href='%s'>%s</a>", lAdress, lName)]
									</div>
									<a href="[r: macroLinkText("weblinkDel@this", "", num)]"><image src='[r: tableImage("mainTheme", 100)]' border="0" alt="Diesen Weblink löschen"></image></a>
							</div>
							[h: num = num + 1]
						}
					]
				</div>
			</div>
		</div>
		<div class="footer"> </div>

	</body>
</html>
}]