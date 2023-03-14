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

[h,macro("probe1w20Mods@Lib:macros"): uebergabe]
[h: modReturn = macro.return]
[h: mod = json.get(modReturn, "mod")]
[h: bonus = json.get(modReturn, "bonus")]
[h: modtext = json.get(modReturn, "modtext")]

[h: basis = json.get(uebergabe, "basis")]
[h: spezial = json.get(uebergabe, "spezial")]
[h: manoever = "[]"]
[h,if(basis != ""): manoever = json.append(manoever, decode(basis))]
[h,if(spezial != ""): manoever = json.append(manoever, decode(spezial))]
[h,foreach(man, manoever),if(man != ""),Code:{
	[h: manMod = json.get(man, "Mod")]
	[h: manName = json.get(man, "Name")]
	[h,if(manMod != 0): modtext = modtext + modReason(manMod, "wegen " + manName)]
	[h: mod = mod + manMod]
}]

[h: ergebnis = json.set(uebergabe, "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]
[h: macro.return = ergebnis]