[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: Notizen = "nAnzahl=0"]

[h,macro("noticeSelf@lib:com.github.naxos84.macros"): "notizDelAll"]
[h,macro("refreshFrame@lib:com.github.naxos84.macros"): ""]