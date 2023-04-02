[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]

[h,if(json.get(uebergabe, "offensive") != ""),Code:
{
    <!-- AT+2 TP+4 for melee weapons -->
    [h: newWaffen = "[]"]
    [h,foreach(waffe, Nahkampfwaffen, ""),Code:
    {
        [h: waffe = json.set(waffe, "TP", json.get(waffe, "TP") + "+4", "AT", json.get(waffe, "AT") + 2)]
        [h: newWaffen = json.append(newWaffen, waffe)]
    }]
    [h: Nahkampfwaffen = newWaffen]

    <!-- FK+2 TP+4 for ranged weapons -->
    [h: newWaffen = "[]"]
    [h,foreach(waffe, Fernkampfwaffen, ""),Code:
    {
        [h: waffe = json.set(waffe, "TP", json.get(waffe, "TP") + "+4", "FK", json.get(waffe, "FK") + 2)]
        [h: newWaffen = json.append(newWaffen, waffe)]
    }]
    [h: Fernkampfwaffen = newWaffen]
}]
[h,if(json.get(uebergabe, "defensive") != ""),Code:
{
    <!-- Armor +2 -->
    [h: newArmors = "[]"]
    [h,foreach(armor, Ruestungen, ""),Code:
    {
        [h,foreach(prop, armor, ""),if(startsWith(prop, "RS")): armor = json.set(armor, prop, json.get(armor, prop) + 2)]
        [h: newArmors = json.append(newArmors, armor)]
    }]
    [h: Ruestungen = newArmors]

    <!-- PA +2 -->
    [h: newWaffen = "[]"]
    [h,foreach(waffe, Nahkampfwaffen, ""),Code:
    {
        [h: waffe = json.set(waffe, "PA", json.get(waffe, "PA") + 2)]
        [h: newWaffen = json.append(newWaffen, waffe)]
    }]
    [h: Nahkampfwaffen = newWaffen]

    <!-- LeP +10 -->
    [h: MaxLeP = MaxLeP + 10]
    [h: LeP = LeP + 10]
}]
[h,if(json.get(uebergabe, "speed") != ""),Code:
{
    [h: GS = GS + 2]
    [h: AW = AW + 2]
}]
[h,if(json.get(uebergabe, "magic") != ""),Code:
{
    <!-- TODO: Alle Zauber +4 -->
    [h: spells = "[]"]
    [h,foreach(spell, Zauber, ""),Code:{
        [h: spell = json.set(spell, "Talentwert", json.get(spell, "Talentwert") +4)]
        [h: spells = json.append(spells, spell)]
    }]
    [h: Zauber = spells]
}]
[h,if(json.get(uebergabe, "resistance") != ""),Code:
{
    [h: SK = SK + 2]
    [h: ZK = ZK + 2]
}]
[h,if(json.get(uebergabe, "mental") != ""),Code:
{
    [h: MU = MU + 2]
    [h: KL = KL + 2]
    [h: IN = IN + 2]
    [h: CH = CH + 2]
}]
[h,if(json.get(uebergabe, "body") != ""),Code:
{
    [h: FF = FF + 2]
    [h: GE = GE + 2]
    [h: KO = KO + 2]
    [h: KK = KK + 2]
}]

[h: closeDialog("chareditImprovements")]

[h,macro("noticeSelf@lib:com.github.lector.dsa5maptool"): "chareditImprovements"]
[h,macro("refreshFrame@lib:com.github.lector.dsa5maptool"): ""]