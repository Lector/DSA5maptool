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

[h: titel = json.get(uebergabe, "titel")]
[h,if(json.get(uebergabe, "startwert") == ""): startwert = 0; startwert = json.get(uebergabe, "startwert")]
[h,if(isNumber(startwert) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numText"]
	};{}
]
[h,if(startwert != round(startwert)), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numInteger"]
	};{}
]
[h: closeDialog("counter")]
[h: MiscMod = setStrProp(MiscMod, "counter", startwert)]
[h: MiscMod = setStrProp(MiscMod, "counterTitle", titel)]

[h,macro("noticeSelf@lib:com.github.lector.dsa5maptool"): "counter"]