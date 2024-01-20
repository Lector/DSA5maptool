[h: switchToken(arg(0))]
[h: waffe = arg(1)]
[h: mod = arg(2)]
[h: type = "TP"]
[h,if(json.length(macro.args) > 3): type = arg(3)]
[h: multiplier = 1]
[h,if(json.length(macro.args) > 4): multiplier = arg(4)]
[h: reactionParams = ""]
[h,if(json.length(macro.args) > 5): reactionParams = arg(5); reactionParams = "{}"]
[h: baseTP = getDamage(waffe)]

[h,if(hasTrait("KampfSF", "Hruruzat") > 0 && json.get(waffe, "Technik") == "Raufen"),Code:
{
	[h: die1 = 1d6]
	[h: die2 = 1d6]
	[h,if(die1 == die2): dice = die1 + die2; dice = max(die1, die2)]
	[h: baseTP = replace(baseTP, "1d6", dice, 1)]
}]
[h,if(isNumber(baseTP)): rolledTP = baseTP; rolledTP = eval(baseTP)]

[h: tp = max(0, round((rolledTP + mod) * multiplier))]

[h: reactionParams = json.set(reactionParams, "Schaden", tp, "Schadensart", type)]

[h: macro.return = json.set("{}",
"ResultType", "weaponDamage",
"BaseDamage", baseTP,
"RolledDamage", rolledTP,
"Type", type,
"Damage", tp,
"Mod", mod,
"Multiplier", multiplier,
"Weapon", waffe,
"ReactionParams", reactionParams
)]