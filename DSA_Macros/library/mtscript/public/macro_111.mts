[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]

[h: waffe = json.get(uebergabe, "waffe")]
[h,if(waffe == 1): id = HauptHand; id = NebenHand]
[h: pa = json.get(uebergabe, "PA" + waffe)]
[h: uebergabe = json.set(uebergabe, "Wert", pa)]
[h: waffe = getNahkampfwaffe(id)]
[h: uebergabe = json.set(uebergabe, "waffe", resolveNK(waffe))]

[h: technik = json.get(waffe, "Technik")]
[h,if(technik == "Raufen" || technik == ""): tabelle = "patzerWaffenlos"; tabelle = "patzerNahkampf"]
[h: uebergabe = json.set(uebergabe, "patzerTabelle", tabelle)]
[h: wName = json.get(waffe, "Name")]
[h: uebergabe = json.set(uebergabe, "Name", json.get(uebergabe, "ManName") + " mit "+ wName)]
[h: uebergabe = json.set(uebergabe, "pruefreroll", hasTrait("Vorteile", "Waffenbegabung ("+technik+")"))]
[h,macro("VerteidigungSchadenProcess@Lib:macros"): uebergabe]