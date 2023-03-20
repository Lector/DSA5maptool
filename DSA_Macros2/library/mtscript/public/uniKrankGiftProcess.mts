[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]
[h: chat = getStrProp(uebergabe, "chat")]

[h,if(getStrProp(uebergabe, "tName") == ""): tName = "Universelle Talentprobe"; tName = getStrProp(uebergabe, "tName")]
[h,if(getStrProp(uebergabe, "tWert") == ""): tWert = 0; tWert = getStrProp(uebergabe, "tWert")]
[h,if(getStrProp(uebergabe, "resistenz") == "ZKAktiv"): res = ZK + getStrProp(TempMod, "zk")]
[h,if(getStrProp(uebergabe, "resistenz") == "SKAktiv"): res = SK + getStrProp(TempMod, "sk")]]

[h,if(isNumber(tWert) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numText"]
	};{}
]
[h,if(tWert != round(tWert)), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "numInteger"]
	};{}
]
[h: closeDialog("uniKrankGift")]

[h: tE1 = 10 + tWert]
[h: tE2 = 10 + tWert]
[h: tE3 = 10 + tWert]
[h: tE1Wert = 10]
[h: tE2Wert = 10]
[h: tE3Wert = 10]

[h: tE1AktWert = 10 + tWert - res]

[h: tE2AktWert = 10 + tWert - res]

[h: tE3AktWert = 10 + tWert - res]

[h: taw = tWert]
[h: dice1 = 1d20]
[h: dice2 = 1d20]
[h: dice3 = 1d20]
[h: diceList = strformat("%{dice1}, %{dice2}, %{dice3}")]

[h,if(taw <= 0), Code:
	{
		[dResult1 = dice1 + abs(taw)]
		[dResult2 = dice2 + abs(taw)]
		[dResult3 = dice3 + abs(taw)]
		[if(dResult1 <= tE1AktWert && dResult2 <= tE2AktWert && dResult3 <= tE3AktWert), Code:
			{
				[success = 1]
				[maxMalus = min(tE1AktWert - dResult1, tE2AktWert - dResult2, tE3AktWert - dResult3)]
				[reqBonus = 0]
				[tap = 1]
			};
			{
				[success = 0]
				[tawMalus = min(tE1AktWert - dResult1, tE2AktWert - dResult2, tE3AktWert - dResult3)]
				[if(tawMalus < 0 && tawMalus > taw): tawMalus = abs(tawMalus); tawMalus = abs(taw)]		
				[if(dice1 > tE1AktWert): reqBonus = tawMalus + (dice1 - tE1AktWert); reqBonus = tawMalus]
				[if(dice2 > tE2AktWert): reqBonus = reqBonus + (dice2 - tE2AktWert)]
				[if(dice3 > tE3AktWert): reqBonus = reqBonus + (dice3 - tE3AktWert)]
				[maxMalus = 0]
				[tap = 0]
			}
		]		
	};
	{
		[if(dice1 > tE1AktWert): taw = taw - (dice1 - tE1AktWert)]
		[if(dice2 > tE2AktWert): taw = taw - (dice2 - tE2AktWert)]
		[if(dice3 > tE3AktWert): taw = taw - (dice3 - tE3AktWert)]
		[if(taw < 0), Code:
			{
				[success = 0]
				[reqBonus = abs(taw)]
				[maxMalus = 0]
				[tap = 0]
			};
			{
				[success = 1]
				[if((tE1AktWert - dice1) <= 0): checkResult1 = 0; checkResult1 = tE1AktWert - dice1)]
				[if((tE2AktWert - dice2) <= 0): checkResult2 = 0; checkResult2 = tE2AktWert - dice2)]
				[if((tE3AktWert - dice3) <= 0): checkResult3 = 0; checkResult3 = tE3AktWert - dice3)]
				[maxMalus = min(checkResult1, checkResult2, checkResult3) + taw]
				[reqBonus = 0]
				[if(taw == 0): tap = 1; tap = taw]
				[if(tap > tWert): tap = tWert]
			}
		]
	}
]
[h,if(listContains(diceList, "1") >= 2 ): tap = tWert]
[h,if(listContains(diceList, "20") >= 2 ): tap = 0]

