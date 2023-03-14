[h: params = arg(0)]

[h: success = json.get(params, "success")]
[h: dice = json.get(params, "dice")]
[h: propertiy = json.get(params, "property")]
[h: currentProperty = json.get(params, "currentProperty")]
[h: quali = json.get(params, "quality")]
[h: mod = json.get(params, "mod")]
[h: modText = json.get(params, "modText")]
[h: bonusText = json.get(params, "bonusText")]
[h: pruefwurf = json.get(params, "pruefwurf")]
[h: pruefReroll = json.get(params, "pruefreroll")]

[h: dice1 = listGet(dice, 0)]
[h: dice1Color = dieColor(dice1, currentProperty + mod)]
[h: diceOutput = strformat("<span style='text-align: center; font-size: 20pt; padding-top: 3px; color: %s;'>&nbsp;%s&nbsp;</span>", dice1Color, listGet(dice, 0))]

[h: separatorOutput = "<span style='text-align: center; font-size: 20pt; padding-top: 3px;'>&middot;</span>"]
[h,if(listCount(dice) == 3),Code:
{
	[h: dice2 = listGet(dice, 1)]
	[h: dice3 = listGet(dice, 2)]
	[h: dicePruef = min(dice2, dice3)]
	[h,if(dicePruef == dice2),Code:
	{
		[h: dicePruefColor = dieColor(dice2, currentProperty)]
		[h: dice2decor = ""]
		[h: dice3decor = "text-decoration:line-through;"]
	};
	{
		[h: dicePruefColor = dieColor(dice3, currentProperty)]
		[h: dice2decor = "text-decoration:line-through;"]
		[h: dice3decor = ""]
	}]
	
	[h: pruefOutput = separatorOutput + strformat("<span style='text-align: center; font-size: 20pt; padding-top: 3px; color: %s; %{dice2decor}'>&nbsp;%s&nbsp;</span>", dieColor(listGet(dice, 1), currentProperty + mod), dice2)]
	[h: pruefOutput = pruefOutput + separatorOutput + strformat("<span style='text-align: center; font-size: 20pt; padding-top: 3px; color: %s; %{dice3decor}'>&nbsp;%s&nbsp;</span>", dieColor(listGet(dice, 2), currentProperty + mod), dice3)]

};
{
	[h: dice2 = listGet(dice, 1)]
	[h,if(listCount(dice) == 2): pruefOutput = separatorOutput + strformat("<span style='text-align: center; font-size: 20pt; padding-top: 3px; color: %s;'>&nbsp;%s&nbsp;</span>", dieColor(listGet(dice, 1), currentProperty + mod), dice2)]
}]

[h,if(listCount(dice) > 1): diceOutput = diceOutput + pruefOutput]

[h: gluecklichImage = 1]
[h: kritImage = 8]
[h: patzerImage = 10]
[h,if(json.length(macro.args) > 1),Code:{
	[h: outputParams = arg(1)]
	[h,if(json.contains(outputParams, "luckyImage")): gluecklichImage = json.get(outputParams, "luckyImage")]
	[h,if(json.contains(outputParams, "critImage")): kritImage = json.get(outputParams, "critImage")]
	[h,if(json.contains(outputParams, "botchImage")): patzerImage = json.get(outputParams, "botchImage")]
};{}]
[h,switch(success),Code:
	case -2: {[h: erfolgImage = tableImage("chat", patzerImage)]};
	case -1: {[h: erfolgImage = tableImage("chat", patzerImage)]};
	case 0: {[h: erfolgImage = tableImage("chat", 2)]};
	case 1: {[h: erfolgImage = tableImage("chat", 1)]};
	case 2: {[h: erfolgImage = tableImage("chat", gluecklichImage)]};
	case 3: {[h: erfolgImage = tableImage("chat", kritImage)]}
]

[h,if(quali > 0): qualiColor = "#1d5c2f"; qualiColor = "#441e13"]
[h,if(quali < 0): qualiColor = "#a42b1e"]
[h,if(mod > 0): modColor = "#1d5c2f"; modColor = "#441e13"]
[h,if(mod < 0): modColor = "#a42b1e"]

[h: ausgabe = strformat("
	<td rowspan=3></td>
	<td style='margin: 1px 4px 1px 0px;' colspan=1>
		Wert:
	</td>
	<td style='margin: 1px 0px 1px 0px; text-align: right;'>
		%{currentProperty}
	</td>
	<td valign='middle' style='text-align: center; margin: 0px 14px 0px 14px;' rowspan=3>
		<table style='border-spacing: 0px;'>
			<tr>
				<td style='text-align: center;'>
					Wurf
				</td>
			</tr>
			<tr>
				<td style='text-align: center; white-space: nowrap;'>
					%{diceOutput}
				</td>
			</tr>
		</table>
	</td>
	<td valign='middle' style='text-align: center; margin: 0px 4px 0px 0px' rowspan=3>
		<img src='%{erfolgImage}'>
	</td>
</tr>
<tr>
	<td style='margin: 1px 4px 1px 0px;' colspan=1>
		Modifikator:
	</td>
	<td style='margin: 1px 0px 1px 0px; text-align: right; color: %{modColor};'>
		<span title='%{modText}'>%+d</span>
	</td>
</tr>
<tr>
	<td style='margin: 1px 4px 1px 0px;' colspan=1>
		Qualit&auml;t:
	</td>
	<td style='margin: 1px 0px 1px 0px; text-align: right; color: %{qualiColor};'>
		%{quali}
	</td>
", mod)]

[h: macro.return = ausgabe]