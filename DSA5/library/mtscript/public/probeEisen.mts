[h: id = arg(0)]
<tr>
	<td valign='middle'>
		<span title='siehe Bann des Eisens Seite 256'>Eisen am Körper:</span>
	</td>
	<td valign='middle'>
		<select name='SteinEisenMalus' size='1'>
			<option selected='selected' value='0'>Keines</option>
			[h,if(hasTrait("Vorteile", "Eisenaffine Aura", 1, id) == 1): mul=4; mul=2]
			[r,for(i,1,11,1,""),Code:
			{
			<option value='[r:i]'>[r: i * mul] Stein (-[r:i])</option>
			}]
		</select>							
	</td>
</tr>