[h,macro("abfrageImpersonate@this"): ""]
[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[switchToken(selectID)]
	};{}
]
[h,if(getStrProp(PlayerOpt, "lastFrame") == 1), Code:
	{
		[switch(getStrProp(PlayerOpt, "openFrame")), Code:
			case "1": {
				[h,macro("charbogenEigenschaften@this"): ""]
			};
			case "2": {
				[h,macro("charbogenKampf@this"): ""]
			};
			case "3": {
				[tFrame = getStrProp(PlayerOpt, "openFrameTalente")]
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
	};
	{
		[h,macro("charbogenEigenschaften@this"): ""]
	}
]