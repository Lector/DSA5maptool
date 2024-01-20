[h: ergebnis = arg(0)]

[h: property = json.get(ergebnis, "property")]
[h: mod = json.get(ergebnis, "mod")]
[h: dice = json.get(ergebnis, "dice")]
[h: pruefwurf = json.get(ergebnis, "pruefwurf")]
[h: pruefreroll = json.get(ergebnis, "pruefReroll")]
[h: critFail = json.get(ergebnis, "critFail")]
[h: dice1 = json.get(dice, 0)]
[h: dice2 = json.get(dice, 1)]
[h: dice3 = json.get(dice, 2)]

[h: quali = (property + mod) - dice1]

[h: dice = json.append("[]", dice1)]

[h,if(pruefwurf == 1 && (dice1 == 1 || dice1 >= critFail)): dice = json.append(dice1, dice2)]
[h,if(pruefReroll == 1),Code:{
	[dicePruef = min(dice2, dice3)]
	[h,if(dice1 == 1 || dice1 >= critFail): dice = json.append(dice, dice3)]
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

[h: ergebnis = json.set(ergebnis,
"success", success,
"quality", quali,
"dice", dice)]

[h: macro.return = ergebnis]