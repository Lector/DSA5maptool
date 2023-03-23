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

[h: uebergabe = macro.args]

[h,if(json.get(uebergabe, "iniWert") == ""): iniWert = 0; iniWert = json.get(uebergabe, "iniWert")]
[h,if(isNumber(iniWert) == 0), Code:
	{
		[h,macro("inputFail@this"): "numText"]
	};{}
]
[h: closeDialog("iniSetzen")]
[h: addToInitiative(0, iniWert)]
[h: sortInitiative()]