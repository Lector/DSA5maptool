[h: uebergabe = macro.args]

[h,switch(uebergabe), Code:
	case "playerOptions": {
		[msgTitle = "Charakter-Optionen"]
		[msgText = "Die Einstellungen f&uuml;r deinen aktuellen Token wurden ge&auml;ndert."]
	};
	case "chareditLiturgieAdd": {
		[msgTitle = "Token-Editor"]
		[msgText = "Die neue Liturgie wurde mit den eingetragenen Werten hinzugef&uuml;gt."]
	};
	case "quickeditRS": {
		[msgTitle = "R&uuml;stung anpassen"]
		[msgText = "Die R&uuml;stungswerte wurden ge&auml;ndert."]
	};
	case "delRS": {
		[msgTitle = "R&uuml;stung gel&ouml;scht"]
		[msgText = "Die ausgew&auml;hlte R&uuml;stung wurde gel&ouml;scht"]
	};
	case "addRS": {
		[msgTitle = "R&uuml;stung hinzugef&uuml;gt"]
		[msgText = "Die neue R&uuml;stung wurde mit den eingetragenen Werten hinzugef&uuml;gt"]
	};
	case "quickeditWaffe": {
		[msgTitle = "Waffe anpassen"]
		[msgText = "Die Werte der Waffe wurden ge&auml;ndert."]
	};
	case "delWaffe": {
		[msgTitle = "Waffe gel&ouml;scht"]
		[msgText = "Die ausgew&auml;hlte Waffe wurde gel&ouml;scht."]
	};
	case "addWaffe": {
		[msgTitle = "Waffe hinzugef&uuml;gt"]
		[msgText = "Die neue Waffe wurde mit den eingetragenen Werten hinzugef&uuml;gt."]
	};
	case "counter": {
		[msgTitle = "Counter"]
		[msgText = "Der Counter wurde neu gesetzt."]
	};
	case "notizSLEdit": {
		[msgTitle = "SL-Notizen"]
		[msgText = "Die SL-Notizen wurden ge&auml;ndert."]
	};
	case "notizSLDel": {
		[msgTitle = "SL-Notizen"]
		[msgText = "Die SL-Notizen wurden gel&ouml;scht."]
	};
	case "notizAdd": {
		[msgTitle = "Notizen"]
		[msgText = "Die neue Notiz wurde hinzugef&uuml;gt."]
	};
	case "notizEdit": {
		[msgTitle = "Notizen"]
		[msgText = "Die Notiz wurde ge&auml;ndert."]
	};
	case "notizDel": {
		[msgTitle = "Notizen"]
		[msgText = "Die Notiz wurde gel&ouml;scht."]
	};
	case "notizDelAll": {
		[msgTitle = "Notizen"]
		[msgText = "Alle Notizen wurden gel&ouml;scht."]
	};
	case "chareditEigenschaften": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Die Basis- und Eigenschaftswerte wurden angepasst."]
	};
	case "chareditTraitAdd": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Das neue Element wurde hinzugef&uuml;gt."]
	};
	case "chareditTraitDel": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Das Element wurde gel&ouml;scht."]
	};
	case "chareditSF": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Die Sonderfertigkeiten wurden angepasst."]
	};
	case "chareditVorteile": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Die Vorteile wurden angepasst."]
	};
	case "chareditNachteile": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Die Nachteile wurden angepasst."]
	};
	case "chareditZauberAdd": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Der neue Zauber wurde hinzugef&uuml;gt."]
	};
	case "chareditTalentAdd": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Das neue Talent wurde hinzugef&uuml;gt."]
	};
	case "chareditZauber": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Die Zauber wurden angepasst."]
	};
	case "chareditTalent": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Die Talente wurden angepasst."]
	};
	case "chareditKampftechnikAdd": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Die neue Kampftechnik wurde hinzugef&uuml;gt"]
	};
	case "chareditKampftechnik": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Die Kampftechniken wurden angepasst."]
	};
	case "chareditCreateBasischar": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Der Charakter wurde mit Basiswerten &uuml;berschrieben."]
	};
	case "chareditCreateStandardchar": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Der Charakter wurde mit Standardwerten &uuml;berschrieben."]
	};
	case "tokenCopy": {
		[msgTitle = "Token kopieren"]
		[msgText = "Das ausgew&auml;hlte Token wurde kopiert."]
	};
	case "multiINI": {
		[msgTitle = "Multi-Initiative"]
		[msgText = "Die ausgew&auml;hlten Tokens wurden zur INI-Liste hinzugef&uuml;gt."]
	};
	case "zustand": {
		[msgTitle = "Zust&auml;nde"]
		[msgText = "Die Zust&auml;nde wurden angepasst."]
	};
	case "light": {
		[msgTitle = "Lichtquelle"]
		[msgText = "Die Lichtquelle wurde angepasst."]
	};
	case "swarmSplit": {
		[msgTitle = "Schwarm aufgeteilt"]
		[msgText = "Der Schwarm wurde in aufgeteilt. Die Teilschw&auml;rme liegen jetzt als verschiedene Tokens &uuml;bereinander und k&ouml;nnen einzeln verschoben werden."]
	};
	case "krautEdit": {
		[msgTitle = "Kraut angepasst"]
		[msgText = "Die Werte des Krauts wurden angepasst. Das Kraut kann jetzt über die Kräutersuche gefunden werden. Bitte beachte dass den Spielern nur Jagdwild auf der aktuellen Karte und der Karte 'Spieltisch' zur Verfügung stehen."]
	};
	case "jagdEdit": {
		[msgTitle = "Jagdwild angepasst"]
		[msgText = "Die Werte des Jagdwilds wurden angepasst. Das Tier kann jetzt bei der Jagd als Ziel ausgewählt werden. Bitte beachte dass den Spielern nur Jagdwild auf der aktuellen Karte und der Karte 'Spieltisch' zur Verfügung stehen."]
	};
	case "jagdNeu": {
		[msgTitle = "Neues Jagdwild"]
		[msgText = "Es wurde ein neues Token für die Jagd erzeugt."]
	};
]

[h: ausgabe = border(msgTitle, strformat("

<table style='border-spacing: 0px; margin-top: 3px;'>
	<tr>
		<td style='text-align:center;' valign='middle' width='65'>
			<img src='%s'>
		</td>
		<td valign='middle'>
			%{msgText}
		</td>
	</tr>
</table>",
tableImage("chat", 28)))]

[h,macro("sendToSelf@Lib:macros"): ausgabe]