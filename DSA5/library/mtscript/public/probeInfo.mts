[h: switchToken(arg(0))]
[h: skill = findSkill(currentToken(), arg(1))]
[h: plus = ""]
[h,if(json.length(macro.args) >= 3),Code:
{
	[h: spec = arg(2)]
	[h: specName = strformat("Fertigkeitsspezialisierung (%s: %{spec})", arg(1))]
	[h,if(hasTrait("AllgemeineSF", specName) > 0): plus = "+2 "]
}]

[h: wert = json.get(skill, "Talentwert")]
[h: probe = json.get(skill, "Probe")]
[h: e1 = json.get(probe, "Eigenschaft1")]
[h: e2 = json.get(probe, "Eigenschaft2")]
[h: e3 = json.get(probe, "Eigenschaft3")]
[h: e1wert = eval(e1)]
[h: e2wert = eval(e2)]
[h: e3wert = eval(e3)]
[h,macro("probeGetAktWert@this"): e1]
[h: aktE1wert = macro.return]
[h,macro("probeGetAktWert@this"): e2]
[h: aktE2wert = macro.return]
[h,macro("probeGetAktWert@this"): e3]
[h: aktE3wert = macro.return]

<table >
	<tr>
		<td>
			FW:
		</td>
		<td style='text-align: left; padding-left: 3px;'>
			[r: wert][r: plus]
		</td>
	</tr>
	<tr>
		<td>
			Probe:
		</td>
		<td style='text-align: left; padding-left: 3px;'>
			[r: e1]/[r: e2]/[r:e3]
		</td>
	</tr>
	<tr>
		<td>
			Grundwerte:
		</td>
		<td style='text-align: left; padding-left: 3px;'>
			[r: e1wert]/[r: e2wert]/[r:e3wert]
		</td>
	</tr>
	<tr>
		<td>
			Aktuelle Werte:
		</td>
		<td style='text-align: left; padding-left: 3px;'>
			[r: aktE1wert]/[r: aktE2wert]/[r: aktE3wert]
		</td>
	</tr>
</table>