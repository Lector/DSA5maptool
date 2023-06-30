[h: params = macro.args]

[h: tok = json.get(params, "token")]
[h: before = decode(json.get(params, "before"))]
[h: after = decode(json.get(params, "after"))]
[h: chat = json.get(params, "chat")]

[h: undoDamage(tok, before, after)]

[h: ausgabe = border("Schaden rückgängig gemacht", strformat("

<table style='border-spacing: 0px; margin-top: 3px;'>
	<tr>
		<td style='text-align:center;' valign='middle' width='65'>
			<img src='%s'>
		</td>
		<td valign='middle'>
			Der Schaden würde rückgängig gemacht. Alle Zustände und Stati des Tokens zum Zeitpunkt unmittelbar vor dem Schaden wurden wiederhergestellt.
		</td>
	</tr>
</table>",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/undo.png")))]

[h: sendTo(chat, ausgabe)]