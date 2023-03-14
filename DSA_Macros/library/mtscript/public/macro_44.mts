[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]
[h: closeDialog("wundenEinfach")]
[h: chat = getStrProp(uebergabe, "chat")]
[h: hWunden = getStrProp(uebergabe, "wZahl")]

[h,if(getLibProperty("OptWunden", "Lib:macros") != 1), Code:
	{
		[h,macro("inputFail@Lib:macros"): "wundenSystem"]
	};
	{
		[if(getStrProp(uebergabe, "wAction") == 1), Code:
			{
				[mod = hWunden * 2]
				[WuMod = setStrProp(WuMod, "at", getStrProp(WuMod, "at") - mod)]
				[WuMod = setStrProp(WuMod, "pa", getStrProp(WuMod, "pa") - mod)]
				[WuMod = setStrProp(WuMod, "ini", getStrProp(WuMod, "ini") - mod)]
				[WuMod = setStrProp(WuMod, "ge", getStrProp(WuMod, "ge") - mod)]
				[WuMod = setStrProp(WuMod, "gs", getStrProp(WuMod, "gs") - (mod / 2))]
				[Wunden = Wunden - hWunden]
				[listINI = getInitiative()]
				[h,if(isNumber(listINI) == 1): token.init = listINI + mod]
				[sortInitiative()]
				[title = "Wunden heilen"]
				[titleImage = tableImage("chat", 70)]
				[text = strformat("Geheilte Wunden: <span style='color: #1d5c2f; font-size: 14pt;'>%s</span>", hWunden)]
			};
			{
				[WuMod = setStrProp(WuMod, "at", getStrProp(WuMod, "at") + 2)]
				[WuMod = setStrProp(WuMod, "pa", getStrProp(WuMod, "pa") + 2)]
				[WuMod = setStrProp(WuMod, "ini", getStrProp(WuMod, "ini") + 2)]
				[WuMod = setStrProp(WuMod, "ge", getStrProp(WuMod, "ge") + 2)]
				[WuMod = setStrProp(WuMod, "gs", getStrProp(WuMod, "gs") + 1)]
				[Wunden = Wunden + 1]
				[listINI = getInitiative()]
				[h,if(isNumber(listINI) == 1): token.init = listINI - 2]
				[sortInitiative()]
				[title = "Wunde erhalten"]
				[titleImage = tableImage("chat", 71)]
				[wundenTitle = "Automatisch eingetragen: AT-, PA-, FK- &amp; INI-Basis -2, GE -2, GS -1"]
				[text = strformat("<span title='%s'>Eine neue Wunde erhalten.</span>", wundenTitle)]
			}
		]
	}
]

[h: ausgabe = strformat("
<div style='background-image: url(%s); background-repeat: no-repeat; color: #441e13; font-size: 12pt; font-weight: bold; text-align: center; margin: 0px; height: 77;' width='320'>
	<table style='border-spacing: 0px; margin-top: 36px;'>
		<tr>
			<td>
				%s
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
			<td style='padding-right: 5px;' valign='middle'>
				%s
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
", tableImage("chat", 50), title, tableImage("chat", 51), titleImage, text, tableImage("chat", 52))]

[h,switch(chat), Code:
	case "1": {
			[h,macro("sendToPublic@Lib:macros"): ausgabe]
		};
	case "2": {
			[h,macro("sendToGM@Lib:macros"): ausgabe]
		};
	case "3": {
			[h,macro("sendToSelfGM@Lib:macros"): ausgabe]
		}
]
[h,macro("checkStatusWunden@Lib:macros"): ""]
[h,macro("refreshFrame@Lib:macros"): ""]