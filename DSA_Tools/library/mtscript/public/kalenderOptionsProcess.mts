[h: uebergabe = macro.args]
[h: closeDialog("kalenderOptions")]

[h: options = getLibProperty("KalenderOpt", "com.github.naxos84.tools")]
[h: options = setStrProp(options, "kalenderChat", "0")]
[h: options = setStrProp(options, "uhrChat", "0")]
[h: setLibProperty("KalenderOpt", options, "com.github.naxos84.tools")]

[h,if(json.get(uebergabe, "fMada") == ""), code: 
	{
		[options = setStrProp(options, "mada", "0")]
		[token("Madaphase"): setNotes("Die Anzeige der Madaphasen wurde deaktiviert.")]
		[token("Madaphase"): setTokenImage(tableImage("mada", 29))]
	};
	{
		[options = setStrProp(options, "mada", "1")]
	}
]
[h: setLibProperty("KalenderOpt", options, "com.github.naxos84.tools")]
[h,if(json.get(uebergabe, "fKal") == ""), code: 
	{
		[options = setStrProp(options, "kalender", "0")]
		[token("Aktuelles Datum"): setNotes("Die Anzeige des Datums wurde deaktiviert.")]
		[token("Aktuelles Datum"): setTokenImage(tableImage("misc", 10))]
		[token("Madaphase"): setNotes("Die Anzeige der Madaphasen wurde deaktiviert.")]
		[token("Madaphase"): setTokenImage(tableImage("mada", 29))]
	};
	{
		[options = setStrProp(options, "kalender", "1")]
		[h,macro("kalZGEndProcess@this"): ""]
		[token("Aktuelles Datum"): setTokenImage(tableImage("misc", 9))]
	}
]
[h,if(json.get(uebergabe, "fUhr") == ""), code: 
	{
		[options = setStrProp(options, "uhr", "0")]
		[token("Aktuelle Uhrzeit"): setNotes("Die Anzeige der Uhrzeit wurde deaktiviert.")]
		[token("Aktuelle Uhrzeit"): setTokenImage(tableImage("uhr", 13))]
	};
	{
		[options = setStrProp(options, "uhr", "1")]
		[setLibProperty("KalenderOpt", options, "com.github.naxos84.tools")]
		[nUebergabe = json.set("{}", "fUhr", getStrProp(options, "uhrzeit"))]
		[h,macro("uhrzeitProcess@this"): nUebergabe]
	}
]

[h,if(json.get(uebergabe, "fKalChat") == ""): options = setStrProp(options, "kalenderChat", "0"); options = setStrProp(options, "kalenderChat", "1")]
[h,if(json.get(uebergabe, "fUhrChat") == ""): options = setStrProp(options, "uhrChat", "0"); options = setStrProp(options, "uhrChat", "1")]

[h: setLibProperty("KalenderOpt", options, "com.github.naxos84.tools")]

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
tableImage("chat", 83))] 
[h: ausgabe = border("Kalendereinstellungen", ausgabe)]

[h,if(isFrameVisible("kalender") == 1), code:
	{
		[h,macro("kalenderMain@this"): ""]
	};{}
]
[h: broadcast(ausgabe, "gm")]