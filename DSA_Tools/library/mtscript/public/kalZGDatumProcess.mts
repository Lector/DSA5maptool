[h: uebergabe = macro.args]

[h: options = getLibProperty("KalenderOpt", "this")]
[h,if(getStrProp(options, "kalender") == 0), code: 
	{
		[h,macro("inputFail@lib:com.github.naxos84.Macros"): "kalender"]
	};{}
]

[h: nTag = json.get(uebergabe, "fTag")]
[h: nMonat = json.get(uebergabe, "fMonat")]
[h: nJahr = json.get(uebergabe, "fJahr")]

[h,if(nJahr == ""), code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.Macros"): "noInput"]
	};{}
]
[h,if(isNumber(nJahr) == 0), code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.Macros"): "numText"]
	};{}
]
[h,if(nJahr != round(nJahr)), code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.Macros"): "numInteger"]
	};{}
]
[h,if(nTag > 5 && nMonat == 13), code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.Macros"): "kalenderNT"]
	};{}
]
[h: kalenderDaten = getLibProperty("KalenderMain", "this")]
[h: system = getStrProp(kalenderDaten, "zgSystem")]
[h,if(system == "Golgaris Erscheinen" || system == "JdU - Aranien" || system == "JdU - Kahet ni Kemi" || system == "Horas" || system == "Jahre des Lichts"), code:
	{
		[if(nJahr == 0), code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.Macros"): "kalenderNull"]
			};{}
		]
	};{}
]

[h: kalenderDaten = setStrProp(kalenderDaten, "zgTag", nTag)]
[h: kalenderDaten = setStrProp(kalenderDaten, "zgMonat", nMonat)]
[h: kalenderDaten = setStrProp(kalenderDaten, "zgJahr", nJahr)]
[h: setLibProperty("KalenderMain", kalenderDaten, "this")]

[h,macro("kalZGEndProcess@this"): ""]