[h: uebergabe = macro.args]

[h,if(json.get(uebergabe, "bonus") == ""): bonus = 0; bonus = json.get(uebergabe, "bonus")]
[h,if(json.get(uebergabe, "malus") == ""): malus = 0; malus = json.get(uebergabe, "malus")]
[h,if(json.get(uebergabe, "wert") == ""): wert = 0; wert = json.get(uebergabe, "wert")]
[h: wAnzahl = json.get(uebergabe, "wAnzahl")]
[h: idList = getSelected()]

[h,if(isNumber(bonus) == 0 || isNumber(malus) == 0 || isNumber(wert) == 0), Code:
	{
		[h,macro("inputFail@this"): "numText"]
	};{}
]
[h,if(bonus != round(bonus) || malus != round(malus) || wert != round(wert)), Code:
	{
		[h,macro("inputFail@this"): "numInteger"]
	};{}
]
[h,if(bonus < 0 || malus < 0 || wert < 0), Code:
	{
		[h,macro("inputFail@this"): "numNegative"]
	};{}
]
[h: closeDialog("iniMulti")]
[h,if(idList == ""), Code:
	{
		[h,macro("inputFail@this"): "noTokensSelected"]
	};{}
]

[h: selectTokens(idList, 0, ",")]

[h,if(json.get(uebergabe, "iniTyp") == 0), Code:
	{
		[foreach(id, idList), Code:
			{
				[switchToken(id)]
				[h: wuerfel = 1]
				[h: grundwert = INI]
				[h: aktWert = getINI(id)]
				[h: mod = 0]
				[h: resultDice = roll(wuerfel, 6)]
				[h: result = resultDice + aktWert + mod]
				[h: addToINI = result + INI/100]
				[h: addToInitiative(0, addToINI)]
				[h: VTinKR = 0]
			}
		]
	};
	{
		[foreach(id, idList), Code:
			{
				[switchToken(id)]
				[result = roll(wAnzahl, 6) + wert + bonus - malus]
				[addToINI = result]
				[addToInitiative(0, addToINI)]
				[h: VTinKR = 0]
			}
		]
	}
]

[h: sortInitiative()]
[h,macro("noticeSelf@this"): "multiINI"]