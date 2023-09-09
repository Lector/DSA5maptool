[h: abfrageImpersonate()]
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

[h: uebergabe = arg(0)]

[h: titel = getStrProp(MiscMod, "counterTitle")]
[h: wert = getStrProp(MiscMod, "counter")]
[h,if(uebergabe == "plus"), Code:
	{
		[wert = wert + 1]
		[MiscMod = setStrProp(MiscMod, "counter", wert)]
	};
	{
		[wert = wert - 1]
		[MiscMod = setStrProp(MiscMod, "counter", wert)]
	}
]
[h,if(wert > 0): wertColor = "#1d5c2f"; wertColor = "#441e13"]
[h,if(wert < 0): wertColor = "#a42b1e"]

[h: ausgabe = strformat("
<table style='border-spacing: 0px; margin-top: 3px;'>
	<tr>
		<td style='text-align:center; padding: 0px 12px 0px 8px' valign='middle'>
			<img src='%s'>
		</td>
		<td style='font-size: 24pt; font-weight: bold; color: %s;' valign='middle'>
			%s
		</td>
	</tr>
</table>",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/counter.png"), wertColor, wert)]

[h: ausgabe = border(titel, ausgabe)]

[h,if(isNPC() == 1 && getLibProperty("OptHideNSCAction","com.github.lector.dsa5maptool") == 1): recipient = "Gm"; recipient = "Public"]
[h: sendTo(recipient, ausgabe)]