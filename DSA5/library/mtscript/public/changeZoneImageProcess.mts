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

[h: optList = macro.args]
[h: closeDialog("changeZoneImage")]
[r: optList]
[r: listGet(optList, 0)]
[h,if(listGet(optList, 0) == "rs"), Code:
	{
		[PlayerOpt = setStrProp(PlayerOpt, "imageRS", listGet(optList, 1))]
	};
	{
		[PlayerOpt = setStrProp(PlayerOpt, "imageWU", listGet(optList, 1))]
	}
]
[h,if(isFrameVisible("charbogen") == 1 && getStrProp(PlayerOpt, "openFrame") == 2), Code:
	{
		[h,macro("charbogenKampf@this"): ""]
	};{}
]