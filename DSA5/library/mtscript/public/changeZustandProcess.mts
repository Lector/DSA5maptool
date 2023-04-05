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

[h: SchmerzMod = json.get(uebergabe, "schmerzmod")]
[h: BelastungMod = json.get(uebergabe, "belastungmod")]

[h: Furcht = json.get(uebergabe, "furcht")]
[h: Paralyse = json.get(uebergabe, "paralyse")]
[h: Verwirrung = json.get(uebergabe, "verwirrung")]
[h: Ueberanstrengung = json.get(uebergabe, "ueberanstrengung")]
[h: Entrueckung = json.get(uebergabe, "entrueckung")]
[h: Trance = json.get(uebergabe, "trance")]
[h: Betaeubung = json.get(uebergabe, "betaeubung")]

[h: closeDialog("changeZustand")]

[h: checkZustand(currentToken())]
[h,macro("noticeSelf@this"): "zustand"]