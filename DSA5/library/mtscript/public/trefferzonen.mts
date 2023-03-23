[h: zonenmodell = arg(0)]

[h,switch(zonenmodell),code:
	case 0:
	{
		[h: zonen = json.append("[]", "Kopf", "Torso", "Linker Arm", "Rechter Arm", "Linkes Bein", "Rechtes Bein")]
	};
	case 1:
	{
		[h: zonen = json.append("[]", "Kopf", "Torso", "Linkes Vorderbein", "Rechtes Vorderbein", "Linkes Hinterbein", "Rechtes Hinterbein")]
	};
	case 2:
	{
		[h: zonen = json.append("[]", "Kopf", "Torso", "Linkes Vorderbein", "Rechtes Vorderbein", "Linkes Bittelbein / Flügel", "Rechtes Mittelbein / Flügel", "Linkes Hinterbein", "Rechtes Hinterbein", "Schwanz")]
	};
	case 3:
	{
		[h: zonen = json.append("[]", "Kopf", "Torso", "Fangarm")]
	};
	case 4:
	{
		[zonen = json.append("[]", "Körper")]
	}
]

[h: macro.return = zonen]