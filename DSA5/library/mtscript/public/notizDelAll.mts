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

[h: Notizen = "nAnzahl=0"]

[h,macro("noticeSelf@this"): "notizDelAll"]
[h: refreshFrame(currentToken())]