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

[h: numItem = json.get(uebergabe, "numItem")]
[h: moveAnzahl = json.get(uebergabe, "fAnzahl")]
[h: numBehaelter = json.get(uebergabe, "bAuswahl")]

[h: item = json.get(Inventar, numItem)]

[h,if(moveAnzahl == ""): moveAnzahl = 0; moveAnzahl = moveAnzahl]
[h,if(isNumber(moveAnzahl) == 0), Code:
	{
		[h,macro("inputFail@Lib:macros"): "numText"]
	};{}
]
[h,if(moveAnzahl != round(moveAnzahl)), Code:
	{
		[h,macro("inputFail@Lib:macros"): "numInteger"]
	};{}
]
[h,if(moveAnzahl < 0), Code:
	{
		[h,macro("inputFail@Lib:macros"): "numNegative"]
	};{}
]
[h: closeDialog("inventarItemMove")]

[h,if(moveAnzahl >= json.get(item, "anzahl")), code:
	{
		[oldItem = json.set(item, "behaelter", numBehaelter)]
		[Inventar = json.set(Inventar, numItem, oldItem)]
	};
	{
		[newAnzahl = json.get(item, "anzahl") - moveAnzahl]
		[oldItem = json.set(item, "anzahl", newAnzahl)]
		[Inventar = json.set(Inventar, numItem, oldItem)]
		[newItem = json.set(item, "anzahl", moveAnzahl)]
		[newItem = json.set(newItem, "behaelter", numBehaelter)]
		[Inventar = json.append(Inventar, newItem)]
	}
]
[Inventar = json.sort(Inventar, "asc", "gegenstand")]

[h,macro("inventar@this"): ""]