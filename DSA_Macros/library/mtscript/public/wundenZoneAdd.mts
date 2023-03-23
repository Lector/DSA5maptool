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

[h: zone = macro.args]
[h,if(getLibProperty("OptWunden", "com.github.lector.dsa5maptools") != 2), Code:
	{
		[h,macro("inputFail@this"): "wundenSystem"]
	};{}
]
[h: closeDialog("wundenZone")]

[h: wuSchaden = 0]
[h: iniMalus = 0]
[h: meldungBewusstlos = 0]
[h: meldungArmwunde = 0]
[h: meldungSturz = 0]
[h: meldungKampfunfaehig = 0]
[h: meldungKampfunfaehigWunden = 0]
[h: meldungSterbend = 0]

[h,switch(zone), Code:
	case "kopf": {
		[WuMod = setStrProp(WuMod, "mu", getStrProp(WuMod, "mu") + 2)]
		[WuMod = setStrProp(WuMod, "kl", getStrProp(WuMod, "kl") + 2)]
		[WuMod = setStrProp(WuMod, "in", getStrProp(WuMod, "in") + 2)]
		[WuMod = setStrProp(WuMod, "ini", getStrProp(WuMod, "ini") + 2)]
		[WUKopf = WUKopf + 1]
		[iniMalus = 2d6]
		[if(WUKopf == 3): wuSchaden = 2d6]
		[if(WUKopf == 3): meldungBewusstlos = 1]
		[if(WUKopf == 3): setState("amBoden", 1)]
		[if(WUKopf == 3): meldungKampfunfaehigWunden = 1]
		[if(WUKopf == 3): setState("kampfunfaehigWunden", 1)]
		[text = "Kopf"]
		[wundenTitle = "Automatisch eingetragen: Erste &amp; zweite Kopfwunde: MU, KL, IN &amp; INI-Basis -2, INI -2W6 - Dritte Wunde: +2W6 SP, bewusstlos, Blutverlust"]
		};
	case "brust": {
		[WuMod = setStrProp(WuMod, "at", getStrProp(WuMod, "at") + 1)]
		[WuMod = setStrProp(WuMod, "pa", getStrProp(WuMod, "pa") + 1)]
		[WuMod = setStrProp(WuMod, "ko", getStrProp(WuMod, "ko") + 1)]
		[WuMod = setStrProp(WuMod, "kk", getStrProp(WuMod, "kk") + 1)]
		[WUBrust = WUBrust + 1]
		[wuSchaden = 1d6]
		[if(WUBrust == 3): meldungBewusstlos = 1]
		[if(WUBrust == 3): setState("amBoden", 1)]
		[if(WUBrust == 3): meldungKampfunfaehigWunden = 1]
		[if(WUBrust == 3): setState("kampfunfaehigWunden", 1)]
		[text = "Brust"]
		[wundenTitle = "Automatisch eingetragen: Erste &amp; zweite Brustwunde: AT, PA, KO &amp; KK -1, +1W6 SP - Dritte Wunde: bewusstlos, Blutverlust"]
		};
	case "bauch": {
		[WuMod = setStrProp(WuMod, "at", getStrProp(WuMod, "at") + 1)]
		[WuMod = setStrProp(WuMod, "pa", getStrProp(WuMod, "pa") + 1)]
		[WuMod = setStrProp(WuMod, "ko", getStrProp(WuMod, "ko") + 1)]
		[WuMod = setStrProp(WuMod, "kk", getStrProp(WuMod, "kk") + 1)]
		[WuMod = setStrProp(WuMod, "gs", getStrProp(WuMod, "gs") + 1)]
		[WuMod = setStrProp(WuMod, "ini", getStrProp(WuMod, "ini") + 1)]
		[WUBauch = WUBauch + 1]
		[iniMalus = 1]
		[wuSchaden = 1d6]
		[if(WUBauch == 3): meldungBewusstlos = 1]
		[if(WUBauch == 3): setState("amBoden", 1)]
		[if(WUBauch == 3): meldungKampfunfaehigWunden = 1]
		[if(WUBauch == 3): setState("kampfunfaehigWunden", 1)]
		[text = "Bauch"]
		[wundenTitle = "Automatisch eingetragen: Erste &amp; zweite Bauchwunde: AT, PA, KO, KK, GS &amp; INI-Basis -1, +1W6 SP - Dritte Wunde: bewusstlos, Blutverlust"]
		};
	case "armLinks": {
		[WuMod = setStrProp(WuMod, "laAT", getStrProp(WuMod, "laAT") + 2)]
		[WuMod = setStrProp(WuMod, "laPA", getStrProp(WuMod, "laPA") + 2)]
		[WuMod = setStrProp(WuMod, "laFF", getStrProp(WuMod, "laFF") + 2)]
		[WuMod = setStrProp(WuMod, "laKK", getStrProp(WuMod, "laKK") + 2)]
		[WUArmLinks = WUArmLinks + 1]
		[if(WUArmLinks == 3): meldungArmwunde = 1]
		[text = "Linker Arm"]
		[wundenTitle = "Automatisch eingetragen: Erste &amp; zweite Armwunde: AT, PA, KK &amp; FF -2 mit diesem Arm - Dritte Wunde: Arm handlungsunfähig"]
		};
	case "armRechts": {
		[WuMod = setStrProp(WuMod, "raAT", getStrProp(WuMod, "raAT") + 2)]
		[WuMod = setStrProp(WuMod, "raPA", getStrProp(WuMod, "raPA") + 2)]
		[WuMod = setStrProp(WuMod, "raFF", getStrProp(WuMod, "raFF") + 2)]
		[WuMod = setStrProp(WuMod, "raKK", getStrProp(WuMod, "raKK") + 2)]
		[WUArmRechts = WUArmRechts + 1]
		[if(WUArmRechts == 3): meldungArmwunde = 1]
		[text = "Rechter Arm"]
		[wundenTitle = "Automatisch eingetragen: Erste &amp; zweite Armwunde: AT, PA, KK &amp; FF -2 mit diesem Arm - Dritte Wunde: Arm handlungsunfähig"]
		};
	case "beinLinks": {
		[WuMod = setStrProp(WuMod, "at", getStrProp(WuMod, "at") + 2)]
		[WuMod = setStrProp(WuMod, "pa", getStrProp(WuMod, "pa") + 2)]
		[WuMod = setStrProp(WuMod, "ge", getStrProp(WuMod, "ge") + 2)]
		[WuMod = setStrProp(WuMod, "ini", getStrProp(WuMod, "ini") + 2)]
		[WuMod = setStrProp(WuMod, "gs", getStrProp(WuMod, "gs") + 1)]
		[WUBeinLinks = WUBeinLinks + 1]
		[iniMalus = 2]
		[if(WUBeinLinks == 3): meldungSturz = 1]
		[if(WUBeinLinks == 3): meldungKampfunfaehig = 1]
		[if(WUBeinLinks == 3): setState("amBoden", 1)]
		[text = "Linkes Bein"]
		[wundenTitle = "Automatisch eingetragen: Erste &amp; zweite Beinwunde: AT, PA, GE &amp; INI-Basis -2, GS -1 - Dritte Wunde: Sturz, kampfunfähig"]
		};
	case "beinRechts": {
		[WuMod = setStrProp(WuMod, "at", getStrProp(WuMod, "at") + 2)]
		[WuMod = setStrProp(WuMod, "pa", getStrProp(WuMod, "pa") + 2)]
		[WuMod = setStrProp(WuMod, "ge", getStrProp(WuMod, "ge") + 2)]
		[WuMod = setStrProp(WuMod, "ini", getStrProp(WuMod, "ini") + 2)]
		[WuMod = setStrProp(WuMod, "gs", getStrProp(WuMod, "gs") + 1)]
		[WUBeinRechts = WUBeinRechts + 1]
		[iniMalus = 2]
		[if(WUBeinRechts == 3): meldungSturz = 1]
		[if(WUBeinRechts == 3): meldungKampfunfaehig = 1]
		[if(WUBeinRechts == 3): setState("amBoden", 1)]
		[text = "Rechtes Bein"]
		[wundenTitle = "Automatisch eingetragen: Erste &amp; zweite Beinwunde: AT, PA, GE &amp; INI-Basis -2, GS -1 - Dritte Wunde: Sturz, kampfunfähig"]
		}
]

