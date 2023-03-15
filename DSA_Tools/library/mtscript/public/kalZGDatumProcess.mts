[h: uebergabe = macro.args]

[h: options = getLibProperty("KalenderOpt", "com.github.naxos84.tools")]
[h,if(getStrProp(options, "kalender") == 0), code: 
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "kalender"]
	};{}
]

[h: nTag = json.get(uebergabe, "fTag")]
[h: nMonat = json.get(uebergabe, "fMonat")]
[h: nJahr = json.get(uebergabe, "fJahr")]

[h,if(nJahr == ""), code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "noInput"]
	};{}
]
[h,if(isNumber(nJahr) == 0), code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numText"]
	};{}
]
[h,if(nJahr != round(nJahr)), code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numInteger"]
	};{}
]
[h,if(nTag > 5 && nMonat == 13), code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "kalenderNT"]
	};{}
]
[h: kalenderDaten = getLibProperty("KalenderMain", "com.github.naxos84.tools")]
[h: system = getStrProp(kalenderDaten, "zgSystem")]
[h,if(system == "Golgaris Erscheinen" || system == "JdU - Aranien" || system == "JdU - Kahet ni Kemi" || system == "Horas" || system == "Jahre des Lichts"), code:
	{
		[if(nJahr == 0), code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.macros"): "kalenderNull"]
			};{}
		]
	};{}
]

[h: kalenderDaten = setStrProp(kalenderDaten, "zgTag", nTag)]
[h: kalenderDaten = setStrProp(kalenderDaten, "zgMonat", nMonat)]
[h: kalenderDaten = setStrProp(kalenderDaten, "zgJahr", nJahr)]
[h: setLibProperty("KalenderMain", kalenderDaten, "com.github.naxos84.tools")]

[h,macro("kalZGEndProcess@this"): ""]