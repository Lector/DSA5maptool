[h: ownName = getPlayerName()]
[h: playerNames = getAllPlayerNames()]
[h: playerNames = listDelete(playerNames, listFind(playerNames, ownName))]
[h: playerNames = listSort(playerNames,'N')]
[h: playerNumber = listCount(playerNames)]

[h: actionLink = macroLinkText("chatWindowProcess@this", "")]
[frame5("chatWindow", "width=255; height=320; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>Chat</title>
	</head>
	<body style='font-size: 11pt;' bgcolor='#ece9d8'>
		<form action="[r:actionLink]">
			<table style='border-spacing: 0px;' cellpadding='5'>
				<tr>
					<td>
						<textarea name='chatField' cols='30' rows='5'></textarea>
					</td>
				</tr>
				<tr>
					<td>
						<b>Empfänger eingrenzen:</b>
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px; margin-left: 6px;' cellpadding='1'>
				[h: num = 0]
				[count(playerNumber,""), Code:
					{
						[h: player = strformat("player%s", num)]
						<tr>
							<td>
								<input type='checkbox' name='[r: player]' value='[r: listGet(playerNames, num)]'>
							</td>
							<td>
								[r: listGet(playerNames, num)]
							</td>
						</tr>
						[h: num = num + 1]
					}
				]
			</table>
			<p align='center'>
				<button type="submit" name="action">
					[r: strformat("<img src='%s'>",tableImage("forms", 148))]
				</button>
			</p>
			<p align='center'>
				<span style='color: #000000; text-decoration: underline;' title='Smilies &amp; Schriftformatierungen anzeigen, die im Chat benutzt werden können.'>[r: macroLink("Chatkürzel anzeigen", "showChatoptions@this", "")]</span>
			</p>
		</form>
	</body>
</html>
}]