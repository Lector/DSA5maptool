[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]
[h: tok = json.get(uebergabe, "self")]
[h: map = tokenMap(tok)]
[h: skill = json.get(uebergabe, "Skill")]

[h,macro("probeMods@Lib:macros"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: fpbonus = 0]
[h: bonustext = ""]

[h: fwplus = json.get(uebergabe, "FWPlus"+skill)]
[h,if(fwplus != ""),Code:
{
	[h: bonus = bonus + fwplus]
}]

[h: typ = getProperty("Typus", tok, map)]
[h,if(listContains("Dämon, Elementar, Geist", typ) == 0),Code:
{
	[h,if(json.get(uebergabe, "bewegungsprache"+skill) == 1): paralysemod = -getProperty("Paralyse", tok, map); paralysemod = 0]
	[h,if(paralysemod != 0), Code:
	{
		[h: modtext = modtext + modReason(paralysemod, "wegen Paralyse")]
		[h: mod = mod + paralysemod]
	}]
}]

[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "fpbonus", fpbonus)]
[h: ergebnis = json.set(ergebnis, "bonustext", bonustext)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]
[h: macro.return = ergebnis]