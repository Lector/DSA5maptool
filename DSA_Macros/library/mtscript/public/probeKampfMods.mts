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

[h,macro("probeManoeverMods@Lib:macros"): uebergabe]
[h,macro("probeSichtMods@Lib:macros"): macro.return]
[h,macro("probeWasserMods@Lib:macros"): macro.return]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: liegend = json.get(uebergabe, "liegend")]
[h,if(liegend != 0 && liegend != ""): modtext = modtext + modReason(liegend, "weil liegend")]
[h: mod = mod + liegend]

[h,if(listContains("Dämon, Elementar, Geist, Golem, Untoter", Typus) == 0),Code:
{
	[h,if(Belastung != 0): modtext = modtext + modReason(-Belastung, "wegen Belastung")]
	[h: mod = mod - Belastung]
}]

[h: ergebnis = json.set(uebergabe, "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]
[h: macro.return = ergebnis]