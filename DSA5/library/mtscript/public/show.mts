[h: actionResult = arg(0)]
[h,if(json.length(macro.args) >= 2): chatVisibility = arg(1); chatVisibility = "1"]
[h,if(json.length(macro.args) >= 3): makeTable = arg(2); makeTable = 1]

[h: output = ""]
[h,if(json.contains(actionResult, "Chat")): chat = json.get(actionResult, "Chat"); chat = ""]
[h: resultType = json.get(actionResult, "ResultType")]
[h: subResults = json.get(actionResult, "SubResults")]
[h,if(subResults == ""): subResults = "[]"]
[h: header = json.get(actionResult, "Header")]
[h: notification = json.get(actionResult, "Notification")]

[h,if(header != ""): output = skillRollTitle(header)]

[h,switch(resultType):
	case "1d20": output = output + show1d20(actionResult, chatVisibility);
	case "3d20": output = output + "<td rowspan=3></td>" + show3d20(actionResult, chatVisibility);
	case "attack": output = output + showAttack(actionResult, chatVisibility);
	case "takeDamage": output = output + showTakeDamage(actionResult, chatVisibility);
	case "woundEffect": output = output + showWoundEffect(actionResult, chatVisibility);
	case "weaponDamage": output = output + showWeaponDamage(actionResult, chatVisibility);
	case "dodge": output = output + showDefense(actionResult, chatVisibility);
	case "parry": output = output + showDefense(actionResult, chatVisibility);
	case "schmerz4": output = output + strformat("
<td style='text-align:center; padding: 0px 12px 0px 8px' valign='middle' rowspan=3>
	<img src='%s'/>
</td>
<td rowspan=3></td>
%s",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/heartEmpty.png"), show3d20(actionResult, chatVisibility));
	default: output = output
]

[h,if(output != ""): output = strformat("<tr>%{output}</tr>")]
[h,foreach(subResult, subResults),Code:{
	[h,if(chat != ""): subResult = json.set(subResult, "Chat", chat)]
	[h: output = output + show(subResult, chatVisibility, 0)]
}]
[h,if(notification != ""): output = output + strformat("<tr><td colspan=7>%s</td></tr>", subtext(notification))]

[h,if(makeTable == 1): output = strformat("<table style='font-weight: bold;'>%{output}</table>")]

[h: macro.return = output]