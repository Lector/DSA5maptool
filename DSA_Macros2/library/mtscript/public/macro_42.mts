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
				[h,macro("charbogenEigenschaften@Lib:macros"): ""]
				};
			case "2": {
				[h,macro("charbogenKampf@Lib:macros"): ""]
				};
			case "3": {
				[h,macro("charbogenTalente@Lib:macros"): tFrame]
				};
			case "4": {
				[h,macro("charbogenZauber@Lib:macros"): ""]
				};
			case "5": {
				[h,macro("charbogenLiturgien@Lib:macros"): ""]
				};
			case "6": {
				[h,macro("charbogenNotizen@Lib:macros"): ""]
				}
		]
	};{}
]
[h,if(isGM() == 1 && hasImpersonated() == 0 && isFrameVisible("charbogenMini") == 1), Code:
	{
		[switchToken(id)]
		[h,macro("charbogenMini@Lib:macros"): ""]
	};{}
]