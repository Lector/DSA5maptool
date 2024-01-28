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

[h,macro("probeZauberMods@this"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]
[h: fpbonus = json.get(macro.return, "fpbonus")]
[h: bonustext = json.get(macro.return, "bonustext")]


[h: ritualplatz = json.get(uebergabe, "Ritualplatz")]
[h,if(ritualplatz == ""): ritualplatz = 0]
[h,if(ritualplatz != 0), Code:
{
	[h: modtext = modtext + modReason(ritualplatz, "wegen Ritualplatz")]
	[h: mod = mod + ritualplatz]
}]

[h: kleidung = json.get(uebergabe, "hilfsmittelKleidung")]
[h,if(kleidung == ""): kleidung = 0]
[h,if(kleidung != 0),Code:{
	[h: modtext = modtext + modReason(kleidung, "wegen passender Kleidung")]
	[h: mod = mod + kleidung]
}]

[h: hilfsmittelGeraetschaften = json.get(uebergabe, "hilfsmittelGeraetschaften")]
[h,if(hilfsmittelGeraetschaften == ""): hilfsmittelGeraetschaften = 0]
[h,if(hilfsmittelGeraetschaften != 0),Code:{
	[h: modtext = modtext + modReason(hilfsmittelGeraetschaften, "wegen passender Gerätschaften")]
	[h: mod = mod + hilfsmittelGeraetschaften]
}]

[h: zeit = json.get(uebergabe, "Zeit")]
[h,if(zeit == ""): zeit = 0]
[h,if(zeit != 0),Code:{
	[h: modtext = modtext + modReason(zeit, "wegen besonderer Sternenkonstellation")]
	[h: mod = mod + zeit]
}]

[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]
[h: ergebnis = json.set(ergebnis, "fpbonus", fpbonus)]
[h: ergebnis = json.set(ergebnis, "bonustext", bonustext)]

[h: macro.return = ergebnis]