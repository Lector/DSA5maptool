[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos.Macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]

[h: mod = 0]
[h: bonus = 0]
[h: modtext = ""]

[h,macro("probeTalentMods@lib:com.github.naxos.Macros"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: wetterMod = json.get(uebergabe, "wetterSelection")]
[h,if(wetterMod == ""): wetterMod = 0]
[h,if(wetterMod != 0): modtext = modtext + modReason(wetterMod, "wegen Wetter")]
[h: mod = mod + wetterMod]

[h: eignungsMod = json.get(uebergabe, "eignungSelection")]
[h,if(eignungsMod == ""): eignungsMod = 0]
[h,if(eignungsMod != 0): modtext = modtext + modReason(eignungsMod, "wegen Angelplatz")]
[h: mod = mod + eignungsMod]

[h: qs = json.get(uebergabe, "qs")]
[h,if(qs == ""): qs = 0]
[h: qs = round(floor(qs/2))]
[h,if(qs > 0): modtext = modtext + modReason(qs, "durch QS aus 'Fischen & Angeln'-Probe")]
[h: mod = mod + qs]

[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]

[h: macro.return = ergebnis]