[h,if(isGM() == 1 && hasImpersonated() == 0 && json.length(macro.args) < 2), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]
[h,if(json.length(macro.args) >= 2): switchToken(arg(1))]

[h: ruestung = arg(0)]

[h: temp = getStrProp(TempMod, "rs")]

[h: rs = json.get(ruestung, "RS") + temp]
[h: rstorso = json.get(ruestung, "RSTorso") + temp]
[h: rsarmlinks = json.get(ruestung, "RSArmLinks") + temp]
[h: rsarmrechts =  json.get(ruestung, "RSArmRechts") + temp]
[h: rsbeinlinks =  json.get(ruestung, "RSBeinLinks") + temp]
[h: rsbeinrechts =  json.get(ruestung, "RSBeinRechts") + temp]

[h: bel = json.get(ruestung, "BE")]
[h: rini = json.get(ruestung, "INI")]
[h: rgs = json.get(ruestung, "GS")]
[h: traitLevel = getTraitLevel("KampfSF", "Belastungsgewöhnung", currentToken())]
[h: reduce = max(0, traitLevel)]
[h: mount = getMount(currentToken())]
[h,if(mount != ""): reduce = reduce + 1]

[h,if(reduce > bel),Code:
{
	[rini = 0]
	[rgs = 0]
};{}]
[h: bel = max(0, bel - reduce)]


[h: ruestung = json.set(ruestung, "RS", rs)]
[h: ruestung = json.set(ruestung, "RSTorso", rstorso)]
[h: ruestung = json.set(ruestung, "RSArmLinks", rsarmlinks)]
[h: ruestung = json.set(ruestung, "RSArmRechts", rsarmrechts)]
[h: ruestung = json.set(ruestung, "RSBeinLinks", rsbeinlinks)]
[h: ruestung = json.set(ruestung, "RSBeinRechts", rsbeinrechts)]
[h: ruestung = json.set(ruestung, "BE", bel)]
[h: ruestung = json.set(ruestung, "INI", rini)]
[h: ruestung = json.set(ruestung, "GS", rgs)]

[h: macro.return = ruestung]