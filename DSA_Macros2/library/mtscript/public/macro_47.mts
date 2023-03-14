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

[h: tArt = json.get(uebergabe, "tArt")]
[h: tAnzahl = json.get(uebergabe, "tAnzahl")]

[h: tList = '[]']
[h: num = 0]
[h,count(tAnzahl, ""), Code:
	{
		[tName = json.get(uebergabe, strformat("f%sName", num))]
		[tName = upper(tName, 1)]
		[tName = replace(tName, ",", "")]
		[tE1 = json.get(uebergabe, strformat("f%sE1", num))]
		[tE2 = json.get(uebergabe, strformat("f%sE2", num))]
		[tE3 = json.get(uebergabe, strformat("f%sE3", num))]
		[tWert = json.get(uebergabe, strformat("f%sWert", num))]
		[if(tWert == ""): tWert = 0]
		[if(tName == ""), Code:
			{
				[h,macro("inputFail@Lib:macros"): "noInput"]
			};{}
		]
		[if(isNumber(tWert) == 0), Code:
			{
				[h,macro("inputFail@Lib:macros"): "numText"]
			};{}
		]
		[if(tWert != round(tWert)), Code:
			{
				[h,macro("inputFail@Lib:macros"): "numInteger"]
			};{}
		]
		[h: tProbe = json.set("{}", "Eigenschaft2", tE2, "Eigenschaft1", tE1, "Eigenschaft3", tE3 )]
		[h: newTalent = json.set("{}", "Talentwert", tWert, "Anzeigen", "checked", "Spezialisierungen", "", "Probe", tProbe, "Talent", tName)]
		[h: merkmal = json.get(uebergabe, strformat("f%sMerkmal", num))]
		[h,if(merkmal != ""): newTalent = json.set(newTalent, "Merkmal", merkmal)]
		[h: tList = json.append(tList, newTalent)]
		[num = num + 1]
	}
]

[h: closeDialog("chareditTalent")]

[h,switch(tArt),code:
	case "Koerper": {
		[Koerper = tList]
		[Koerper = json.sort(Koerper, "asc", "Talent")]
	};
	case "Gesellschaft": {
		[Gesellschaft = tList]
		[Gesellschaft = json.sort(Gesellschaft, "asc", "Talent")]
	};
	case "Wissen": {
		[Wissen = tList]
		[Wissen = json.sort(Wissen, "asc", "Talent")]
	};
	case "Natur": {
		[Natur = tList]
		[Natur = json.sort(Natur, "asc", "Talent")]
	};
	case "SprachenSchriften": {
		[SprachenSchriften = tList]
		[SprachenSchriften = json.sort(SprachenSchriften, "asc", "Talent")]
	};
	case "Handwerk": {
		[Handwerk = tList]
		[Handwerk = json.sort(Handwerk, "asc", "Talent")]
	};
	case "Kampftalente": {
		[Kampftalente = tList]
		[Kampftalente = json.sort(Kampftalente, "asc", "Talent")]
	};
	case "Gaben": {
		[Gaben = tList]
		[Gaben = json.sort(Gaben, "asc", "Talent")]
	};
	case "Zauber": {
		[Zauber = tList]
		[Zauber = json.sort(Zauber, "asc", "Talent")]
	};
	case "Liturgien": {
		[Liturgien = tList]
		[Liturgien = json.sort(Liturgien, "asc", "Talent")]
	};
	case "Zeremonien": {
		[Zeremonien = tList]
		[Zeremonien = json.sort(Zeremonien, "asc", "Talent")]
	};
	case "Rituale": {
		[Rituale = tList]
		[Rituale = json.sort(Rituale, "asc", "Talent")]
	};
	case "MagischeHandlungen": {
		[MagischeHandlungen = tList]
		[MagischeHandlungen = json.sort(MagischeHandlungen, "asc", "Talent")]
		[MagischeHandlungenSingular = json.get(uebergabe, "singular")]
		[MagischeHandlungenPlural = json.get(uebergabe, "plural")]
	};
]


[h,if(tArt == "Zauber" || tArt == "Rituale" || tArt == "MagischeHandlungen"): chatNotice = "chareditZauber"; chatNotice = "chareditTalent"]
[h,macro("noticeSelf@Lib:macros"): chatNotice]
[h,macro("refreshFrame@Lib:macros"): ""]