[h: Wunden = Wunden + 1]
[h: listINI = getInitiative()]
[h,if(isNumber(listINI) == 1): token.init = listINI - iniMalus]
[h: sortInitiative()]
[h,if(getLibProperty("OptKampfAU", "com.github.lector.dsa5maptools") == 1): auSchaden = 1d6; auSchaden = 0]
[h,if(auSchaden > AuP): auSchaden = AuP]
[h: LeP = LeP - wuSchaden]
[h: AuP = AuP - auSchaden]
[h,if(wuSchaden > 0 || auSchaden > 0): wundenTitle = wundenTitle + strformat(" - SP: %s, SP(A): %s", wuSchaden, auSchaden)]

[h: checkList = getLibProperty("ImpAusdruckVergleich", "com.github.lector.dsa5maptools")]
[h: check = listGet(checkList, 10)]
[h,if(LeP <= 5 && LeP >= 1), Code:
	{
		[if(listFind(Vorteile, "Eisern") == -1 && listFind(Vorteile, check) == -1): meldungKampfunfaehig = 1]
	};{}
]
[h,if(AuP <= 0): meldungKampfunfaehig = 1]
[h,if(listFind(Vorteile, check) != -1): koMod = round(KO * 1.5); koMod = KO]
[h,if(LeP <= 0 && LeP >= koMod * -1), Code:
	{
		[meldungKampfunfaehig = 1]
		[meldungSterbend = 1]
	};
	{
		[if(LeP < koMod * -1): setState("tot", 1)]
	}
]

