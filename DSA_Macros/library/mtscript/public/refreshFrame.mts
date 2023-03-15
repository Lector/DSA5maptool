[h,if(isFrameVisible("meisterbogen") == 1), Code:
{
	[frame = getLibProperty("SLframe", "com.github.naxos84.macros")]
	[switch(frame), code:
		case "1": {
			[h,macro("meisterbogen1@lib:com.github.naxos84.macros2"): "pc"]
		};
		case "2": {
			[h,macro("meisterbogen1@lib:com.github.naxos84.macros2"): "npc"]
		};
		case "3": {
			[h,macro("meisterbogen2@lib:com.github.naxos84.macros2"): "pc"]
		};
		case "4": {
			[h,macro("meisterbogen2@lib:com.github.naxos84.macros2"): "npc"]
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
			case "1": charbogenMacro = "charbogenEigenschaften@this";
			case "2": charbogenMacro = "charbogenKampf@this";
			case "3": charbogenMacro = "charbogenTalente@this";
			case "4": charbogenMacro = "charbogenZauber@this";
			case "5": charbogenMacro = "charbogenLiturgien@this";
			case "6": charbogenMacro = "charbogenNotizen@this"
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
		[h,macro("charbogenMini@this"): ""]
	}]
};{}]

[h,if(isDialogVisible("chareditMain") == 1), Code:
{
	[h,macro("chareditMain@lib:com.github.naxos84.macros2"): ""]
};{}]
