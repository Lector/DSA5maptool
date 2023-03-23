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

[h: uebergabe = arg(0)]

[h: lightName = json.get(uebergabe, "lightname")]
[h: qsKey = replace(lightName, " ", "_")+"_QS"]
[h: qs = json.get(uebergabe, qsKey)]
[h,if(qs != ""): lightName = lightName + " QS"+qs]

[h: cmp = json.indent(getInfo("campaign"), 2)]
[h: dsalights = json.get(json.get(cmp, "light sources"), "DSA")]
[h: dsalights = json.sort(dsalights, "descending", "name")]
[h: dsalights = json.sort(dsalights, "descending", "max range")]

[h: darkRadius = 0]

[h,foreach(light, dsalights),Code:{
	[h: lname = json.get(light, "name")]
	[h: value = startsWith(lname, lightName)]
	[h,if(lightName == ""): value = 0]
	[h: setLight("DSA", lname, value)]
	[h,if(startsWith(lname, "Dunkelheit") == 1 || startsWith(lname, "Bann des Lichts") == 1): isDark = 1; isDark = 0]
	[h,if(isDark == 1 && value == 1): darkRadius = max(darkRadius, json.get(light, "max range"))]
}]

[h,if(darkRadius == 0): setSightType(sightForTypus(Typus)); setSightType("Dunkelsicht Radius "+darkRadius)]

[h: exposeView(currentToken())]

[h: closeDialog("changeLight")]
[h,macro("noticeSelf@this"): "light"]