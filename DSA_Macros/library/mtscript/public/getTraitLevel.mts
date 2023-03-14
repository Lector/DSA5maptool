[h,if(isGM() == 1 && hasImpersonated() == 0 && json.length(macro.args) < 3), Code:
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
[h,if(json.length(macro.args) >= 3): tok = arg(2); tok = currentToken()]

[h: ergebnis = 0]
[h: items = getProperty(arg(0), tok, tokenMap(tok))]
[h,foreach(item, items, ""),Code:
{
	[if(json.get(item, "Name") == arg(1)),Code:{
		[stufe = json.get(item, "Stufe")]
		[ergebnis = max(1, stufe)]
	}]
}]
[h: macro.return = ergebnis]