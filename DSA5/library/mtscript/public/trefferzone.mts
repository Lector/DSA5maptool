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

[h: dice = 1d20]
[h, if(json.length(macro.args) == 1), Code:
{
	[trefferzone = arg(0)]
};
{
	[h, if(json.length(macro.args) == 2),Code:
	{
		[zonenmodell = arg(0)]
		[groesse = arg(1)]
	};{
		[zonenmodell = Trefferzonenmodell]
		[groesse = groesse(getSize())]
	}]
	
	[h,switch(zonenmodell),Code:
		case 0:
		{
			<!-- Humanoid -->
			[if(groesse < 4): trefferzone = 0]
			[if(groesse > 4): trefferzone = 2; trefferzone = 1]
		};
		case 1:
		{
			<!-- Vierbeinig -->
			[if(groesse < 4): trefferzone = 3]
			[if(groesse > 4): trefferzone = 5; trefferzone = 4]
		};
		case 2:
		{
			<!-- Sechs Glieder und Schwanz -->
			[if(groesse <= 5): trefferzone = 6; trefferzone = 7]
		};
		case 3:
		{
			<!-- Fangarme -->
			[trefferzone = 8]
		};
		case 4:
		{
			<!-- Keine Zonen -->
			[trefferzone = 9]
		};
		default:
		{
			[trefferzone = 1]
		}
	]
}]
[h,switch(trefferzone),code:
	case 0:
	{
		[switch(dice):
			case 1: zone = "Kopf";
			case 2: zone = "Kopf";
			case 3: zone = "Kopf";
			case 4: zone = "Kopf";
			case 5: zone = "Kopf";
			case 6: zone = "Kopf";
			case 7: zone = "Torso";
			case 8: zone = "Torso";
			case 9: zone = "Torso";
			case 10: zone = "Torso";
			case 11: zone = "Linker Arm";
			case 12: zone = "Rechter Arm";
			case 13: zone = "Linker Arm";
			case 14: zone = "Rechter Arm";
			case 15: zone = "Linker Arm";
			case 16: zone = "Rechter Arma";
			case 17: zone = "Linker Arm";
			case 18: zone = "Rechter Arm";
			case 19: zone = "Linkes Bein";
			case 20: zone = "Rechts Bein"
		]
	};
	case 1:
	{
		[switch(dice):
			case 1: zone = "Kopf";
			case 2: zone = "Kopf";
			case 3: zone = "Torso";
			case 4: zone = "Torso";
			case 5: zone = "Torso";
			case 6: zone = "Torso";
			case 7: zone = "Torso";
			case 8: zone = "Torso";
			case 9: zone = "Torso";
			case 10: zone = "Torso";
			case 11: zone = "Torso";
			case 12: zone = "Torso";
			case 13: zone = "Linker Arm";
			case 14: zone = "Rechter Arm";
			case 15: zone = "Linker Arm";
			case 16: zone = "Rechter Arm";
			case 17: zone = "Linkes Bein";
			case 18: zone = "Rechtes Bein";
			case 19: zone = "Linkes Bein";
			case 20: zone = "Rechtes Bein"
		]
	};
	case 2:
	{
		[switch(dice):
			case 1: zone = "Kopf";
			case 2: zone = "Kopf";
			case 3: zone = "Torso";
			case 4: zone = "Torso";
			case 5: zone = "Torso";
			case 6: zone = "Torso";
			case 7: zone = "Linker Arm";
			case 8: zone = "Rechter Arm";
			case 9: zone = "Linker Arm";
			case 10: zone = "Rechter Arm";
			case 11: zone = "Linker Arm";
			case 12: zone = "Rechter Arm";
			case 13: zone = "Linker Arm";
			case 14: zone = "Rechter Arm";
			case 15: zone = "Linker Arm";
			case 16: zone = "Rechter Arm";
			case 17: zone = "Linkes Bein";
			case 18: zone = "Rechtes Bein";
			case 19: zone = "Linkes Bein";
			case 20: zone = "Rechtes Bein"
		]
	};
	case 3:
	{
		[switch(dice):
			case 1: zone = "Kopf";
			case 2: zone = "Kopf";
			case 3: zone = "Kopf";
			case 4: zone = "Kopf";
			case 5: zone = "Torso";
			case 6: zone = "Torso";
			case 7: zone = "Torso";
			case 8: zone = "Torso";
			case 9: zone = "Torso";
			case 10: zone = "Torso";
			case 11: zone = "Torso";
			case 12: zone = "Torso";
			case 13: zone = "Linkes Vorderbein";
			case 14: zone = "Rechtes Vorderbein";
			case 15: zone = "Linkes Vorderbein";
			case 16: zone = "Rechtes Vorderbein";
			case 17: zone = "Linkes Hinterbein";
			case 18: zone = "Rechtes Hinterbein";
			case 19: zone = "Linkes Hinterbein";
			case 20: zone = "Rechtes Hinterbein"
		]
	};
	case 4:
	{
		[switch(dice):
			case 1: zone = "Kopf";
			case 2: zone = "Kopf";
			case 3: zone = "Kopf";
			case 4: zone = "Kopf";
			case 5: zone = "Torso";
			case 6: zone = "Torso";
			case 7: zone = "Torso";
			case 8: zone = "Torso";
			case 9: zone = "Torso";
			case 10: zone = "Torso";
			case 11: zone = "Linkes Vorderbein";
			case 12: zone = "Rechtes Vorderbein";
			case 13: zone = "Linkes Vorderbein";
			case 14: zone = "Rechtes Vorderbein";
			case 15: zone = "Linkes Vorderbein";
			case 16: zone = "Rechtes Vorderbein";
			case 17: zone = "Linkes Hinterbein";
			case 18: zone = "Rechtes Hinterbein";
			case 19: zone = "Linkes Hinterbein";
			case 20: zone = "Rechtes Hinterbein"
		]
	};
	case 5:
	{
		[switch(dice):
			case 1: zone = "Kopf";
			case 2: zone = "Kopf";
			case 3: zone = "Kopf";
			case 4: zone = "Kopf";
			case 5: zone = "Kopf";
			case 6: zone = "Torso";
			case 7: zone = "Torso";
			case 8: zone = "Torso";
			case 9: zone = "Torso";
			case 10: zone = "Torso";
			case 11: zone = "Torso";
			case 12: zone = "Rechtes Vorderbein";
			case 13: zone = "Linkes Vorderbein";
			case 14: zone = "Rechtes Vorderbein";
			case 15: zone = "Linkes Vorderbein";
			case 16: zone = "Rechtes Vorderbein";
			case 17: zone = "Linkes Hinterbein";
			case 18: zone = "Rechtes Hinterbein";
			case 19: zone = "Linkes Hinterbein";
			case 20: zone = "Rechtes Hinterbein"
		]
	};
	case 6:
	{
		[switch(dice):
			case 1: zone = "Kopf";
			case 2: zone = "Kopf";
			case 3: zone = "Kopf";
			case 4: zone = "Kopf";
			case 5: zone = "Torso";
			case 6: zone = "Torso";
			case 7: zone = "Torso";
			case 8: zone = "Torso";
			case 9: zone = "Torso";
			case 10: zone = "Torso";
			case 11: zone = "Torso";
			case 12: zone = "Torso";
			case 13: zone = "Linkes Vorderbein";
			case 14: zone = "Rechtes Vorderbein";
			case 15: zone = "Linkes Mittelbein / Flügel";
			case 16: zone = "Rechtes Mittelbein / Flügel";
			case 17: zone = "Linkes Hinterbein";
			case 18: zone = "Rechtes Hinterbein";
			case 19: zone = "Schwanz";
			case 20: zone = "Schwanz"
		]
	};
	case 7:
	{
		[switch(dice):
			case 1: zone = "Kopf";
			case 2: zone = "Kopf";
			case 3: zone = "Torso";
			case 4: zone = "Torso";
			case 5: zone = "Torso";
			case 6: zone = "Torso";
			case 7: zone = "Torso";
			case 8: zone = "Torso";
			case 9: zone = "Torso";
			case 10: zone = "Torso";
			case 11: zone = "Linkes Vorderbein";
			case 12: zone = "Rechtes Vorderbein";
			case 13: zone = "Linkes Vorderbein";
			case 14: zone = "Rechtes Vorderbein";
			case 15: zone = "Linkes Mittelbein / Flügel";
			case 16: zone = "Rechtes Mittelbein / Flügel";
			case 17: zone = "Linkes Hinterbein";
			case 18: zone = "Rechtes Hinterbein";
			case 19: zone = "Schwanz";
			case 20: zone = "Schwanz"
		]
	};
	case 8:
	{
		[switch(dice):
			case 1: zone = "Kopf";
			case 2: zone = "Kopf";
			case 3: zone = "Torso";
			case 4: zone = "Torso";
			case 5: zone = "Torso";
			case 6: zone = "Torso";
			case 7: zone = "Fangarm " + (dice-6);
			case 8: zone = "Fangarm " + (dice-6);
			case 9: zone = "Fangarm " + (dice-6);
			case 10: zone = "Fangarm " + (dice-6);
			case 11: zone = "Fangarm " + (dice-6);
			case 12: zone = "Fangarm " + (dice-6);
			case 13: zone = "Fangarm " + (dice-6);
			case 14: zone = "Fangarm " + (dice-6);
			case 15: zone = "Fangarm " + (dice-6);
			case 16: zone = "Fangarm " + (dice-6);
			case 17: zone = "Fangarm " + (dice-6);
			case 18: zone = "Fangarm " + (dice-6);
			case 19: zone = "Fangarm " + (dice-6);
			case 20: zone = "Fangarm " + (dice-6);
		]
	};
	case 9:
	{
		[zone = "Körper"]
	};
	default:
		{[zone = dice]}
]

[h: macro.return = zone]