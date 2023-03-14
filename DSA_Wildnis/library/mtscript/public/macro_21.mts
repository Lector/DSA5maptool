[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[switchToken(selectID)]
	};{}
]

<!-- Lese die übergebenen Werte ein ... -->
[h: uebergabe = macro.args]
<!-- die eigentlichen Eingabewerte -->
[h: tier = json.get(uebergabe, "tier")]
[h: tiermap = tokenMap(tier)]
[h: skill1 = json.get(uebergabe, "skill1")]
[h: skill2 = json.get(uebergabe, "skill2")]
[h: spec1 = json.get(uebergabe, "spec1")]
[h: spec2 = json.get(uebergabe, "spec2")]
[h: suchDauer = json.get(uebergabe, "suchDauer")]
[h: aktSuchDauer = suchDauer]
[h: basisDauer = json.get(uebergabe, "basisDauer")]
[h: waffe = json.get(uebergabe, "waffe")]
[h: maxQS = json.get(uebergabe, "maxqs")]
[h: chat = json.get(uebergabe, "chat")]
[h: typ = json.get(uebergabe, "typ")]
[h: image = json.get(uebergabe, "image")]
[h: outTitle = typ]
[h: resString = "Es wurde leider nichts erjagt."]

<!-- Vorbereitung der Probenwürfe-->
[h: probeParams = json.set("{}",
	"modMacroParams", uebergabe,
	"modMacro", "jagdMods@Lib:Wildnis",
	"spec", spec1)]
<!-- würfel Probe -->
[h: result1 = rollSkill(currentToken(), skill1, 0, probeParams)]

