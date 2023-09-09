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

[h: value = json.get(uebergabe, "Wert")]

[h,if(value == ""): inputFail("noInput")]
[h,if(isNumber(value) == 0): inputFail("numText")]
[h,if(value != round(value)): inputFail("numInteger")]

[h: value = value + 10]
[h: uebergabe = json.set(uebergabe, "E1", value)]
[h: uebergabe = json.set(uebergabe, "E2", value)]
[h: uebergabe = json.set(uebergabe, "E3", value)]

[h,macro("probe3w20Process@this"): uebergabe]