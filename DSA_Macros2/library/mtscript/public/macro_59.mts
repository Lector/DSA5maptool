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

[h: numItem = macro.args]

[h: item = json.get(Inventar, numItem)]
[h: newAnzahl = json.get(item, "anzahl") - 1]
[h,if(newAnzahl >= 0), Code:
	{
		[item = json.set(item, "anzahl", newAnzahl)]
		[Inventar = json.set(Inventar, numItem, item)]
		[h,macro("inventar@Lib:macros2"): ""]
	};{}
]