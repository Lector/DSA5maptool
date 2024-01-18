[h: params = arg(0)]

[h: propertyNames = json.get(params, "propertyNames")]
[h: E1 = json.get(propertyNames, 0)]
[h: E2 = json.get(propertyNames, 1)]
[h: E3 = json.get(propertyNames, 2)]
[h: fw = json.get(params, "fw")]
[h: success = json.get(params, "success")]
[h: dice = json.get(params, "dice")]
[h: checkResults = json.get(params, "checkResults")]
[h: properties = json.get(params, "properties")]
[h: currentProperties = json.get(params, "currentProperties")]
[h: fp = json.get(params, "fp")]
[h: quali = json.get(params, "quality")]
[h: qs = json.get(params, "qs")]
[h: mod = json.get(params, "mod")]
[h: modText = json.get(params, "modText")]
[h: bonusText = json.get(params, "bonusText")]
[h,if(success <= 0): bonusText = ""]
[h: rerollResults = json.get(params, "reroll")]

[h,if(isNumber(E1)),Code:{ [e1title = ""] };{ [e1title = strformat("
<td style='padding: 1px 0px 1px 0px;'>
	%{E1}
</td>
<td style='padding: 1px 5px 1px 5px;'>
	&#124;
</td>")]
}]
[h,if(isNumber(E2)),Code:{ [e2title = ""] };{ [e2title = strformat("
<td style='padding: 1px 0px 1px 0px;'>
	%{E2}
</td>
<td style='padding: 1px 5px 1px 5px;'>
	&#124;
</td>")]
}]
[h,if(isNumber(E3)),Code:{ [e3title = ""] };{ [e3title = strformat("
<td style='padding: 1px 0px 1px 0px;'>
	%{E3}
</td>
<td style='padding: 1px 5px 1px 5px;'>
	&#124;
</td>")]
}]

[h,switch(success),Code:
	case -2: {[erfolgImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/epicBotch.png")]};
	case -1: {[erfolgImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/botch.png")]};
	case 0: {[erfolgImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/failure.png")]};
	case 1: {[erfolgImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/success.png")]};
	case 2: {[erfolgImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/luckySuccess.png")]};
	case 3: {[erfolgImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/spectacularSuccess.png")]};
	default: {[erfolgImage = ""]}
]

[h,if(fp >= 0): fpColor = "#1d5c2f"; fpColor = "#a42b1e"]
[h,if(fp > 0): qsText = fp + "<span style='color: #441e13;'>&middot;</span><span style='color: #1d5c2f;'>" + qs + "</span>"; qsText = "0"]
[h,if(quali > 0): qualiColor = "#1d5c2f"; qualiColor = "#441e13"]
[h,if(quali < 0): qualiColor = "#a42b1e"]
[h,if(qs > 0): qsColor = "#1d5c2f"; qsColor = "#a42b1e"]
[h,if(mod > 0): modColor = "#1d5c2f"; modColor = "#441e13"]
[h,if(mod < 0): modColor = "#a42b1e"]
[h: modOutput = strformat("<span %{modText} style='color:%{modColor}'>%+d</span>", mod)]
[h,if(mod == 0 && modText == ""): modOutput = ""]

<!--Hier werden Farben und Formatierungen für die Ausgabefelder bestimmt-->
[h: diceOutputs = "[]"]
[h: propertyOutputs = "[]"]
[h,for(i, 0, 3),Code:
{
	[h: currentColor = dieColor(json.get(checkResults, i), 0)]
	[h: diceOutputs = json.append(diceOutputs, strformat("<span style='color: %s'>%s</span>", currentColor, json.get(dice, i)))]
	[h: currentPropertyColor = propertyColor(json.get(currentProperties, i), json.get(properties, i), "#441e13")]
	[h: propertyOutputs = json.append(propertyOutputs, strformat("<span style='color:%s'>%s</span>", currentPropertyColor, json.get(currentProperties, i)))]
}]

[h,foreach(rerollResult, rerollResults),Code:
{
	[h: index = json.get(rerollResult, "index")]
	[h: oldValue = json.get(rerollResult, "oldValue")]
	[h: diceOutputs = json.set(diceOutputs, index,
		strformat("<s><span style='color: %s'>&nbsp;%{oldValue}&nbsp;</span></s>&nbsp;%s", dieColor(oldValue, json.get(currentProperties, index)), json.get(diceOutputs, index))
	)]
}]

[h: diceOutput1 = json.get(diceOutputs, 0)]
[h: diceOutput2 = json.get(diceOutputs, 1)]
[h: diceOutput3 = json.get(diceOutputs, 2)]
[h: p1 = json.get(propertyOutputs, 0)]
[h: p2 = json.get(propertyOutputs, 1)]
[h: p3 = json.get(propertyOutputs, 2)]

[h,if(qs > 0): qualitaetTitle = "Die maximale Erschwernis, mit der die Probe noch gelungen wäre"; qualitaetTitle = "Die minimale Erleichterung, die notwendig wäre um die Probe zu schaffen"]

[h: macro.return = strformat("
	<td rowspan=3 style='margin: 0px 8px 0px 0px'>
		<table style='border-spacing: 0px; white-space: nowrap'>
			<tr style='text-align: center;'>
				%{e1title}
				<td style='padding: 1px 0px 1px 0px; white-space: nowrap;'>
					%{p1}%{modOutput}
				</td>
				<td style='padding: 1px 5px 1px 5px'>
					&#124;
				</td>
				<td style='padding: 1px 0px 1px 0px; white-space: nowrap;'>
					%{diceOutput1}
				</td>
			</tr>
			<tr style='text-align: center;'>
				%{e2title}
				<td style='padding: 1px 0px 1px 0px; white-space: nowrap;'>
					%{p2}%{modOutput}
				</td>
				<td style='padding: 1px 5px 1px 5px;'>
					&#124;
				</td>
				<td style='padding: 1px 0px 1px 0px; white-space: nowrap;'>
					%{diceOutput2}
				</td>
			</tr>
			<tr style='text-align: center;'>
				%{e3title}
				<td style='padding: 1px 0px 1px 0px; white-space: nowrap;'>
					%{p3}%{modOutput}
				</td>
				<td style='padding: 1px 5px 1px 5px;'>
					&#124;
				</td>
				<td style='padding: 1px 0px 1px 0px; white-space: nowrap;'>
					%{diceOutput3}
				</td>
			</tr>
		</table>
	</td>
	<td style='padding: 1px 0px 1px 0px;'>
		FW:
	</td>
	<td style='padding: 1px 0px 1px 0px; text-align: right;'>
		%{fw}
	</td>
	<td valign='middle' style='text-align: center; margin: 0px 14px 0px 14px;' rowspan=3>
		<table style='border-spacing: 0px;'>
			<tr>
				<td>
					QS
				</td>
			</tr>
			<tr>
				<td style='color: %{qsColor}; font-size: 20pt; text-align: center; padding-top: 3px;'>
					%{qs}
				</td>
			</tr>
		</table>
	</td>
	<td valign='middle' style='text-align: center; margin: 0px 4px 0px 0px' rowspan=3>
		<img src='%{erfolgImage}'>
	</td>
</tr>
<tr>
	<td style='padding: 1px 4px 1px 0px;'>
		FP:
	</td>
	<td style='padding: 1px 0px 1px 0px; text-align: right; color: %{fpColor};'>
		<span %{bonustext}>%{fp}</span>
	</td>
</tr>
<tr>
	<td style='padding: 1px 4px 1px 0px;'>
		<span title='%{qualitaetTitle}'>Qualität:</span>
	</td>
	<td style='padding: 1px 0px 1px 0px; text-align: right; color: %{qualiColor};'>
		<span title='%{qualitaetTitle}'>%{quali}</span>
	</td>
")]