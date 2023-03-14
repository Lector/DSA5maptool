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
[h: attacker = json.get(uebergabe, "attacker")]
[h: waffe = json.get(uebergabe, "waffe")]

[h,macro("probeVerteidigungMods@Lib:macros"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: beengt = json.get(uebergabe, "beengt")]
[h,if(beengt == "on"): beengt = getCrampedMod(currentToken(), waffe, attacker, "pa"); beengt = 0]
[h,if(beengt != 0): modtext = modtext + modReason(beengt, "wegen beengter Umgebung")]
[h: mod = mod + beengt]

[h: ergebnis = json.set(uebergabe, "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]
[h: macro.return = ergebnis]