[h,if(tE1AktWert < tE1Wert): tE1Color = "#a42b1e"; tE1Color = "#441e13"]
[h,if(tE1AktWert > tE1Wert): tE1Color = "#0066cc"]
[h,if(tE2AktWert < tE2Wert): tE2Color = "#a42b1e"; tE2Color = "#441e13"]
[h,if(tE2AktWert > tE2Wert): tE2Color = "#0066cc"]
[h,if(tE3AktWert < tE3Wert): tE3Color = "#a42b1e"; tE3Color = "#441e13"]
[h,if(tE3AktWert > tE3Wert): tE3Color = "#0066cc"]
[h,if(success == 1): erfolgImage = data.getStaticData("com.github.naxos84.macros2", "/public/images/chat/probeErfolg.png"); erfolgImage = data.getStaticData("com.github.naxos84.macros2", "/public/images/chat/probeFehlschlag.png")]
[h,if(listContains(diceList, "1") == 2): erfolgImage = data.getStaticData("com.github.naxos84.macros2", "/public/images/chat/probeErfolgGluecklich.png")]
[h,if(listContains(diceList, "1") == 3): erfolgImage = data.getStaticData("com.github.naxos84.macros2", "/public/images/chat/probeErfolgSpektakulaer.png")]
[h,if(listContains(diceList, "20") == 2): erfolgImage = data.getStaticData("com.github.naxos84.macros2", "/public/images/chat/probePatzer.png")]
[h,if(listContains(diceList, "20") == 3): erfolgImage = data.getStaticData("com.github.naxos84.macros2", "/public/images/chat/probePatzerSpektakulaer.png")]
[h,if(res > 0): modOutput = "&#43;"+res; modOutput = res]
[h,if(dice1 <= tE1AktWert): dice1Color = "#1d5c2f"; dice1Color = "#a42b1e"]
[h,if(dice2 <= tE2AktWert): dice2Color = "#1d5c2f"; dice2Color = "#a42b1e"]
[h,if(dice3 <= tE3AktWert): dice3Color = "#1d5c2f"; dice3Color = "#a42b1e"]
[h,if(tap > 0): tapColor = "#1d5c2f"; tapColor = "#a42b1e"]
[h,if(res < 0): modColor = "#1d5c2f"; modColor = "#441e13"]
[h,if(res > 0): modColor = "#a42b1e"]

