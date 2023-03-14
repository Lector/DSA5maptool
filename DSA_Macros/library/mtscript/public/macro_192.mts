[h: switchToken(arg(0))]
[h: property = arg(1)]
[h: mod = arg(2)]
[h,if(mod == ""): mod = 0]

[h: params = ""]
[h: modMacro = ""]
[h: modText = ""]
[h: pruefwurf = 1]
[h: pruefReroll = 0]
[h: patzer19 = 0]
[h,if(json.length(macro.args) > 3),Code:{
	[params = arg(3)]
	[h: modMacro = json.get(params, "modMacro")]
	[h: modMacroParams = json.get(params, "modMacroParams")]
	[h,if(json.contains(params, "confirm")): pruefwurf = json.get(params, "confirm")]
	[h,if(json.contains(params, "rerollConfirm")): pruefReroll = json.get(params, "rerollConfirm")]
	[h,if(json.contains(params, "patzer19")): patzer19 = json.get(params, "patzer19")]
}]
[h,if(patzer19 == 1): critFail=19; critFail=20]

[h: origProp = property]
[h,if(!isNumber(property)),Code:{
	[h: origProp = eval(property)]
	[h,macro("probeGetAktWert@Lib:macros"): param]
	[h: property = macro.return]
};{}]

[h,if(modMacro != ""), Code:
{
	[modMacroParams = json.set(modMacroParams, "self", arg(0))]
	[macro(modMacro): modMacroParams]
	[mod = mod + json.get(macro.return, "mod")]
	[modSubtext = json.get(macro.return, "subtext")]
	[modtext = json.get(macro.return, "modtext")]
	[bonus = json.get(macro.return, "bonus")]
	[property = property + bonus]
}]

[h: dice1 = 1d20]
[h: dice2 = 1d20]
[h: dice3 = 1d20]

[h: quali = (property+mod) - dice1]

[h: dice = dice1]

[h,if(pruefwurf == 1 && (dice1 == 1 || dice1 >= critFail)): dice = listAppend(dice1, dice2)]
[h,if(pruefReroll == 1),Code:{
	[dicePruef = min(dice2, dice3)]
	[h,if(dice1 == 1 || dice1 >= critFail): dice = listAppend(dice, dice3)]
};{
	[dicePruef = dice2]
}]
[h,if(quali >= 0 && dice1 < critFail): success = 1; success = 0]
[h,if(pruefwurf == 1 && dice1 >= critFail && dicePruef > property + mod), Code:
{
	[if(dicePruef >= critFail): success = -2; success = -1]
}]
[h,if(pruefwurf == 1 && dice1 == 1), Code:
{
	[if(dicePruef <= property + mod): success = 3; success = 2]
}]

[h: ergebnis = json.set("{}",
"ResultType", "1d20",
"success", success,
"mod", mod,
"quality", quali,
"dice", dice,
"property", origProp,
"currentProperty", property,
"modText", modtext,
"pruefwurf", pruefwurf,
"pruefreroll", pruefreroll)]

[h: macro.return = ergebnis]