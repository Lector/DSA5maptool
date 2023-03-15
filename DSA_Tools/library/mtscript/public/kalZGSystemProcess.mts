[h: uebergabe = macro.args]

[h: options = getLibProperty("KalenderOpt", "com.github.naxos84.tools")]
[h,if(getStrProp(options, "kalender") == 0), code: 
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "kalender"]
	};{}
]

[h: nSystem = json.get(uebergabe, "fSystem")]
[h: kalenderDaten = getLibProperty("KalenderMain", "com.github.naxos84.tools")]
[h: aSystem = getStrProp(kalenderDaten, "zgSystem")]
[h: aJahr = getStrProp(kalenderDaten, "zgJahr")]

[h,switch(aSystem), code:
	case "Hal":
		{
			[bfJahr = aJahr + 993]
		};
	case "Golgaris Erscheinen":
		{
			[if(aJahr > 0): bfJahr = aJahr + 685; bfJahr = aJahr + 686]
		};
	case "JdU - Andergast":
		{
			[bfJahr = aJahr - 854]
		};
	case "JdU - Aranien":
		{
			[if(aJahr > 0): bfJahr = aJahr + 994; bfJahr = aJahr + 995]
		};
	case "JdU - Kahet ni Kemi":
		{
			[if(aJahr > 0): bfJahr = aJahr + 996; bfJahr = aJahr + 997]
		};
	case "JdU - Nostria":
		{
			[bfJahr = aJahr - 854]
		};
	case "Horas":
		{
			[if(aJahr > 0): bfJahr = aJahr - 1492; bfJahr = aJahr - 1491]
		};
	case "Kurkum":
		{
			[bfJahr = aJahr + 416]
		};
	case "Jahre des Lichts":
		{
			[if(aJahr > 0): bfJahr = aJahr + 334; bfJahr = aJahr + 335]
		};
	case "E.-Akte":
		{
			[bfJahr = aJahr - 345]
		};
	case "Jurgas Landung":
		{
			[bfJahr = aJahr - 1628]
		};
	case "Flug des Weltendiskus":
		{
			[bfJahr = aJahr - 3822]
		};
	default:
		{
			[bfJahr = aJahr]
		};
]

[h,switch(nSystem), code:
	case "Hal":
		{
			[nJahr = bfJahr - 993]
		};
	case "Golgaris Erscheinen":
		{
			[nJahr = bfJahr - 686]
			[if(nJahr >= 0): nJahr = nJahr + 1]
		};
	case "JdU - Andergast":
		{
			[nJahr = bfJahr + 854]
		};
	case "JdU - Aranien":
		{
			[nJahr = bfJahr - 995]
			[if(nJahr >= 0): nJahr = nJahr + 1]
		};
	case "JdU - Kahet ni Kemi":
		{
			[nJahr = bfJahr - 997]
			[if(nJahr >= 0): nJahr = nJahr + 1]
		};
	case "JdU - Nostria":
		{
			[nJahr = bfJahr + 854]
		};
	case "Horas":
		{
			[nJahr = bfJahr + 1491]
			[if(nJahr >= 0): nJahr = nJahr + 1]
		};
	case "Kurkum":
		{
			[nJahr = bfJahr - 416]
		};
	case "Jahre des Lichts":
		{
			[nJahr = bfJahr - 335]
			[if(nJahr >= 0): nJahr = nJahr + 1]
		};
	case "E.-Akte":
		{
			[nJahr = bfJahr + 345]
		};
	case "Jurgas Landung":
		{
			[nJahr = bfJahr + 1628]
		};
	case "Flug des Weltendiskus":
		{
			[nJahr = bfJahr + 3822]
		};
	default:
		{
			[nJahr = bfJahr]
		};
]

[h: kalenderDaten = setStrProp(kalenderDaten, "zgSystem", nSystem)]
[h: kalenderDaten = setStrProp(kalenderDaten, "zgJahr", nJahr)]
[h: setLibProperty("KalenderMain", kalenderDaten, "com.github.naxos84.tools")]

[h,macro("kalZGEndProcess@this"): ""]