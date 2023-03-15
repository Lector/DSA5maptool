[h: kalenderOptions = getLibProperty("KalenderOpt", "com.github.naxos84.tools")]
[h: kalenderDaten = getLibProperty("KalenderMain", "com.github.naxos84.tools")]
[h: system = getStrProp(kalenderDaten, "zgSystem")]
[h: jahr = getStrProp(kalenderDaten, "zgJahr")]
[h: monat = getStrProp(kalenderDaten, "zgMonat")]
[h: tag = getStrProp(kalenderDaten, "zgTag")]
[h: infoJahr = abs(jahr)]

[h: mapName = getCurrentMapName()]
[h: idMada = findToken("Madaphase")]
[h: idDatum = findToken("Aktuelles Datum")]
[h,if(idDatum == ""),Code:
{
	[h: mapName = "Spieltisch"]
	[h,if(idMada == ""): idMada = findToken("Madaphase", mapName)]
	[h,if(idDatum == ""): idDatum = findToken("Aktuelles Datum", mapName)]
}]

[h,switch(system), code:
	case "Hal":
		{
			[bfJahr = jahr + 993]
			[if(jahr >= 0): infoSuffix = "Hal"; infoSuffix = "v. Hal"]
			[if(jahr >= 0): chatInfoSuffix = strformat("im Jahre %s Hal", infoJahr); chatInfoSuffix = strformat("im Jahre %s vor Hal", infoJahr)]
		};
	case "Golgaris Erscheinen":
		{
			[if(jahr > 0): bfJahr = jahr + 685; bfJahr = jahr + 686]
			[if(jahr >= 0): infoSuffix = "GE"; infoSuffix = "v. GE"]
			[if(jahr >= 0): chatInfoSuffix = strformat("im Jahre %s von Golgaris Erscheinen", infoJahr); chatInfoSuffix = strformat("im Jahre %s vor Golgaris Erscheinen", infoJahr)]
		};
	case "JdU - Andergast":
		{
			[bfJahr = jahr - 854]
			[if(jahr >= 0): infoSuffix = "d. U. (Andergast)"; infoSuffix = "v. d. U. (Andergast)"]
			[if(jahr >= 0): chatInfoSuffix = strformat("im Jahre %s der Unabhängigkeit Andergasts", infoJahr); chatInfoSuffix = strformat("im Jahre %s vor der Unabhängigkeit Andergasts", infoJahr)]
		};
	case "JdU - Aranien":
		{
			[if(jahr > 0): bfJahr = jahr + 994; bfJahr = jahr + 995]
			[if(jahr >= 0): infoSuffix = "d. U. (Aranien)"; infoSuffix = "v. d. U. (Aranien)"]
			[if(jahr >= 0): chatInfoSuffix = strformat("im Jahre %s der Unabhängigkeit Araniens", infoJahr); chatInfoSuffix = strformat("im Jahre %s vor der Unabhängigkeit Araniens", infoJahr)]
		};
	case "JdU - Kahet ni Kemi":
		{
			[if(jahr > 0): bfJahr = jahr + 996; bfJahr = jahr + 997]
			[if(jahr >= 0): infoSuffix = "d. U. (Kahet ni Kemi)"; infoSuffix = "v. d. U. (Kahet ni Kemi)"]
			[if(jahr >= 0): chatInfoSuffix = strformat("im Jahre %s der Unabhängigkeit Kahet ni Kemis", infoJahr); chatInfoSuffix = strformat("im Jahre %s vor der Unabhängigkeit Kahet ni Kemis", infoJahr)]
		};
	case "JdU - Nostria":
		{
			[bfJahr = jahr - 854]
			[if(jahr >= 0): infoSuffix = "d. U. (Nostria)"; infoSuffix = "v. d. U. (Nostria)"]
			[if(jahr >= 0): chatInfoSuffix = strformat("im Jahre %s der Unabhängigkeit Nostrias", infoJahr); chatInfoSuffix = strformat("im Jahre %s vor der Unabhängigkeit Nostrias", infoJahr)]
		};
	case "Horas":
		{
			[if(jahr > 0): bfJahr = jahr - 1492; bfJahr = jahr - 1491]
			[if(jahr >= 0): infoSuffix = "Horas"; infoSuffix = "v. Horas"]
			[if(jahr >= 0): chatInfoSuffix = strformat("im Jahre %s Horas", infoJahr); chatInfoSuffix = strformat("im Jahre %s vor Horas", infoJahr)]
		};
	case "Kurkum":
		{
			[bfJahr = jahr + 416]
			[if(jahr > 0): infoSuffix = "nach Kurkum"; infoSuffix = "Kurkum"]
			[if(jahr == 0): infoSuffix = "v. Kurkum"; infoSuffix = infoSuffix]
			[if(jahr > 0): chatInfoSuffix = strformat("im Jahre %s nach Kurkum", infoJahr); chatInfoSuffix = strformat("im Jahre %s vor Kurkum", infoJahr)]
			[if(jahr == 0): chatInfoSuffix = strformat("im Jahre %s von Kurkum", infoJahr); chatInfoSuffix = chatInfoSuffix]
		};
	case "Jahre des Lichts":
		{
			[if(jahr > 0): bfJahr = jahr + 334; bfJahr = jahr + 335]
			[if(jahr >= 0): infoSuffix = "Jahr des Lichts"; infoSuffix = "v. d. Jahr des Lichts"]
			[if(jahr >= 0): chatInfoSuffix = strformat("im Jahr %s des Lichts", infoJahr); chatInfoSuffix = strformat("%s vor dem Jahr des Lichts", infoJahr)]
		};
	case "E.-Akte":
		{
			[bfJahr = jahr - 345]
			[if(jahr > 0): infoSuffix = "nach der E.-Akte"; infoSuffix = "vor der E.-Akte"]
			[if(jahr == 0): infoSuffix = "E.-Akte"; infoSuffix = infoSuffix]
			[if(jahr > 0): chatInfoSuffix = strformat("im Jahre %s nach der E.-Akte", infoJahr); chatInfoSuffix = strformat("im Jahre %s vor der E.-Akte", infoJahr)]
			[if(jahr == 0): chatInfoSuffix = strformat("im Jahre %s der E.-Akte", infoJahr); chatInfoSuffix = chatInfoSuffix]
		};
	case "Jurgas Landung":
		{
			[bfJahr = jahr - 1628]
			[if(jahr >= 0): infoSuffix = "JL"; infoSuffix = "v. JL"]
			[if(jahr >= 0): chatInfoSuffix = strformat("im Jahre %s von Jurgas Landung", infoJahr); chatInfoSuffix = strformat("im Jahre %s vor Jurgas Landung", infoJahr)]
		};
	case "Flug des Weltendiskus":
		{
			[bfJahr = jahr - 3822]
			[if(jahr >= 0): infoSuffix = "FdW"; infoSuffix = "v. d. FdW"]
			[if(jahr >= 0): chatInfoSuffix = strformat("im Jahre %s des Fluges des Weltendiskus", infoJahr); chatInfoSuffix = strformat("im Jahre %s vor dem Flug des Weltendiskus", infoJahr)]
		};
	case "Bosparans Fall":
		{
			[bfJahr = jahr]
			[if(jahr >= 0): infoSuffix = "BF"; infoSuffix = "v. BF"]
			[if(jahr > 0): chatInfoSuffix = strformat("im Jahre %s nach Bosparans Fall", infoJahr); chatInfoSuffix = strformat("im Jahre %s vor Bosparans Fall", infoJahr)]
			[if(jahr == 0): chatInfoSuffix = strformat("im Jahre %s von Bosparans Fall", infoJahr); chatInfoSuffix = chatInfoSuffix]
		};
	case "Zwerge":
		{
			[bfJahr = jahr]
			[if(jahr >= 0): infoSuffix = "BF"; infoSuffix = "v. BF"]
			[if(jahr > 0): chatInfoSuffix = strformat("(im Jahre %s nach Bosparans Fall)", infoJahr); chatInfoSuffix = strformat("(im Jahre %s vor Bosparans Fall)", infoJahr)]
			[if(jahr == 0): chatInfoSuffix = strformat("(im Jahre %s von Bosparans Fall)", infoJahr); chatInfoSuffix = chatInfoSuffix]
		};
	default:
		{
			[bfJahr = jahr]
		}
]
[h: halJahr = bfJahr - 993]

