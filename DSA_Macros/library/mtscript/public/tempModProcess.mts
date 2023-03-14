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
[h,foreach(key, uebergabe),if(startsWith(key, "tMod") == 1), Code:
{
	[value = json.get(uebergabe, key)]
	[h,if(isNumber(value) == 0), Code:
		{
			[h,macro("inputFail@this"): "numText"]
		};{}
	]
	[h,if(value != round(value)), Code:
		{
			[h,macro("inputFail@this"): "numInteger"]
		};{}
	]
}]
[h,if(json.get(uebergabe, "tModRS") < -9 || json.get(uebergabe, "tModRS") > 9), Code:
	{
		[h,macro("inputFail@this"): "tModRS"]
	};{}
]
[h: closeDialog("tempMod")]
[h: iniVorher = getINI()]
[h,if(json.get(uebergabe, "delAll") == ""), Code:
	{
		[TempMod = setStrProp(TempMod, "mu", json.get(uebergabe, "tModMU"))]
		[TempMod = setStrProp(TempMod, "kl", json.get(uebergabe, "tModKL"))]
		[TempMod = setStrProp(TempMod, "in", json.get(uebergabe, "tModIN"))]
		[TempMod = setStrProp(TempMod, "ch", json.get(uebergabe, "tModCH"))]
		[TempMod = setStrProp(TempMod, "ff", json.get(uebergabe, "tModFF"))]
		[TempMod = setStrProp(TempMod, "ge", json.get(uebergabe, "tModGE"))]
		[TempMod = setStrProp(TempMod, "ko", json.get(uebergabe, "tModKO"))]
		[TempMod = setStrProp(TempMod, "kk", json.get(uebergabe, "tModKK"))]
		[TempMod = setStrProp(TempMod, "at", json.get(uebergabe, "tModAT"))]
		[TempMod = setStrProp(TempMod, "pa", json.get(uebergabe, "tModPA"))]
		[TempMod = setStrProp(TempMod, "ini", json.get(uebergabe, "tModINI"))]
		[TempMod = setStrProp(TempMod, "aw", json.get(uebergabe, "tModAW"))]
		[TempMod = setStrProp(TempMod, "gs", json.get(uebergabe, "tModGS"))]
		[TempMod = setStrProp(TempMod, "sk", json.get(uebergabe, "tModSK"))]
		[TempMod = setStrProp(TempMod, "zk", json.get(uebergabe, "tModZK"))]
		[TempMod = setStrProp(TempMod, "rs", json.get(uebergabe, "tModRS"))]
		[msgText = "Die tempor&auml;ren Effekte wurden ge&auml;ndert."]
	};
	{
		[TempMod = setStrProp(TempMod, "mu", 0)]
		[TempMod = setStrProp(TempMod, "kl", 0)]
		[TempMod = setStrProp(TempMod, "in", 0)]
		[TempMod = setStrProp(TempMod, "ch", 0)]
		[TempMod = setStrProp(TempMod, "ff", 0)]
		[TempMod = setStrProp(TempMod, "ge", 0)]
		[TempMod = setStrProp(TempMod, "ko", 0)]
		[TempMod = setStrProp(TempMod, "kk", 0)]
		[TempMod = setStrProp(TempMod, "at", 0)]
		[TempMod = setStrProp(TempMod, "pa", 0)]
		[TempMod = setStrProp(TempMod, "ini", 0)]
		[TempMod = setStrProp(TempMod, "aw", 0)]
		[TempMod = setStrProp(TempMod, "gs", 0)]
		[TempMod = setStrProp(TempMod, "sk", 0)]
		[TempMod = setStrProp(TempMod, "zk", 0)]
		[TempMod = setStrProp(TempMod, "rs", 0)]
		[msgText = "Alle tempor&auml;ren Effekte wurden zur&uuml;ckgesetzt."]
	}
]
[h: iniDiff = getINI() - iniVorher]
[h,if(hasInitiative() == 1),Code:
{
	[neueIni = iniDiff + number(getInitiative())]
	[setInitiative(neueIni)]
}]

[h: ausgabe = border("Tempor&auml;re Effekte", strformat("
<table style='border-spacing: 0px; margin-top: 3px;'>
	<tr>
		<td style='text-align:center;' valign='middle' width='63'>
			<img src='%s'>
		</td>
		<td valign='middle'>
			%s
		</td>
	</tr>
</table>",
tableImage("chat", 59), msgText))]

[h,macro("sendToSelfGM@this"): ausgabe]
[h,macro("refreshFrame@this"): ""]