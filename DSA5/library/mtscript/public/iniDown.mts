[h,macro("abfrageImpersonate@Lib:com.github.lector.dsa5maptool"): ""]
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

[h: listINI = getInitiative()]
[h,if(isNumber(listINI) == 1): token.init = listINI - 1]
[h: sortInitiative()]