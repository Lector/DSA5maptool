[h: input = json.toVars(macro.args, "in_")]
[h: switchToken(in_tokenId)]

[h: hWaffe = resolveNK(getNahkampfwaffe(HauptHand))]
[h,if(NebenHand == HauptHand): nWaffe = hWaffe; nWaffe = resolveNK(getNahkampfwaffe(NebenHand))]
[h: weapons = "[]"]
[h: hands = usesHands(in_tokenId)]
[h,if(hands != 0),Code:
{
	[h: weapons = json.append(weapons, json.set(hWaffe, "Wield", "0"))]
	[h,if(HauptHand != NebenHand),Code:
	{
		[h: weapons = json.append(weapons, nWaffe)]
		[h: weapons = json.append(weapons, json.append("[]", hWaffe, nWaffe))]
	}]
};
{
	[h: noMelee = noMeleeWeapon(currentToken())]
	[h,foreach(weapon, Nahkampfwaffen),if(json.get(weapon, "ID") != noMelee): weapons = json.append(weapons, resolveNK(weapon))]
}]

[h: result = json.set("{}", "hasHands", hands, "weapons", weapons)]

[r: result]