[h: params = arg(0)]
[h: baseDamage = json.get(params, "BaseDamage")]
[h: rolledDamage = json.get(params, "RolledDamage")]
[h: damage = json.get(params, "Damage")]
[h: mod = json.get(params, "Mod")]
[h: type = json.get(params, "Type")]
[h: multiplier = json.get(params, "Multiplier")]
[h: weapon = json.get(params, "Weapon")]

[h,if(multiplier == 2): critTitle = "title='Schaden verdopppelt'"; critTitle = ""]

[h,if(mod > 0): modColor = "#1d5c2f"; modColor = "#441e13"]
[h,if(mod < 0): modColor = "#a42b1e"]
[h,if(mod > 0): modOutput = "&#43;"+mod; modOutput = mod]

[h: reactionParams = json.get(params, "ReactionParams")]

[h: paradeLink = macroLinkText("probePA@Lib:macros", "", reactionParams)]
[h: awLink = macroLinkText("probeAW@Lib:macros", "", reactionParams)]
[h: schadenLink = macroLinkText("schadenErhalten@Lib:macros", "", reactionParams)]

[h: buttons = strformat("
<td valign=middle rowspan=3>
	<table>
		<tr>
			<td>
				<form action='%{paradeLink}'>
					<input type='submit' value='<html><img src=asset://ec6b375da49ed204f5df318b749173bf/></html>'/>
				</form>
			</td>
			<td style='width: 20;'> &nbsp; </td>
			<td>
				<form action='%{awLink}'>
					<input type='submit' value='<html><img src=asset://b97c6577fd79f146c38cf98ada1d1824/></html>'/>
				</form>
			</td>
			<td style='width: 20;'> &nbsp; </td>
			<td>
				<form action='%{schadenLink}'>
					<input type='submit' value='<html><img src=asset://09aba2e3674b12da6c242b5b5cc35930/></html>'/>
				</form>
			</td>
		</tr>
	</table>
</td>
")]


[h: output = strformat("
	<td rowspan=3></td>
	<td style='margin: 1px 4px 1px 0px;'>
		<span title='%{baseDamage}'>Grundschaden:</span>
	</td>
	<td style='margin: 1px 0px 1px 0px; text-align: right;'>
		<span title='%{baseDamage}'>%{rolledDamage}</span>
	</td>
	<td valign='middle' style='margin: 0px 14px 0px 14px; text-align: center;' rowspan=3>
		Schaden<br>
		<span style='font-size: 20pt; padding-top: 3px; color: #1d5c2f; white-space: nowrap;' %{critTitle}>
			%{damage} %{type}
		</span>
	</td>
	%{buttons}
</tr>
<tr>
	<td style='margin: 1px 4px 1px 0px;'>
		Schadensmod.:
	</td>
	<td style='margin: 1px 0px 1px 0px; text-align: right; color: %{modColor}'>
		%{modOutput}
	</td>
</tr>
<tr>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
")]

[h: macro.return = output]