[h,if(isGM() == 1 && hasImpersonated() == 0 && json.length(macro.args) < 2), Code:
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
[h,if(json.length(macro.args) >= 2): switchToken(arg(1))]

[h: rs = ""]
[h, Foreach(item, Ruestungen, ""), Code:
{
	[if(json.get(item, "ID") == arg(0)),Code:
	{
		[h: rs = item]
	};{}]
}]
[h: macro.return = rs]