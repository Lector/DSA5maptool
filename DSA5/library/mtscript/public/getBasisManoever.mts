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

[h: atmanoever = getATBasisManoever()]
[h: fkmanoever = getFKBasisManoever()]
[h: pamanoever = getPABasisManoever()]

[h: macro.return = json.merge(atmanoever, fkmanoever, pamanoever)]