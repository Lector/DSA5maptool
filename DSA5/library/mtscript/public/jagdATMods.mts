[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]

[h: mod = 0]
[h: bonus = 0]
[h: modtext = ""]

[h,macro("probeATMods@lib:com.github.lector.dsa5maptool"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: tier = json.get(uebergabe, "tier")]
[h,if(tier == ""): tiermod = 0; tiermod = getProperty("JagdMod", tier, json.get(getTokenMap(tier), 0))]
[h,if(tiermod != 0): modtext = modtext + modReason(tiermod, "durch "+getName(tier, json.get(getTokenMap(tier), 0)))]
[h: mod = mod + tiermod]

[h: modtext = modtext + modReason(-8, "wegen Nahkampfwaffe bei der Jagd")]
[h: mod = mod - 8]

[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]

[h: macro.return = ergebnis]