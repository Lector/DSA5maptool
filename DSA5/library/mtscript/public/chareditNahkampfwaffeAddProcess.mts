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

[h: wName = json.get(uebergabe, "Name")]
[h,if(wName == ""): wName = "Unbekannte Waffe"; wName = wName)]
[h: technik = json.get(uebergabe, "technik")]
[h: rw = json.get(uebergabe, "rw")]
[h,if(json.get(uebergabe, "TPwAnzahl") == ""): tpwAnzahl = 0; tpwAnzahl = json.get(uebergabe, "TPwAnzahl")]
[h,if(json.get(uebergabe, "TPwAugenzahl") == ""): TPwAugenzahl = 0; TPwAugenzahl = json.get(uebergabe, "TPwAugenzahl")]
[h: tpwModTyp = json.get(uebergabe, "TPmodtyp")]
[h,if(json.get(uebergabe, "TPMod") == ""): tpwMod = 0; tpwMod = json.get(uebergabe, "TPMod")]
[h: damageType = json.get(uebergabe, "damageType")]
[h,if(tpwAnzahl == 0 && tpwMod == 0): TP = 0; TP = tpwAnzahl+"d"+TPwAugenzahl+tpwModTyp+tpwMod]
[h,if(json.get(uebergabe, "atmod") == ""): atMod = 0; atMod = json.get(uebergabe, "atmod")]
[h,if(json.get(uebergabe, "pamod") == ""): paMod = 0; paMod = json.get(uebergabe, "pamod")]
[h,if(json.get(uebergabe, "parierwaffe") == ""): parierwaffe = 0; parierwaffe = json.get(uebergabe, "parierwaffe")]
[h: l1 = json.get(uebergabe, "l1")]
[h: s1 = json.get(uebergabe, "s1")]
[h: l2 = json.get(uebergabe, "l2")]
[h: s2 = json.get(uebergabe, "s2")]
[h,if(json.get(uebergabe, "impro") == "on"): impro=1 ; impro=0]
[h,if(json.get(uebergabe, "zweihand") == "on"): zweihand=1 ; zweihand=0]

[h: baum = eval("Nahkampfwaffen")]
[h: id=0]
[Foreach(waffe, baum,""), CODE:
{
	[if(json.get(waffe, "ID") >= id), Code:
	{
		[h: id = json.get(waffe, "ID") + 1]
	}]
}]

[h,if(isNumber(tpwAnzahl) == 0 || isNumber(TPwAugenzahl) == TPwAugenzahl || isNumber(tpwMod) == 0 || isNumber(atMod) == 0 || isNumber(paMod) == 0), Code:
{
	[h,macro("inputFail@this"): "numText"]
}]
[h,if(tpwAnzahl != round(tpwAnzahl) || TPwAugenzahl != round(TPwAugenzahl) || tpwMod != round(tpwMod) || atMod != round(atMod) || paMod != round(paMod)), Code:
{
	[h,macro("inputFail@this"): "numInteger"]
}]
[h,if(tpwAnzahl < 0 || TPwAugenzahl < 0 || tpwMod < 0), Code:
{
	[h,macro("inputFail@this"): "numNegative"]
}]
[h: closeDialog("chareditWaffeAdd")]

[h: ls = "[]"]
[h,if(l1 != "" && isNumber(s1) != 0),Code:
{
	[h,if(s1 == round(s1) && s1 >= 0): ls = json.append(ls, json.set("{}", "L", l1, "S", s1))]
}]
[h,if(l2 != "" && isNumber(s2) != 0),Code:
{
	[h,if(s2 == round(s2) && s2 >= 0): ls = json.append(ls, json.set("{}", "L", l2, "S", s2))]
}]

[h: waffe = json.set("{}", "ID", id, "Name", wName, "Improvisiert", impro, "Technik", technik, "RW", rw, "AT", atMod, "PA", paMod, "LS", ls, damageType, TP, "Parierwaffe", parierwaffe, "Zweihand", zweihand)]
[h: Nahkampfwaffen = json.append(Nahkampfwaffen, waffe)]
[h: Nahkampfwaffen = json.sort(Nahkampfwaffen, "a", "ID")]

[h,macro("noticeSelf@this"): "addWaffe"]
[h: refreshFrame(currentToken())]