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

[h: propType = getPropertyType()]

[h,switch(propType),Code:
	case "Kraut": {
		[h,macro("editKraut@this"): currentToken()]
	};
	case "Jagdwild": {
		[h,macro("editTier@this"): currentToken()]
	};
	case "Basic": {
		[h,macro("chareditChar@this"): currentToken()]
	}
]