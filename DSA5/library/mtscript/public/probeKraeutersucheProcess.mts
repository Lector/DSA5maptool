[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[switchToken(selectID)]
	};{}
]

<!-- Dieses Macro wird von probeKraeutersuche aufgerufen -->

<!-- Lese die übergebenen Werte ein ... -->
[h: uebergabe = macro.args]
<!-- die eigentlichen Eingabewerte -->
[h: wetterMod = json.get(uebergabe, "wetterSelection")]
[h: krautToken = json.get(uebergabe, "krautSelection")]
[h: sfGelaendekunde = json.get(uebergabe, "geländekunde")]
[h: useqsPk = json.get(uebergabe, "QSpk")]
[h: suchDauer = json.get(uebergabe, "suchDauerSel")]
[h: basisDauer = json.get(uebergabe, "basisDauer")]
[h: chat = json.get(uebergabe, "chat")]
[h: allHerbs = json.get(uebergabe, "allHerbs")]
[h: gelaende = json.get(uebergabe, "gelaende")]

<!-- Für diverse Erschwer/Erleichterungen kümmert sich kraeutersucheMods -->
[h: probeParams = json.set("", "Name", "Pflanzenkunde", "modMacroParams", uebergabe, "modMacro", "kraeutersucheMods@this", "QSMatter", 6)]

[h: closeDialog("kraeutersucheSpeziell")]

<!-- Ausgabe wird wärend des Probenwürfel aufgebaut -->
[h: outString = ""]
<!-- Endergebnisse werden auf sinnvollen Startwert belegt -->
[h: funde = "{}"]
[h: resString = strformat("Es wurde in <b>%{suchDauer} Stunden</b> leider nichts gefunden.")]
[h: resultSinnesschaerfe = ""]

<!-- -------------------------------------------- -->
<!-- Jetzt die eigentliche Abfrage für die Proben -->

<!-- ------------------------------------- -->
<!-- Führe Pflanzenkunde-Proben durch -->

<!-- Spezialisierung Pflanzenkunde --> 
[h,if(krautToken != ""),Code:
{
	[h: map = tokenMap(krautToken)]
	
	[h: hasSpezHeilpflanzen = hasTrait("AllgemeineSF", "Fertigkeitsspezialisierung (Pflanzenkunde: Heilpflanzen)")]
	[h: hasSpezGiftpflanzen = hasTrait("AllgemeineSF", "Fertigkeitsspezialisierung (Pflanzenkunde: Giftpflanzen)")]
	[h: hasSpezNutzpflanzen = hasTrait("AllgemeineSF", "Fertigkeitsspezialisierung (Pflanzenkunde: Nutzpflanzen)")]
	
	[h: krautIstHeilpflanze = getProperty("Heilpflanze", krautToken, map)]
	[h: krautIstGiftpflanze = getProperty("Giftpflanze", krautToken, map)]
	[h: krautIstNutzpflanze = getProperty("Nutzpflanze", krautToken, map)]
	<!-- Matching-->
	[h: spec = ""]
	[h, if(krautIstHeilpflanze && hasSpezHeilpflanzen): spec = "Heilpflanzen"]
	[h, if(krautIstGiftpflanze && hasSpezGiftpflanzen): spec = "Nutzpflanzen"]
	[h, if(krautIstNutzpflanze && hasSpezNutzpflanzen): spec = "Giftpflanzen"]
	[h,if(spec != ""): probeParams = json.set(probeParams, "spec", spec)]
}]

<!-- würfel Probe auf Pflanzenkunde -->
[h: resultPflanzenkunde = rollSkill(currentToken(), "Pflanzenkunde", 0, probeParams)]

