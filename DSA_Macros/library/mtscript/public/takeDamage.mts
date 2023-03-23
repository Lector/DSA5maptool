[h: switchToken(arg(0))]
[h: baseDamage = arg(1)]
[h,if(json.length(macro.args) > 2): mod = arg(2); mod = 0]
[h,if(json.length(macro.args) > 3): zone = arg(3); zone = "zufall"]
[h,if(json.length(macro.args) > 4): type = arg(4); type = "TP"]
[h,if(json.length(macro.args) > 5): multiplier = arg(5); multiplier = 1]
[h,if(json.length(macro.args) > 6): status = arg(6); status = "[]"]
[h,if(json.length(macro.args) > 7): failText = arg(7); failText = ""]

[h: subResults = "[]"]

[h: ruestung = resolveRS(getRuestung(RuestungAktiv))]
[h,if(zone == "zufall"),Code:
{
	[zone = trefferzone(Trefferzonenmodell, groesse(getSize()))]
};{}]
[h,if(Schwarm == 1),Code:{
	[zone = "gesamt"]
};{}]

[h,switch(zone),Code:
case "gesamt": 
{
	[rs = json.get(ruestung, "RS")]
};
case "Kopf": {[rs = json.get(ruestung, "RSKopf")]};
case "Torso": {[rs = json.get(ruestung, "RSTorso")]};
case "Linker Arm": {[rs = json.get(ruestung, "RSArmLinks")]};
case "Rechter Arm": {[rs = json.get(ruestung, "RSArmRechts")]};
case "Linkes Bein": {[rs = json.get(ruestung, "RSBeinLinks")]};
case "Rechtes Bein": {[rs = json.get(ruestung, "RSBeinRechts")]};
default: {[rs = json.get(ruestung, "RS")]}]

[h,if(isNumber(baseDamage) == 1): schaden = baseDamage; schaden = eval(baseDamage)]
[h: rolledDamage = schaden + mod]
[h: schaden = round(rolledDamage * multiplier)]

[h,if(type == "SP"): schaden = schaden]
[h,if(type == "TP"): schaden = schaden - rs]
[h,if(schaden <= 0): schaden = 0]

<!-- Wenn Daten im Token fehlen sollen keine Wunden verursacht werden -->
[h: ws = getWS(currentToken())]
[h,if(ws == 0): wound = 0; wound = floor(schaden / ws)]
[h,if(getLibProperty("OptWunden", "com.github.lector.dsa5maptools") != 0 && wound > 0 && zone != "gesamt"), Code:
{
	[h,if(hasTrait("Vorteile", "Hart im nehmen") == 1): wound = wound - 1]
	[h,if(hasTrait("Nachteile", "Verweichlicht") == 1): wound = wound + 2]
	[h: subResults = json.append(subResults, woundEffect(currentToken(), wound, zone))]
};{}]

[h,foreach(stat, status),Code:{
	[h,if(startsWith(stat, "-")),Code:{
		
		[val = 0]
		[stat = substring(stat, 1, length(stat))]
	};{
		[val = 1]
	}]
	[setState(stat, val)]
}]

[h: LeP = LeP - schaden]
[h,macro("checkZustand@this"): currentToken()]
[h: subResults = json.append(subResults, macro.return)]

[h: macro.return = json.set("{}",
"ResultType", "takeDamage",
"SubResults", subResults,
"BaseDamage", baseDamage,
"Mod", mod,
"RolledDamage", rolledDamage,
"Multiplier", multiplier,
"Damage", schaden,
"Type", type,
"Zone", zone,
"Notification", failText,
"Wound", wound)]