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

[h: tName = json.get(uebergabe, "fZaubername")]
[h: tName = upper(tName, 1)]
[h: tName = replace(tName, ",", "")]
[h,if(json.get(uebergabe, "fZfW") == ""): tWert = 0; tWert = json.get(uebergabe, "fZfW")]
[h: tE1 = json.get(uebergabe, "e1")]
[h: tE2 = json.get(uebergabe, "e2")]
[h: tE3 = json.get(uebergabe, "e3")]
[h: tMerkmal = json.get(uebergabe, "merkmal")]
[h: typ = json.get(uebergabe, "typ")]

[h: tBaum = eval(typ)]
[h,foreach(tDaten, tBaum, ""), CODE:
	{
		[if(json.get(tDaten, "Talent") == tName), Code:
			{
				[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "zauberDouble"]
			}
		]
	}
]
[h,if(tName == ""), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "noInput"]
	};{}
]
[h,if(isNumber(tWert) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numText"]
	};{}
]
[h,if(tWert != round(tWert)), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numInteger"]
	};{}
]
[h: closeDialog("chareditMagieAdd")]

[h: tProbe = json.set("{}", "Eigenschaft2", tE2, "Eigenschaft1", tE1, "Eigenschaft3", tE3 )]
[h: newTalent = json.set("{}", "Talentwert", tWert, "Anzeigen", "checked", "Spezialisierungen", "", "Probe", tProbe, "Talent", tName, "Merkmal", tMerkmal)]

[h,switch(typ),Code:
	case "Zauber": {
		[h: Zauber = json.append(Zauber, newTalent)]
		[h: Zauber = json.sort(Zauber, "asc", "Talent")]
	};
	case "Rituale": {
		[h: Rituale = json.append(Rituale, newTalent)]
		[h: Rituale = json.sort(Rituale, "asc", "Talent")]
	};
	case "MagischeHandlungen": {
		[h: MagischeHandlungen = json.append(MagischeHandlungen, newTalent)]
		[h: MagischeHandlungen = json.sort(MagischeHandlungen, "asc", "Talent")]
	}
]

[h,macro("noticeSelf@lib:com.github.lector.dsa5maptool"): "chareditZauberAdd"]
[h,macro("refreshFrame@lib:com.github.lector.dsa5maptool"): ""]