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

[h: id = macro.args]
[h: Reittier = id]
[h,macro("checkZustand@Lib:macros"): currentToken()]
[h,macro("refreshFrame@Lib:macros"): ""]