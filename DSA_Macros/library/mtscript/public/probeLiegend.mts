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

[h,if(getState("Liegend") == 1), Code:
	{
		[auswahlLiegend = "checked='checked'"]		
	};
	{
		[auswahlLiegend = ""]
	}
]
<input type='checkBox' name='liegend' value='[r: arg(0)]' [r: auswahlLiegend]/>