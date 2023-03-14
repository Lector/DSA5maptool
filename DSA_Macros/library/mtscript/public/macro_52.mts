[h,macro("abfrageImpersonate@Lib:macros"): ""]
[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[switchToken(selectID)]
	};{}
]
[h,if(MaxAsP <= 0), Code:
	{
		[h,macro("inputFail@Lib:macros"): "keChange"]
	};
	{
		[h,macro("changeEnergie@Lib:macros"): "keMinus"]
	}
]