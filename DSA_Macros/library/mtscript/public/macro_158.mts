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

[h: uebergabe = arg(0)]
[h: waffe = arg(1)]
[h: target = arg(2)]

[h: uebergabe = json.set(uebergabe, "tp", json.get(waffe, "TP"))]
[h: uebergabe = json.set(uebergabe, "Name", "mit " + json.get(waffe, "Name"))]
[h: uebergabe = json.set(uebergabe, "Wert", json.get(waffe, "AT"))]
[h: technik = json.get(waffe, "Technik")]
[h,if(technik == "Raufen" || technik == ""): tabelle = "patzerWaffenlos"; tabelle = "patzerNahkampf"]
[h: uebergabe = json.set(uebergabe, "patzerTabelle", tabelle)]
[h: uebergabe = json.set(uebergabe, "pruefreroll", hasTrait("Vorteile", "Waffenbegabung ("+technik+")"))]
[h: angriffSchadenProcess(uebergabe, waffe, target)]