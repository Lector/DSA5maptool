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

[h: index = macro.args]

[h: id = json.get(json.get(Nahkampfwaffen, index), "ID")]

[h,if(HauptHand == id): HauptHand = 0]
[h,if(NebenHand == id): NebenHand = 0]

[h: Nahkampfwaffen = json.remove(Nahkampfwaffen, index)]

[h: closeDialog("chareditWaffeDel")]

[h,macro("noticeSelf@this"): "delWaffe"]
[h: refreshFrame(currentToken())]