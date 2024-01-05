[h: uebergabe = arg(0)]

[h,switch(uebergabe), Code:
	case "playerOptions": {
		[msgTitle = "Charakter-Optionen"]
		[msgText = "Die Einstellungen für deinen aktuellen Token wurden geändert."]
	};
	case "chareditLiturgieAdd": {
		[msgTitle = "Token-Editor"]
		[msgText = "Die neue Liturgie wurde mit den eingetragenen Werten hinzugefügt."]
	};
	case "quickeditRS": {
		[msgTitle = "Rüstung anpassen"]
		[msgText = "Die Rüstungswerte wurden geändert."]
	};
	case "delRS": {
		[msgTitle = "Rüstung gelöscht"]
		[msgText = "Die ausgewählte Rüstung wurde gelöscht"]
	};
	case "addRS": {
		[msgTitle = "Rüstung hinzugefügt"]
		[msgText = "Die neue Rüstung wurde mit den eingetragenen Werten hinzugefügt"]
	};
	case "quickeditWaffe": {
		[msgTitle = "Waffe anpassen"]
		[msgText = "Die Werte der Waffe wurden geändert."]
	};
	case "delWaffe": {
		[msgTitle = "Waffe gelöscht"]
		[msgText = "Die ausgewählte Waffe wurde gelöscht."]
	};
	case "addWaffe": {
		[msgTitle = "Waffe hinzugefügt"]
		[msgText = "Die neue Waffe wurde mit den eingetragenen Werten hinzugefügt."]
	};
	case "counter": {
		[msgTitle = "Counter"]
		[msgText = "Der Counter wurde neu gesetzt."]
	};
	case "notizSLEdit": {
		[msgTitle = "SL-Notizen"]
		[msgText = "Die SL-Notizen wurden geändert."]
	};
	case "notizSLDel": {
		[msgTitle = "SL-Notizen"]
		[msgText = "Die SL-Notizen wurden gelöscht."]
	};
	case "notizAdd": {
		[msgTitle = "Notizen"]
		[msgText = "Die neue Notiz wurde hinzugefügt."]
	};
	case "notizEdit": {
		[msgTitle = "Notizen"]
		[msgText = "Die Notiz wurde geändert."]
	};
	case "notizDel": {
		[msgTitle = "Notizen"]
		[msgText = "Die Notiz wurde gelöscht."]
	};
	case "notizDelAll": {
		[msgTitle = "Notizen"]
		[msgText = "Alle Notizen wurden gelöscht."]
	};
	case "chareditEigenschaften": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Die Basis- und Eigenschaftswerte wurden angepasst."]
	};
	case "chareditTraitAdd": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Das neue Element wurde hinzugefügt."]
	};
	case "chareditTraitDel": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Das Element wurde gelöscht."]
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
		[msgText = "Der neue Zauber wurde hinzugefügt."]
	};
	case "chareditTalentAdd": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Das neue Talent wurde hinzugefügt."]
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
		[msgText = "Die neue Kampftechnik wurde hinzugefügt"]
	};
	case "chareditKampftechnik": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Die Kampftechniken wurden angepasst."]
	};
	case "chareditCreateBasischar": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Der Charakter wurde mit Basiswerten überschrieben."]
	};
	case "chareditCreateStandardchar": {
		[msgTitle = "Tokeneditor"]
		[msgText = "Der Charakter wurde mit Standardwerten überschrieben."]
	};
	case "tokenCopy": {
		[msgTitle = "Token kopieren"]
		[msgText = "Das ausgewählte Token wurde kopiert."]
	};
	case "multiINI": {
		[msgTitle = "Multi-Initiative"]
		[msgText = "Die ausgewählten Tokens wurden zur INI-Liste hinzugefügt."]
	};
	case "zustand": {
		[msgTitle = "Zustände"]
		[msgText = "Die Zustände wurden angepasst."]
	};
	case "light": {
		[msgTitle = "Lichtquelle"]
		[msgText = "Die Lichtquelle wurde angepasst."]
	};
	case "swarmSplit": {
		[msgTitle = "Schwarm aufgeteilt"]
		[msgText = "Der Schwarm wurde in aufgeteilt. Die Teilschwärme liegen jetzt als verschiedene Tokens übereinander und können einzeln verschoben werden."]
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
	case "chareditImprovedSummon": {
		[msgTitle = "Beschwörung verbessert"]
		[msgText = "Die Verbesserungen wurden angewendet."]
	};
	case "chareditImprovedPet": {
		[msgTitle = "Tier ausgebildet"]
		[msgText = "Das Ausbildungspaket wurde angewendet."]
	};
	case "chareditAnimalFormProcess": {
		[msgTitle = "Tierform verkörpert"]
		[msgText = "Die Tierform wurde erfolgreich verkörpert."]
	}
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
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/scroll.png")))]

[h: sendTo("Self", ausgabe)]