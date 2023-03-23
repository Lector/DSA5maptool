[h: uebergabe = macro.args]
[h: chat = json.get(uebergabe, "chat")]
[h: diceTyp = json.get(uebergabe, "diceTyp")]
[h: anzahl = json.get(uebergabe, "wAnzahl")]
[h,if(json.get(uebergabe, "wBonus") == ""): bonus = 0; bonus = json.get(uebergabe, "wBonus")]
[h,if(json.get(uebergabe, "wMalus") == ""): malus = 0; malus = json.get(uebergabe, "wMalus")]

[h,if(isNumber(bonus) == 0 || isNumber(malus) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numText"]
	};{}
]
[h,if(bonus != round(bonus) || malus != round(malus)), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numInteger"]
	};{}
]
[h,if(bonus < 0 || malus < 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numNegative"]
	};{}
]
[h: closeDialog("uniDice")]

[h: mod = bonus - malus]
[h: dTable = strformat("d%{diceTyp}")]
[h: summe = 0]
[h: diceList = ""]
[h,count(anzahl, ""), Code:
	{
		[diceResult = roll(1, diceTyp)]
		[h: diceImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/dice/" + dTable + "_" + diceResult + ".png")]
		[summe = summe + diceResult]
		[diceList = diceList + strformat('<img src="%s" alt="diceResult_%s_%s"></img>&nbsp;', diceImage, dTable, diceResult)]
	}
]
[h: ergebnis = summe + mod]
[h,if(ergebnis < 0): ergebnis = 0]
[h: wurf = strformat('%{anzahl}W%{diceTyp}')]
[h,if(mod > 0): modOutput = strformat('&#43;%{mod}'); modOutput = mod]
[h,if(mod > 0): modColor = "#1d5c2f"; modColor = "#441e13"]
[h,if(mod < 0): modColor = "#a42b1e"]

[h: ausgabe = border(strformat("Wurf mit W%s", diceTyp), strformat("

<table style='border-spacing: 0px; margin-top: 3px; font-weight: bold'>
	<tr>
		<td valign='middle' width='124'>
			<table style='border-spacing: 0px; margin-top: 3px;'>
				<tr>
					<td style='padding: 0px 4px 1px 0px;'>
						Würfel:
					</td>
					<td style='padding: 0px 0px 1px 0px; text-align: center;'>
						%s
					</td>
				</tr>
				<tr>
					<td style='padding: 0px 4px 1px 0px;'>
						Modifikator:
					</td>
					<td style='padding: 0px 0px 1px 0px; text-align: center; color: %s;'>
						%s
					</td>
				</tr>
				<tr>
					<td style='padding: 0px 4px 1px 0px;'>
						Endsumme:
					</td>
					<td style='padding: 0px 0px 1px 0px; text-align: center; color: #1d5c2f;'>
						%s
					</td>
				</tr>
			</table>
		</td>
		<td width='15'>
			&nbsp;
		</td>
		<td style='text-align: center; padding-top: 4px;' valign='middle' width='100'>
			%s
		</td>
		<td width='25'>
			&nbsp;
		</td>
		<td width='18'>
			&nbsp;
		</td>
	</tr>
</table>
", wurf, modColor, modOutput, ergebnis, diceList, tableImage("chat", 52)))]

[h: sendTo(chat, ausgabe)]