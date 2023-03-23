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

[h: setGMNotes("")]

[h,macro("noticeSelf@lib:com.github.lector.dsa5maptool"): "notizSLDel"]
[h,macro("refreshFrame@lib:com.github.lector.dsa5maptool"): ""]