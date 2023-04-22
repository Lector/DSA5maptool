[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[switchToken(selectID)]
	};{}
]

<!-- Dieses Macro wird von kraeutersucheSpeziell über den Action Button aufgerufen -->

<!-- Lese die übergebenen Werte ein ... -->
[h: uebergabe = macro.args]
<!-- die eigentlichen Eingabewerte -->
[h: qsPkIndex = json.get(uebergabe, "useQsPk")]
[h: suchDauer = json.get(uebergabe, "suchDauerSel")]
[h: chat = json.get(uebergabe, "chat")]
<!-- Vorbereitung der Probenwürfe-->
[h: probeParams = json.set("", "modMacroParams", uebergabe, "modMacro", "pflanzensucheMods@this")]

[h: closeDialog("probeNahrungssuche")]

<!-- debugging-Ausgabe wird wahlweise am Ende ausgegeben-->
[h: outString = ""]
[h: nahrung = 0]

[h: probeParams = json.set(probeParams, "spec", "Nutzpflanzen")]
<!-- würfel Probe -->
[h: resultPflanzenkunde = rollSkill(currentToken(), "Pflanzenkunde", 0, probeParams)]
[h: outString = strformat("
<table style='font-weight: bold;'>
	%s
	<tr>
		<td rowSpan=3 style='text-align:center; padding: 0px 12px 0px 8px' valign='middle'>
			<img src='%s'/>
		</td>
		%s
	<tr>",
skillRollTitle("Pflanzenkunde"), data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/herb.png"), show3d20(resultPflanzenkunde))]

[h,if(json.get(resultPflanzenkunde, "success") > 0),Code:
{
	[h: qsPk = number(json.get(resultPflanzenkunde, "qs"))]

	[h: zeitersparnis = ceil(qsPk / 2) * 2]

	[h: verkuerzen = max(0, (8-zeitersparnis) - suchDauer)]
	[h: verlaengern = max(0, suchDauer - (8-zeitersparnis))]

	<!-- Je 2 Stunden verkürzte Suchdauer erschwert die Probe auf Sinnesschärfe um 1 -->
	[h: uebergabe = json.set(uebergabe, "verkuerzen", -(verkuerzen/2))]

	[h: uebergabe = json.set(uebergabe, "qs", qsPk)]
	[h: probeParams = json.set(probeParams, "spec", "Suchen", "modMacroParams", uebergabe)]
	[h: resultSinnesschaerfe = rollSkill(currentToken(), "Sinnesschärfe", 0, probeParams)]
	[h: qsSs = number(json.get(resultSinnesschaerfe, "qs"))]
	[h: outString = outString + strformat("
		%s
		<tr>
			<td rowspan=3></td>
			%s
		</tr>",
	skillRollTitle("Sinnesschärfe"), show3d20(resultSinnesschaerfe))]
	[h,if(qsSs > 0),Code:
	{
		[h: nahrung = nahrung + verlaengern / 2]
		[h: nahrung = nahrung + qsSs]
		[h,if(hasTrait("AllgemeineSF", "Sammler") > 0): nahrung = nahrung + 1]
	};
	{
		[h: suchDauer = suchDauer - zeitersparnis]
	}]
}]

[h,if(nahrung > 0):
	resString = strformat("Es wurden <b>%{nahrung} Rationen</b> in <b>%{suchDauer} Stunden</b> gefunden.");
	resString = strformat("Es wurde in <b>%{suchDauer} Stunden</b> leider nichts gefunden.")]
[h: outString = outString + "</table>" + subtext(resString)]

[h: sendTo(chat, border("Nahrungssuche", outString)) ]