[h: regZahl = halJahr / 28]
[h: regZahl = string(regZahl)]
[h,if(listCount(regZahl, ".") == 1), code:
	{
		[commaNum = 0]
	};
	{
		[commaNum = listGet(regZahl, 1, ".")]
		[if(length(commaNum) > 2): commaNum = substring(commaNum, 0, 2); commaNum = commaNum]
	}
]
[h: commaNum = number(commaNum)]

[h,if(halJahr < 0), code:
	{
		[h,switch(commaNum):
			case "96": basisJahr = 1;
			case "92": basisJahr = 2;
			case "89": basisJahr = 3;
			case "85": basisJahr = 4;
			case "82": basisJahr = 5;
			case "78": basisJahr = 6;
			case "75": basisJahr = 7;
			case "71": basisJahr = 8;
			case "67": basisJahr = 9;
			case "64": basisJahr = 10;
			case "60": basisJahr = 11;
			case "57": basisJahr = 12;
			case "53": basisJahr = 13;
			case "50": basisJahr = 14;
			case "46": basisJahr = 15;
			case "42": basisJahr = 16;
			case "39": basisJahr = 17;
			case "35": basisJahr = 18;
			case "32": basisJahr = 19;
			case "28": basisJahr = 20;
			case "25": basisJahr = 21;
			case "21": basisJahr = 22;
			case "17": basisJahr = 23;
			case "14": basisJahr = 24;
			case "10": basisJahr = 25;
			case "07": basisJahr = 26;
			case "03": basisJahr = 27;
			default: basisJahr = 0
		]
	};
	{
		[h,switch(commaNum):
			case "03": basisJahr = 1;
			case "07": basisJahr = 2;
			case "10": basisJahr = 3;
			case "14": basisJahr = 4;
			case "17": basisJahr = 5;
			case "21": basisJahr = 6;
			case "25": basisJahr = 7;
			case "28": basisJahr = 8;
			case "32": basisJahr = 9;
			case "35": basisJahr = 10;
			case "39": basisJahr = 11;
			case "42": basisJahr = 12;
			case "46": basisJahr = 13;
			case "50": basisJahr = 14;
			case "53": basisJahr = 15;
			case "57": basisJahr = 16;
			case "60": basisJahr = 17;
			case "64": basisJahr = 18;
			case "67": basisJahr = 19;
			case "71": basisJahr = 20;
			case "75": basisJahr = 21;
			case "78": basisJahr = 22;
			case "82": basisJahr = 23;
			case "85": basisJahr = 24;
			case "89": basisJahr = 25;
			case "92": basisJahr = 26;
			case "96": basisJahr = 27;
			default: basisJahr = 0
		]
	}
]

