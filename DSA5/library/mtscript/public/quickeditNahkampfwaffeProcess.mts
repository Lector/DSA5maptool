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

[h: waffe = json.get(uebergabe, "waffe")]
[h: wName = json.get(uebergabe, "Name")]
[h,if(wName == ""): wName = "Unbekannte Waffe"; wName = wName)]
[h: technik = json.get(uebergabe, "technik")]
[h: rw = json.get(uebergabe, "rw")]
[h,if(json.get(uebergabe, "TPwAnzahl") == ""): tpwAnzahl = 0; tpwAnzahl = json.get(uebergabe, "TPwAnzahl")]
[h,if(json.get(uebergabe, "TPwAugenzahl") == ""): TPwAugenzahl = 0; TPwAugenzahl = json.get(uebergabe, "TPwAugenzahl")]
[h: tpwModTyp = json.get(uebergabe, "TPmodtyp")]
[h,if(json.get(uebergabe, "TPMod") == ""): tpwMod = 0; tpwMod = json.get(uebergabe, "TPMod")]
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

[h,if(isNumber(tpwAnzahl) == 0 || isNumber(TPwAugenzahl) == 0 || isNumber(tpwMod) == 0 || isNumber(atMod) == 0 || isNumber(paMod) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numText"]
	};{}
]
[h,if(tpwAnzahl != round(tpwAnzahl) || TPwAugenzahl != round(TPwAugenzahl) || tpwMod != round(tpwMod) || atMod != round(atMod) || paMod != round(paMod)), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numInteger"]
	};{}
]
[h,if(tpwAnzahl < 0 || TPwAugenzahl < 1 || tpwMod < 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numNegative"]
	};{}
]
[h: closeDialog("quickeditWaffe")]

[h: ls = "[]"]
[h,if(l1 != "" && isNumber(s1) != 0),Code:
	{
		[h,if(s1 == round(s1) && s1 >= 0): ls = json.append(ls, json.set("{}", "L", l1, "S", s1))]
	};{}
]
[h,if(l2 != "" && isNumber(s2) != 0),Code:
	{
		[h,if(s2 == round(s2) && s2 >= 0): ls = json.append(ls, json.set("{}", "L", l2, "S", s2))]
	};{}
]
	
[h: index = json.indexOf(Nahkampfwaffen, waffe)]
[h,if(zweihand == 1 && HauptHand == index): NebenHand = index]
[h,if(zweihand == 1 && NebenHand == index && HauptHand != index): NebenHand = 0]
[h: Nahkampfwaffen = json.remove(Nahkampfwaffen, index)]
[h: waffe = json.set("{}", "ID", json.get(waffe, "ID"), "Name", wName, "Improvisiert", impro, "Technik", technik, "RW", rw, "AT", atMod, "PA", paMod, "LS", ls, "TP", TP, "Parierwaffe", parierwaffe, "Zweihand", zweihand)]
[h: Nahkampfwaffen = json.append(Nahkampfwaffen, waffe)]
[h: Nahkampfwaffen = json.sort(Nahkampfwaffen, "a", "ID")]

[h,macro("noticeSelf@lib:com.github.lector.dsa5maptool"): "quickeditWaffe"]
[h,macro("refreshFrame@lib:com.github.lector.dsa5maptool"): ""]