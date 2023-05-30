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
[h: chat = json.get(uebergabe, "chat")]

[h,if(json.get(uebergabe, "leBonus") == ""): leBonus = 0; leBonus = json.get(uebergabe, "leBonus")]
[h,if(json.get(uebergabe, "leMalus") == ""): leMalus = 0; leMalus = json.get(uebergabe, "leMalus")]
[h,if(json.get(uebergabe, "aeBonus") == ""): aeBonus = 0; aeBonus = json.get(uebergabe, "aeBonus")]
[h,if(json.get(uebergabe, "aeMalus") == ""): aeMalus = 0; aeMalus = json.get(uebergabe, "aeMalus")]
[h,if(json.get(uebergabe, "keBonus") == ""): keBonus = 0; keBonus = json.get(uebergabe, "keBonus")]
[h,if(json.get(uebergabe, "keMalus") == ""): keMalus = 0; keMalus = json.get(uebergabe, "keMalus")]

[h,if(json.get(uebergabe, "Lagerplatz") == ""): Lagerplatz = 0; Lagerplatz = json.get(uebergabe, "Lagerplatz")]
[h,if(json.get(uebergabe, "Nachtruhe") == ""): Nachtruhe = 0; Nachtruhe = json.get(uebergabe, "Nachtruhe")]
[h,if(json.get(uebergabe, "Unterkunft") == ""): Unterkunft = 0; Unterkunft = json.get(uebergabe, "Unterkunft")]
[h,if(json.get(uebergabe, "Umgebung") == ""): Umgebung = 0; Umgebung = json.get(uebergabe, "Umgebung")]
[h,if(json.get(uebergabe, "UmgebungRegKomplett") == ""): UmgebungRegKomplett = 0; UmgebungRegKomplett = json.get(uebergabe, "UmgebungRegKomplett")]

[h: zustandMod =  max(0, (Ueberanstrengung - 1))]
[h: gesamtMod = Lagerplatz + Nachtruhe + Unterkunft - zustandMod]
[h: gesamtTitle = ""]
[h,if(Lagerplatz < 0): gesamtTitle = listAppend(gesamtTitle, strformat("Lagerplatz (%s)", Lagerplatz))]
[h,if(Nachtruhe < 0): gesamtTitle = listAppend(gesamtTitle, strformat("Nachtruhe (%s)", Nachtruhe))]
[h,if(Unterkunft > 0): gesamtTitle = listAppend(gesamtTitle, strformat("Unterkunft (+%s)", Unterkunft))]
[h,if(zustandMod > 0): gesamtTitle = listAppend(gesamtTitle, strformat("Überanstrengung (-%s)", zustandMod))]

[h,if(isNumber(leBonus) == 0 || isNumber(leMalus) == 0 || isNumber(aeBonus) == 0 || isNumber(aeMalus) == 0 || isNumber(keBonus) == 0 || isNumber(keMalus) == 0), Code:
	{
		[h,macro("inputFail@this"): "numText"]
	};{}
]
[h,if(leBonus != round(leBonus) || leMalus != round(leMalus) || aeBonus != round(aeBonus) || aeMalus != round(aeMalus) || keBonus != round(keBonus) || keMalus != round(keMalus)), Code:
	{
		[h,macro("inputFail@this"): "numInteger"]
	};{}
]
[h,if(leBonus < 0 || leMalus < 0 || aeBonus < 0 || aeMalus < 0 || keBonus < 0 || keMalus < 0), Code:
	{
		[h,macro("inputFail@this"): "numNegative"]
	};{}
]
[h: closeDialog("regeneration")]