[h: basisMonat = (monat * 2) - 2]
[h: basisTag = tag]
[h: basisGesamt = basisJahr + basisMonat + basisTag]
[h,if(basisGesamt >= 29 && basisGesamt <= 56): basisGesamt = basisGesamt - 28; basisGesamt = basisGesamt]
[h,if(basisGesamt >= 57 && basisGesamt <= 84): basisGesamt = basisGesamt - 56; basisGesamt = basisGesamt]

[h,switch(basisGesamt), code:
	case "1":
		{
			[wochentag = "Markttag"]
			[madanummer = 1]
			[madaphase = "Zunehmender Mond:<br>Phase des Kelches"]
		};
	case "2":
		{
			[wochentag = "Praiostag"]
			[madanummer = 2]
			[madaphase = "Zunehmender Mond:<br>Phase des Kelches"]
		};
	case "3":
		{
			[wochentag = "Rohalstag"]
			[madanummer = 3]
			[madaphase = "Zunehmender Mond:<br>Phase des Kelches"]
		};
	case "4":
		{
			[wochentag = "Feuertag"]
			[madanummer = 4]
			[madaphase = "Zunehmender Mond:<br>Phase des Kelches"]
		};
	case "5":
		{
			[wochentag = "Wassertag"]
			[madanummer = 5]
			[madaphase = "Zunehmender Mond:<br>Phase des Kelches"]
		};
	case "6":
		{
			[wochentag = "Windstag"]
			[madanummer = 6]
			[madaphase = "Zunehmender Mond:<br>Phase des Kelches"]
		};
	case "7":
		{
			[wochentag = "Erdstag"]
			[madanummer = 7]
			[madaphase = "Halbmond: Kelch"]
		};
	case "8":
		{
			[wochentag = "Markttag"]
			[madanummer = 8]
			[madaphase = "Zunehmender Mond:<br>Phase des Rades"]
		};
	case "9":
		{
			[wochentag = "Praiostag"]
			[madanummer = 9]
			[madaphase = "Zunehmender Mond:<br>Phase des Rades"]
		};
	case "10":
		{
			[wochentag = "Rohalstag"]
			[madanummer = 10]
			[madaphase = "Zunehmender Mond:<br>Phase des Rades"]
		};
	case "11":
		{
			[wochentag = "Feuertag"]
			[madanummer = 11]
			[madaphase = "Zunehmender Mond:<br>Phase des Rades"]
		};
	case "12":
		{
			[wochentag = "Wassertag"]
			[madanummer = 12]
			[madaphase = "Zunehmender Mond:<br>Phase des Rades"]
		};
	case "13":
		{
			[wochentag = "Windstag"]
			[madanummer = 13]
			[madaphase = "Zunehmender Mond:<br>Phase des Rades"]
		};
	case "14":
		{
			[wochentag = "Erdstag"]
			[madanummer = 14]
			[madaphase = "Vollmond: Rad"]
		};
	case "15":
		{
			[wochentag = "Markttag"]
			[madanummer = 15]
			[madaphase = "Abnehmender Mond:<br>Phase des Helmes"]
		};
	case "16":
		{
			[wochentag = "Praiostag"]
			[madanummer = 16]
			[madaphase = "Abnehmender Mond:<br>Phase des Helmes"]
		};
	case "17":
		{
			[wochentag = "Rohalstag"]
			[madanummer = 17]
			[madaphase = "Abnehmender Mond:<br>Phase des Helmes"]
		};
	case "18":
		{
			[wochentag = "Feuertag"]
			[madanummer = 18]
			[madaphase = "Abnehmender Mond:<br>Phase des Helmes"]
		};
	case "19":
		{
			[wochentag = "Wassertag"]
			[madanummer = 19]
			[madaphase = "Abnehmender Mond:<br>Phase des Helmes"]
		};
	case "20":
		{
			[wochentag = "Windstag"]
			[madanummer = 20]
			[madaphase = "Abnehmender Mond:<br>Phase des Helmes"]
		};
	case "21":
		{
			[wochentag = "Erdstag"]
			[madanummer = 21]
			[madaphase = "Halbmond: Helm"]
		};
	case "22":
		{
			[wochentag = "Markttag"]
			[madanummer = 22]
			[madaphase = "Abnehmender Mond:<br>Phase der Toten Mada"]
		};
	case "23":
		{
			[wochentag = "Praiostag"]
			[madanummer = 23]
			[madaphase = "Abnehmender Mond:<br>Phase der Toten Mada"]
		};
	case "24":
		{
			[wochentag = "Rohalstag"]
			[madanummer = 24]
			[madaphase = "Abnehmender Mond:<br>Phase der Toten Mada"]
		};
	case "25":
		{
			[wochentag = "Feuertag"]
			[madanummer = 25]
			[madaphase = "Abnehmender Mond:<br>Phase der Toten Mada"]
		};
	case "26":
		{
			[wochentag = "Wassertag"]
			[madanummer = 26]
			[madaphase = "Abnehmender Mond:<br>Phase der Toten Mada"]
		};
	case "27":
		{
			[wochentag = "Windstag"]
			[madanummer = 27]
			[madaphase = "Abnehmender Mond:<br>Phase der Toten Mada"]
		};
	case "28":
		{
			[wochentag = "Erdstag"]
			[madanummer = 28]
			[madaphase = "Neumond: Tote Mada"]
		};
	default:
		{}
]

