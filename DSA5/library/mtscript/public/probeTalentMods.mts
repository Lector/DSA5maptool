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
[h: tok = json.get(uebergabe, "self")]
[h: map = tokenMap(tok)]
[h: skill = json.get(uebergabe, "Skill")]

[h,macro("probe3w20Mods@this"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h,if(json.get(uebergabe, "Spezialisierung"+skill) == 2): bonus = bonus + 2]
[h,if(json.get(uebergabe, "MirakelTalent"+skill) == 2): bonus = bonus + 2]

[h: stand = json.get(uebergabe, "stand")]
[h,if(stand == ""): stand = 0]
[h,if(stand > 0),Code:{
	[h: modtext = modtext + modReason(stand, "wegen sozialen Standes")]
	[h: mod = mod + stand]
}]


[h: typ = getProperty("Typus", tok, map)]
[h,if(listContains("Dämon, Elementar, Geist, Golem, Golemid, Untoter", typ) == 0),Code:
{
	[h: checkBel = json.get(uebergabe, "BelastungAuswahl" + skill)]
	[h: bel = json.get(uebergabe, "Belastung" + skill)]
	[h,if(bel == "" && checkBel == ""): bel = listContains(getBelastungsTalente(), skill)]
	[h,if(bel == ""): bel = 0]
	[h: belast = getProperty("Belastung", tok, map)]
	[h,if(bel >= 1 && belast >= 1), Code:
	{
		[h: modtext = modtext + modReason(-belast, "wegen Belastung")]
		[h: mod = mod - belast]
	}]

	[h: tra = getProperty("Trance", tok, map)]
	[h,if(tra == 2 && json.get(uebergabe, "wohlgefallen"+skill) != 1), Code:
	{
		[h: modtext = modtext + modReason(-tra, "wegen Trance")]
		[h: mod = mod - tra]
	}]
	[h: uber = getProperty("Ueberanstrengung", tok, map)]
	[h,if(json.get(uebergabe, "gruppe") == "Wissen" && uber > 0), Code:
	{
		[h: modtext = modtext + modReason(-uber, "wegen Ueberanstrengung")]
		[h: mod = mod - uber]
	}]
}]

[h: richtungssinn = hasTrait("Vorteile", "Richtungssinn", 1, tok)]
[h,if(json.get(uebergabe, "Name") == "Orientierung" && richtungssinn == 1),Code:
{
	[h: mod = mod + 1]
	[h: modtext = modtext + modReason(1, "wegen Richtungssinn")]
};{}]

[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]

[h: macro.return = ergebnis]