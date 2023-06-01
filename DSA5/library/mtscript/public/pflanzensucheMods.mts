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

[h: mod = 0]
[h: bonus = 0]
[h: modtext = ""]

[h,macro("probeTalentMods@this"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h,if(json.get(uebergabe, "Skill") == "Pflanzenkunde"),Code:
{
	[h: wetterMod = json.get(uebergabe, "wetterSelection")]
	[h,if(wetterMod == ""): wetterMod = 0]
	[h,if(wetterMod != 0): modtext = modtext + modReason(wetterMod, "wegen Wetter")]
	[h: mod = mod + wetterMod]
	
	[h: gegendMod = json.get(uebergabe, "gegendSelection")]
	[h,if(gegendMod == ""): gegendMod = 0]
	[h,if(gegendMod != 0): modtext = modtext + modReason(gegendMod, "wegen Gegend")]
	[h: mod = mod + gegendMod]

	[h: gelaendekunde = json.get(uebergabe, "geländekunde")]
	[h,if(gelaendekunde == ""): gelaendekunde = 0]
	[h,if(gelaendekunde != 0): modtext = modtext + modReason(gelaendekunde, "wegen Geländekunde")]
	[h: mod = mod + gelaendekunde]
};{
	[h: qs = json.get(uebergabe, "qs")]
	[h,if(qs == ""): qs = 0]
	[h: qs = floor(qs/2)]
	[h,if(qs > 0): modtext = modtext + modReason(qs, "durch QS aus Pflanzenkunde")]
	[h: mod = mod + qs]

	[h: verkuerzen = json.get(uebergabe, "verkuerzen")]
	[h,if(verkuerzen == ""): verkuerzen = 0]
	[h,if(verkuerzen != 0): modtext = modtext + modReason(verkuerzen, "durch verkürzte Suchdauer")]
	[h: mod = mod + verkuerzen]
}]

[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]

[h: macro.return = ergebnis]