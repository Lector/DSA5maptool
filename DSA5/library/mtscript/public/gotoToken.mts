[h: id = macro.args]
[h: goto(id)]
[h: selectTokens(id, 0)]

[h,if(isGM() == 1 && hasImpersonated() == 0 && isFrameVisible("charbogen") == 1), Code:
	{
		[switchToken(id)]
		[frame = getStrProp(PlayerOpt, "openFrame")]
		[tFrame = getStrProp(PlayerOpt, "openFrameTalente")]
		[switch(frame), code:
			case "1": {
				[h,macro("charbogenEigenschaften@this"): ""]
				};
			case "2": {
				[h,macro("charbogenKampf@this"): ""]
				};
			case "3": {
				[h,macro("charbogenTalente@this"): tFrame]
				};
			case "4": {
				[h,macro("charbogenZauber@this"): ""]
				};
			case "5": {
				[h,macro("charbogenLiturgien@this"): ""]
				};
			case "6": {
				[h,macro("charbogenNotizen@this"): ""]
				}
		]
	};{}
]
[h,if(isGM() == 1 && hasImpersonated() == 0 && isFrameVisible("charbogenMini") == 1), Code:
	{
		[switchToken(id)]
		[h,macro("charbogenMini@this"): ""]
	};{}
]