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

[h: numContainer = json.get(uebergabe, "numContainer")]
[h: iGegenstand = json.get(uebergabe, "iItem")]
[h,if(json.get(uebergabe, "iAnzahl") == ""): iAnzahl = 0; iAnzahl = json.get(uebergabe, "iAnzahl")]
[h,if(json.get(uebergabe, "iGewicht") == ""): iGewicht = 0; iGewicht = json.get(uebergabe, "iGewicht")]
[h,if(json.get(uebergabe, "iBeschreibung") == ""): iBeschreibung = "Keine Beschreibung vorhanden"; iBeschreibung = json.get(uebergabe, "iBeschreibung")]

[h,if(isNumber(iAnzahl) == 0 || isNumber(iGewicht) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numText"]
	};{}
]
[h,if(iAnzahl != round(iAnzahl)), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numInteger"]
	};{}
]
[h,if(iAnzahl < 0 || iGewicht < 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numNegative"]
	};{}
]
[h,if(iGegenstand == ""), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "noInput"]
	};{}
]
[h: closeDialog("inventarAdd")]

[h: iGegenstand = upper(iGegenstand, 1)]
[h: newItem = json.set("{}", "gegenstand", iGegenstand, "anzahl", iAnzahl, "gewicht", iGewicht, "beschreibung", iBeschreibung, "behaelter", numContainer)]
[h: Inventar = json.append(Inventar, newItem)]
[h: Inventar = json.sort(Inventar, "asc", "gegenstand")]
[h,macro("inventar@this"): ""]