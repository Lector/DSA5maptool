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
[h,if(getLibProperty("OptWunden", "this") != 2), Code:
	{
		[h,macro("inputFail@this"): "wundenSystem"]
	};{}
]
[h: closeDialog("wundenZone")]
[h,switch(zone), Code:
	case "kopf": {
		[WuMod = setStrProp(WuMod, "mu", getStrProp(WuMod, "mu") - 2)]
		[WuMod = setStrProp(WuMod, "kl", getStrProp(WuMod, "kl") - 2)]
		[WuMod = setStrProp(WuMod, "in", getStrProp(WuMod, "in") - 2)]
		[WuMod = setStrProp(WuMod, "ini", getStrProp(WuMod, "ini") - 2)]
		[WUKopf = WUKopf - 1]
		[Wunden = Wunden - 1]
		[text = "Kopf"]
		[iniBonus = 2]
		};
	case "brust": {
		[WuMod = setStrProp(WuMod, "at", getStrProp(WuMod, "at") - 1)]
		[WuMod = setStrProp(WuMod, "pa", getStrProp(WuMod, "pa") - 1)]
		[WuMod = setStrProp(WuMod, "ko", getStrProp(WuMod, "ko") - 1)]
		[WuMod = setStrProp(WuMod, "kk", getStrProp(WuMod, "kk") - 1)]
		[WUBrust = WUBrust - 1]
		[Wunden = Wunden - 1]
		[text = "Brust"]
		};
	case "bauch": {
		[WuMod = setStrProp(WuMod, "at", getStrProp(WuMod, "at") - 1)]
		[WuMod = setStrProp(WuMod, "pa", getStrProp(WuMod, "pa") - 1)]
		[WuMod = setStrProp(WuMod, "ko", getStrProp(WuMod, "ko") - 1)]
		[WuMod = setStrProp(WuMod, "kk", getStrProp(WuMod, "kk") - 1)]
		[WuMod = setStrProp(WuMod, "gs", getStrProp(WuMod, "gs") - 1)]
		[WuMod = setStrProp(WuMod, "ini", getStrProp(WuMod, "ini") - 1)]
		[WUBauch = WUBauch - 1]
		[Wunden = Wunden - 1]
		[text = "Bauch"]
		[iniBonus = 1]
		};
	case "armLinks": {
		[WuMod = setStrProp(WuMod, "laAT", getStrProp(WuMod, "laAT") - 2)]
		[WuMod = setStrProp(WuMod, "laPA", getStrProp(WuMod, "laPA") - 2)]
		[WuMod = setStrProp(WuMod, "laFF", getStrProp(WuMod, "laFF") - 2)]
		[WuMod = setStrProp(WuMod, "laKK", getStrProp(WuMod, "laKK") - 2)]
		[WUArmLinks = WUArmLinks - 1]
		[Wunden = Wunden - 1]
		[text = "Linker Arm"]
		};
	case "armRechts": {
		[WuMod = setStrProp(WuMod, "raAT", getStrProp(WuMod, "raAT") - 2)]
		[WuMod = setStrProp(WuMod, "raPA", getStrProp(WuMod, "raPA") - 2)]
		[WuMod = setStrProp(WuMod, "raFF", getStrProp(WuMod, "raFF") - 2)]
		[WuMod = setStrProp(WuMod, "raKK", getStrProp(WuMod, "raKK") - 2)]
		[WUArmRechts = WUArmRechts - 1]
		[Wunden = Wunden - 1]
		[text = "Rechter Arm"]
		};
	case "beinLinks": {
		[WuMod = setStrProp(WuMod, "at", getStrProp(WuMod, "at") - 2)]
		[WuMod = setStrProp(WuMod, "pa", getStrProp(WuMod, "pa") - 2)]
		[WuMod = setStrProp(WuMod, "ge", getStrProp(WuMod, "ge") - 2)]
		[WuMod = setStrProp(WuMod, "ini", getStrProp(WuMod, "ini") - 2)]
		[WuMod = setStrProp(WuMod, "gs", getStrProp(WuMod, "gs") - 1)]
		[WUBeinLinks = WUBeinLinks - 1]
		[Wunden = Wunden - 1]
		[text = "Linkes Bein"]
		[iniBonus = 2]
		};
	case "beinRechts": {
		[WuMod = setStrProp(WuMod, "at", getStrProp(WuMod, "at") - 2)]
		[WuMod = setStrProp(WuMod, "pa", getStrProp(WuMod, "pa") - 2)]
		[WuMod = setStrProp(WuMod, "ge", getStrProp(WuMod, "ge") - 2)]
		[WuMod = setStrProp(WuMod, "ini", getStrProp(WuMod, "ini") - 2)]
		[WuMod = setStrProp(WuMod, "gs", getStrProp(WuMod, "gs") - 1)]
		[WUBeinRechts = WUBeinRechts - 1]
		[Wunden = Wunden - 1]
		[text = "Rechtes Bein"]
		[iniBonus = 2]
		};
	case "complete": {
		[text = strformat("Alle (%s)", Wunden)]
		[iniBonus = getStrProp(WuMod, "ini")]
		[WuMod = "mu=0; kl=0; in=0; ge=0; ko=0; kk=0; ini=0; gs=0; at=0; pa=0; laAT=0; laPA=0; laFF=0; laKK=0; raAT=0; raPA=0; raFF=0; raKK=0"]
		[Wunden = 0]
		[WUKopf = 0]
		[WUBrust = 0]
		[WUBauch = 0]
		[WUArmLinks = 0]
		[WUArmRechts = 0]
		[WUBeinLinks = 0]
		[WUBeinRechts = 0]
		}
]
[h: listINI = getInitiative()]
[h,if(isNumber(listINI) == 1): token.init = listINI + iniBonus]
[h: sortInitiative()]

[h: ausgabe = strformat("
<div style='background-image: url(%s); background-repeat: no-repeat; color: #441e13; font-size: 12pt; font-weight: bold; text-align: center; margin: 0px; height: 77;' width='320'>
	<table style='border-spacing: 0px; margin-top: 36px;'>
		<tr>
			<td>
				Wunden heilen
			</td>
		</tr>
	</table>
</div>
<div style='background-image: url(%s); background-repeat: repeat-y; color: #441e13; font-size: 12pt; font-weight: bold; text-align: center; margin: 0px;' width='320'>
	<table style='border-spacing: 0px; margin-top: 3px;'>
		<tr>
			<td width='18'>
				&nbsp;
			</td>
			<td style='text-align:center;' valign='middle' width='80'>
				<img src='%s'>
			</td>
			<td valign='middle'>
				Wunde geheilt: <span style='color: #1d5c2f;'>%s</span>
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
<div style='background-image: url(%s); background-repeat: no-repeat; color: #441e13; font-size: 12pt; font-weight: bold; margin: 0px; height: 19;' width='320'>
</div>
", tableImage("chat", 50), tableImage("chat", 51), tableImage("chat", 70), text, tableImage("chat", 52))]

[h,if(isNPC() == 1 && getLibProperty("OptHideNSCAction", "this") == 1), Code:
	{
		[h,macro("sendToGM@this"): ausgabe]
	};
	{
		[h,macro("sendToPublic@this"): ausgabe]
	}
]
[h,macro("checkStatusWunden@this"): ""]
[h,macro("refreshFrame@this"): ""]