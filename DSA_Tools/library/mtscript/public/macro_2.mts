[h: uebergabe = macro.args]

[h,if(getStrProp(uebergabe, "fAnzahl") == ""): anzahl = 0; anzahl = getStrProp(uebergabe, "fAnzahl")]
[h,if(getStrProp(uebergabe, "fGebuehr") == ""): gebuehr = 0; gebuehr = getStrProp(uebergabe, "fGebuehr")]

[h,switch(getStrProp(uebergabe, "quellWaehrung")), Code:
	case "qAlanfa": { 
		[switch(getStrProp(uebergabe, "wAlanfa")):
			case "Dirham": uKreuzer = anzahl;
			case "Kleiner Oreal": uKreuzer = anzahl * 50;
			case "Oreal / Schilling": uKreuzer = anzahl * 100;
			case "Dublone": uKreuzer = anzahl * 2000;
			default: uKreuzer = 0
		]
	};
	case "qKalifat": { 
		[switch(getStrProp(uebergabe, "wKalifat")):
			case "Muwlat": uKreuzer = anzahl * 5;
			case "Zechine": uKreuzer = anzahl * 200;
			case "Marawedi": uKreuzer = anzahl * 2000;
			case "Shekel - veraltet": uKreuzer = anzahl;
			case "Denar - veraltet": uKreuzer = anzahl * 40;
			case "Piaster - veraltet": uKreuzer = anzahl * 150;
			default: uKreuzer = 0
		]
	};
	case "qAranien": { 
		[switch(getStrProp(uebergabe, "wAranien")):
			case "Kurush - Rosenkreuzer": uKreuzer = anzahl;
			case "Hallah": uKreuzer = anzahl * 10;
			case "Schekel": uKreuzer = anzahl * 100;
			case "Dinar": uKreuzer = anzahl * 1000;
			default: uKreuzer = 0
		]
	};
	case "qBergkoenigreich": { 
		[switch(getStrProp(uebergabe, "wBergkoenigreich")):
			case "Atebrox - Zwergengroschen": uKreuzer = anzahl * 20;
			case "Arganbrox - Zwergenschilling": uKreuzer = anzahl * 200;
			case "Auromox - Zwergentaler": uKreuzer = anzahl * 1200;
			default: uKreuzer = 0
		]
	};
	case "qAmazonen": { 
		[switch(getStrProp(uebergabe, "wAmazonen")):
			case "Amazonenkrone": uKreuzer = anzahl * 1200;
			default: uKreuzer = 0
		]
	};
	case "qMittelreich": { 
		[switch(getStrProp(uebergabe, "wMittelreich")):
			case "Kreuzer": uKreuzer = anzahl;
			case "Heller": uKreuzer = anzahl * 10;
			case "Silbertaler": uKreuzer = anzahl * 100;
			case "Dukate": uKreuzer = anzahl * 1000;
			case "Nickel - veraltet": uKreuzer = anzahl * 2;
			case "Puniner Dublone - veraltet": uKreuzer = anzahl * 800;
			case "Balihoer Rad - veraltet": uKreuzer = anzahl * 10000;
			case "Eslamo - veraltet": uKreuzer = anzahl * 10000;
			default: uKreuzer = 0
		]
	};
	case "qBornland": { 
		[switch(getStrProp(uebergabe, "wBornland")):
			case "Deut": uKreuzer = anzahl * 10;
			case "Groschen / Silbergroschen": uKreuzer = anzahl * 100;
			case "Batzen": uKreuzer = anzahl * 1000;
			default: uKreuzer = 0
		]
	};
	case "qAndergast": { 
		[switch(getStrProp(uebergabe, "wAndergast")):
			case "Andrataler": uKreuzer = anzahl * 500;
			default: uKreuzer = 0
		]
	};
	case "qSchwarzeLande": { 
		[switch(getStrProp(uebergabe, "wSchwarzeLande")):
			case "Kreuzer - Oron": uKreuzer = anzahl;
			case "Heller - Oron": uKreuzer = anzahl * 10;
			case "Silbertaler - Oron": uKreuzer = anzahl * 100;
			case "Dukate - Oron": uKreuzer = anzahl * 1000;
			case "Splitter - Xeraanien": uKreuzer = anzahl * 14;
			case "Zholvari - Xeraanien": uKreuzer = anzahl * 100;
			case "Borbaradstaler - Xeraanien": uKreuzer = anzahl * 700;
			case "Gulden - Glorania": uKreuzer = anzahl * 500;
			default: uKreuzer = 0
		]
	};
	case "qMengbilla": { 
		[switch(getStrProp(uebergabe, "wMengbilla")):
			case "Ikossar": uKreuzer = anzahl * 5;
			case "Tessar": uKreuzer = anzahl * 25;
			case "Telar": uKreuzer = anzahl * 100;
			case "Dekat": uKreuzer = anzahl * 1000;
			case "Mengbillaner Unze - veraltet": uKreuzer = anzahl * 1000;
			default: uKreuzer = 0
		]
	};
	case "qBrabak": { 
		[switch(getStrProp(uebergabe, "wBrabak")):
			case "Brabaker Kreuzer": uKreuzer = anzahl;
			case "Brabaker Krone - in Brabak": uKreuzer = anzahl * 1000;
			case "Brabaker Krone - ausserhalb Brabak": uKreuzer = anzahl * 500;
			default: uKreuzer = 0
		]
	};
	case "qTulamidenlande": { 
		[switch(getStrProp(uebergabe, "wTulamidenlande")):
			case "Alastren - Khunchom": uKreuzer = anzahl * 500000;
			case "Piaster - Rashdul": uKreuzer = anzahl * 5000;
			case "Selemer Kupferschilling - veraltet": uKreuzer = anzahl * 10;
			default: uKreuzer = 0
		]
	};
	case "qPaavi": { 
		[switch(getStrProp(uebergabe, "wPaavi")):
			case "Gulden": uKreuzer = anzahl * 500;
			default: uKreuzer = 0
		]
	};
	case "qNostria": { 
		[switch(getStrProp(uebergabe, "wNostria")):
			case "Nostrische Krone": uKreuzer = anzahl * 500;
			default: uKreuzer = 0
		]
	};
	case "qVallusa": { 
		[switch(getStrProp(uebergabe, "wVallusa")):
			case "Flindrich": uKreuzer = anzahl * 10;
			case "Stueber": uKreuzer = anzahl * 100;
			case "Witten": uKreuzer = anzahl * 1000;
			default: uKreuzer = 0
		]
	};
	case "qHorasreich": { 
		[switch(getStrProp(uebergabe, "wHorasreich")):
			case "Kreuzer": uKreuzer = anzahl;
			case "Heller": uKreuzer = anzahl * 10;
			case "Silbertaler": uKreuzer = anzahl * 100;
			case "Dukate": uKreuzer = anzahl * 1000;
			case "Kusliker Rad / Horasdor": uKreuzer = anzahl * 20000;
			case "Schilling - veraltet": uKreuzer = anzahl * 10;
			case "Zehnt - veraltet": uKreuzer = anzahl * 100;
			case "Arivorer Silberdukate - veraltet": uKreuzer = anzahl * 500;
			case "Krone - veraltet": uKreuzer = anzahl * 1000;
			default: uKreuzer = 0
		]
	};
	case "qTrahelien": { 
		[switch(getStrProp(uebergabe, "wTrahelien")):
			case "Truemmer": uKreuzer = anzahl;
			case "Ch-ryskl": uKreuzer = anzahl * 10;
			case "Hedsch": uKreuzer = anzahl * 100;
			case "Suvar": uKreuzer = anzahl * 1000;
			default: uKreuzer = 0
		]
	};
	case "qSonstige": { 
		[switch(getStrProp(uebergabe, "wSonstige")):
			case "Chorhoper Heller": uKreuzer = anzahl * 10;
			case "Minisepe - Durchschnitt": uKreuzer = anzahl * 10;
			case "Syllaner Taler": uKreuzer = anzahl * 100;
			default: uKreuzer = 0
		]
	};
    default: {
		uKreuzer = 0
	}
]

[h: uKreuzer = uKreuzer - (uKreuzer * (gebuehr / 100))]
[h: macro.return = uKreuzer]