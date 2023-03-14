[h,if(isGM() == 1 && hasImpersonated() == 0 && json.length(macro.args) == 0), Code:
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

[h,if(json.length(macro.args) > 0): switchToken(arg(0))]

[h: ws = round(KO / 2.0)]

[h,if(hasTrait("Vorteile", "Eisern") != 0): ws = ws + 1]
[h,if(hasTrait("Nachteile", "Gläsern") != 0): ws = ws - 1]

[h: macro.return = ws]