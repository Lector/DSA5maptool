[h,macro("abfrageImpersonate@this"): ""]
[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[switchToken(selectID)]
	};{}
]
[h,if(MaxKaP <= 0), Code:
	{
		[h,macro("inputFail@this"): "keChange"]
	};
	{
		[h,macro("changeEnergie@this"): "kePlus"]
	}
]