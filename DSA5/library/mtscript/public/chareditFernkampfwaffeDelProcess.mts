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

[h: index = macro.args]

[h: id = json.get(json.get(Fernkampfwaffen, index), "ID")]

[h,if(FKWaffe == id): FKWaffe = -1]

[h: Fernkampfwaffen = json.remove(Fernkampfwaffen, index)]

[h: closeDialog("chareditWaffeDel")]

[h,macro("noticeSelf@lib:com.github.lector.dsa5maptool"): "delWaffe"]
[h,macro("refreshFrame@lib:com.github.lector.dsa5maptool"): ""]