[h: params = macro.args]
[h: swarmBase = json.get(params, "token")]
[h: cnt = json.get(params, "count")]
[h: gg = json.get(params, "gg")]

[h,if(isNumber(cnt) == 0 || isNumber(gg) == 0), Code:
{
	[h,macro("inputFail@this"): "numText"]
};{}]
[h,if(cnt != round(cnt) || gg != round(gg)), Code:
{
	[h,macro("inputFail@this"): "numInteger"]
};{}]
[h,if(cnt <= 0 || gg <= 0), Code:
{
	[h,macro("inputFail@this"): "numNegative"]
};{}]

[h: closeDialog("createSwarm")]

[h: switchToken(swarmBase)]
[h: lepPerCreature = MaxLeP]
[h: SchwarmGG = gg]
[h,if(Schwarm != 1),Code:
{
	[h: label = strformat("Schwarm aus %{cnt} Wesen")]
	[h: changes = json.set("{}", "label", label)]
	[h: newToken = copyToken(swarmBase, 1, getCurrentMapName(), changes)]
	[h: switchToken(newToken)]
	[h: Schwarm = 1]
	[h: SchwarmGG = gg]
	[h: SchwarmAnzahl = cnt]
	[h: SchwarmEinzelLeP = lepPerCreature]
	[h: MaxLeP = lePPerCreature * cnt]
	[h: LeP = MaxLeP]
	[h: checkZustand(newToken)]
};{}]
