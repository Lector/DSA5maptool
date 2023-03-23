[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: propType = getPropertyType()]

[h,switch(propType),Code:
	case "Kraut": {
		[h,macro("editKraut@lib:com.github.lector.dsa5maptool"): currentToken()]
	};
	case "Jagdwild": {
		[h,macro("editTier@lib:com.github.lector.dsa5maptool"): currentToken()]
	};
	case "Basic": {
		[h,macro("chareditChar@this"): currentToken()]
	}
]