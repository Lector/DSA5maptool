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

[h: Notizen = "nAnzahl=0"]

[h,macro("noticeSelf@Lib:macros"): "notizDelAll"]
[h,macro("refreshFrame@Lib:macros"): ""]