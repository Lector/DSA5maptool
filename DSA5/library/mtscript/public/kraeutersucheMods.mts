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

[h,macro("pflanzensucheMods@this"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: skill = json.get(uebergabe, "Skill")]
[h,if(skill == "Pflanzenkunde"),Code:
{
	[h: kraut = json.get(uebergabe, "krautSelection")]
	[h,if(kraut != ""),Code:{
		[krautMod = getProperty("Suchschwierigkeit", kraut, "Spieltisch")]
		[modtext = modtext + modReason(krautMod, "wegen Suchschwierigkeit von " + getName(kraut, "Spieltisch"))]
		[mod = mod + krautMod]
	};
	{
		[modtext = modtext + modReason(-1, "wegen allgemeiner Kräutersuche")]
		[mod = mod - 1]
	}]
}]

[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]

[h: macro.return = ergebnis]