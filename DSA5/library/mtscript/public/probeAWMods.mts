[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
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

[h: uebergabe = macro.args]

[h,macro("probeVerteidigungMods@this"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: fixiert = json.get(uebergabe, "fixiert")]
[h,if(fixiert != 0 && fixiert != ""): modtext = modtext + modReason(fixiert, "weil fixiert")]
[h: mod = mod + fixiert]

[h: mount = getMount(currentToken())]
[h,if(mount != ""),Code:{
	[modtext = modtext + modReason(-2, "weil beritten")]
	[mod = mod - 2]
}]

[h: kritisch = json.get(uebergabe, "kritisch")]
[h,if(kritisch == "on"),Code:
{
	[h: bonus = bonus -floor(json.get(uebergabe, "waffe") / 2.0)]
}]

[h: ergebnis = json.set(uebergabe, "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]
[h: macro.return = ergebnis]