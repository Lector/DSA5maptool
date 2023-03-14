[h: uebergabe = arg(0)]

[h,switch(uebergabe):
	case "numNegative": msgText = "Du hast in einem Zahlenfeld eine negative Zahl eingegeben, wo dies nicht erlaubt ist. Bitte korrigiere den Fehler und wiederhole den Vorgang.";
	case "numInteger": msgText = "In Zahlenfeldern ist nur die Eingabe von ganzen Zahlen erlaubt. Bitte korrigiere den Fehler und wiederhole den Vorgang.";
	case "numText": msgText = "Du hast in ein Zahlenfeld Text oder andere, nicht erlaubte Zeichen eingegeben. Bitte korrigiere den Fehler und wiederhole den Vorgang.";
	case "numWrong": msgText = "Du hast in ein Zahlenfeld eine nicht erlaubte Zahl eingegeben. Bitte korrigiere den Fehler und wiederhole den Vorgang.";
	case "kampfAU": msgText = "<i>Ausdauer im Kampf</i> ist nicht aktiviert, die Aktion <i>Atem holen</i> steht daher nicht zur Verf&uuml;gung.";
	case "impersonate": msgText = "Du musst erst einen Spielstein verk&ouml;rpern, bevor du diese Funktion aufrufen kannst:<br><b>Rechtsklick auf Token &gt; Impersonate</b>";
	case "gm": msgText = "Diese Funktion kann nur vom Spielleiter aufgerufen werden.";
	case "atWaffe": msgText = "Bitte erst im Charakterbogen unter <i>&quot;Kampfbogen&quot;</i> eine Standard-Waffe f&uuml;r den Angriff festlegen.";
	case "paWaffe": msgText = "Bitte erst im Charakterbogen unter <i>&quot;Kampfbogen&quot;</i> eine Standard-Waffe f&uuml;r die Verteidigung festlegen.";
	case "fkWaffe": msgText = "Bitte erst im Charakterbogen unter <i>&quot;Kampfbogen&quot;</i> eine Standard-Waffe f&uuml;r den Fernkampf festlegen.";
	case "orientieren": msgText = "Vor dem Kampf ist kein Orientieren m&ouml;glich. Bitte erst Initiative w&uuml;rfeln.";
	case "aeChange": msgText = "&Auml;ndern der Astralenergie mit diesem Charakter nicht m&ouml;glich.";
	case "keChange": msgText = "&Auml;ndern der Karmaenergie mit diesem Charakter nicht m&ouml;glich.";
	case "wundenSystem": msgText = "Nicht ausf&uuml;hrbar, da die Einstellungen f&uuml;r das Wundensystem zwischenzeitlich ge&auml;ndert wurden. Bitte das Fenster<i>&quot;Wunden&quot;</i> neu &ouml;ffnen.";
	case "wundenAus": msgText = "Das Wundensystem wurde vom Spielleiter deaktiviert.";
	case "keFail": msgText = "Ohne Karmaenergie ist das Wirken von Mirakeln und Liturgien nicht m&ouml;glich.";
	case "seDouble": msgText = "Die Schlechte Eigenschaft ist bereits vorhanden.";
	case "traitDouble": msgText = "Das Element ist bereits vorhanden.";
	case "talentDouble": msgText = "Das Talent ist bereits vorhanden.";
	case "zauberDouble": msgText = "Der Zauber ist bereits vorhanden.";
	case "linkDouble": msgText = "Der Link ist bereits vorhanden.";
	case "wrongLink": msgText = "Ung&uuml;ltige Linkadresse. Die Adresse muss mit &quot;http://&quot; beginnen.";
	case "noInput": msgText = "Ein ben&ouml;tigtes Eingabefeld wurde nicht ausgef&uuml;llt.";
	case "3W20Fail": msgText = "Es sind nicht alle Eigenschaften f&uuml;r diese Probe festgelegt. Bitte trage im Charakter-/Tokeneditor zuerst alle ben&ouml;tigten Eigenschaften der Probe ein. ";
	case "noTokensSelected": msgText = "Keine Tokens ausgew&auml;hlt.";
	case "gmSelectFail": msgText = "Um als Spielleiter diese Funktion f&uuml;r einen Spielstein/Token auszuf&uuml;hren muss entweder 1 Token auf der Karte ausgew&auml;hlt sein (nicht mehr und nicht weniger), oder ein Token verk&ouml;rpert werden.";
	case "copyTokenDataOwner": msgText = "Du hast keine Besitzrechte an dem ausgew&auml;hlten Token.";
	case "copyTokenDataOption": msgText = "Es wurden keine Daten zum Kopieren ausgew&auml;hlt.";
	case "copyTokenDataSelect": msgText = "Es wurde kein Token oder mehr als 1 Token ausgew&auml;hlt.";
	case "copyTokenDataEqual": msgText = "Quell- und Zieltoken d&uuml;rfen nicht identisch sein.";
	case "copyTokenDataFirstTime": msgText = "Der ausgew&auml;hlte Token wurde noch nicht vorbereitet. Zum Vorbereiten bitte einmal den Charakterbogen des Tokens &ouml;ffnen.";
	case "tModRS": msgText = "Der tempor&auml;re R&uuml;stungsschutz darf nicht gr&ouml;&szlig;er als 9 sein.";
	case "kalender": msgText = "Der Kalender wurde in den Kalendereinstellungen deaktiviert. Bitte erst aktivieren.";
	case "uhrzeit": msgText = "Die Anzeige der Uhrzeit wurde in den Kalendereinstellungen deaktiviert. Bitte erst aktivieren.";
	case "kalenderNT": msgText = "Der &quot;13. Monat&quot; hat nur 5 Tage (Namenlose Tage).";
	case "kalenderNull": msgText = "Bei der ausgew&auml;hlten Zeitrechnung gibt es kein Jahr Null.";
	case "testphase": msgText = "Der Regelsatz befindet sich noch in der Testphase. Diese Funktion bzw. dieses Makro ist derzeit deaktiviert.";
	case "keinWert": msgText = "Der zu pr&uuml;fende Wert ist nicht vorhanden oder gleich null. Probe nicht m&ouml;glich!";
	case "blutrausch": msgText = "Diese Aktion ist im Blutrausch nicht m&ouml;glich!";
	case "zuWeitWeg": msgText = "Das markerite Ziel ist au&szlig;erhalb der Waffenreichweite!";
	case "swarmTiny": msgText = "Nur winzige Wesen k&ouml;nnen als Schwärme auftreten. Mit Rechtsklick->Gr&ouml;&szlig;e auf ein Token l&auml;sst sich die Gr&ouml;&szlig;e anpassen.";
	case "noSwarm": msgText = "Diese Aktion ist nur bei Schwarmwesen m&ouml;glich! Du hast mindestens ein Token angew&auml;hlt, welches kein Schwarmwesen ist.";
	case "multipleSwarms": msgText = "Um diese Aktion auszuf&uuml;hren m&uuml;ssen mehrere Schw&auml;rme ausgew&auml;hlt werden.";
	case "swarmsDifferent": msgText = "Es k&ouml;nnen nur identische Schw&auml;rme zusammengef&uuml;hrt werden. Aktuell ist mindestens ein Token angew&auml;hlt, welches nicht mit dem Rest &uuml;bereinstimmt.";
	case "swarmTooSmallToSplit": msgText = "Der Schwarm ist zu klein um ihn in mehrere Teilschw&auml;rme aufzuteilen.";
	case "swarmTooSmallToMerge": msgText = "Die Einzelwesen können nicht zu einem Schwarm vereinigt werden, da dieser zu klein wäre und die Grundgröße(GG) unterschreiten würde.";
	case "swarmMergeInfoMissing": msgText = "Die Wesen können nicht zu einem Schwarm vereinigt werden, da nötige Informationen fehlen. Das liegt wahrscheinlich daran dass die markierten Tokens keinen Schwarm enthalten und die Einzelwesen niemals Teil eines Schwarmes waren. Um einen neuen Schwarm aus einem Einzelwesen zu erzeugen bitte die Funktion 'Schwarmwesen erzeugen' nutzen oder mindestens 1 Schwarmwesen gleicher Art markieren.";
	case "propertyTypeNotBasic": msgText = "Diese Funktion ist für den aktuell ausgewählten Spielstein/Token nicht möglich. Um diese Funktion auszuführen bitte einen Spielstein anwählen oder verkörpern, der eine Figur/einen Charakter darstellt.";
	case "noOtherMaps": msgText = "Es sind gerade keine anderen Karten vorhanden oder freigegeben auf die du wechseln könntest.";
	default: msgText = "Ein unbekannter Fehler ist aufgetreten.<br>Bitte den Vorgang &uuml;berpr&uuml;fen."
]

[h: image = tableImage("chat", 58)]

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