[h: madaphase = "<span style='font-size: 12pt; font-weight: bold;'>"+madaphase+"</span>"]
[h,if(getStrProp(kalenderOptions, "mada") == 1), code:
{
		[setTokenImage(tableImage("mada", madanummer), idMada, mapName)]
		[setNotes(madaphase, idMada, mapName)]
};{}]

[h,switch(monat):
	case 1: monatName = "Praios";
	case 2: monatName = "Rondra";
	case 3: monatName = "Efferd";
	case 4: monatName = "Travia";
	case 5: monatName = "Boron";
	case 6: monatName = "Hesinde";
	case 7: monatName = "Firun";
	case 8: monatName = "Tsa";
	case 9: monatName = "Phex";
	case 10: monatName = "Peraine";
	case 11: monatName = "Ingerimm";
	case 12: monatName = "Rahja";
	default: monatName = "Namenloser Tag"
]

[h,if(system == "Horas" && wochentag == "Markttag"): wochentag = "Horastag"; wochentag = wochentag]
[h,if(system == "Kurkum" && wochentag == "Praiostag"): wochentag = "Rondratag"; wochentag = wochentag]
[h,if(system == "Golgaris Erscheinen" && wochentag == "Praiostag"): wochentag = "Borontag"; wochentag = wochentag]
[h,if(system == "JdU - Kahet ni Kemi" && wochentag == "Praiostag"): wochentag = "Borontag"; wochentag = wochentag]

