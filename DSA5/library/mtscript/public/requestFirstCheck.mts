[h,if(isGM() == 0): inputFail("gm")]]

[h,if(json.length(macro.args) == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{
		[switchToken(arg(0))]
	}
]

[h: checksInToken = Checks]
[h,if(json.length(checksInToken) == 0): inputFail("noChecks")]
[h: requestCheck(json.get(checksInToken, 0))]