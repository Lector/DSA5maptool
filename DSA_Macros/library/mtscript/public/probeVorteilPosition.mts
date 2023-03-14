[h: switchToken(arg(0))]
[h: target = arg(1)]
[h: modus = arg(2)]

[h: value = 2]

[h: mount = getMount(currentToken())]
[h: checked = ""]
[h,if(mount != ""),Code:{
	[if(target != ""),Code:{
		[if(getMount(target) == ""): checked = "checked='checked'"]
	}]
	[if(target == ""): checked = "checked='checked'"]

	[h,if(hasTrait("KampfSF", "Baliho-Stil") > 0): value = value + 1]
	[h,if(hasTrait("KampfSF", "Ritter des alten Wegs-Stil") > 0 && modus == "at"): value = value + 2]
}]
<tr>
	<td>
		<input type="checkbox" name="vorteilhafteposition" value="[r:value]" [r: checked]/>
	</td>
	<td>
		Vorteilhafte Position (+[r: value])
	</td>
</tr>