[h: ausgabe = strformat("
<div style='background-image: url(%s); background-repeat: no-repeat; color: #441e13; font-size: 12pt; font-weight: bold; text-align: center; margin: 0px; height: 77;' width='545'>
	<table style='border-spacing: 0px; margin-top: 36px;'>
		<tr>
			<td>
				%s
			</td>
		</tr>
	</table>
</div>
<div style='background-image: url(%s); background-repeat: repeat-y; color: #441e13; font-size: 12pt; font-weight: bold; text-align: center; margin: 0px;' width='545'>
	<table style='border-spacing: 0px; margin-top: 3px;'>
		<tr>
			<td width='18'>
				&nbsp;
			</td>
			<td style='text-align:center;' valign='middle' width='72'>
				<img src='%s'>
			</td>
			<td width='100'>
				<table style='border-spacing: 0px;' width='100'>
					<tr style='text-align: center;'>
						<td style='padding: 1px 0px 1px 0px;' width='25'>
							%s
						</td>
						</td>
						<td style='padding: 1px 0px 1px 0px;' width='10'>
							|
						</td>
						<td style='padding: 1px 0px 1px 0px; color: %s' width='25'>
							%s
						</td>
					</tr>
					<tr style='text-align: center;'>
						<td style='padding: 1px 0px 1px 0px;' width='25'>
							%s
						</td>
						<td style='padding: 1px 0px 1px 0px;' width='10'>
							|
						</td>
						<td style='padding: 1px 0px 1px 0px; color: %s' width='25'>
							%s
						</td>
					</tr>
					<tr style='text-align: center;'>
						<td style='padding: 1px 0px 1px 0px;' width='25'>
							%s
						</td>
						<td style='padding: 1px 0px 1px 0px;' width='10'>
							|
						</td>
						<td style='padding: 1px 0px 1px 0px; color: %s' width='25'>
							%s
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
						<td style='padding: 1px 0px 1px 0px;'>
							FW:
						</td>
						<td style='padding: 1px 0px 1px 0px; text-align: right;'>
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
				</table>
			</td>
			<td width='25'>
				&nbsp;
			</td>
			<td valign='middle' width='28'>
				<table style='border-spacing: 0px;'>
					<tr>
						<td>
							FP
						</td>
					</tr>
					<tr>
						<td style='color: %s; font-size: 20pt; text-align: center; padding-top: 3px;'>
							%s
						</td>
					</tr>
				</table>
			</td>
			<td width='25'>
				&nbsp;
			</td>
			<td valign='middle' width='113'>
				<img src='%s'>
			</td>
			<td width='38'>
				&nbsp;
			</td>
		</tr>
	</table>
", data.getStaticData("com.github.naxos84.macros2", "/public/images/chat/balkenDoppelt.png"), tName, data.getStaticData("com.github.naxos84.macros2", "/public/images/chat/balkenEinfach.png"), data.getStaticData("com.github.naxos84.macros2", "/public/images/chat/probeTalentTitle.png"), tE1AktWert, dice1Color, dice1, tE2AktWert, dice2Color, dice2, tE3AktWert, dice3Color, dice3, tWert, modColor, modOutput, tapColor, tap, erfolgImage)] 

[h,if(success == 1): ausgabe = ausgabe + strformat("
<br>
<table style='border-spacing: 0px;'>
	<tr>
		<td style='padding-right: 10px;' valign='middle'>
			<img src='%s'>
		</td>
		<td style='font-weight: normal;' valign='middle'>
			<b>Die Gift- bzw. Krankheitsprobe ist gelungen:</b>
			<br>Das Gift bzw. die Krankheit nimmt den schwereren Verlauf!
		</td>
	</tr>
</table>
", data.getStaticData("com.github.naxos84.macros2", "/public/images/chat/probeZusatz.png"))]

[h,if(success == 0): ausgabe = ausgabe + strformat("
<br>
<table style='border-spacing: 0px;'>
	<tr>
		<td style='padding-right: 10px;' valign='middle'>
			<img src='%s'>
		</td>
		<td style='font-weight: normal;' valign='middle'>
			<b>Die Gift- bzw. Krankheitsprobe ist misslungen:</b>
			<br>Das Gift bzw. die Krankheit nimmt den leichteren Verlauf!
		</td>
	</tr>
</table>
", data.getStaticData("com.github.naxos84.macros2", "/public/images/chat/probeZusatz.png"))]

[h: ausgabe = ausgabe + strformat("
</div>
<div style='background-image: url(%s); background-repeat: no-repeat; color: #441e13; font-size: 12pt; font-weight: bold; margin: 0px; height: 19;'>
</div>
", data.getStaticData("com.github.naxos84.macros2", "/public/images/chat/balkenSchmal.png"))]

[h,switch(chat), Code:
	case "1": {
			[h,macro("sendToPublic@lib:com.github.naxos84.macros"): ausgabe]
		};
	case "2": {
			[h,macro("sendToGM@lib:com.github.naxos84.macros"): ausgabe]
		};
	case "3": {
			[h,macro("sendToSelfGM@lib:com.github.naxos84.macros"): ausgabe]
		};
	case "4": {
			[h,macro("sendToSelf@lib:com.github.naxos84.macros"): ausgabe]
		}
]