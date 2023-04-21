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

[h: chatText = replace(chatText, ":\\)", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/smile.png")))]
[h: chatText = replace(chatText, ":D", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/grin.png")))]
[h: chatText = replace(chatText, ",\\)", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/twinkle.png")))]
[h: chatText = replace(chatText, ",D", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/twinkleGrin.png")))]
[h: chatText = replace(chatText, "xD", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/laugh.png")))]
[h: chatText = replace(chatText, "xP", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/laughTongue.png")))]
[h: chatText = replace(chatText, "\\^\\^", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/smirk.png")))]
[h: chatText = replace(chatText, "\\^_\\^", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/giggle.png")))]
[h: chatText = replace(chatText, "8\\)", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/cool.png")))]
[h: chatText = replace(chatText, ":\\(", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/sad.png")))]
[h: chatText = replace(chatText, ":c", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/crying.png")))]
[h: chatText = replace(chatText, "x\\(", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/angry.png")))]
[h: chatText = replace(chatText, ":0", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/shocked.png")))]
[h: chatText = replace(chatText, ":o", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/surprised.png")))]
[h: chatText = replace(chatText, "Oo", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/irritated.png")))]
[h: chatText = replace(chatText, ":#", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/confused.png")))]
[h: chatText = replace(chatText, ":\\*", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/skeptical.png")))]
[h: chatText = replace(chatText, ":\\|", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/speechless.png")))]
[h: chatText = replace(chatText, "x\\|", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/annoyed.png")))]
[h: chatText = replace(chatText, "x0", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/ouch.png")))]
[h: chatText = replace(chatText, "\\>=\\)", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/spiteful.png")))]
[h: chatText = replace(chatText, "\\>=D", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/vicious.png")))]
[h: chatText = replace(chatText, "-_-", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/tired.png")))]
[h: chatText = replace(chatText, "\\^-\\^", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/shy.png")))]
[h: chatText = replace(chatText, "\\+\\)", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/greed.png")))]
[h: chatText = replace(chatText, "=:\\)", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/crazy.png")))]
[h: chatText = replace(chatText, ":x", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/silent.png")))]
[h: chatText = replace(chatText, "0:\\)", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/angle.png")))]
[h: chatText = replace(chatText, "3:\\)", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/devil.png")))]
[h: chatText = replace(chatText, "\\<3", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/heart.png")))]
[h: chatText = replace(chatText, ":dh:", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/thumbUp.png")))]
[h: chatText = replace(chatText, ":dr:", strformat("<img src='%s'></img>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/thumbDown.png")))]

[h,if(hasImpersonated()), Code:
	{
		[tokenImage = getTokenImage(40)]
		[tokenName = getImpersonatedName()]
	};
	{
		[if(isGM()), Code:
			{
				[tokenImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/gm.png")]
				[tokenName = "Der Spielleiter"]
			};
			{
				[tokenImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/guest.png")]
				[tokenName = getPlayerName()]
			}
		]
	}
]

[h,if(isGM()): whisperName = "Der Spielleiter"; whisperName = ownName]

[h,if(chatList == ""), Code:
	{
		[chatBubble = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/chatSay.png")]
		[chatTitle = strformat("<span style='color: #441e13; font-size: 11pt;'><b>%{tokenName}</b> spricht:</span>")]
		[sendList = listAppend(pNames, ownName)]
	};
	{
		[chatBubble = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/chatWhisper.png")]
		[chatTitle = strformat("<span style='color: #0a4c07; font-size: 11pt;'><b>%{whisperName}</b> flüstert ")]
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
					<span style='font-size: 11pt; color: #0a4c07;'>Du flüsterst etwas zu <b>%s</b>:</span>
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