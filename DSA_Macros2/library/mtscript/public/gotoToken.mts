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
				[h,macro("charbogenEigenschaften@lib:com.github.naxos84.macros"): ""]
				};
			case "2": {
				[h,macro("charbogenKampf@lib:com.github.naxos84.macros"): ""]
				};
			case "3": {
				[h,macro("charbogenTalente@lib:com.github.naxos84.macros"): tFrame]
				};
			case "4": {
				[h,macro("charbogenZauber@lib:com.github.naxos84.macros"): ""]
				};
			case "5": {
				[h,macro("charbogenLiturgien@lib:com.github.naxos84.macros"): ""]
				};
			case "6": {
				[h,macro("charbogenNotizen@lib:com.github.naxos84.macros"): ""]
				}
		]
	};{}
]
[h,if(isGM() == 1 && hasImpersonated() == 0 && isFrameVisible("charbogenMini") == 1), Code:
	{
		[switchToken(id)]
		[h,macro("charbogenMini@lib:com.github.naxos84.macros"): ""]
	};{}
]