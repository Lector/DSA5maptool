[h: imageOk = strformat("<img src='%s' alt='Aktiviert'></img>", tableImage("misc", 2))]
[h: imageFail = strformat("<img src='%s' alt='Deaktiviert'></img>", tableImage("misc", 3))]

[dialog("showGameoptions", "width=325; height=206; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Aktuelle Spieleinstellungen
		</title>
	</head>
	<body style='color: #eee5c8; font-size: 12pt;'>
		<div style="background-image: url('[r: tblImage("mainTheme",67)]'); background-repeat: no-repeat; height: 28; margin: 0px;" width="300">
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",68)]'); background-repeat: repeat-y; margin: 0px;" width="300">
			<table style='border-spacing: 0px; font-size: 12pt; font-weight: bold; margin-bottom: 10px;' cellpadding='0' width='300'>
				<tr>
					<td>
						&nbsp;
					</td>
					<td style='text-align: center; border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 2px 0px 3px 0px;'>
						Spieleinstellungen
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px; margin-left: 7px;'> 
				<tr>
					<td>
						Optional: Spiel mit Wundeffekten
					</td>
					<td>
						[r,if(getLibProperty("OptWunden", "com.github.lector.dsa5maptool") == 1): output = imageOk; output = imageFail]
					</td>
				</tr>
			</table>
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",69)]'); background-repeat: no-repeat; height: 28; margin: 0px;" width="300">
		</div>
	</body>
</html>
}]