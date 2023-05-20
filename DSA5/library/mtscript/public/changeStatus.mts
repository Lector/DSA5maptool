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

[h: uebergabe = macro.args]
[h: status = getState(uebergabe)]
[h,if(status == 1): setState(uebergabe, 0); setState(uebergabe, 1)]
[h: refreshFrame(currentToken())]