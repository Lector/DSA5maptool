[h: uebergabe = macro.args]
[h: closeDialog("tokensize")]

[h: idList = json.get(uebergabe, "tokenList")]
[h: newSize = json.get(uebergabe, "tokenSize")]

[h,switch(newSize):
    case "1": size = "Tiny";
	case "2": size = "Small";
	case "3": size = "Medium";
	case "4": size = "Large";
	case "5": size = "Huge";
	case "6": size = "Gargantuan";
	case "7": size = "Colossal";
    default: size = Medium
]

[h,foreach(id, idList, ""), Code:
	{
		[setSize(size, id)]
	}
]

[h: ausgabe = "<table style='border-spacing: 0px;' width='100%'><tr><td></td><td width='501'>"]
[h: ausgabe = ausgabe + strformat("

	<table style='border-spacing: 0px; margin-top: 3px;'>
		<tr>
			<td width='18'>
				&nbsp;
			</td>
			<td style='text-align:center;' valign='middle' width='70'>
				<img src='%s'>
			</td>
			<td valign='middle'>
				Die Gr&ouml;&szlig;e der markierten Tokens wurde ge&auml;ndert.
			<td width='15'>
				&nbsp;
			</td>
			<td width='18'>
				&nbsp;
			</td>
		</tr>
	</table>",
tableImage("chat", 28))]
[h: ausgabe = ausgabe + "</td><td></td></tr></table>"]

[h: ausgabe = border("Tokengröße", ausgabe)]

[h: broadcast(ausgabe, "gm")]