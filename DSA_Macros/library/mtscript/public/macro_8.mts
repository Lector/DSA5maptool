[h,if(isFrameVisible("meisterbogen") == 1), Code:
{
	[frame = getLibProperty("SLframe", "Lib:macros")]
	[switch(frame), code:
		case "1": {
			[h,macro("meisterbogen1@Lib:macros2"): "pc"]
		};
		case "2": {
			[h,macro("meisterbogen1@Lib:macros2"): "npc"]
		};
		case "3": {
			[h,macro("meisterbogen2@Lib:macros2"): "pc"]
		};
		case "4": {
			[h,macro("meisterbogen2@Lib:macros2"): "npc"]
		};
		default: {
		}
	]
};{}]

[h: closeFrames = 0]
[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
{
	[selectID = getSelected()]
	[if(listCount(selectID) != 1), Code:
	{
		[h: closeFrames = 1]
	};
	{
		[switchToken(selectID)]
	}]
};{}]

[h,if(isFrameVisible("charbogen") == 1), Code:
{
	[h,if(closeFrames == 1),Code:{
		[h: closeFrame("charbogen")]
	};{	
		[frame = getStrProp(PlayerOpt, "openFrame")]
		[tFrame = getStrProp(PlayerOpt, "openFrameTalente")]
		[h: charbogenMacro = ""]
		[h: params = tFrame]
		[switch(frame):
			case "1": charbogenMacro = "charbogenEigenschaften@Lib:macros";
			case "2": charbogenMacro = "charbogenKampf@Lib:macros";
			case "3": charbogenMacro = "charbogenTalente@Lib:macros";
			case "4": charbogenMacro = "charbogenZauber@Lib:macros";
			case "5": charbogenMacro = "charbogenLiturgien@Lib:macros";
			case "6": charbogenMacro = "charbogenNotizen@Lib:macros"
		]
		[h,macro(charbogenMacro): params]
	}]
};{}]

[h,if(isFrameVisible("charbogenMini") == 1), Code:
{
	[h,if(closeFrames == 1),Code:
	{
		[h: closeFrame("charbogenMini")]
	};{
		[h,macro("charbogenMini@Lib:macros"): ""]
	}]
};{}]

[h,if(isDialogVisible("chareditMain") == 1), Code:
{
	[h,macro("chareditMain@Lib:macros2"): ""]
};{}]
