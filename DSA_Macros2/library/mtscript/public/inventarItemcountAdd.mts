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

[h: numItem = macro.args]

[h: item = json.get(Inventar, numItem)]
[h: newAnzahl = json.get(item, "anzahl") + 1]
[h: item = json.set(item, "anzahl", newAnzahl)]
[h: Inventar = json.set(Inventar, numItem, item)]
[h,macro("inventar@this"): ""]