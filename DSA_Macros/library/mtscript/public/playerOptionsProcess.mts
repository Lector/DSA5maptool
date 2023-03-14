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

[h,if(json.get(uebergabe, "fLastFrame") == ""): fLastFrame = 0; fLastFrame = 1]

[h: closeDialog("playerOptions")]

[h: PlayerOpt = setStrProp(PlayerOpt, "lastFrame", fLastFrame)]

[h,macro("noticeSelf@this"): "playerOptions"]