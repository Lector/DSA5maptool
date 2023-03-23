[h: id = macro.args]

[h: tokenMap = getTokenMap(id)]
[h: x = getTokenX(0, id, tokenMap)]
[h: y = getTokenY(0, id, tokenMap)]
[h,if(getCurrentMapName() != tokenMap): moveTokenFromMap(id, tokenMap, x, y)]

[h: switchToken(id)]
[h: hTokenName = getName()]
[h: hTitle = getLabel()]
[h: hNum = substring(hTokenName, lastIndexOf(hTokenName, " ")+1, length(hTokenName))]

[h: hShared = getLibProperty("SharedHandouts","com.github.lector.dsa5maptools")]
[h: hItem = listFind(hShared, hNum)]
[h,if(hItem != -1), Code:
	{
		[hShared = listDelete(hShared, hItem)]
		[setLibProperty("SharedHandouts", hShared, "lib:com.github.naxos84.macros")]
		[chatNotice = 1]
		[chatTextTitle = "Handout gesperrt"]
		[chatText = "Der Spielleiter hat ein Handout gesperrt:"]
		[if(hTitle == ""): hTitle = "Handout"]
	};
	{
		[chatNotice = 0]
		[chatTextTitle = "Handout gelöscht"]
		[chatText = "Ein Handout wurde gelöscht:"]
		[if(hTitle == ""): hTitle = hTokenName; hTitle = hTokenName+" - "+hTitle]
	}
]

[h: setLabel("")]
[h: setNotes("")]
[h: setGMNotes("")]
[h: pixelAsset = tableImage("misc", 5)]
[h: setTokenHandout(pixelAsset)]


[h: ausgabe = strformat("
<table style='border-spacing: 0px; margin-top: 3px; font-weight: bold'>
	<tr>
		<td style='text-align:center; padding: 0px;' valign='middle'>
			<img src='%s'>
		</td>
		<td width='25'>
			&nbsp;
		</td>
		<td style='text-align: center; padding: 0px 12px 0px 8px' valign='middle'>
			<span style='font-weight: normal;'>%s</span>
			<br><br>
			%s
		</td>
	</tr>
</table>",
tableImage("chat", 81), chatText, hTitle)]

[h: ausgabe = border(chatTextTitle, ausgabe)]

[h,if(getCurrentMapName() != tokenMap): moveTokenToMap(id, tokenMap, x, y)]

[h,if(chatNotice == 1), Code:
	{
		[broadcast(ausgabe)]
	};
	{
		[broadcast(ausgabe, "gm")]
	}
]
[h,macro("meisterbogenHandouts@this"): ""]