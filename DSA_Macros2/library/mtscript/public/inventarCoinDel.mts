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

[h: InventarMisc = json.set(InventarMisc, "dukaten", 0)]
[h: InventarMisc = json.set(InventarMisc, "silbertaler", 0)]
[h: InventarMisc = json.set(InventarMisc, "heller", 0)]
[h: InventarMisc = json.set(InventarMisc, "kreuzer", 0)]

[h,macro("inventar@this"): ""]