[h: qsPk = number(json.get(resultPflanzenkunde, "qs"))]
[h: outString = strformat("
<table style='font-weight: bold;'>
	%s
	<tr>
		<td rowSpan=3 style='text-align:center; padding: 0px 12px 0px 8px' valign='middle'>
			<img src='%s'/>
		</td>
		%s
	</tr>",
skillRollTitle("Pflanzenkunde"), data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/herb.png"), show3d20(resultPflanzenkunde))]

[h:pkSuccess = number(json.get(resultPflanzenkunde, "success"))]
[h,if(pkSuccess > 0),Code:
{
	<!-- Wenn die Pflanzensuche gelingt ist, fragen wir uns wie wir die QS nutzen sollen -->
	[h,if(useqsPk == 0),Code:
	{
		<!-- 0: Probe erleichtern & Suchdauer verkürzen -->
		[h: qsRationen = 1]
		[h: uebergabe = json.set(uebergabe, "qs", qsPk)]
		[h: zeitErsparnis = ceil(qsPk / 2) * 2]
	};{
		<!-- 1: Kräutermenge erhöhen -->
		[h: qsRationen = qsPk]
		[h: zeitErsparnis = 0]
	}]
	
	<!-- Bestimme bei dieser Gelegenheit auch die endgültige Dauer der Suche-->
	[h: suchDauer = min(suchDauer, (basisDauer - zeitErsparnis))]
	<!-- Bestimme den nötigen Aufschlag auf die Sinnesschärfe-Probe,
	um die gewünschte Maximal-Suchdauer aus der Eingabemaske einzuhalten.
	Den Modifikator, wenden wie immer unser ModMacro an.-->
	[h: uebergabe = json.set(uebergabe, "verkuerzen",  min(0, suchDauer - (basisDauer - zeitErsparnis)) / 2)]
	[h: probeParams = json.set(probeParams, "Name", "Sinnesschärfe", "spec", "Suche", "modMacroParams", uebergabe, "QSMatter", 0)]

	<!-- würfel Sinnesschärfe-Probe -->
	[h: resultSinnesschaerfe = rollSkill(currentToken(), "Sinnesschärfe", 0, probeParams)]

	[h:ssSuccess = number(json.get(resultSinnesschaerfe, "success"))]
	[h: outString = outString + skillRollTitle("Sinnesschärfe") +"<tr><td rowspan=3>&nbsp;</td>" + show3d20(resultSinnesschaerfe) + "</tr>"]

	<!-- Wenn wir Pflanzen finden bauen wir unsere Funde auf -->
	[h,if(ssSuccess > 0),Code:
	{
		<!-- resString wird hier geleert weil er schrittweise aufgebaut wird
		und am Anfang auf Fehlschlag belegt wird -->
		[h: resString = ""]
		<!-- Je nach spezieller oder allgemeiner Pflanzensuche bauen wir die Funde anders auf -->
		<!-- Kräuter aus der allgemeinen Suche werden vom Macro getRandomHerbs ermittelt -->
		[if(krautToken != ""):
			funde = json.set("", krautToken, qsRationen);
			funde = getRandomHerbs(allHerbs, gelaende, qsRationen)]
	}]
}]

<!-- Abhängig von den Funden bauen wir unser Ergebnis auf indem wir für jeden Fund einen Eintrag generieren -->
[h,foreach(krautToken, funde),Code:
{
	<!-- Wenn kein Krauttoken vorhanden ist, liefert die allgemeine Suche "Unbekanntes Kraut" -->
	[h,if(krautToken == "Unbekanntes Kraut"),Code:
	{
		[h: anw = json.get(funde, krautToken)]
		[h: krautImage = ""]
		[h: krautLink = strformat("<b>%s</b>", krautToken)]
		[h: krautName = "Unbekanntes Kraut"]
	};
	{
		[h: map = tokenMap(krautToken)]
		<!-- Im Normalfall haben wir die Token-ID des gefundenen Krauts -->
		[h: krautAnw = getProperty("Anwendungen", krautToken, map)]
		<!-- -1 wegen 0-basiertem Index -->
		[h: anw = listGet(krautAnw, json.get(funde, krautToken) - 1)]
		[h: krautImage = strformat("<img style='vertical-align: middle;' src='%s'/>", getTokenImage(50, krautToken, map))]
		[h: krautName = getName(krautToken, map)]
		[h: link = strformat("https://ulisses-regelwiki.de/suche.html?keywords=%s", replace(krautName, " ", "+"))]
		[h: gms = getGMNames()]
		[h: krautLink = 
			onlyFor(strformat("<a style='font-weight: bold; color: #441e13;' href='%{link}'>"), gms) + krautName + onlyFor("</a>",gms)]
	}]
	<!-- Hier bauen wir unseren Ergebnis-String auf indem wir Anwendungen, Bild und Name aneinanderheften -->
	[h: resString = resString + strformat("
	<table style='white-space: nowrap;'>
		<tr>
			<td>Es wurde <b>%{anw} x </b></td>
			<td>%{krautImage}</td>
			<td>%{krautLink} in <b>%{suchDauer} Stunden</b> gefunden.</td>
		</tr>
	</table>")]
}]

[h,if(resultSinnesschaerfe != ""): resString = json.get(resultSinnesschaerfe, "Notification") + resString]
[h: resString = json.get(resultPflanzenkunde, "Notification") + resString]

<!-- Am Schluss wird die Tabelle geschlossen und das Ergebnis angehängt -->
[h: outString = outString + "</table>" + subtext(resString)]

[h: sendTo(chat, border("Kräutersuche", outString))]
