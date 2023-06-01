[h: switchToken(arg(0))]
[h: skill = arg(1)]

<!-- Falls wir den FW irgendwie anders noch erhoehen koennen bieten wir ein DropDown an -->
<tr>
	<td colspan="2" style="white-space: nowrap;">
		FW-Erhöhung:
	</td>
	<td>
		<select size="1" name="FWPlus[r: skill]">
			<option value="0" selected='selected'>+0</option>
			[h: gsbase = ""]
			[h,if(arg(1) == "Körperbeherrschung"): gsbase = getGS(currentToken())]
			[h: mount = getMount(currentToken())]
			[h,if(arg(1) == "Reiten" && mount != ""): gsbase = getGS(mount)]
			[r,if(gsbase != ""),Code:
			{
				<option value=[r: round(gsbase * 2)]>+GS x 2</option>
				<option value=[r: round(gsbase * 1.5)]>+GS x 1,5</option>
				<option value=[r: round(gsbase * 1)]>+GS x 1</option>
				<option value=[r: round(gsbase * 0.75)]>+GS x 0,75</option>
				<option value=[r: round(gsbase * 0.5)]>+GS x 0,5</option>
			};{}]
			[r,for(i,1,11,1,""),Code:{
				<option value=[r:i]>+[r:i]</option>
			}]
		</select>
	</td>
</tr>