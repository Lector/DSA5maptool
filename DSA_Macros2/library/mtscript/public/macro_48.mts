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

[h: propType = getPropertyType()]

[h,switch(propType),Code:
	case "Kraut": {
		[h,macro("editKraut@Lib:Wildnis"): currentToken()]
	};
	case "Jagdwild": {
		[h,macro("editTier@Lib:Wildnis"): currentToken()]
	};
	case "Basic": {
		[h,macro("chareditChar@Lib:macros2"): currentToken()]
	}
]