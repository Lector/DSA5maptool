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
				[h,macro("charbogenEigenschaften@lib:com.github.lector.dsa5maptool"): ""]
				};
			case "2": {
				[h,macro("charbogenKampf@lib:com.github.lector.dsa5maptool"): ""]
				};
			case "3": {
				[h,macro("charbogenTalente@lib:com.github.lector.dsa5maptool"): tFrame]
				};
			case "4": {
				[h,macro("charbogenZauber@lib:com.github.lector.dsa5maptool"): ""]
				};
			case "5": {
				[h,macro("charbogenLiturgien@lib:com.github.lector.dsa5maptool"): ""]
				};
			case "6": {
				[h,macro("charbogenNotizen@lib:com.github.lector.dsa5maptool"): ""]
				}
		]
	};{}
]
[h,if(isGM() == 1 && hasImpersonated() == 0 && isFrameVisible("charbogenMini") == 1), Code:
	{
		[switchToken(id)]
		[h,macro("charbogenMini@lib:com.github.lector.dsa5maptool"): ""]
	};{}
]