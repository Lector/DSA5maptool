[h: uebergabe = macro.args]

[h: ownName = getPlayerName()]
[h: playerNames = getAllPlayerNames()]
[h: playerNames = listDelete(playerNames, listFind(playerNames, ownName))]
[h: pNames = listSort(playerNames,'N')]
[h: pNumber = listCount(pNames)]
[h: chatText = json.get(uebergabe, "chatField")]
[h: chatList = ""]
[h: num = 0]
[h: check = ""]
[h,count(pNumber,""), Code:
	{
		[check = json.get(uebergabe, strformat("player%{num}"))]
		[if(check != ""): chatList = listAppend(chatList, listGet(pNames, num))]
		[num = num + 1]
	}
]

[h: chatText = replace(chatText, "=:\\)", strformat("<img src='%s'></img>", tableImage("smilies", 26)))]
[h: chatText = replace(chatText, "0:\\)", strformat("<img src='%s'></img>", tableImage("smilies", 28)))]
[h: chatText = replace(chatText, "3:\\)", strformat("<img src='%s'></img>", tableImage("smilies", 29)))]
[h: chatText = replace(chatText, ":\\)", strformat("<img src='%s'></img>", tableImage("smilies", 1)))]
[h: chatText = replace(chatText, ":D", strformat("<img src='%s'></img>", tableImage("smilies", 2)))]
[h: chatText = replace(chatText, ",\\)", strformat("<img src='%s'></img>", tableImage("smilies", 3)))]
[h: chatText = replace(chatText, ",D", strformat("<img src='%s'></img>", tableImage("smilies", 4)))]
[h: chatText = replace(chatText, "xD", strformat("<img src='%s'></img>", tableImage("smilies", 5)))]
[h: chatText = replace(chatText, "xP", strformat("<img src='%s'></img>", tableImage("smilies", 6)))]
[h: chatText = replace(chatText, "\\^\\^", strformat("<img src='%s'></img>", tableImage("smilies", 7)))]
[h: chatText = replace(chatText, "\\^_\\^", strformat("<img src='%s'></img>", tableImage("smilies", 8)))]
[h: chatText = replace(chatText, "8\\)", strformat("<img src='%s'></img>", tableImage("smilies", 9)))]
[h: chatText = replace(chatText, ":\\(", strformat("<img src='%s'></img>", tableImage("smilies", 10)))]
[h: chatText = replace(chatText, ":c", strformat("<img src='%s'></img>", tableImage("smilies", 11)))]
[h: chatText = replace(chatText, "x\\(", strformat("<img src='%s'></img>", tableImage("smilies", 12)))]
[h: chatText = replace(chatText, ":0", strformat("<img src='%s'></img>", tableImage("smilies", 13)))]
[h: chatText = replace(chatText, ":o", strformat("<img src='%s'></img>", tableImage("smilies", 14)))]
[h: chatText = replace(chatText, "Oo", strformat("<img src='%s'></img>", tableImage("smilies", 15)))]
[h: chatText = replace(chatText, ":#", strformat("<img src='%s'></img>", tableImage("smilies", 16)))]
[h: chatText = replace(chatText, ":\\*", strformat("<img src='%s'></img>", tableImage("smilies", 17)))]
[h: chatText = replace(chatText, ":\\|", strformat("<img src='%s'></img>", tableImage("smilies", 18)))]
[h: chatText = replace(chatText, "x\\|", strformat("<img src='%s'></img>", tableImage("smilies", 19)))]
[h: chatText = replace(chatText, "x0", strformat("<img src='%s'></img>", tableImage("smilies", 20)))]
[h: chatText = replace(chatText, "\\>=D", strformat("<img src='%s'></img>", tableImage("smilies", 22)))]
[h: chatText = replace(chatText, "\\>=\\)", strformat("<img src='%s'></img>", tableImage("smilies", 21)))]
[h: chatText = replace(chatText, "-_-", strformat("<img src='%s'></img>", tableImage("smilies", 23)))]
[h: chatText = replace(chatText, "\\^-\\^", strformat("<img src='%s'></img>", tableImage("smilies", 24)))]
[h: chatText = replace(chatText, "\\+\\)", strformat("<img src='%s'></img>", tableImage("smilies", 25)))]
[h: chatText = replace(chatText, ":x", strformat("<img src='%s'></img>", tableImage("smilies", 27)))]
[h: chatText = replace(chatText, "\\<3", strformat("<img src='%s'></img>", tableImage("smilies", 30)))]
[h: chatText = replace(chatText, ":dh:", strformat("<img src='%s'></img>", tableImage("smilies", 31)))]
[h: chatText = replace(chatText, ":dr:", strformat("<img src='%s'></img>", tableImage("smilies", 32)))]

[h,if(hasImpersonated()), Code:
	{
		[tokenImage = getTokenImage(40)]
		[tokenName = getImpersonatedName()]
	};
	{
		[if(isGM()), Code:
			{
				[tokenImage = tableImage("chat", 65)]
				[tokenName = "Der Spielleiter"]
			};
			{
				[tokenImage = tableImage("chat", 66)]
				[tokenName = getPlayerName()]
			}
		]
	}
]

[h,if(isGM()): whisperName = "Der Spielleiter"; whisperName = ownName]

[h,if(chatList == ""), Code:
	{
		[chatBubble = tableImage("chat", 72)]
		[chatTitle = strformat("<span style='color: #441e13; font-size: 11pt;'><b>%{tokenName}</b> spricht:</span>")]
		[sendList = listAppend(pNames, ownName)]
	};
	{
		[chatBubble = tableImage("chat", 73)]
		[chatTitle = strformat("<span style='color: #0a4c07; font-size: 11pt;'><b>%{whisperName}</b> fl&uuml;stert ")]
		[if(listCount(chatList) > 1): chatTitle = chatTitle + strformat("euch (%{chatList}) "); chatTitle = chatTitle + "dir "]
		[chatTitle = chatTitle + "etwas zu:</span>"]
		[sendList = chatList]
		[h: ausgabeSelf = strformat("
		<table style='border-spacing: 0px; margin: 0px; padding: 0px; color: #000000;' cellpadding ='0' cellspacing ='0'>
			<tr>
				<td valign='top'>
					<img src='%s'>
				</td>
				<td width='5'>
					&nbsp;
				</td>
				<td valign='top'>
					<img src='%s'>
				</td>
				<td valign='middle'>
					<span style='font-size: 11pt; color: #0a4c07;'>Du fl&uuml;sterst etwas zu <b>%s</b>:</span>
					<br>%s
				</td>
			</tr>
		</table>
		", tokenImage, chatBubble, chatList, chatText)]
		[h,if(chatText != ""), Code:
			{
				[h: broadcast(ausgabeSelf, ownName)]
			};{}
		]
	}
]

[h: ausgabe = strformat("
<table style='border-spacing: 0px; margin: 0px; padding: 0px; color: #000000;' cellpadding ='0' cellspacing ='0'>
	<tr>
		<td valign='top'>
			<img src='%s'>
		</td>
		<td width='5'>
			&nbsp;
		</td>
		<td valign='top'>
			<img src='%s'>
		</td>
		<td valign='middle'>
			%s
			<br>%s
		</td>
	</tr>
</table>
", tokenImage, chatBubble, chatTitle, chatText)]

[h,if(chatText != ""), Code:
	{
		[h: broadcast(ausgabe, sendList)]
		[h,macro("chatWindow@this"): ""]	
	};{}
]