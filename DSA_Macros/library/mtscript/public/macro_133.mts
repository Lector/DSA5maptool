[h,if(isGM() == 1 && hasImpersonated() == 0 && arg(0) == ""), Code:
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
[h,if(arg(0) != ""): switchToken(arg(0))]

[h: macro.return = AW + getStrProp(TempMod, "aw")]