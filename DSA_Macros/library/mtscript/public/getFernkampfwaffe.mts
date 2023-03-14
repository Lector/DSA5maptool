[h,if(isGM() == 1 && hasImpersonated() == 0 && json.length(macro.args) < 2 == ""), Code:
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
[h,if(json.length(macro.args) >= 2): switchToken(arg(1))]

[h: waffe = ""]
[h, Foreach(item, Fernkampfwaffen, ""), Code:
{
	[if(json.get(item, "ID") == arg(0)),Code:
	{
		[h: waffe = item]
	};{}]
}]
[h: macro.return = waffe]