[h: fkabwehr = arg(0)]
[h,if(fkabwehr == ""): fkabwehr = 0]

[h: fk0 = ""]
[h: fk1 = ""]
[h: fk2 = ""]
[h,switch(fkabwehr):
	case 0: fk0 = "checked='checked'";
	case 1: fk1 = "checked='checked'";
	case 2: fk2 = "checked='checked'"
]

<td valign='top'>
	<div class="label">
		Fernkampf-Abwehr
	</div>
</td>
<td valign='top'>
	<table style='border-spacing: 0px;' cellpadding='1'>
		<tr>
			<td>
				<input type='radio' name='fernkampf' value='0' [r: fk0]>
			</td>
			<td>
				Keine Fernkampfabwehr
			</td>
		</tr>
		<tr>
			<td>
				<input type='radio' name='fernkampf' value='-2' [r: fk1]>
			</td>
			<td>
				Wurfwaffe (-2)
			</td>
		</tr>
		<tr>
			<td>
				<input type='radio' name='fernkampf' value='-4' [r: fk2]>
			</td>
			<td>
				Schusswaffe (-4)
			</td>
		</tr>
	</table>
</td>