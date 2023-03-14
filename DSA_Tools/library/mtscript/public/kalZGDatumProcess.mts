[h: uebergabe = macro.args]

[h: options = getLibProperty("KalenderOpt", "Lib:tools")]
[h,if(getStrProp(options, "kalender") == 0), code: 
	{
		[h,macro("inputFail@Lib:macros"): "kalender"]
	};{}
]

[h: nTag = json.get(uebergabe, "fTag")]
[h: nMonat = json.get(uebergabe, "fMonat")]
[h: nJahr = json.get(uebergabe, "fJahr")]

[h,if(nJahr == ""), code:
	{
		[h,macro("inputFail@Lib:macros"): "noInput"]
	};{}
]
[h,if(isNumber(nJahr) == 0), code:
	{
		[h,macro("inputFail@Lib:macros"): "numText"]
	};{}
]
[h,if(nJahr != round(nJahr)), code:
	{
		[h,macro("inputFail@Lib:macros"): "numInteger"]
	};{}
]
[h,if(nTag > 5 && nMonat == 13), code:
	{
		[h,macro("inputFail@Lib:macros"): "kalenderNT"]
	};{}
]
[h: kalenderDaten = getLibProperty("KalenderMain", "Lib:tools")]
[h: system = getStrProp(kalenderDaten, "zgSystem")]
[h,if(system == "Golgaris Erscheinen" || system == "JdU - Aranien" || system == "JdU - Kahet ni Kemi" || system == "Horas" || system == "Jahre des Lichts"), code:
	{
		[if(nJahr == 0), code:
			{
				[h,macro("inputFail@Lib:macros"): "kalenderNull"]
			};{}
		]
	};{}
]

[h: kalenderDaten = setStrProp(kalenderDaten, "zgTag", nTag)]
[h: kalenderDaten = setStrProp(kalenderDaten, "zgMonat", nMonat)]
[h: kalenderDaten = setStrProp(kalenderDaten, "zgJahr", nJahr)]
[h: setLibProperty("KalenderMain", kalenderDaten, "Lib:tools")]

[h,macro("kalZGEndProcess@Lib:tools"): ""]