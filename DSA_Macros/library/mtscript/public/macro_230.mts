[h: cWinzig = ""]
[h: cKlein = ""]
[h: cMittel = "checked='checked'"]
[h: cGross = ""]
[h: cRiesig = ""]

[h: target = arg(0)]
[h,if(target != ""),Code: {
	[h: cMittel = ""]
	[h: gr = groesse(getSize(target))]
	[h,if(gr <= 2): cWinzig = "checked='checked'"]
	[h,if(gr == 3): cKlein = "checked='checked'"]
	[h,if(gr == 4):	cMittel = "checked='checked'"]
	[h,if(gr == 5): cGross = "checked='checked'"]
	[h,if(gr >= 6): cRiesig = "checked='checked'"]
}]

<td valign='top'>
	<div class='label'>
		Zielgr&ouml;&szlig;e
	</div>
</td>
<td valign='top'>
	<table>
		<tr>
			<td>
				<input type='radio' name='groesse' value='-8' [r:cWinzig]>
			</td>
			<td>
				Winzig (-8)
			</td>
		</tr>
		<tr>
			<td>
				<input type='radio' name='groesse' value='-4' [r:cKlein]>
			</td>
			<td>
				Klein (-4)
			</td>
		</tr>
		<tr>
			<td>
				<input type='radio' name='groesse' value='0' [r:cMittel]>
			</td>
			<td>
				Mittel (0)
			</td>
		</tr>
		<tr>
			<td>
				<input type='radio' name='groesse' value='4' [r:cGross]>
			</td>
			<td>
				Gro&szlig; (+4)
			</td>
		</tr>
		<tr>
			<td>
				<input type='radio' name='groesse' value='8' [r:cRiesig]>
			</td>
			<td>
				Riesig (+8)
			</td>
		</tr>
	</table>
</td>