[h,if(isGM() == 1 && hasImpersonated() == 0 && json.length(macro.args) < 1), Code:
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
[h,if(json.length(macro.args) >= 1): switchToken(arg(0))]

[h: baum = eval("Kampftechniken")]
[h: ausgabe = ""]
[h,Foreach(technik, baum, ""), CODE:
{
	[h: l = json.get(technik, "L")]
	[if(!json.equals(l, "FF")): ausgabe = json.append(ausgabe, technik)]
}]
[h: macro.return = ausgabe]