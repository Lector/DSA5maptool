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

[h,macro("probeSpruchMods@this"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: fpbonus = json.get(macro.return, "fpbonus")]
[h: bonustext = json.get(macro.return, "bonustext")]
[h: modtext = json.get(macro.return, "modtext")]

<!-- Platz fuer Liturgiespezifische Modifikationen -->

[h: name = json.get(uebergabe, "Name")]
[h,if(hasTrait("KarmaleSF", "Lieblingsliturgie ("+name+")") > 0),Code:{
	[fpbonus = fpbonus + 2]
	[bonustext = bonustext + modReason(2, "wegen Lieblingsliturgie")]
}]

[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "fpbonus", fpbonus)]
[h: ergebnis = json.set(ergebnis, "bonustext", bonustext)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]

[h: macro.return = ergebnis]