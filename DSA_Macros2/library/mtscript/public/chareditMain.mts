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

[h: propType = getPropertyType()]

[h,switch(propType),Code:
	case "Kraut": {
		[h,macro("editKraut@lib:com.github.naxos.Wildnis"): currentToken()]
	};
	case "Jagdwild": {
		[h,macro("editTier@lib:com.github.naxos.Wildnis"): currentToken()]
	};
	case "Basic": {
		[h,macro("chareditChar@this"): currentToken()]
	}
]