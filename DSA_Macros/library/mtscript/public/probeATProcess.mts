[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]

[h: target = json.get(uebergabe, "target")]

[h: fhand = 0]
[h: bhkhaupt = 0]
[h: bhkneben = 0]
<!-- BHK-Modifikatoren sind nur bei Kulturschaffenden relevant -->
[h: hands = usesHands(currentToken())]
[h,if(hands == 1),Code:
{
	[h,if(json.get(uebergabe, "passierschlag") != ""): pruefwurf = 0; pruefwurf = 1]
	[h: uebergabe = json.set(uebergabe, "pruefwurf", pruefwurf)]
	[h: uebergabe = json.set(uebergabe, "typ", "nk")]
	[h: bhkhaupt = -2 + getTraitLevel("KampfSF", "Beidhändiger Kampf")]
	[h,if(hasTrait("Vorteile", "Beidhändig") != 1): fhand = -4; fhand = 0]
	[h: bhkneben = bhkhaupt + fhand]
}]

[h,switch(json.get(uebergabe, "waffe")),Code:
	case 1: {
		[h: uebergabe = json.set(uebergabe, "beidhaendig", "0")]
		[h: waffe = resolveNK(getNahkampfwaffe(HauptHand))]
		[h: probeATSingleProcess(uebergabe, waffe, target)]
	};
	case 2: {
		[h: uebergabe = json.set(uebergabe, "beidhaendig", fhand)]
		[h: waffe = resolveNK(getNahkampfwaffe(NebenHand))]
		[h: probeATSingleProcess(uebergabe, waffe, target)]
	};
	default: {
		[h: uebergabe = json.set(uebergabe, "beidhaendig", bhkhaupt)]
		[h: waffe = resolveNK(getNahkampfwaffe(HauptHand))]
		[h: probeATSingleProcess(uebergabe, waffe, target)]

		[h: uebergabe = json.set(uebergabe, "beidhaendig", bhkneben)]
		[h: waffe = resolveNK(getNahkampfwaffe(NebenHand))]
		[h: probeATSingleProcess(uebergabe, waffe, target)]
	}
]