[h: qs1 = number(json.get(result1, "qs"))]
[h: jaeger = hasTrait("AllgemeineSF", "Erfolgreicher Jäger", 1, currentToken())]
[h,if(jaeger > 0 && typ != "Angeln"): qs1 = qs1 + 1]

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
skillRollTitle(skill1), tableImage("chat", image), show3d20(result1))]
[h: success1 = number(json.get(result1, "success"))]
[h: success2 = 0]
[h: rat = 0]
[h: success3 = 0]
[h,if(success1 > 0), CODE:
{
	[h: zeitErsparnis = ceil(qs1 / 2) * 2]
	<!-- Bestimme bei dieser Gelegenheit auch die endgültige Dauer der Suche-->
	[h: aktSuchDauer = min(suchDauer, (basisDauer - zeitErsparnis))]
	<!-- Bestimme den nötigen Aufschlag auf die 2. Probe,
	um die gewünschte Maximal-Suchdauer aus der Eingabemaske einzuhalten.
	Den Modifikator, wenden wie immer unser ModMacro an.-->
	[h: uebergabe = json.set(uebergabe, "verkuerzen",  min(0, aktSuchDauer - (basisDauer - zeitErsparnis)) / 2)]
	[h: uebergabe = json.set(uebergabe, "qs", qs1)]
	[h: probeParams = json.set(probeParams, "modMacroParams", uebergabe, "spec", spec2)]
	<!-- würfel Verbergen-Probe -->
	[h: result2 = rollSkill(currentToken(), skill2, 0, probeParams)]
	
	[h: qs2 = number(json.get(result2, "qs"))]
	
	[h: outString = outString + skillRollTitle(skill2) + "<tr><td rowspan=3></td>" + show3d20(result2) + "</tr>"]
	[h: success2 = number(json.get(result2, "success"))]

	<!-- Falls wir ein konkretes Tier jagen steht diesem eine Vergleichsprobe auf Sinnesschärfe zu -->
	[h,if(tier != ""),Code:
	{
		[h: sinnesresult = rollSkill(tier, "Sinnesschärfe")]
		[h: outString = outString + skillRollTitle("Jagdwild: Sinnesschärfe") + "<tr><td rowspan=3 style='text-align:center; padding: 0px 12px 0px 8px' valign='middle'><img src='"+getTokenImage(50, tier, tiermap)+"'/></td>" + show3d20(sinnesresult) + "</tr>"]
	}]
}]
[h,if(success2 > 0 && tier == ""), CODE:
{	
	<!-- Bestimme die Rationen-->
	[h: verlaengern = max(0, min(maxQS - qs2, suchDauer/2 - aktSuchDauer/2))]
	[h: rat = 2 * (min(maxQS, qs2) + verlaengern)]
	[h: aktSuchDauer = aktSuchDauer + 2*verlaengern]

	[h: fischer = hasTrait("AllgemeineSF", "Fischer", 1, currentToken())]
	[h,if(fischer > 0 && typ == "Angeln"): rat = rat + 2]

	[h: jaeger = hasTrait("AllgemeineSF", "Jäger", 1, currentToken())]
	[h,if(jaeger > 0 && typ != "Angeln"): rat = rat + 2]
}]
[h,if(tier != "" && success1 > 0): flag = 1; flag = 0]
[h,if(waffe != "" && (success2 > 0 || flag == 1)), CODE:
{
	[h: bewegungZiel = 2]
	[h: gr = 4]
	[h,if(tier != ""),Code:
	{
		<!-- Zielgröße wird als Modifikator angewendet -->
		[h: gr = groesse(getSize(tier, tiermap))]
		
		<!-- Wenn das Jagdwild mitbekommt dass man sich anschleicht weicht es entsprechend aus -->
		[h,if(json.get(sinnesresult, "qs") >= qs2): bewegungZiel = -2]
	}]
	[h: sizeMod = 0]
	[h,if(json.contains(waffe, "RW1")),Code:
	{
		[h: uebergabe = json.set(uebergabe, "bewegungZiel", bewegungZiel)]

		[h,if(gr <= 2): sizeMod = -8]
		[h,if(gr == 3): sizeMod = -4]
		[h,if(gr == 4):	sizeMod = 0]
		[h,if(gr == 5): sizeMod = 4]
		[h,if(gr >= 6): sizeMod = 8]
		
		[h: probeParams = json.set(probeParams, "modMacro", "jagdFKMods@Lib:Wildnis")]
	};{
		[h,if(gr <= 2): sizeMod = -4]
		[h: probeParams = json.set(probeParams, "modMacro", "jagdATMods@Lib:Wildnis")]
	}]
	
	[h: uebergabe = json.set(uebergabe, "groesse", sizeMod)]
	[h: probeParams = json.set(probeParams, "modMacroParams", uebergabe)]
	[h: result3 = rollAttack(currentToken(), waffe, 0, 0, "gesamt", "[]", probeParams)]
	[h: result3 = json.get(json.get(result3, "SubResults"), 0)]
	[h: outString = outString + skillRollTitle("Attacke mit " + json.get(waffe, "Name")) + "<tr>" + showAttack(result3) + "</tr>"]
	[h: success3 = json.get(result3, "success")]
}]
[h,if(success3 > 0 || waffe == ""): flag = 1; flag = 0]
[h,if(
  (tier == "" && success2 > 0 && flag == 1)
||(tier != "" && success1 > 0 && flag == 1)), CODE:
{
	[h,if(tier == ""),Code:
	{
		[resString = strformat("Du hast <b>%{rat} Rationen</b> in <b>%{aktSuchDauer} Stunden</b> erjagt.")]
	};{
		[resString = strformat("Du hast in <b>%{aktSuchDauer} Stunden 1 %s</b> erlegt und kannst folgendes erbeuten:<br><ul style='margin-left: 6px; margin-top: 0px;'><li>%d Rationen Fleisch (%s)</li>",
		getName(tier, tiermap),
		getProperty("Rationen", tier, tiermap),
		json.get("[Ungenießbar, Zäh, Mittelmäßig, Hochwertig]", getProperty("Fleischquali", tier, tiermap)))]
		[h: beute = replace(getProperty("SonstigeBeute", tier, tiermap), "
", "</li><li>")]
		[h,if(beute != ""): resString = resString + strformat("<li>%{beute}</li>")]
		[h: resString = resString + "</ul>"]
	}]
};
{
	[h: resString = strformat("In <b>%{aktSuchDauer} Stunden</b> wurde leider nichts erjagt.")]
}]

[h: outString = outString + "</table>" + subtext(resString)]
[h: sendTo(chat, border(outTitle, outString))]

[h: closeDialog("jagd")]