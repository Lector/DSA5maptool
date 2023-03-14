[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.Macros"): "gmSelectFail"]
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

[h: tBaum = eval("Liturgien")]
[h,foreach(tDaten, tBaum, ""), CODE:
	{
		[if(json.get(tDaten, "Talent") == tName), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.Macros"): "zauberDouble"]
			}
		]
	}
]
[h,if(tName == ""), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.Macros"): "noInput"]
	};{}
]
[h,if(isNumber(tWert) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.Macros"): "numText"]
	};{}
]
[h,if(tWert != round(tWert)), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.Macros"): "numInteger"]
	};{}
]
[h: closeDialog("chareditLiturgieAdd")]

[h: tProbe = json.set("{}", "Eigenschaft2", tE2, "Eigenschaft1", tE1, "Eigenschaft3", tE3 )]
[h: newTalent = json.set("{}", "Talentwert", tWert, "Anzeigen", "checked", "Spezialisierungen", "", "Probe", tProbe, "Talent", tName)]

[h: Liturgien = json.append(Liturgien, newTalent)]
[h: Liturgien = json.sort(Liturgien, "asc", "Talent")]

[h,macro("noticeSelf@lib:com.github.naxos84.Macros"): "chareditLiturgieAdd"]
[h,macro("refreshFrame@lib:com.github.naxos84.Macros"): ""]