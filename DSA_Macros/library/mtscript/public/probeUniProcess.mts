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

[h,macro("probeGetWert@this"): json.get(uebergabe, "E1")]
[h: e1wert = macro.return]
[h,macro("probeGetAktWert@this"): json.get(uebergabe, "E1")]
[h: e1aktwert = macro.return]
[h: uebergabe = json.set(uebergabe, "E1Wert", e1wert)]
[h: uebergabe = json.set(uebergabe, "E1AktWert", e1aktwert)]

[h,macro("probeGetWert@this"): json.get(uebergabe, "E2")]
[h: e2wert = macro.return]
[h,macro("probeGetAktWert@this"): json.get(uebergabe, "E2")]
[h: e2aktwert = macro.return]
[h: uebergabe = json.set(uebergabe, "E2Wert", e2wert)]
[h: uebergabe = json.set(uebergabe, "E2AktWert", e2aktwert)]

[h,macro("probeGetWert@this"): json.get(uebergabe, "E3")]
[h: e3wert = macro.return]
[h,macro("probeGetAktWert@this"): json.get(uebergabe, "E3")]
[h: e3aktwert = macro.return]
[h: uebergabe = json.set(uebergabe, "E3Wert", e3wert)]
[h: uebergabe = json.set(uebergabe, "E3AktWert", e3aktwert)]

[h,macro("probe3w20Process@this"): uebergabe]