[h,if(system == "Jurgas Landung"), code:
	{
		[switch(monat):
			case 1: monatName = "Midsonnmond";
			case 2: monatName = "Kornmond";
			case 3: monatName = "Heimamond";
			case 4: monatName = "Schlachtmond";
			case 5: monatName = "Sturmmond";
			case 6: monatName = "Frostmond";
			case 7: monatName = "Grimfrostmond";
			case 8: monatName = "Goimond";
			case 9: monatName = "Friskenmond";
			case 10: monatName = "Eimond";
			case 11: monatName = "Faramond";
			case 12: monatName = "Vinmond";
			default: monatName = "Hranngartag"
		]
		[switch(wochentag):
			case "Markttag": wochentag = "Firunsdag";
			case "Praiostag": wochentag = "Swafnirsdag";
			case "Rohalstag": wochentag = "Traviasdag";
			case "Feuertag": wochentag = "Jurgasdag";
			case "Wassertag": wochentag = "Hjaldisdag";
			case "Windstag": wochentag = "Trondesdag";
			case "Erdstag": wochentag = "Ifirnsdag";
			default: wochentag = wochentag
		]
		[if(bfJahr <= 1026 && wochentag == "Trondesdag"): wochentag = "Orozarsdag"; wochentag = wochentag]
	};{}
]

[h,if(system == "Zwerge"), code:
	{
		[switch(monat):
			case 1: monatName = "Sommermond";
			case 2: monatName = "Hitzemond";
			case 3: monatName = "Regenmond";
			case 4: monatName = "Weinmond";
			case 5: monatName = "Nebelmond";
			case 6: monatName = "Dunkelmond";
			case 7: monatName = "Frostmond";
			case 8: monatName = "Neugeburt";
			case 9: monatName = "Marktmond";
			case 10: monatName = "Saatmond";
			case 11: monatName = "Feuermond";
			case 12: monatName = "Brautmond";
			default: monatName = "Drachentag"
		]
	};{}
]

[h: info = strformat("<span style='font-size: 12pt; font-weight: bold;'>%s:<br>%s. %s %s %s</span>", wochentag, tag, monatName, infoJahr, infoSuffix)]
[h: chatInfo = strformat("%s,<br>%s. %s %s", wochentag, tag, monatName, chatInfoSuffix)]

[h: setNotes(info, idDatum, mapName)]

[h: ausgabe = strformat("
<table style='border-spacing: 0px; padding-top: 3px; font-weight: normal;'>
	<tr>
		<td style='text-align:center; padding: 0px;' valign='middle' width='40'>
			<img src='%s'>
		</td>
		<td width='5'>
			&nbsp;
		</td>
		<td style='text-align: center;' valign='middle' width='395'>
			<table style='border-spacing: 0px;'>
				<tr>
					<td>
						%s
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>",
tableImage("chat", 83), chatInfo)]

[h: ausgabe = border("Kalendereinstellungen", ausgabe)]

[h,if(getStrProp(kalenderOptions, "kalenderChat") == 1), code:
	{
		[h,macro("sendToPublic@lib:com.github.naxos84.macros"): ausgabe]
	};{}
]
[h,if(isFrameVisible("kalender") == 1), code:
	{
		[h,macro("kalenderMain@this"): ""]
	};{}
]