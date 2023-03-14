[h,if(isGM() == 1 && hasImpersonated() == 0 && arg(0) == ""), Code:
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
[h,if(arg(0) != ""): switchToken(arg(0))]

[h: iniListTokens = json.get(getInitiativeList(),"tokens")]
[h: found = 0]
[foreach(token, iniListTokens, ""),Code:
{
	[h, if(json.get(token, "tokenId") == currentToken()): found = 1]
}]
[h: macro.return = found]