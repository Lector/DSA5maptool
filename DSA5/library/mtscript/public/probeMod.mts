[h,if(macro.args == ""): default = 0; default = arg(0)]
<td class="probe">
	Probe:
</td>
<td class="probe">
	<select name="probemod" size="1" value="[r: default]">
		[r,for(i,-10,11,1,""),Code:{
			[h: i = -i]
			<option value=[r:i] [r,if(i==default):selected='selected']>[r: strformat("%+d",i)]</option>
		}]
	</select>
</td>