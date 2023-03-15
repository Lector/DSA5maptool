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

[h: iNum = json.get(uebergabe, "numItem")]
[h: iGegenstand = json.get(uebergabe, "iItem")]
[h,if(json.get(uebergabe, "iAnzahl") == ""): iAnzahl = 0; iAnzahl = json.get(uebergabe, "iAnzahl")]
[h,if(json.get(uebergabe, "iGewicht") == ""): iGewicht = 0; iGewicht = json.get(uebergabe, "iGewicht")]
[h,if(json.get(uebergabe, "iBeschreibung") == ""): iBeschreibung = "Keine Beschreibung vorhanden"; iBeschreibung = json.get(uebergabe, "iBeschreibung")]
[h: iBehaelter = json.get(uebergabe, "iBehaelter")]

[h,if(isNumber(iAnzahl) == 0 || isNumber(iGewicht) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numText"]
	};{}
]
[h,if(iAnzahl != round(iAnzahl)), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numInteger"]
	};{}
]
[h,if(iAnzahl < 0 || iGewicht < 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numNegative"]
	};{}
]
[h,if(iGegenstand == ""), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "noInput"]
	};{}
]
[h: closeDialog("inventarItemEdit")]

[h: iGegenstand = upper(iGegenstand, 1)]
[h: newItem = json.set("{}", "gegenstand", iGegenstand, "anzahl", iAnzahl, "gewicht", iGewicht, "beschreibung", iBeschreibung, "behaelter", iBehaelter)]
[h: Inventar = json.set(Inventar, iNum, newItem)]
[h: Inventar = json.sort(Inventar, "asc", "gegenstand")]
[h,macro("inventar@this"): ""]