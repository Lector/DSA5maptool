[h: tok = arg(0)]
[h: switchToken(tok)]
[h: weapon = arg(1)]
[h: mod = arg(2)]
[h: damage = arg(3)]
[h: manoever = arg(4)]
[h: params = arg(5)]

[h,if(weapon == ""),Code:{
	[def = getAW(currentToken())]
	[type = "dodge"]
	[skill = "Ausweichen"]
};{
	[def = json.get(weapon, "PA")]
	[type = "parry"]
	[skill = json.get(weapon, "Technik")]
}]

[h: status = ""]
[h: failText = ""]
[h: damageType = ""]
[h: multiplier = ""]
[h: zone = ""]
[h,if(params != ""),Code:
{
	[status = json.get(params, "status")]
	[failText = json.get(params, "failText")]
	[damageType = json.get(params, "damageType")]
	[multiplier = json.get(params, "multiplier")]
	[zone = json.get(params, "zone")]
};{}]
[h,if(status == ""): status = "[]"]
[h,if(damageType == ""): damageType = "TP"]
[h,if(multiplier == ""): multiplier = 1]
[h,if(zone == ""): zone = "zufall"]

[h: modMacroParams = json.get(params, "modMacroParams")]
[h: modMacroParams = json.set(modMacroParams, "Skill", skill)]
[h: params = json.set(params, "modMacroParams", modMacroParams)]

<!-- Zuerst wird eine Verteidigung gewürfelt. -->
[h: rollResult = roll1d20(currentToken(), def, mod, params)]
[h: success = json.get(rollResult, "success")]

[h: subResults = "[]"]
[h: notification = ""]

<!-- Falls die Verteidigung misslingt handeln wir noch den Schaden ab
und geben diesen in die noch offene Tabelle aus -->
[h,if(success < 1 && (damage > 0 || status != "[]")),Code:
{
	[h: damageResult = takeDamage(currentToken(), damage, 0, zone, damageType, multiplier, status, failText)]
	[h: subResults = json.append(subResults, damageResult))]
};{}]

[h: patzerTabelle = "patzerWaffenlos"]
[h,if(type == "parry" && weapon != ""),Code:
{
	[h: technik = json.get(weapon, "Technik")]
	[h,if(technik != "Raufen" && technik != ""): patzerTabelle = "patzerNahkampf"]
};{}]

<!-- Wir zählen den VT-Tracker 1 hoch falls wir in der INI sind -->
[h: hasIni = hasInitiative(currentToken())]
[h,if(hasIni != 0): VTinKR = VTinKR + 1]

<!-- Diverse Meldungen akkumulieren wir in der Variable subtext, welche wir am Ende mit ausgeben -->
[h: kritText = "Du darfst sofort einen Passierschlag gegen den Gegner ausführen"]
[h,if(success < 0): notification = listAppend(notification, table(patzerTabelle), "<br>")]
[h,if(success >= 3 && kritText != ""): notification = listAppend(notification, kritText, "<br>")]
[h: rollResult = json.set(rollResult,
"Weapon", weapon,
"ResultType", type,
"Manoever", manoever,
"SubResults", subResults,
"Notification", notification)]

[h: macro.return = rollResult]