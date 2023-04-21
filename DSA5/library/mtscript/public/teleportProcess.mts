[h: uebergabe = macro.args]
[h: closeDialog("teleport")]

[h: selection = json.get(uebergabe, "teleportSelection")]
[h: target = json.get(uebergabe, "teleportTarget")]

[h,switch(selection), Code:
	case "1":
	{
		[tokenList = getSelected()]
	};
	case "2":
	{
		[tokenList = getPC()]
	};
	case "3":
	{
		[tokenList = getPC()]
		[tokenCount = listCount(tokenList)]
		[idList = ""]
		[num = 0]
		[count(tokenCount, ""), Code:
			{
				[id = listGet(tokenList, num)]
				[if(getVisible(id) == 1): idList = listAppend(idList, id)]
				[num = num + 1]
			}
		]
		[tokenList = idList]
	};
	case "4":
	{
		[tokenList = getNPC()]
	};
	case "5":
	{
		[tokenList = getNPC()]
		[tokenCount = listCount(tokenList)]
		[idList = ""]
		[num = 0]
		[count(tokenCount, ""), Code:
			{
				[id = listGet(tokenList, num)]
				[if(getVisible(id) == 1): idList = listAppend(idList, id)]
				[num = num + 1]
			}
		]
		[tokenList = idList]
	}
]

[h: moveTokenList = ""]
[h,foreach(id, tokenList, ""), Code:
	{
		[if(getLayer(id) == "TOKEN"): moveTokenList = listAppend(moveTokenList, id)]
	}
]
[h,if(moveTokenList == ""), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "noTokensSelected"]
	};{}
]

[h: teleX = getTokenX(0, target) + 0]
[h: teleY = getTokenY(0, target) + 0]
[h,foreach(id, moveTokenList, ""), Code:
	{
		[moveToken(teleX, teleY, 0, id)]
		[teleX = teleX + 1]
	}
]

[h: ausgabe = "<table style='border-spacing: 0px;' width='100%'><tr><td></td><td width='501'>"]
[h: ausgabe = ausgabe + strformat("
<table style='border-spacing: 0px; margin-top: 3px;'>
	<tr>
		<td width='18'>
			&nbsp;
		</td>
		<td style='text-align:center;' valign='middle' width='70'>
			<img src='%s'>
		</td>
		<td valign='middle'>
			Die gewählten Tokens wurden zum gewünschten Zielort teleportiert.
		<td width='15'>
			&nbsp;
		</td>
		<td width='18'>
			&nbsp;
		</td>
	</tr>
</table>",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/scroll.png"))]
[h: ausgabe = ausgabe + "</td><td></td></tr></table>"]

[h: ausgabe = border("Teleportation", ausgabe)]

[h: broadcast(ausgabe, "gm")]