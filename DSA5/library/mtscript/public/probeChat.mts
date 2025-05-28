[h: id = arg(0)]
[h,if(id == ""): npc = 0; npc = isNPC(id)]
[h: visDefault = getLibProperty("OptHideNSCAction", "com.github.lector.dsa5maptool")]
[h,if(visDefault == ""): visDefault = 1]
[h,if(npc == 0): visDefault = 1]
[h,if(json.length(macro.args) > 1): private = arg(1); private = 1]

<table style='border-spacing: 0px; margin: 5px auto 10px auto;' cellpadding='0'>
	<tr>
		<td class="label">
			Ausgabe
		</td>
	[r, if(isGM() == 1), code: {
		[h: radioPublic = ""]
		[h: radioMasked = ""]
		[h: radioHidden = ""]
		[h,switch(visDefault), code:
			case 1: { [radioPublic = "checked"] };
			case 2: { [radioMasked = "checked"] };
			case 3: { [radioHidden = "checked"] };
			default: { [radioPublic = "checked"] };
		]
		<td style='padding-left: 5px;'>
			<input type='radio' name='chat' value='1' [r: radioPublic]>
		</td>
		<td>
			Offen
		</td>
		<td style='padding-left: 5px;'>
			<input type='radio' name='chat' value='5' [r: radioMasked]>
		</td>
		<td>
			Maskiert
		</td>
		<td style='padding-left: 5px;'>
			<input type='radio' name='chat' value='2' [r: radioHidden]>
		</td>
		<td>
			Verdeckt
		</td>
	};{
		<td style='padding-left: 5px;'>
			<input type='radio' name='chat' value='1' checked>
		</td>
		<td>
			Öffentlich
		</td>
		<td style='padding-left: 5px;'>
			<input type='radio' name='chat' value='2'>
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
		[r,if(private != 0),Code:{
		<td style='padding-left: 5px;'>
			<input type='radio' name='chat' value='4'>
		</td>
		<td>
			Privat
		</td>
		}]
	}]
	</tr>
</table>