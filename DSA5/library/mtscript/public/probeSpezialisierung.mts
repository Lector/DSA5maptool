[h: skill = arg(0)]
[h,if(json.length(macro.args) > 1): default = arg(1); default = 0]
<tr>
	<td style="width: 20px;">
		<input type="checkbox" name="Spezialisierung[r:skill]" value="2" [r,if(default != 0): checked]/>
	</td>
	<td colspan=2>
		Fertikeitsspezialisierung (+2 FW)
	</td>
</tr>