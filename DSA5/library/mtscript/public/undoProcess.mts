[h: params = macro.args]

[h: undo = decode(json.get(params, "undo"))]
[h: chat = json.get(params, "chat")]

[h: evalMacro(undo)]

[h: ausgabe = border("Rückgängig", strformat("

<table style='border-spacing: 0px; margin-top: 3px;'>
	<tr>
		<td style='text-align:center;' valign='middle' width='65'>
			<img src='%s'>
		</td>
		<td valign='middle'>
			Der Schaden wurde rückgängig gemacht. Alle Zustände und Stati vor dem Schaden wurden widerhergestellt.
		</td>
	</tr>
</table>",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/Undo.png")))]

[h: sendTo(chat, ausgabe)]