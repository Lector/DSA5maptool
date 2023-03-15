[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]

[h: mod = 0]
[h: bonus = 0]
[h: modtext = ""]

[h,macro("probeTalentMods@lib:com.github.naxos84.macros"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: skill1 = json.get(uebergabe, "skill1")]
[h: skill = json.get(uebergabe, "Skill")]
[h: typ = json.get(uebergabe, "typ")]

[h,if(skill == "Tierkunde"),Code:
{
	[h,switch(typ),Code:
		case "Pirschjagd":
		{
			[h: sf = "Weg des Jägers"]
		};
		case "Fallenjagd":
		{
			[h: sf = "Weg des Fallenstellers"]
		};
		default:
		{
			[h: sf = ""]
		};
	]
	[h: hassf = hasTrait("AllgemeineSF", sf, 1, currentToken())]
	[h,if(hassf > 0): sfmod = 1; sfmod = 0]
	[h,if(sfmod != 0): modtext = modtext + modReason(sfmod, "wegen " + sf)]
	[mod = mod + sfmod]
}]

[h,if(skill == skill1),Code:
{
	[h: wetterMod = json.get(uebergabe, "wetterSelection")]
	[h,if(wetterMod == ""): wetterMod = 0]
	[h,if(wetterMod != 0): modtext = modtext + modReason(wetterMod, "wegen Wetter")]
	[h: mod = mod + wetterMod]
	
	[h: eignungsMod = json.get(uebergabe, "eignungSelection")]
	[h,if(eignungsMod == ""): eignungsMod = 0]
	[h,if(eignungsMod != 0): modtext = modtext + modReason(eignungsMod, "wegen Jagdplatz")]
	[h: mod = mod + eignungsMod]
	
	[h: gelaendekunde = json.get(uebergabe, "geländekunde")]
	[h,if(gelaendekunde == ""): gelaendekunde = 0]
	[h,if(gelaendekunde != 0): modtext = modtext + modReason(gelaendekunde, "wegen Geländekunde")]
	[h: mod = mod + gelaendekunde]

	[h: tier = json.get(uebergabe, "tier")]
	[h,if(tier == ""): tiermod = 0; tiermod = getProperty("JagdMod", tier, json.get(getTokenMap(tier), 0))]
	[h,if(tiermod != 0): modtext = modtext + modReason(tiermod, "durch "+getName(tier, json.get(getTokenMap(tier), 0)))]
	[h: mod = mod + tiermod]
}]

[h: qs = json.get(uebergabe, "qs")]
[h,if(qs == ""): qs = 0]
[h: qs = round(floor(qs/2))]
[h: reason = strformat("durch QS aus %{skill1}-Probe")]
[h,if(qs > 0): modtext = modtext + modReason(qs, reason)]
[h: mod = mod + qs]

[h: verkuerzen = json.get(uebergabe, "verkuerzen")]
[h,if(verkuerzen == ""): verkuerzen = 0]
[h,if(verkuerzen != 0): modtext = modtext + modReason(verkuerzen, "durch verkürzte Suchdauer")]
[h: mod = mod + verkuerzen]

[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]

[h: macro.return = ergebnis]