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
[h: chat = getStrProp(uebergabe, "chat")]

[h,if(getStrProp(uebergabe, "schadenEingabe") == ""): schadenEingabe = 0; schadenEingabe = getStrProp(uebergabe, "schadenEingabe")]
[h,if(getStrProp(uebergabe, "wBonus") == ""): wBonus = 0; wBonus = getStrProp(uebergabe, "wBonus")]
[h,if(getStrProp(uebergabe, "wMalus") == ""): wMalus = 0; wMalus = getStrProp(uebergabe, "wMalus")]
[h: wAnzahl = getStrProp(uebergabe, "wAnzahl")]
[h: wTyp = getStrProp(uebergabe, "wTyp")]
[h: quelle = getStrProp(uebergabe, "quelle")]
[h: zone = getStrProp(uebergabe, "zone")]

[h,if(isNumber(schadenEingabe) == 0 || isNumber(wBonus) == 0 || isNumber(wMalus) == 0), Code:
	{
		[h,macro("inputFail@this"): "numText"]
	};{}
]
[h,if(schadenEingabe != round(schadenEingabe) || wBonus != round(wBonus) || wMalus != round(wMalus)), Code:
	{
		[h,macro("inputFail@this"): "numInteger"]
	};{}
]
[h,if(schadenEingabe < 0 || wBonus < 0 || wMalus < 0), Code:
	{
		[h,macro("inputFail@this"): "numNegative"]
	};{}
]
[h: closeDialog("schadenAllgemein")]

[h: wMod = ""]
[h: wuerfel = ""]
[h,if(getStrProp(uebergabe, "wSchaden") == 0), Code:
	{
		[ganzerSchaden = schadenEingabe]
		[schadenTitle = "Direkte Schadenseingabe"]
	};
	{
		[wMod = wBonus - wMalus]
		[ganzerSchaden = roll(wAnzahl, wTyp) + wMod]
		[if(ganzerSchaden < 0): ganzerSchaden = 0]
		[if(wMod > 0): wuerfel = wAnzahl+"W"+wTyp+"+"+abs(wMod); wuerfel = wAnzahl+"W"+wTyp]
		[if(wMod < 0): wuerfel = wAnzahl+"W"+wTyp+"-"+abs(wMod)]
		[schadenTitle = wuerfel]
	}
]
[h,if(ganzerSchaden < 0): ganzerSchaden = 0]

[h,if(getStrProp(uebergabe, "schadenArt") == 1): schadenArt = "TP"; schadenArt = "SP"]
[h,if(getStrProp(uebergabe, "ausdauer") != ""): schadenArt = schadenArt+"(A)"]
[h: tZone = getStrProp(uebergabe, "zone")]
[h,if(tZone == 99), Code:
	{
		[h: zoneList = "0, 0, 0, 0"]
		[h,macro("trefferzone@this"): zoneList]
		[h: zone = macro.return]
	};
	{
		[h,switch(tZone):
			case "0": zone = "Gesamt";
			case "1": zone = "Kopf<br>(gezielt)";
			case "2": zone = "Brust<br>(gezielt)";
			case "3": zone = "R&uuml;cken<br>(gezielt)";
			case "4": zone = "Bauch<br>(gezielt)";
			case "5": zone = "Linker Arm<br>(gezielt)";
			case "6": zone = "Rechter Arm<br>(gezielt)";
			case "7": zone = "Linkes Bein<br>(gezielt)";
			case "8": zone = "Rechtes Bein<br>(gezielt)"
		]
	}
]

[h: ausgabe = strformat("
<div style='background-image: url(%s); background-repeat: no-repeat; color: #441e13; font-size: 12pt; font-weight: bold; text-align: center; margin: 0px; height: 77;' width='321'>
	<table style='border-spacing: 0px; margin-top: 36px;'>
		<tr>
			<td>
				%s
			</td>
		</tr>
	</table>
</div>
<div style='background-image: url(%s); background-repeat: repeat-y; color: #441e13; font-size: 12pt; font-weight: bold; text-align: center; margin: 0px;' width='321'>
	<table style='border-spacing: 0px; margin-top: 3px;'>
		<tr>
			<td width='18'>
				&nbsp;
			</td>
			<td style='text-align:center; padding: 0px;' valign='middle' width='80'>
				<img src='%s'>
			</td>
			<td>
				<table style='border-spacing: 0px;'>
					<tr>
						<td style='text-align: center;'>
							Schaden:
						</td>
					</tr>
					<tr>
						<td style='text-align: center; font-size: 20pt; padding-top: 3px; color: #1d5c2f;'>
							<span title='%s'>%s %s</span>
						</td>
					</tr>
				</table>
			</td>
			<td width='25'>
				&nbsp;
			</td>
			<td>
				<table style='border-spacing: 0px;'>
					<tr>
						<td style='text-align: center;'>
							Trefferzone:
						</td>
					</tr>
					<tr>
						<td style='text-align: center; padding-top: 3px; color: #1d5c2f;'>
							%s
						</td>
					</tr>
				</table>
			</td>
			<td width='20'>
				&nbsp;
			</td>
			<td width='18'>
				&nbsp;
			</td>
		</tr>
	</table>
</div>
<div style='background-image: url(%s); background-repeat: no-repeat; color: #441e13; font-size: 12pt; font-weight: bold; margin: 0px; height: 19;' width='321'>
</div>
", tableImage("chat", 25), quelle, tableImage("chat", 26), tableImage("chat", 19), schadenTitle, ganzerSchaden, schadenArt, zone, tableImage("chat", 27))]

[h,switch(chat), Code:
	case "1": {
			[h,macro("sendToPublic@this"): ausgabe]
		};
	case "2": {
			[h,macro("sendToGM@this"): ausgabe]
		};
	case "3": {
			[h,macro("sendToSelfGM@this"): ausgabe]
		}
]