[h: ausgabe = strformat("
<div style='background-image: url(%s); background-repeat: no-repeat; color: #441e13; font-size: 12pt; font-weight: bold; text-align: center; margin: 0px; height: 77;' width='501'>
	<table style='border-spacing: 0px; margin-top: 36px;'>
		<tr>
			<td>
				Wunde erhalten
			</td>
		</tr>
	</table>
</div>
<div style='background-image: url(%s); background-repeat: repeat-y; color: #441e13; font-size: 12pt; font-weight: bold; text-align: center; margin: 0px;' width='501'>
	<table style='border-spacing: 0px; padding-top: 3px;'>
		<tr>
			<td width='18'>
				&nbsp;
			</td>
			<td width='25'>
				&nbsp;
			</td>
			<td style='text-align:center; padding: 0px;' valign='middle' width='40'>
				<img src='%s'>
			</td>
			<td width='25'>
				&nbsp;
			</td>
			<td valign='middle'>
				Neu hinzugefügte Wunde: <span style='color: #a42b1e; font-size: 14pt;' title='%s'>%s</span>
			</td>
			<td width='25'>
				&nbsp;
			</td>
			<td width='18'>
				&nbsp;
			</td>
		</tr>
	</table>
", tableImage("chat", 30), tableImage("chat", 31), tableImage("chat", 71), wundenTitle, text)]

[h,if(getState("tot") == 1): ausgabe = ausgabe + strformat("
	<table style='border-spacing: 0px; margin-top: 5px;'>
		<tr>
			<td valign='top'>
				<img src='%s'>
			</td>
			<td width='10'>
				&nbsp;
			</td>
			<td style='font-weight: normal;' valign='middle'>
				<b>(Hoffentlich) Heldenhafter Tot</b>
				<br>Du bist gerade gestorben. Ruhe in Frieden.
			</td>
		</tr>
	</table>
", data.getStaticData("com.github.lector.dsa5maptools", "/public/images/chat/probeZusatz.png"))]

[h,if(meldungSterbend == 1 && getState("sterbend") == 0), Code:
	{
		[setState("sterbend", 1)]
		[deathTime = 1d6 * koMod]
		[ausgabe = ausgabe + strformat("
		<table style='border-spacing: 0px; margin-top: 5px;'>
			<tr>
				<td valign='top'>
					<img src='%s'>
				</td>
				<td width='10'>
					&nbsp;
				</td>
				<td style='font-weight: normal;' valign='middle'>
					<b>Lebensbedrohlich verletzt</b>
					<br>Du liegst im Sterben. In %s Kampfrunden bist du tot.
				</td>
			</tr>
		</table>
		", data.getStaticData("com.github.lector.dsa5maptools", "/public/images/chat/probeZusatz.png"), deathTime)]
	};{}
]

[h,if(meldungKampfunfaehig == 1 && getState("kampfunfaehig") == 0), Code:
	{
		[setState("kampfunfaehig", 1)]
		[ausgabe = ausgabe + strformat("
		<table style='border-spacing: 0px; margin-top: 5px;'>
			<tr>
				<td valign='top'>
					<img src='%s'>
				</td>
				<td width='10'>
					&nbsp;
				</td>
				<td style='font-weight: normal;' valign='middle'>
					<b>Kampfunfähig</b>
					<br>Keinerlei Aktionen mehr möglich. Bewegung nur noch mit GS 1.
				</td>
			</tr>
		</table>
		", data.getStaticData("com.github.lector.dsa5maptools", "/public/images/chat/probeZusatz.png"))]
	};{}
]

[h,if(meldungKampfunfaehigWunden == 1 && getState("kampfunfaehigWunden") == 0 && meldungKampfunfaehig == 0), Code:
	{
		[ausgabe = ausgabe + strformat("
		<table style='border-spacing: 0px; margin-top: 5px;'>
			<tr>
				<td valign='top'>
					<img src='%s'>
				</td>
				<td width='10'>
					&nbsp;
				</td>
				<td style='font-weight: normal;' valign='middle'>
					<b>Kampfunfähig</b>
					<br>Keinerlei Aktionen mehr möglich. Bewegung nur noch mit GS 1.
				</td>
			</tr>
		</table>
		", data.getStaticData("com.github.lector.dsa5maptools", "/public/images/chat/probeZusatz.png"))]
	};{}
]

[h,if(meldungBewusstlos == 1 && getState("bewusstlos") == 0), Code:
	{
		[setState("bewusstlos", 1)]
		[bewusstlosDauer = 1d20]
		[ausgabe = ausgabe + strformat("
		<table style='border-spacing: 0px; margin-top: 5px;'>
			<tr>
				<td valign='top'>
					<img src='%s'>
				</td>
				<td width='10'>
					&nbsp;
				</td>
				<td style='font-weight: normal;' valign='middle'>
					<b>Bewusstlosigkeit &amp; Blutverlust</b>
					<br>- Du bist für die nächsten %s Kampfrunden bewusstlos.
					<br>- Jede KR Verlust von 1 LeP bis die Wunde versorgt wurde.
				</td>
			</tr>
		</table>
		", data.getStaticData("com.github.lector.dsa5maptools", "/public/images/chat/probeZusatz.png"), bewusstlosDauer)]
	};{}
]

[h,if(meldungArmwunde == 1): ausgabe = ausgabe + strformat("
	<table style='border-spacing: 0px; margin-top: 5px;'>
		<tr>
			<td valign='top'>
				<img src='%s'>
			</td>
			<td width='10'>
				&nbsp;
			</td>
			<td style='font-weight: normal;' valign='middle'>
				<b>Dritte Armwunde</b>
				<br>- Dieser Arm wird aktionsunfähig.
				<br>- Mit diesem Arm gehaltene Waffen werden fallengelassen.
			</td>
		</tr>
	</table>
", data.getStaticData("com.github.lector.dsa5maptools", "/public/images/chat/probeZusatz.png"))]

[h,if(meldungSturz == 1): ausgabe = ausgabe + strformat("
	<table style='border-spacing: 0px; margin-top: 5px;'>
		<tr>
			<td valign='top'>
				<img src='%s'>
			</td>
			<td width='10'>
				&nbsp;
			</td>
			<td style='font-weight: normal;' valign='middle'>
				<b>Dritte Beinwunde</b>
				<br>Sturz - Du bist nicht mehr in der Lage am Nahkampf teilzunehmen.
			</td>
		</tr>
	</table>
", data.getStaticData("com.github.lector.dsa5maptools", "/public/images/chat/probeZusatz.png"))]

[h: ausgabe = ausgabe + strformat("
</div>
<div style='background-image: url(%s); background-repeat: no-repeat; color: #441e13; font-size: 12pt; font-weight: bold; margin: 0px; height: 19;' width='501'>
</div>
", tableImage("chat", 32))]

[h,if(isNPC() == 1 && getLibProperty("OptHideNSCAction", "com.github.lector.dsa5maptools") == 1), Code:
	{
		[h,macro("sendToGM@this"): ausgabe]
	};
	{
		[h,macro("sendToPublic@this"): ausgabe]
	}
]
[h,macro("checkStatusWunden@this"): ""]
[h,macro("checkStatusLowLeAu@this"): ""]
[h,macro("refreshFrame@this"): ""]