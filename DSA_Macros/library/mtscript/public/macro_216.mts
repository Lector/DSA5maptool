[h: uebergabe = macro.args]
[h: tokens = json.get(uebergabe, "tokens")]
[h: toMove = "[]"]
[h,foreach(tok, tokens, ""),Code:
{
	[h,if(json.get(uebergabe, tok) == "on"): toMove = json.append(toMove, tok)]
}]
[h: newMap = json.get(uebergabe, "map")]

[h: spawn = ""]
[h: foundSpecific = 0]
[h: conditions = json.set("", "propertyType", "Teleporter", "layer", "[Token, Hidden, Object, Background]", "mapName", newMap)]
[h: teleporter = getTokens("json", conditions)]
[h,foreach(tel, teleporter),
if(foundSpecific == 0),
if(getProperty("IsEntry", tel, newMap) == 1),Code:
{

	[h: from = getProperty("FromMap", tel, newMap)]
	[h,if(from == "" || from == getCurrentMapName()): spawn = tel]
	[h,if(from == getCurrentMapName()): foundSpecific = 1]
}]

[h,if(spawn == ""),Code:
{
	[h: x = 0]
	[h: y = 0]
};
{
	[h: x = getTokenX(0, spawn, newMap)]
	[h: y = getTokenY(0, spawn, newMap)]
}]
[h,foreach(tok, toMove, ""), Code:
{
	[h,if(spawn != ""): setTokenSnapToGrid(isSnapToGrid(spawn, newMap), tok)]
	[h: moveTokenToMap(tok, newMap, x, y)]
}]
[h: toFocus = spawn]
[h,if(spawn == "" && json.length(toMove) > 0): toFocus = json.get(toMove, 0)]

[h: setCurrentMap(newMap)]

[h,foreach(tok, toMove, ""): exposeView(tok, newMap)]

[h,if(toFocus != ""): goto(toFocus)]
[h: closeDialog("moveTokens")]