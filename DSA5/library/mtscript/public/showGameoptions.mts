[h: imageOk = strformat("<img src='%s' alt='Aktiviert'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/check.png"))]
[h: imageFail = strformat("<img src='%s' alt='Deaktiviert'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/x.png"))]

[dialog5("showGameoptions", "width=325; height=206; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Aktuelle Spieleinstellungen
		</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charsheet.css?cachelib=false'/>
	</head>
	<body>
		<div class="panel-ornament" style="width: 260px;">
			<div class="heading">
				Spieleinstellungen
			</div>
			<div class="stat-table"> 
				<div>Optional: Spiel mit Wundeffekten</div>
				<div>[r,if(getLibProperty("OptWunden", "com.github.lector.dsa5maptool") == 1): output = imageOk; output = imageFail]</div>
			</div>
		</div>
	</body>
</html>
}]