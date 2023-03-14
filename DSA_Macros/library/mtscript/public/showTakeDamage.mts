[h: params = arg(0)]

[h: baseDamage = json.get(params, "BaseDamage")]
[h: rolledDamage = json.get(params, "RolledDamage")]
[h: damage = json.get(params, "Damage")]
[h: mod = json.get(params, "Mod")]
[h: type = json.get(params, "Type")]
[h: zone = json.get(params, "Zone")]
[h: multiplier = json.get(params, "Multiplier")]
[h,if(mod >= 0): damageFormula = baseDamage + "+" + abs(mod); signedMod = baseDamage + "-" + abs(mod)]

[h,if(IsNumber(baseDamage)),Code:
{
	[damageTitle = "Fixbetrag (" + number(baseDamage + mod) + ")"]
};
{
	[damageTitle = damageFormula + " (" + rolledDamage + ")"]
}]

[h: multiplierTitle = ""]
[h,if(multiplier == 2): multiplierTitle = ", Schaden verdoppelt"]
[h,if(multiplier == 0.5): multiplierTitle = ", Schaden halbiert"]

[h,if(zone != "gesamt"): displayZone = strformat("
<table>
	<tr>
		<td style='text-align: center;'>Zone:</td>
	</tr>
	<tr>
		<td style='text-align: center; padding-top: 3px; white-space: nowrap;'>
			<span style='color: #1d5c2f'>%{zone}</span>
		</td>
	</tr>
</table>"
); displayZone = ""]

[h: output = strformat("
<td style='text-align:center; padding: 0px 12px 0px 8px' valign='middle'>
	<img src='%s'/>
</td>
<td colspan=2></td>
<td valign=middle style='text-align: center; margin: 0px 4px 0px 0px; white-space: nowrap;' colspan=2>
	%{displayZone}
</td>
<td style='margin: 8px; 0px; 8px; 0px; text-align: center'>
	<table style='border-spacing: 0px; text-align: center'>
		<tr>
			<td style='text-align: center;'>
				Schaden
			</td>
		</tr>
		<tr>
			<td style='text-align: center; font-size: 20pt; padding-top: 3px; color: #980000; white-space: nowrap;'>
				<span title ='%{damageTitle}, Schadensart: %{type}%{multiplierTitle}'>%{damage} SP</span>
			</td>
		</tr>
	</table>
</td>"
,tableImage("chat", 64))]

[h: macro.return = output]