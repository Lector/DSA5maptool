[h,if(isGM() == 1 && hasImpersonated() == 0 && arg(1) == ""), Code:
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
[h,if(arg(1) != ""): switchToken(arg(1))]

[h: technik = ""]
[h, Foreach(item, Kampftechniken, ""), Code:
{
	[if(json.get(item, "Name") == arg(0)),Code:
	{
		[h: technik = item]
	};{}]
}]
[h: macro.return = technik]