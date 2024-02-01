[h: uebergabe = arg(0)]

[h,switch(uebergabe):
	case "numNegative": msgText = "Du hast in einem Zahlenfeld eine negative Zahl eingegeben, wo dies nicht erlaubt ist. Bitte korrigiere den Fehler und wiederhole den Vorgang.";
	case "numInteger": msgText = "In Zahlenfeldern ist nur die Eingabe von ganzen Zahlen erlaubt. Bitte korrigiere den Fehler und wiederhole den Vorgang.";
	case "numText": msgText = "Du hast in ein Zahlenfeld Text oder andere, nicht erlaubte Zeichen eingegeben. Bitte korrigiere den Fehler und wiederhole den Vorgang.";
	case "numWrong": msgText = "Du hast in ein Zahlenfeld eine nicht erlaubte Zahl eingegeben. Bitte korrigiere den Fehler und wiederhole den Vorgang.";
	case "impersonate": msgText = "Du musst erst einen Spielstein verkörpern, bevor du diese Funktion aufrufen kannst:<br><b>Rechtsklick auf Token &gt; Verkörpern</b>";
	case "gm": msgText = "Diese Funktion kann nur vom Spielleiter aufgerufen werden.";
	case "noMeleeWeapons": msgText = "Dieser Charakter verfügt über keine Nahkampfangriffe.";
	case "fkWaffe": msgText = "Bitte erst im Charakterbogen unter <i>&quot;Kampfbogen&quot;</i> eine Standard-Waffe für den Fernkampf festlegen.";
	case "orientieren": msgText = "Vor dem Kampf ist kein Orientieren möglich. Bitte erst Initiative würfeln.";
	case "aeChange": msgText = "Ändern der Astralenergie mit diesem Charakter nicht möglich.";
	case "keChange": msgText = "Ändern der Karmaenergie mit diesem Charakter nicht möglich.";
	case "keFail": msgText = "Ohne Karmaenergie ist das Wirken von Mirakeln und Liturgien nicht möglich.";
	case "traitDouble": msgText = "Das Element ist bereits vorhanden.";
	case "talentDouble": msgText = "Das Talent ist bereits vorhanden.";
	case "zauberDouble": msgText = "Der Zauber ist bereits vorhanden.";
	case "linkDouble": msgText = "Der Link ist bereits vorhanden.";
	case "wrongLink": msgText = "Ungültige Linkadresse. Die Adresse muss mit &quot;http://&quot; beginnen.";
	case "noInput": msgText = "Ein benötigtes Eingabefeld wurde nicht ausgefüllt.";
	case "3W20Fail": msgText = "Es sind nicht alle Eigenschaften für diese Probe festgelegt. Bitte trage im Charakter-/Tokeneditor zuerst alle benötigten Eigenschaften der Probe ein. ";
	case "noTokensSelected": msgText = "Keine Tokens ausgewählt.";
	case "gmSelectFail": msgText = "Um als Spielleiter diese Funktion für einen Spielstein/Token auszuführen muss entweder 1 Token auf der Karte ausgewählt sein (nicht mehr und nicht weniger), oder ein Token verkörpert werden.";
	case "copyTokenDataOwner": msgText = "Du hast keine Besitzrechte an dem ausgewählten Token.";
	case "copyTokenDataOption": msgText = "Es wurden keine Daten zum Kopieren ausgewählt.";
	case "copyTokenDataSelect": msgText = "Es wurde kein Token oder mehr als 1 Token ausgewählt.";
	case "copyTokenDataEqual": msgText = "Quell- und Zieltoken dürfen nicht identisch sein.";
	case "tModRS": msgText = "Der temporäre Rüstungsschutz darf nicht größer als 9 sein.";
	case "kalender": msgText = "Der Kalender wurde in den Kalendereinstellungen deaktiviert. Bitte erst aktivieren.";
	case "uhrzeit": msgText = "Die Anzeige der Uhrzeit wurde in den Kalendereinstellungen deaktiviert. Bitte erst aktivieren.";
	case "kalenderNT": msgText = "Der &quot;13. Monat&quot; hat nur 5 Tage (Namenlose Tage).";
	case "kalenderNull": msgText = "Bei der ausgewählten Zeitrechnung gibt es kein Jahr Null.";
	case "keinWert": msgText = "Der zu prüfende Wert ist nicht vorhanden oder gleich null. Probe nicht möglich!";
	case "blutrausch": msgText = "Diese Aktion ist im Blutrausch nicht möglich!";
	case "zuWeitWeg": msgText = "Das markerite Ziel ist außerhalb der Waffenreichweite!";
	case "swarmTiny": msgText = "Nur winzige Wesen können als Schwärme auftreten. Mit Rechtsklick->Größe auf ein Token lässt sich die Größe anpassen.";
	case "noSwarm": msgText = "Diese Aktion ist nur bei Schwarmwesen möglich! Du hast mindestens ein Token angewählt, welches kein Schwarmwesen ist.";
	case "multipleSwarms": msgText = "Um diese Aktion auszuführen müssen mehrere Schwärme ausgewählt werden.";
	case "swarmsDifferent": msgText = "Es können nur identische Schwärme zusammengeführt werden. Aktuell ist mindestens ein Token angewählt, welches nicht mit dem Rest übereinstimmt.";
	case "swarmTooSmallToSplit": msgText = "Der Schwarm ist zu klein um ihn in mehrere Teilschwärme aufzuteilen.";
	case "swarmTooSmallToMerge": msgText = "Die Einzelwesen können nicht zu einem Schwarm vereinigt werden, da dieser zu klein wäre und die Grundgröße(GG) unterschreiten würde.";
	case "swarmMergeInfoMissing": msgText = "Die Wesen können nicht zu einem Schwarm vereinigt werden, da nötige Informationen fehlen. Das liegt wahrscheinlich daran dass die markierten Tokens keinen Schwarm enthalten und die Einzelwesen niemals Teil eines Schwarmes waren. Um einen neuen Schwarm aus einem Einzelwesen zu erzeugen bitte die Funktion 'Schwarmwesen erzeugen' nutzen oder mindestens 1 Schwarmwesen gleicher Art markieren.";
	case "propertyTypeNotBasic": msgText = "Diese Funktion ist für den aktuell ausgewählten Spielstein/Token nicht möglich. Um diese Funktion auszuführen bitte einen Spielstein anwählen oder verkörpern, der eine Figur/einen Charakter darstellt.";
	case "noOtherMaps": msgText = "Es sind gerade keine anderen Karten vorhanden oder freigegeben auf die du wechseln könntest.";
	case "noChecks": msgText = "Im aktuell ausgewählten Tokens sind keine Proben angelegt, die gewürfelt werden könnten.";
	default: msgText = "Ein unbekannter Fehler ist aufgetreten.<br>Bitte den Vorgang überprüfen."
]

[h: image = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/fail.png")]

<!-- Hier wird komisch formatiert weil die \n\ts aus der Formatierung die Tabelle kaputt machen -->
[h: output = strformat("<table style='border-spacing: 0px; margin-top: 3px;'>
	<tr>
		<td style='text-align:center; padding: 0px 12px 0px 8px' valign='middle'>
			<img src='%{image}'>
		</td>
		<td valign='middle'>
			%{msgText}
		</td>
	</tr>
</table>")]

[h: output = border("FEHLER", output)]

[h: assert(0, output, 0)]