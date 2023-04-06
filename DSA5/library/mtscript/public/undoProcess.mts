[h: params = macro.args]

[h: undo = decode(json.get(params, "undo"))]
[h: chat = json.get(params, "chat")]

[h: evalMacro(undo)]

[h: ausgabe = border("Schaden rückgängig gemacht", strformat("

<table style='border-spacing: 0px; margin-top: 3px;'>
	<tr>
		<td style='text-align:center;' valign='middle' width='65'>
			<img src='%s'>
		</td>
		<td valign='middle'>
			Token-Zustand erfolgreich wiederhergestellt! Die Rückgängigfunktion hat den Schaden rückgängig gemacht und alle Zustände und Stati des Tokens zum Zeitpunkt unmittelbar vor dem Schaden wiederhergestellt.
		</td>
	</tr>
</table>",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/Undo.png")))]

[h: sendTo(chat, ausgabe)]