[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]

[h: wName = json.get(uebergabe, "Name")]
[h,if(wName == ""): wName = "Unbekannte Waffe"; wName = wName)]
[h: technik = json.get(uebergabe, "technik")]
[h: fk = json.get(uebergabe, "fk")]
[h,if(fk == ""): fk = 0]
[h: RWnah = json.get(uebergabe, "rwn")]
[h: RWmittel = json.get(uebergabe, "rwm")]
[h: RWfern = json.get(uebergabe, "rwf")]
[h,if(json.get(uebergabe, "TPwAnzahl") == ""): tpwAnzahl = 0; tpwAnzahl = json.get(uebergabe, "TPwAnzahl")]
[h,if(json.get(uebergabe, "TPwAugenzahl") == ""): TPwAugenzahl = 0; TPwAugenzahl = json.get(uebergabe, "TPwAugenzahl")]
[h: tpwModTyp = json.get(uebergabe, "TPmodtyp")]
[h,if(json.get(uebergabe, "TPMod") == ""): tpwMod = 0; tpwMod = json.get(uebergabe, "TPMod")]
[h,if(tpwAnzahl == 0 && tpwMod == 0): TP = 0; TP = tpwAnzahl+"d"+TPwAugenzahl+tpwModTyp+tpwMod]
[h: ladezeit = json.get(uebergabe, "ladezeit")]
[h,if(json.get(uebergabe, "impro") == "on"): impro=1 ; impro=0]

[h: baum = eval("Fernkampfwaffen")]
[h: id=0]
[Foreach(waffe, baum,""), CODE:
	{
		[if(json.get(waffe, "ID") >= id), Code:
			{
				[h: id = json.get(waffe, "ID") + 1]
			};{}
		]
	}
]
[h,if(isNumber(tpwAnzahl) == 0 || isNumber(TPwAugenzahl) == TPwAugenzahl || isNumber(tpwMod) == 0 || isNumber(fk) == 0 || isNumber(RWnah) == 0 || isNumber(RWmittel) == 0 || isNumber(RWfern) == 0 || isNumber(ladezeit) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numText"]
	};{}
]
[h,if(tpwAnzahl != round(tpwAnzahl)  || TPwAugenzahl != round(TPwAugenzahl) || tpwMod != round(tpwMod) || fk != round(fk) || RWnah != round(RWnah) || RWmittel != round(RWmittel) || RWfern != round(RWfern) || ladezeit != round(ladezeit)), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numInteger"]
	};{}
]
[h,if(tpwAnzahl < 0 || TPwAugenzahl < 0 || tpwMod < 0 || RWnah < 0 || RWmittel < 0 || RWfern < 0 || ladezeit < 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numNegative"]
	};{}
]
[h: closeDialog("chareditWaffeAdd")]

[h: waffe = json.set("{}", "ID", id, "Name", wName, "Improvisiert", impro, "Technik", technik, "FK", fk, "RW1", RWnah, "RW2", RWmittel, "RW3", RWfern, "TP", TP, "Ladezeit", ladezeit)]
[h: Fernkampfwaffen = json.append(Fernkampfwaffen, waffe)]
[h: Fernkampfwaffen = json.sort(Fernkampfwaffen, "a", "Name")]

[h,macro("noticeSelf@lib:com.github.naxos84.macros"): "addWaffe"]
[h,macro("refreshFrame@lib:com.github.naxos84.macros"): ""]

		