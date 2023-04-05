[h: actionResult = arg(0)]
[h,if(json.length(macro.args) == 2): makeTable = arg(1); makeTable = 1]

[h: output = ""]

[h,if(json.contains(actionResult, "Chat")): chat = json.get(actionResult, "Chat"); chat = ""]
[h: resultType = json.get(actionResult, "ResultType")]
[h: subResults = json.get(actionResult, "SubResults")]
[h,if(subResults == ""): subResults = "[]"]
[h: header = json.get(actionResult, "Header")]
[h: notification = json.get(actionResult, "Notification")]

[h,if(header != ""): output = skillRollTitle(header)]

[h,switch(resultType):
	case "1d20": output = output + show1d20(actionResult);
	case "3d20": output = output + "<td rowspan=3></td>" + show3d20(actionResult);
	case "attack": output = output + showAttack(actionResult);
	case "takeDamage": output = output + showTakeDamage(actionResult);
	case "woundEffect": output = output + showWoundEffect(actionResult);
	case "weaponDamage": output = output + showWeaponDamage(actionResult);
	case "dodge": output = output + showDefense(actionResult);
	case "parry": output = output + showDefense(actionResult);
	case "schmerz4": output = output + strformat("<td style='text-align:center; padding: 0px 12px 0px 8px' valign='middle' rowspan=3>
	<img src='%s'/>
</td><td rowspan=3></td>%s",
tableImage("chat", 71), show3d20(actionResult));
	default: output = output
]

[h,if(output != ""): output = strformat("<tr>%{output}</tr>")]
[h,foreach(subResult, subResults),Code:{
	[h,if(chat != ""): subResult = json.set(subResult, "Chat", chat)]
	[h: output = output + show(subResult, 0)]
}]
[h,if(notification != ""): output = output + strformat("<tr><td colspan=7>%s</td></tr>", subtext(notification))]

[h,if(makeTable == 1): output = strformat("<table style='font-weight: bold;'>%{output}</table>")]

[h: macro.return = output]