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

[h: Typ = json.get(uebergabe, "Typ")]

[h: tName = json.get(uebergabe, "Name")]
[h: tName = upper(tName, 1)]
[h: tName = replace(tName, ",", "")]

[h: Stufe = json.get(uebergabe, "Stufe")]

[h: tBaum = eval(Typ)]
[h,foreach(tDaten, tBaum, ""), CODE:
	{
		[if(json.get(tDaten, "Name") == tName), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.Macros"): "traitDouble"]
			}
		]
	}
]
[h,if(tName == ""), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.Macros"): "noInput"]
	};{}
]
[h: closeDialog("chareditTraitAdd")]

[h: newTrait = json.set("{}", "Name", tName, "Stufe", Stufe)]

[h,switch(Typ),code:
	case "Vorteile": {
		[Vorteile = json.append(Vorteile, newTrait)]
		[Vorteile = json.sort(Vorteile, "asc", "Name")]
		};
	case "Nachteile": {
		[Nachteile = json.append(Nachteile, newTrait)]
		[Nachteile = json.sort(Nachteile, "asc", "Name")]
		};
	case "AllgemeineSF": {
		[AllgemeineSF = json.append(AllgemeineSF, newTrait)]
		[AllgemeineSF = json.sort(AllgemeineSF, "asc", "Name")]
		};
	case "KampfSF": {
		[KampfSF = json.append(KampfSF, newTrait)]
		[KampfSF = json.sort(KampfSF, "asc", "Name")]
		};
	case "MagieSF": {
		[MagieSF = json.append(MagieSF, newTrait)]
		[MagieSF = json.sort(MagieSF, "asc", "Name")]
		};
	case "KarmaleSF": {
		[KarmaleSF = json.append(KarmaleSF, newTrait)]
		[KarmaleSF = json.sort(KarmaleSF, "asc", "Name")]
		};
	case "Zaubertricks": {
		[Zaubertricks = json.append(Zaubertricks, newTrait)]
		[Zaubertricks = json.sort(Zaubertricks, "asc", "Name")]
	};
	case "Segnungen": {
		[Segnungen = json.append(Segnungen, newTrait)]
		[Segnungen = json.sort(Segnungen, "asc", "Name")]
	}
]

[h,macro("noticeSelf@lib:com.github.naxos84.Macros"): "chareditTraitAdd"]
[h,macro("refreshFrame@lib:com.github.naxos84.Macros"): ""]