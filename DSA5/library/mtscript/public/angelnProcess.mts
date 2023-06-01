[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[switchToken(selectID)]
	};{}
]

<!-- Lese die übergebenen Werte ein ... -->
[h: uebergabe = macro.args]
<!-- die eigentlichen Eingabewerte -->
[h: probeMod = number(json.get(uebergabe, "bonus")) - number(json.get(uebergabe, "malus"))]
[h: gewaesser = json.get(uebergabe, "gewaesser")]
[h: chat = json.get(uebergabe, "chat")]
[h: outTitle = "Angeln"]
[h: resString = "Es wurde leider nichts gefangen."]

<!-- Vorbereitung der Probenwürfe-->
[h: probeParams = json.set("{}",
	"modMacroParams", uebergabe,
	"modMacro", "angelnMods@this",
	"spec", gewaesser)]
<!-- würfel Angeln-Probe -->
[h: resultAngeln = rollSkill(currentToken(), "Fischen & Angeln", probeMod, probeParams)]

[h: qsFa = number(json.get(resultAngeln, "qs"))]
[h: outString = strformat("
<table style='font-weight: bold'>
	%s
	<tr>
		<td rowSpan=3 style='text-align:center; padding: 0px 12px 0px 8px' valign='middle'>
			<img src='%s'/>
		</td>
		%s
	</tr>
	",
skillRollTitle("Fischen & Angeln"), data.getStaticData("com.github.lector.dsa5maptool", "public/images/fish.png"), show3d20(resultAngeln))]
[h: faSuccess = number(json.get(resultAngeln, "success"))]
[if(faSuccess>0), CODE:
{

	[h: uebergabe = json.set(uebergabe, "qs", qsFa)]
	[h: probeParams = json.set(probeParams, "modMacroParams", uebergabe, "spec", "Sich verstecken")]
	<!-- würfel Verbergen-Probe -->
	[h: resultVerbergen = rollSkill(currentToken(), "Verbergen", probeMod, probeParams)]
	
	[h: qsVb = number(json.get(resultVerbergen, "qs"))]
	[h: outString = outString + skillRollTitle("Verbergen") + "<tr><td rowspan=3></td>" + show3d20(resultVerbergen)+"</tr>"]
	[h: fsSuccess = number(json.get(resultVerbergen, "success"))]
	[if(fsSuccess > 0), CODE:
	{
		[h: fischer = hasTrait("AllgemeineSF", "Fischer", 1, currentToken())]
		[h,if(fischer > 0): gefangen = qsVb + 1]
		[h,if(fischer > 0): maxQS = 3; maxQS = 2]
		
		<!-- Bestimme die Rationen-->
		[h: zeitErsparnis = round(ceil(qsVb/2)) * 2]
		[h: dauer = 10 - zeitErsparnis]
		[h: gefangen = 2 * min(maxQS, qsVb)]

		<!-- output Tier -->
		[h: resString = strformat("Es wurden <b>%{gefangen} Rationen</b> Fisch in <b>%{dauer} Stunden</b> gefangen.")]
		[h,if(zeitErsparnis > 0 && qsVb < maxQS):
			resString = resString + " Während 2 weiteren Stunden könnten 2 weitere Rationen erbeutet werden."]
	}]
}]
[h: outString = outString + "</table>" + subtext(resString)]

<!-- aktueller Stand  - nun Tier! -->
[h: sendTo(chat, border(outTitle, outString))]

[h: closeDialog("angeln")]