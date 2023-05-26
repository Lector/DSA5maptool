[h,if(isFrameVisible("meisterbogen") == 1), Code:
{
	[frame = getLibProperty("SLframe", "com.github.lector.dsa5maptool")]
	[switch(frame), code:
		case "1": {
			[h,macro("meisterbogen1@this"): "pc"]
		};
		case "2": {
			[h,macro("meisterbogen1@this"): "npc"]
		};
		case "3": {
			[h,macro("meisterbogen2@this"): "pc"]
		};
		case "4": {
			[h,macro("meisterbogen2@this"): "npc"]
		};
		default: {
		}
	]
};{}]

[h: switchToken(arg(0))]

[h,if(isFrameVisible("charbogen") == 1), Code:
{
	[frame = getStrProp(PlayerOpt, "openFrame")]
	[charbogenMacro = ""]
	[params = currentToken()]
	[switch(frame),Code:
		case "1": {
			[charbogenMacro = "charbogenEigenschaften@this"]
		};
		case "2": {
			[charbogenMacro = "charbogenKampf@this"]
			[params = json.append(currentToken(), getStrProp(PlayerOpt, "openFrameCombat"))]
		};
		case "3": {
			[charbogenMacro = "charbogenTalente@this"]
			[params = json.append(currentToken(), getStrProp(PlayerOpt, "openFrameTalente"))]
		};
		case "4": charbogenMacro = {
			["charbogenZauber@this"]
		};
		case "5": charbogenMacro = {
			["charbogenLiturgien@this"]
		};
		case "6": charbogenMacro = {
			["charbogenNotizen@this"]
		}
	]
	[h,macro(charbogenMacro): json.append(currentToken(), params)]
}]

[h,if(isFrameVisible("charbogenMini") == 1), Code:
{
	[h,macro("charbogenMini@this"): currentToken()]
}]

[h,if(isDialogVisible("chareditMain") == 1), Code:
{
	[h,macro("chareditMain@this"): currentToken()]
}]