[h,if(json.get(uebergabe, "regLE") == 1 && json.get(uebergabe, "krankVergiftet") != 1 && UmgebungRegKomplett != 1),Code:
{
	[h: leRegTyp = json.get(uebergabe, "regLEtyp")]
	[h: leMod = json.get(uebergabe, "lepmod")]
	[h,if(isNumber(leRegTyp)): leWergebnis = leRegTyp; leWergebnis = eval(leRegTyp)]
	[h: leRegGesamt = leWergebnis + leMod]
	[h,if(leRegTyp == "1d6"): leRegTyp = "1W6"; leRegTyp = "Fixbetrag"]
	[h: leTitle = strformat("%s (%s)", leRegTyp, leWergebnis)]
	[h,if(leMod > 0): leTitle = listAppend(leTitle, strformat("Vor-/Nachteile (+%{leMod})"))]
	[h,if(leMod < 0): leTitle = listAppend(leTitle, strformat("Vor-/Nachteile (%{leMod})"))]
	[h: leMod = leBonus - leMalus]
	[h,if(leMod > 0): leTitle = listAppend(leTitle, strformat("Modifikator (+%s)", leMod))]
	[h,if(leMod < 0): leTitle = listAppend(leTitle, strformat("Modifikator (%s)", leMod))]
	[h: leRegGesamt = max(0, leRegGesamt + leMod + gesamtMod)]
	[h,if(gesamtTitle != ""): leTitle = listAppend(leTItle, gesamtTitle)]
	
	[h,if(Umgebung == 1), Code:
	{
		[leRegGesamt = round(leRegGesamt / 2)]
		[leTitle = listAppend(leTitle, "Umgebung (halbiert)")]
	};{}]

	[leRegGesamt = min(leRegGesamt, MaxLeP - LeP)]
	[LeP = LeP + leRegGesamt]
};
{
	[leRegGesamt = 0]
	[leTitle = "Keine Regeneration"]
}]

[h,if(MaxAsP > 0 && json.get(uebergabe, "regAE") == 1), Code:
{
	[h: aeRegTyp = json.get(uebergabe, "regAEtyp")]
	[h: aeMod = json.get(uebergabe, "aspmod")]
	[h,if(isNumber(aeRegTyp)): aeWergebnis = aeREgTyp; aeWergebnis = eval(aeRegTyp)]
	[h: aeRegGesamt = aeWergebnis + aeMod]
	[h,if(aeRegTyp == "1d6"): aeRegTyp = "1W6"; aeRegTyp = "Fixbetrag"]
	[h: aeTitle = strformat("%s (%s)", aeRegTyp, aeWergebnis)]
	[h,if(aeMod > 0): aeTitle = listAppend(aeTitle, strformat("Vor-/Nachteile/SFs (+%{aeMod})"))]
	[h,if(aeMod < 0): aeTitle = listAppend(aeTitle, strformat("Vor-/Nachteile/SFs (%{aeMod})"))]
	[h: aeMod = aeBonus - aeMalus]
	[h,if(aeMod > 0): aeTitle = listAppend(aeTitle, strformat("Modifikator (+%s)", aeMod))]
	[h,if(aeMod < 0): aeTitle = listAppend(aeTitle, strformat("Modifikator (%s)", aeMod))]
	[h: aeRegGesamt = max(0, aeRegGesamt + aeMod + gesamtMod)]
	[h,if(gesamtTitle != ""): aeTitle = listAppend(aeTItle, gesamtTitle)]

	[h: SteinEisenMalus = json.get(uebergabe, "SteinEisenMalus")]
	[h,if(SteinEisenMalus > 0), Code:
	{
		[aeRegGesamt = aeRegGesamt - SteinEisenMalus]
		[aeTitle = listAppend(aeTitle, strformat("Eisen! (-%s)", SteinEisenMalus))]
	};{}]
	
	[h,if(Umgebung == 1), Code:
	{
		[aeRegGesamt = round(aeRegGesamt / 2)]
		[aeTitle = listAppend(aeTitle, "Umgebung (halbiert)")]
	};{}]

	[aeRegGesamt = min(aeRegGesamt, MaxAsP - AsP)]
	[AsP = AsP + aeRegGesamt]
};
{
	[aeRegGesamt = 0]
	[aeTitle = "Keine Regeneration"]
}]


