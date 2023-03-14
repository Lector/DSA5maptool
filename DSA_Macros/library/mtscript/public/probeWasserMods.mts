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

[h: wasser = json.get(uebergabe, "wasser")]
[h,if(wasser == ""): wasser = 0]
[h,if(wasser != 0): modtext = modtext + modReason(wasser, "wegen Wasser")]
[h: mod = mod + wasser]

[h: ergebnis = json.set(uebergabe, "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]
[h: macro.return = ergebnis]