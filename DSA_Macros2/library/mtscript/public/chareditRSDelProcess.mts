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

[h: index = macro.args]

[h: del = json.get(Ruestungen, index)]
[h: id = json.get(del, "ID")]
[h, if(id == RuestungAktiv), Code:
{
	[h,macro("changeRS@Lib:macros") : 0]
};{}]

[h: Ruestungen = json.remove(Ruestungen, index)]

[h: closeDialog("chareditRSDel")]

[h,macro("noticeSelf@Lib:macros"): "delRS"]
[h,macro("refreshFrame@Lib:macros"): ""]