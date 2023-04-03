[h: id = arg(0)]
[h,if(id == ""): npc = 0; npc = isNPC(id)]
[h: getLibProperty("OptHideNSCAction", "com.github.lector.dsa5maptool")]

[h,if(npc == 1 && getLibProperty("OptHideNSCAction", "com.github.lector.dsa5maptool") == 1), Code:
{
	[ausgabeSL = "checked"]
	[ausgabePublic = ""]
};
{
	[ausgabeSL = ""]
	[ausgabePublic = "checked"]
}]

<table style='border-spacing: 0px; margin: 5px auto 10px auto;' cellpadding='0'>
	<tr>
		<td class="label">
			Ausgabe
		</td>
		<td style='padding-left: 5px;'>
			<input type='radio' name='chat' value='1' [r: ausgabePublic]>
		</td>
		<td>
			Öffentlich
		</td>
		<td style='padding-left: 5px;'>
			<input type='radio' name='chat' value='2' [r: ausgabeSL]>
		</td>
		<td>
			Spielleiter
		</td>
		<td style='padding-left: 5px;'>
			<input type='radio' name='chat' value='3'>
		</td>
		<td>
			Privat &amp; Spielleiter
		</td>
		<td style='padding-left: 5px;'>
			<input type='radio' name='chat' value='4'>
		</td>
		<td>
			Privat
		</td>
	</tr>
</table>