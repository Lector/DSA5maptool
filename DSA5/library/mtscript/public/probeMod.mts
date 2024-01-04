[h,if(macro.args == ""): default = 0; default = macro.args]
[h: name = arg(0)]
[h: text = arg(1)]
[h: defaultValue = arg(2)]
<td class="probe">
	[r: text]
</td>
<td class="probe">
	<select name="[r: name]" size="1" value="[r: defaultValue]">
		[r,for(i,-10,11,1,""),Code:{
			[h: i = -i]
			<option value=[r:i] [r,if(i==default):selected='selected']>[r: strformat("%+d",i)]</option>
		}]
	</select>
</td>