[h,if(isGM() == 1 && hasImpersonated() == 0 && json.length(macro.args) < 4), Code:
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
[h,if(json.length(macro.args) >= 4): tok = arg(3); tok = currentToken()]

[h,if(json.length(macro.args) <= 2): vergleich = 1; vergleich = arg(2)]
[h: traitLevel = getTraitLevel(arg(0), arg(1), tok)]
[h,if(traitLevel >= vergleich): macro.return = 1; macro.return = 0]