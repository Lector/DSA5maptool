[h: switchToken(arg(0))]
[h: weapon = arg(1)]
[h: mod = 0]
[h,if(json.length(macro.args) > 2): mod = arg(2)]
[h: schadenMod = 0]
[h,if(json.length(macro.args) > 3): schadenMod = arg(3)]
[h: zone = "gesamt"]
[h,if(json.length(macro.args) > 4): zone = arg(4)]
[h: manoever = "[]"]
[h,if(json.length(macro.args) > 5): manoever = arg(5)]
[h: params = "{}"]
[h,if(json.length(macro.args) > 6): params = arg(6)]
[h: target = ""]
[h,if(json.length(macro.args) > 7): target = arg(7)]

[h: subResults = "[]"]
[h: notification = ""]
[h: attackResult = json.set("{}",
"ResultType", "",
"Manoever", manoever,
"Zone", zone
)]

[h,foreach(man, manoever),if(man != ""),if(json.contains(man, "Skill")),Code:{
	[h: skill = json.get(man, "Skill")]
	[h: skillParams = "{}"]
	[h,if(json.contains(man, "SkillSpec")): skillParams = json.set(skillParams, "spec", json.get(man, "SkillSpec"))]
	[h: skillResult = rollSkill(currentToken(), skill, 0, skillParams)]
	[h: subResults = json.append(subResults, skillResult)]
	[h: skillSuccess = json.get(skillResult, "success")]
	[h,if(skillSuccess < 1):
		return (0, json.set(attackResult,
			"SubResults", subResults,
			"Notification", notification,
			"success", skillSuccess))]
}]

[h: technik = json.get(weapon, "Technik")]

[h: isBehind = 0]
[h,if(target != ""): isBehind = isBehind(currentToken(), target)]

[h: params = json.set(params, "rerollConfirm", hasTrait("Vorteile", "Waffenbegabung (" + technik + ")", 1, currentToken()))]

[h,if(json.contains(weapon, "AT")): value = json.get(weapon, "AT"); value = json.get(weapon, "FK")]
[h: modMacroParams = json.get(params, "modMacroParams")]
[h: modMacroParams = json.set(modMacroParams, "Skill", technik)]
[h: params = json.set(params, "modMacroParams", modMacroParams)]
[h,if(technik == "Kettenwaffen"): params = json.set(params, "patzer19", 1)]
[h: improMeister = hasTrait("KampfSF", "Meister der improvisierten Waffen")]
[h,if(json.get(weapon, "Improvisiert") == 1 && improMeister == 0): params = json.set(params, "patzer19", 1)]

[h: rollResult = roll1d20(currentToken(), value, mod, params)]
[h: subResults = json.append(subResults, json.set(rollResult, "ResultType", "attack", "Weapon", weapon, "Technik", technik))]
[h: success = json.get(rollResult, "success")]

<!-- Diverse Meldungen akkumulieren wir in der Variable subtext, welche wir am Ende mit ausgeben -->
[h: kritText = "Gegnerische Verteidigung wird halbiert."]
[h: gluecklichText = "Gegnerische Verteidigung wird halbiert."]
[h,if(technik == "Raufen" || technik == ""): tabelle = "patzerWaffenlos"; tabelle = "patzerNahkampf"]

[h,if(success < 0): notification = listAppend(notification, table(tabelle), "<br>")]
[h,if(success == 2 && gluecklichText != ""): notification = listAppend(notification, gluecklichText, "<br/>")]
[h,if(success == 3 && kritText != ""): notification = listAppend(notification, kritText, "<br/>")]

