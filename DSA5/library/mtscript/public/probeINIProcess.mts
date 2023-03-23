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

[h,if(json.get(uebergabe, "bonus") == ""): bonus = 0; bonus = json.get(uebergabe, "bonus")]
[h,if(json.get(uebergabe, "malus") == ""): malus = 0; malus = json.get(uebergabe, "malus")]

[h,if(isNumber(bonus) == 0 || isNumber(malus) == 0), Code:
	{
		[h,macro("inputFail@this"): "numText"]
	};{}
]
[h,if(bonus != round(bonus) || malus != round(malus)), Code:
	{
		[h,macro("inputFail@this"): "numInteger"]
	};{}
]
[h,if(bonus < 0 || malus < 0), Code:
	{
		[h,macro("inputFail@this"): "numNegative"]
	};{}
]
[h: closeDialog("probeINI")]

[h: mod = bonus - malus]
[h: aktWert = getINI(currentToken())]
[h: resultDice = roll(1, 6)]
[h: result = resultDice + aktWert + mod]


[h,if(aktWert < INI): iniColor = "#a42b1e"; iniColor = "#441e13"]
[h,if(aktWert > INI): iniColor = "#0066cc"]
[h,if(mod > 0): modOutput = "&#43;" + mod; modOutput = mod]
[h,if(mod > 0): modColor = "#1d5c2f"; modColor = "#441e13"]
[h,if(mod < 0): modColor = "#a42b1e"]

[h: ausgabe = border("Initiative würfeln", strformat("

	<table style='border-spacing: 0px; margin-top: 3px; font-weight: bold;'>
		<tr>
			<td style='text-align:center;' valign='middle' width='85'>
				<img src='%s'>
			</td>
			<td valign='middle'>
				<table style='border-spacing: 0px;'>
					<tr>
						<td style='padding: 1px 4px 1px 0px;'>
							Wert:
						</td>
						<td style='padding: 1px 0px 1px 0px; text-align: right; color: %s;'>
							%s
						</td>
					</tr>
					<tr>
						<td style='padding: 1px 4px 1px 0px;'>
							Modifikator:
						</td>
						<td style='padding: 1px 0px 1px 0px; text-align: right; color: %s;'>
							%s
						</td>
					</tr>
					<tr>
						<td style='padding: 1px 4px 1px 0px;'>
							W6-Anzahl:
						</td>
						<td style='padding: 1px 0px 1px 0px; text-align: right;'>
							%s
						</td>
					</tr>
					<tr>
						<td style='padding: 1px 4px 1px 0px;'>
							W6-Wurf:
						</td>
						<td style='padding: 1px 0px 1px 0px; text-align: right;'>
							%s
						</td>
					</tr>
				</table>
			</td>
			<td width='25'>
				&nbsp;
			</td>
			<td valign='top'>
				<table style='border-spacing: 0px;'>
					<tr>
						<td style='text-align: center;'>
							Ergebnis:
						</td>
					</tr>
					<tr>
						<td style='text-align: center; font-size: 20pt; padding-top: 3px; color: #1d5c2f;'>
							%s
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>",
tableImage("chat", 62), iniColor, aktWert, modColor, modOutput, 1, resultDice, result))] 

[h,if(isNPC() == 1 && getLibProperty("OptHideNSCAction", "com.github.lector.dsa5maptool") == 1), Code:
	{
		[h,macro("sendToGM@this"): ausgabe]
	};
	{
		[h,macro("sendToPublic@this"): ausgabe]
	}
]
[h: addToINI = result + (INI / 100)]
[h: addToInitiative(0, addToINI)]
[h: sortInitiative()]