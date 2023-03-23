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

[h: tAnzahl = json.get(uebergabe, "tAnzahl")]

[h: tList = '[]']
[h: num = 0]
[h,count(tAnzahl, ""), Code:
	{
		[tName = json.get(uebergabe, strformat("f%sName", num))]
		[tName = upper(tName, 1)]
		[tName = replace(tName, ",", "")]
		[tE1 = json.get(uebergabe, strformat("f%sE1", num))]
		[tE2 = json.get(uebergabe, strformat("f%sE2", num))]
		[tWert = json.get(uebergabe, strformat("f%sWert", num))]
		[if(tWert == ""): tWert = 6]
		[if(tName == ""), Code:
			{
				[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "noInput"]
			};{}
		]
		[if(isNumber(tWert) == 0), Code:
			{
				[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numText"]
			};{}
		]
		[if(tWert != round(tWert)), Code:
			{
				[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numInteger"]
			};{}
		]
		[h: leit = json.append("[]", tE1)]
		[h,if(tE2 != "--"): leit = json.append(leit, tE2)]
		[h: newTechnik = json.set("{}", "FW", tWert, "L", leit, "Name", tName)]
		[h: tList = json.append(tList, newTechnik)]
		[num = num + 1]
	}
]

[h: closeDialog("chareditKampftechnik")]

[h: Kampftechniken = json.sort(tList, "asc", "Name")]

[h,macro("noticeSelf@lib:com.github.lector.dsa5maptool"): "chareditKampftechnik"]
[h,macro("refreshFrame@lib:com.github.lector.dsa5maptool"): ""]