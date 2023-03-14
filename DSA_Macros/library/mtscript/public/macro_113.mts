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

[h: mod = json.get(uebergabe, "mod")]
[h: bonus = json.get(uebergabe, "bonus")]
[h: modtext = json.get(uebergabe, "modtext")]

[h: sicht = json.get(uebergabe, "sicht")]
[h,if(sicht == ""): sicht = 0]
[h,switch(sicht),Code:
	case "=1": {
		<!-- Ich denke das sollte so gehandhabt werden dass NUR bei einer 1 ein Erfolg verbucht werden sollte -->
		<!-- Die Modifikationen sollten hier nicht geändert werden. Ebensowenig der FW auf den gewuerfelt wird -->
		[h: bonus = -(json.get(uebergabe, "Wert") - 1)]
	};
	case "/2": {
		[h: bonus = -floor(json.get(uebergabe, "Wert") / 2.0)]
	};
	default: {
		[h: mod = mod + sicht]
		[h,if(sicht != 0): modtext = modtext + modReason(sicht, "wegen Sicht")]
	}
]

[h: ergebnis = json.set(uebergabe, "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]
[h: macro.return = ergebnis]