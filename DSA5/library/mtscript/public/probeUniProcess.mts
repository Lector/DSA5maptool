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
[h: uebergabe = json.set(uebergabe, "Token", currentToken())]

[h: e1wert = probeGetWert(json.get(uebergabe, "E1"), currentToken())]
[h: e2wert = probeGetWert(json.get(uebergabe, "E2"), currentToken())]
[h: e3wert = probeGetWert(json.get(uebergabe, "E3"), currentToken())]

[h: aktE1wert = probeGetAktWert(json.get(uebergabe, "E1"), currentToken())]
[h: aktE2wert = probeGetAktWert(json.get(uebergabe, "E2"), currentToken())]
[h: aktE3wert = probeGetAktWert(json.get(uebergabe, "E3"), currentToken())]

[h: uebergabe = json.set(uebergabe, "E1Wert", e1wert)]
[h: uebergabe = json.set(uebergabe, "E1AktWert", aktE1wert)]

[h: uebergabe = json.set(uebergabe, "E2Wert", e2wert)]
[h: uebergabe = json.set(uebergabe, "E2AktWert", aktE2wert)]

[h: uebergabe = json.set(uebergabe, "E3Wert", e3wert)]
[h: uebergabe = json.set(uebergabe, "E3AktWert", aktE3wert)]

[h,macro("probe3w20Process@this"): uebergabe]