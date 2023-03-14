[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h, switch(arg(0)), Code:
case "Kopf": {
	[mod = -10]
};
case "Torso": {
	[mod = -4]
};
case "Linker Arm": {
	[mod = -8]
};
case "Rechter Arm": {
	[mod = -8]
};
case "Linkes Bein": {
	[mod = -8]
};
case "Rechtes Bein": {
	[mod = -8]
};
default: {
	[mod = 0]
}]

[h,if(arg(1) == "nk" && hasTrait("KampfSF", "Gezielter Angriff") != 0): mod = mod / 2]
[h,if(arg(1) == "fk" && hasTrait("KampfSF", "Gezielter Schuss") != 0): mod = mod / 2]

[h: target = arg(2)]
[h,if(target != ""),Code:
{
	[h,if(getState("Überrascht", target) == 1): mod = mod + 2]
}]

[h: macro.return = mod]