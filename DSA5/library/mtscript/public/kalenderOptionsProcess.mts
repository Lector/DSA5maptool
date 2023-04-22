[h: uebergabe = macro.args]
[h: closeDialog("kalenderOptions")]

[h: options = getLibProperty("KalenderOpt", "com.github.lector.dsa5maptool")]
[h: options = setStrProp(options, "kalenderChat", "0")]
[h: options = setStrProp(options, "uhrChat", "0")]
[h: setLibProperty("KalenderOpt", options, "com.github.lector.dsa5maptool")]

[h: moonphaseImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/moonphases/mada_29_off.png")]
[h: clockImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/clock/clock_disabled.png")]

[h: sendToSelf(moonphaseImage+" "+clockImage+" Uebergabe:'"+uebergabe+"'")]

[h: idClock = findToken("Aktuelle Uhrzeit")]
[h: mapClock = getCurrentMapName()]
[h,if(idClock == ""),Code:
{
	[mapClock = "Spieltisch"]
	[idClock = findToken("Aktuelle Uhrzeit", mapClock)]
}]

[h: idDate = findToken("Aktuelles Datum")]
[h: mapDate = getCurrentMapName()]
[h,if(idDate == ""),Code:
{
	[mapDate = "Spieltisch"]
	[idDate = findToken("Aktuelles Datum", mapDate)]
}]

[h: idMada = findToken("Madaphase")]
[h: mapMada = getCurrentMapName()]
[h,if(idMada == ""),Code:
{
	[mapMada = "Spieltisch"]
	[idMada = findToken("Madaphase", mapMada)]
}]

[h,if(json.get(uebergabe, "fMada") == ""), code: 
	{
		[options = setStrProp(options, "mada", "0")]
		[setNotes("Die Anzeige der Madaphasen wurde deaktiviert.", idMada, mapMada)]
		[setTokenImage(moonphaseImage, idMada, mapMada)]
	};
	{
		[options = setStrProp(options, "mada", "1")]
	}
]
[h: setLibProperty("KalenderOpt", options, "com.github.lector.dsa5maptool")]
[h,if(json.get(uebergabe, "fKal") == ""), code: 
	{
		[options = setStrProp(options, "kalender", "0")]
		[setNotes("Die Anzeige des Datums wurde deaktiviert.", idDate, mapDate)]
		[setTokenImage(data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/calendarOff.png"), idDate, mapDate)]
		[setNotes("Die Anzeige der Madaphasen wurde deaktiviert.", idMada, mapMada)]
		[setTokenImage(moonphaseImage, idMada, mapMada)]
	};
	{
		[options = setStrProp(options, "kalender", "1")]
		[h,macro("kalZGEndProcess@this"): ""]
		[setTokenImage(data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/calendarOn.png"), idDate, mapDate)]
	}
]
[h,if(json.get(uebergabe, "fUhr") == ""), code: 
	{
		[options = setStrProp(options, "uhr", "0")]
		[setNotes("Die Anzeige der Uhrzeit wurde deaktiviert.", idClock, mapClock)]
		[setTokenImage(clockImage, idClock, mapClock)]
	};
	{
		[options = setStrProp(options, "uhr", "1")]
		[setLibProperty("KalenderOpt", options, "com.github.lector.dsa5maptool")]
		[nUebergabe = json.set("{}", "fUhr", getStrProp(options, "uhrzeit"))]
		[h,macro("uhrzeitProcess@this"): nUebergabe]
	}
]

[h,if(json.get(uebergabe, "fKalChat") == ""): options = setStrProp(options, "kalenderChat", "0"); options = setStrProp(options, "kalenderChat", "1")]
[h,if(json.get(uebergabe, "fUhrChat") == ""): options = setStrProp(options, "uhrChat", "0"); options = setStrProp(options, "uhrChat", "1")]

[h: setLibProperty("KalenderOpt", options, "com.github.lector.dsa5maptool")]

[h: ausgabe = strformat("
<table style='border-spacing: 0px; margin-top: 3px; font-weight: bold;'>
	<tr>
		<td style='text-align:center; padding: 0px;' valign='middle' width='44'>
			<img src='%s'>
		</td>
		<td width='25'>
			&nbsp;
		</td>
		<td valign='middle'>
			Die Kalendereinstellungen wurden geändert.
		</td>
	</tr>
</table>",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/date.png"))] 
[h: ausgabe = border("Kalendereinstellungen", ausgabe)]

[h,if(isFrameVisible("kalender") == 1), code:
	{
		[h,macro("kalenderMain@this"): ""]
	};{}
]
[h: broadcast(ausgabe, "gm")]