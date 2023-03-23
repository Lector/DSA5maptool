<td class="probe">
	Schaden:
</td>
<td class="probe">
	<select name="schadenmod" size="1" value="0">
		[r,for(i,-10,11,1,""),Code:{
			[h: i = -i]
			<option value=[r:i] [r,if(i==0):selected='selected']>[r: strformat("%+d",i)]</option>
		}]
	</select>
</td>