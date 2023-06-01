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

[h: uebergabe = macro.args]
[h: list = getStrProp(uebergabe, "list")]
[h: frameToRefresh = getStrProp(uebergabe, "frame")]
[h: index = getStrProp(uebergabe, "index")]
[h: noticeKey = getStrProp(uebergabe, "noticeKey")]

[h: delCmd = strformat("%{list} = json.remove(%{list}, %{index})")]
[h: eval(delCmd)]

[h,if(noticeKey != ""),Code:{
	[h,macro("noticeSelf@this"): noticeKey]
};{}]
[h: refreshFrame(currentToken())]
[h,macro(frameToRefresh): list]