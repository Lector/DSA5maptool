[h: params = arg(0)]
[h: tok = json.get(params, "Token")]
[h: chat = json.get(params, "Chat")]
[h: baseDamage = json.get(params, "BaseDamage")]
[h: rolledDamage = json.get(params, "RolledDamage")]
[h: damage = json.get(params, "Damage")]
[h: mod = json.get(params, "Mod")]
[h: type = json.get(params, "Type")]
[h: zone = json.get(params, "Zone")]
[h: multiplier = json.get(params, "Multiplier")]
[h: before = json.get(params, "Before")]
[h: after = json.get(params, "After")]
[h,if(mod >= 0): damageFormula = baseDamage + "+" + mod; damageFormula = baseDamage + "-" + abs(mod)]

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

[h: undoLink = macroLinkText("undoProcess@this")]

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
</td>",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/sufferDamage.png"))]

[h: undoIcon = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/undo.png")]
[h: before = encode(before)]
[h: after = encode(after)]
[h: undo = strformat("
<td style='margin-left: 12px' valign=middle>
	<form action='%{undoLink}' method='json'>
		<input type='submit' value='<html><img height=24 width=24 src=%{undoIcon}/></html>'/>
		<input type='hidden' name='before' value='%{before}'/>
		<input type='hidden' name='after' value='%{after}'>
		<input type='hidden' name='chat' value='%{chat}'/>
		<input type='hidden' name='token' value='%{tok}'/>
	</form>
</td>")]
[h: undo = onlyFor(undo, json.merge(getGMNames(), getOwners(tok)))]

[h: output = output + undo]

[h: macro.return = output]