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

[h: ausdruckVergleich = getLibProperty\("ImpAusdruckVergleich","com.github.naxos84.macros")]
[h: tArt = json.get(uebergabe, "fTalentart")]
[h,if(tArt == listGet(ausdruckVergleich, 12)): tArt = "Koerper"]
[h,if(tArt == "Kampf"): tArt = "Kampftalente"]
[h,if(tArt == "Sprachen"): tArt = "SprachenSchriften"]
[h: tName = json.get(uebergabe, "fTalentname")]
[h: tName = upper(tName, 1)]
[h: tName = replace(tName, ",", "")]
[h,if(json.get(uebergabe, "fTalentwert") == ""): tWert = 0; tWert = json.get(uebergabe, "fTalentwert")]
[h: tE1 = json.get(uebergabe, "e1")]
[h: tE2 = json.get(uebergabe, "e2")]
[h: tE3 = json.get(uebergabe, "e3")]

[h: tBaum = eval(tArt)]
[h,foreach(tDaten, tBaum, ""), CODE:
	{
		[if(json.get(tDaten, "Talent") == tName), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.macros"): "talentDouble"]
			}
		]
	}
]
[h,if(tName == ""), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "noInput"]
	};{}
]
[h,if(isNumber(tWert) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numText"]
	};{}
]
[h,if(tWert != round(tWert)), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numInteger"]
	};{}
]
[h: closeDialog("chareditTalentAdd")]

[h: tProbe = json.set("{}", "Eigenschaft2", tE2, "Eigenschaft1", tE1, "Eigenschaft3", tE3 )]
[h: newTalent = json.set("{}", "Talentwert", tWert, "Anzeigen", "checked", "Spezialisierungen", "", "Probe", tProbe, "Talent", tName)]

[h,switch(tArt),code:
	case "Koerper": {
		[Koerper = json.append(Koerper, newTalent)]
		[Koerper = json.sort(Koerper, "asc", "Talent")]
		};
	case "Gesellschaft": {
		[Gesellschaft = json.append(Gesellschaft, newTalent)]
		[Gesellschaft = json.sort(Gesellschaft, "asc", "Talent")]
		};
	case "Wissen": {
		[Wissen = json.append(Wissen, newTalent)]
		[Wissen = json.sort(Wissen, "asc", "Talent")]
		};
	case "Natur": {
		[Natur = json.append(Natur, newTalent)]
		[Natur = json.sort(Natur, "asc", "Talent")]
		};
	case "Handwerk": {
		[Handwerk = json.append(Handwerk, newTalent)]
		[Handwerk = json.sort(Handwerk, "asc", "Talent")]
		};
	case "Kampftalente": {
		[Kampftalente = json.append(Kampftalente, newTalent)]
		[Kampftalente = json.sort(Kampftalente, "asc", "Talent")]
		};
	case "Gaben": {
		[Gaben = json.append(Gaben, newTalent)]
		[Gaben = json.sort(Gaben, "asc", "Talent")]
		}
]

[h,if(tName == "Akrobatik" && tArt == "Koerper"): AW = AW + max(0, floor((tWert-9)/3))]
[h,if(AW < 1): AW = 0]

[h,macro("noticeSelf@lib:com.github.naxos84.macros"): "chareditTalentAdd"]
[h,macro("refreshFrame@lib:com.github.naxos84.macros"): ""]