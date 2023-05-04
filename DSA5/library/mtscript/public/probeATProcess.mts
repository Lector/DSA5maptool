[h: uebergabe = macro.args]
[h: switchToken(json.get(uebergabe, "token"))]
[h: target = json.get(uebergabe, "target")]

<!-- BHK-Modifikatoren sind nur bei Kulturschaffenden relevant -->
[h: hands = usesHands(currentToken())]
[h,if(hands == 1),Code:
{
	[h,if(json.get(uebergabe, "passierschlag") != ""): pruefwurf = 0; pruefwurf = 1]
	[h: uebergabe = json.set(uebergabe, "pruefwurf", pruefwurf)]
	[h: uebergabe = json.set(uebergabe, "typ", "nk")]
}]

[h: weapon = decode(json.get(uebergabe, "waffe"))]
[h,if(json.type(weapon) == "OBJECT"),Code:
{
	[h: probeATSingleProcess(uebergabe, weapon, target)]
};{
	[h: probeATSingleProcess(uebergabe, json.get(weapon, 0), target)]
	[h: probeATSingleProcess(uebergabe, json.get(weapon, 1), target)]
}]