[h,if(success >= 1),Code:
{
	[h: manoeverTP = 0]
	[h: schadensTyp = "TP"]
	[h: opponentStatus = "[]"]
	[h: opponentText = ""]
	[h,if(json.get(weapon, "Improvisiert") == 1 && improMeister == 0): VTMod = 2; VTMod = 0]
	[h,if(json.get(weapon, "Name") == "Anderthalbhänder" && hasTrait("KampfSF", "Adersin-Stil") > 0): VTMod = VTMod - 1]
	[h,foreach(man, manoever),if(man != ""),Code:{
		[h,if(json.contains(man, "TP")): weapon = json.set(weapon, "TP", json.get(man, "TP"))]
		[h,if(json.contains(man, "TPMod")): manoeverTP = eval(manoeverTP + json.get(man, "TPMod"))]
		[h,if(json.contains(man, "SchadensTyp")): schadenArt = json.get(man, "SchandensTyp")]
		[h,if(json.contains(man, "OpponentStatus")): opponentStatus = json.get(man, "OpponentStatus")]
		[h,if(json.contains(man, "OpponentText")): opponentText = listAppend(opponentText, json.get(man, "OpponentText"), "<br>")]
		[h,if(json.contains(man, "VT")): VTMod = VTMod + number(json.get(man, "VT"))]
		[h,if(json.contains(man, "SchadensTyp")): schadensTyp = json.get(man, "SchadensTyp")]
	}]
	
	[h,if(success > 2): multiplier = 2; multiplier = 1]
	[h,if(success > 1): gluecklich = 1; gluecklich = 0]
	[h: fkabwehr = 0]
	[h,if(technik != ""),Code:
	{
		[h,if(listContains("Diskusse, Schleudern, Wurfwaffen", technik) > 0): fkabwehr = 1]
		[h,if(listContains("Armbrüste, Blasrohre, Bögen", technik) > 0): fkabwehr = 2]
		[h,if(technik == "Fechtwaffen"): VTMod = VTMod - 1]
		[h,if(technik == "Kettenwaffen"): VTMod = VTMod - 2]
	};{}]

	[h: reactionParams = json.set("{}", "Probe", VTMod, "Gluecklich", gluecklich, "Zone", zone, "FKAbwehr", fkabwehr, "VonHinten", isBehind, "Status", opponentStatus, "FailText", opponentText, "Attacker", currentToken())]
	
	[h: damageResult = weaponDamage(currentToken(), weapon, schadenMod + manoeverTP, schadensTyp, multiplier, reactionParams)]

	[h: subResults = json.append(subResults, damageResult)]
};
{
	[h: passierschlag = 0]
	[h,foreach(man, manoever),if(man != ""),if(json.contains(man, "Passierschlag")),Code:{
		[h: manPassierschlag = json.get(man, "Passierschlag")]
		[h: passierschlag = max(passierschlag, manPassierschlag)]
		[h,if(manPassierschlag == 1): manName = json.get(man, "Name")]
	}]

	[h,if(target == ""),Code:
	{
		[h: targetLink = "Der Gegner"]
		[h: passierschlagTarget = "impersonated"]
	};
	{
		[h: targetName = getName(target)]
		[h: targetLink = "<a style='color: #441e13' href='" + macroLinkText("selectToken@this", "none", targetName) + "'>" + targetName + "</a>"]
		[h: passierschlagTarget = target]
	}]
	
	[h,if(passierschlag >= 1),Code:{
		[h: passierschlagParams = json.set("", "Passierschlag", "1", "Target", currentToken())]
		[h: passierschlagParams = json.append("[]", target, passierschlagParams)]
		[h,if(target != ""): executedOn = target; executedOn = "impersonated"]
		[h: passierschlagLink = macroLinkText("probeAT@this", "none", passierschlagParams, executedOn)]
		[h: passierschlagText = strformat( "%{manName} fehlgeschlagen! %{targetLink} darf einen <a style='color: #441e13' href='%{passierschlagLink}'>Passierschlag</a> ausführen.")]
		[h: notification = listAppend(notification, passierschlagText, "<br>")]
	}]
}]

[h: macro.return = json.set(attackResult,
"SubResults", subResults,
"Notification", notification,
"success", success)]