[h,if(MaxKaP > 0 && json.get(uebergabe, "regKE") == 1),Code:
{
	[h: keRegTyp = json.get(uebergabe, "regKEtyp")]
	[h: keMod = json.get(uebergabe, "kapmod")]
	[h,if(isNumber(keRegTyp)): keWergebnis = keREgTyp; keWergebnis = eval(keRegTyp)]
	[h: keRegGesamt = keWergebnis + keMod]
	[h,if(keRegTyp == "1d6"): keRegTyp = "1W6"; keRegTyp = "Fixbetrag"]
	[h: keTitle = strformat("%s (%s)", keRegTyp, keWergebnis)]
	[h,if(keMod > 0): keTitle = listAppend(keTitle, strformat("Vor-/Nachteile/SFs (+%{keMod})"))]
	[h,if(keMod < 0): keTitle = listAppend(keTitle, strformat("Vor-/Nachteile/SFs (%{keMod})"))]
	[h: keMod = keBonus - keMalus]
	[h,if(keMod > 0): keTitle = listAppend(keTitle, strformat("Modifikator (+%s)", keMod))]
	[h,if(keMod < 0): keTitle = listAppend(keTitle, strformat("Modifikator (%s)", keMod))]
	[h: keRegGesamt = max(0, keRegGesamt + keMod + gesamtMod)]
	[h,if(gesamtTitle != ""): keTitle = listAppend(keTItle, gesamtTitle)]
	
	[h,if(Umgebung == 1), Code:
	{
		[keRegGesamt = round(keRegGesamt / 2)]
		[keTitle = listAppend(keTitle, "Umgebung (halbiert)")]
	};{}]

	[keRegGesamt = min(keRegGesamt, MaxKaP - KaP)]
	[KaP = KaP + keRegGesamt]
};
{
	[keRegGesamt = 0]
	[keTitle = "Keine Regeneration"]
}]


[h,if(leRegGesamt > 0): leRegColor = "#980000"; leRegColor = "#441e13"]
[h,if(aeRegGesamt > 0): aeRegColor = "#006497"; aeRegColor = "#441e13"]
[h,if(keRegGesamt > 0): keRegColor = "#007f1e"; keRegColor = "#441e13"]

[h: ausgabe = strformat("
<table style='border-spacing: 0px; margin-top: 3px; color: #441e13; font-size: 12pt; font-weight: bold; text-align: center;'>
	<tr>
		<td style='text-align:center; padding: 0px 12px 0px 8px' valign='middle'>
			<img src='%s'>
		</td>
		<td style='text-align: center;' width='30'>
			<table style='border-spacing: 0px;'>
				<tr>
					<td style='text-align: center; color: #980000;'>
						LeP:
					</td>
				</tr>
				<tr>
					<td style='text-align: center; font-size: 20pt; color: %s;'>
						<span title='%s'>%s</span>
					</td>
				</tr>
			</table>
		</td>
		<td width='20'>
			&nbsp;
		</td>
		<td style='text-align: center;' width='30'>
			<table style='border-spacing: 0px;'>
				<tr>
					<td style='text-align: center; color: #006497;'>
						AsP:
					</td>
				</tr>
				<tr>
					<td style='text-align: center; font-size: 20pt; color: %s;'>
						<span title='%s'>%s</span>
					</td>
				</tr>
			</table>
		</td>
		<td width='20'>
			&nbsp;
		</td>
		<td style='text-align: center;' width='30'>
			<table style='border-spacing: 0px;'>
				<tr>
					<td style='text-align: center; color: #007f1e;'>
						KaP:
					</td>
				</tr>
				<tr>
					<td style='text-align: center; font-size: 20pt; color: %s;'>
						<span title='%s'>%s</span>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/heal.png"),
leRegColor, leTitle, leRegGesamt, aeRegColor, aeTitle, aeRegGesamt, keRegColor, keTitle, keRegGesamt)]

[h: ausgabe = border("Regeneration", ausgabe)]

[h: sendTo(chat, ausgabe)]
[h: checkZustand(currentToken())]
[h,macro("refreshFrame@this"): currentToken()]