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

[h: Nahkampfwaffen = json.remove(Nahkampfwaffen, index)]

[h,if(HauptHand == id),Code:{
	[if(json.length(Nahkampfwaffen) == 0): HauptHand = 0; HauptHand = json.get(json.get(Nahkampfwaffen, 0), "ID")]
}]
[h,if(NebenHand == id),Code:{
	[if(json.length(Nahkampfwaffen) == 0): NebenHand = 0; NebenHand = json.get(json.get(Nahkampfwaffen, 0), "ID")]
}]

[h: closeDialog("chareditWaffeDel")]

[h: noticeSelf("delWaffe")]
[h: refreshFrame(currentToken())]