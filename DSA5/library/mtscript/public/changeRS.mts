[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: id = macro.args]
[h: RuestungAktiv = id]
[h,macro("checkZustand@this"): currentToken()]
[h,macro("refreshFrame@this"): ""]