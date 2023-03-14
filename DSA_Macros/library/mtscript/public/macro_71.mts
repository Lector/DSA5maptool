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

[h,macro("probeZauberMods@Lib:macros"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: ritualplatz = json.get(uebergabe, "Ritualplatz")]
[h,if(json.get(uebergabe, "hilfsmittelKleidung") == 1): hilfsmittelKleidung = 1; hilfsmittelKleidung = 0]
[h,if(json.get(uebergabe, "hilfsmittelGeraetschaften") == 1): hilfsmittelGeraetschaften = 1; hilfsmittelGeraetschaften = 0]
[h: zeit = json.get(uebergabe, "Zeit")]

[h: mod = mod + hilfsmittelKleidung
			+ ritualplatz
			+ hilfsmittelGeraetschaften
			+ zeit]

[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]

[h: macro.return = ergebnis]