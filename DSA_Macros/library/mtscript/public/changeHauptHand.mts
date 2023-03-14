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

[h: id = macro.args]

[h: andereWaffe = getNahkampfwaffe(NebenHand)]
[h,if(json.get(andereWaffe, "Zweihand") != 0): NebenHand = 0]

[h: waffe = getNahkampfwaffe(id)]
[h,if(json.get(waffe, "Zweihand") != 0): NebenHand = id]

[h: HauptHand = id]
[h,macro("charbogenKampf@this"): ""]