[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos.Macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]

[h,if(json.get(uebergabe, "mKreuzer") == ""): nKreuzer = 0; nKreuzer = json.get(uebergabe, "mKreuzer")]
[h,if(json.get(uebergabe, "mHeller") == ""): nHeller = 0; nHeller = json.get(uebergabe, "mHeller")]
[h,if(json.get(uebergabe, "mSilbertaler") == ""): nSilbertaler = 0; nSilbertaler = json.get(uebergabe, "mSilbertaler")]
[h,if(json.get(uebergabe, "mDukaten") == ""): nDukaten = 0; nDukaten = json.get(uebergabe, "mDukaten")]

[h,if(isNumber(nKreuzer) == 0 || isNumber(nHeller) == 0 || isNumber(nSilbertaler) == 0 || isNumber(nDukaten) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos.Macros"): "numText"]
	};{}
]
[h,if(nKreuzer != round(nKreuzer) || nHeller != round(nHeller) || nSilbertaler != round(nSilbertaler) || nDukaten != round(nDukaten)), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos.Macros"): "numInteger"]
	};{}
]
[h,if(nKreuzer < 0 || nHeller < 0 || nSilbertaler < 0 || nDukaten < 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos.Macros"): "numNegative"]
	};{}
]
[h: closeDialog("inventarCoinEdit")]

[h: InventarMisc = json.set(InventarMisc, "dukaten", nDukaten)]
[h: InventarMisc = json.set(InventarMisc, "silbertaler", nSilbertaler)]
[h: InventarMisc = json.set(InventarMisc, "heller", nHeller)]
[h: InventarMisc = json.set(InventarMisc, "kreuzer", nKreuzer)]

[h,macro("inventar@this"): ""]