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

[h: tArt = json.get(uebergabe, "tArt")]
[h: tAnzahl = json.get(uebergabe, "tAnzahl")]

[h: tList = '[]']
[h: num = 0]
[h,count(tAnzahl, ""), Code:
	{
		[tName = json.get(uebergabe, strformat("f%sName", num))]
		[tName = upper(tName, 1)]
		[tName = replace(tName, ",", "")]
		[tStufe = json.get(uebergabe, strformat("f%sStufe", num))]
		[if(tName == ""), Code:
			{
				[h,macro("inputFail@this"): "noInput"]
			};{}
		]
		[h: newTrait = json.set("{}", "Name", tName, "Stufe", tStufe)]
		[h: tList = json.append(tList, newTrait)]
		[num = num + 1]
	}
]

[h: closeDialog("chareditTrait")]

[h: tList = json.sort(tList, "asc", "Name")]

[h,switch(tArt),Code:
	case "Vorteile": {
		[Vorteile = tList]
		[chatNotice = "chareditVorteile"]
	};
	case "Nachteile": {
		[Nachteile = tList]
		[chatNotice = "chareditNachteile"]
	};
	case "AllgemeineSF": {
		[AllgemeineSF = tList]
		[chatNotice = "chareditSF"]
	};
	case "KampfSF": {
		[KampfSF = tList]
		[chatNotice = "chareditSF"]
	};
	case "MagieSF": {
		[MagieSF = tList]
		[chatNotice = "chareditSF"]
	};
	case "KarmaleSF": {
		[KarmaleSF = tList]
		[chatNotice = "chareditSF"]
	}
]

[h,macro("noticeSelf@this"): chatNotice]
[h: refreshFrame(currentToken())]