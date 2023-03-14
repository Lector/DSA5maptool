[h,if(isGM() == 1 && hasImpersonated() == 0 && json.length(macro.args) < 2), Code:
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

[h,if(json.length(macro.args) >= 2): tok = arg(1); tok = currentToken()]

[h: macro.return = getProperty(upper(arg(0)), tok, tokenMap(tok))]