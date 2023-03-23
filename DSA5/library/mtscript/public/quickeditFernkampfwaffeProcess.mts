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
[h: fk = json.get(uebergabe, "fk")]
[h,if(fk == ""): fk = 0]
[h: rw1 = json.get(uebergabe, "rwn")]
[h: rw2 = json.get(uebergabe, "rwm")]
[h: rw3 = json.get(uebergabe, "rwf")]
[h,if(json.get(uebergabe, "TPwAnzahl") == ""): tpwAnzahl = 0; tpwAnzahl = json.get(uebergabe, "TPwAnzahl")]
[h,if(json.get(uebergabe, "TPwAugenzahl") == ""): TPwAugenzahl = 0; TPwAugenzahl = json.get(uebergabe, "TPwAugenzahl")]
[h: tpwModTyp = json.get(uebergabe, "TPmodtyp")]
[h,if(json.get(uebergabe, "TPMod") == ""): tpwMod = 0; tpwMod = json.get(uebergabe, "TPMod")]
[h,if(tpwAnzahl == 0 && tpwMod == 0): TP = 0; TP = tpwAnzahl+"d"+TPwAugenzahl+tpwModTyp+tpwMod]
[h: ladezeit = json.get(uebergabe, "ladezeit")]
[h,if(json.get(uebergabe, "impro") == "on"): impro=1 ; impro=0]

[h,if(isNumber(tpwAnzahl) == 0 || isNumber(TPwAugenzahl) == 0 || isNumber(tpwMod) == 0 || isNumber(fk) == 0 || isNumber(rw1) == 0 || isNumber(rw2) == 0 || isNumber(rw3) == 0 || isNumber(ladezeit) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numText"]
	};{}
]
[h,if(tpwAnzahl != round(tpwAnzahl)  || TPwAugenzahl != round(TPwAugenzahl) || tpwMod != round(tpwMod) || fk != round(fk) || rw1 != round(rw1) || rw2 != round(rw2) || rw3 != round(rw3) || ladezeit != round(ladezeit)), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numInteger"]
	};{}
]
[h,if(tpwAnzahl < 0 || TPwAugenzahl < 1 || tpwMod < 0 || rw1 < 0 || rw2 < 0 || rw3 < 0 || ladezeit < 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numNegative"]
	};{}
]
[h: closeDialog("quickeditWaffe")]
[h: index = json.indexOf(Fernkampfwaffen, waffe)]
[h: Fernkampfwaffen = json.remove(Fernkampfwaffen, index)]
[h: waffe = json.set("{}", "ID", json.get(waffe, "ID"), "Name", wName, "Improvisiert", impro, "Technik", technik, "FK", fk, "RW1", rw1, "RW2", rw2, "RW3", rw3, "TP", TP, "Ladezeit", ladezeit)]
[h: Fernkampfwaffen = json.append(Fernkampfwaffen, waffe)]
[h: Fernkampfwaffen = json.sort(Fernkampfwaffen, "a", "Name")]

[h,macro("noticeSelf@lib:com.github.lector.dsa5maptool"): "quickeditWaffe"]
[h,macro("refreshFrame@lib:com.github.lector.dsa5maptool"): ""]