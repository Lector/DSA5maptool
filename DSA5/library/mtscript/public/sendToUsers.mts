[h: content = arg(0)]
[h: recipients = arg(1)]
[h: visibility = arg(2)]

[h,if(json.length(macro.args) > 3): avatar = chatAvatar(arg(3)); avatar = chatAvatar()]

[h,if(visibility != ""):
	visibility = strformat("<br><img src='%s' alt='Sichtbarkeit'><span style='font-weight: normal;'>&nbsp;%{visibility}</span>",
	data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/visibility.png"))]

[h,foreach(recipient, recipients),Code:
{
	[h: myContent = content]
	[h: find = strfind(content, "<recipients ids='([^']+(,\\s*[^']+)*)'>([\\s\\S]*?)</recipients>")]
	[h: findCount = getFindCount(find)]
	[h: broadcast("Found "+findCount+" output restrictions", "self")]
	[h,for(i, 1, findCount+1),Code:{
		[h: groupCount = getGroupCount(find)]
		[h: match = getGroup(find, i, 0)]
		[h: ids = getGroup(find, i, 1)]
		[h: findContent = getGroup(find, i, groupCount)]
		[h: match = "\\Q"+match+"\\E"]
		[h,if(listContains(ids, recipient) == 0):
			myContent = replace(myContent, match, "");
			myContent = replace(myContent, match, findContent)]
	}]

	[h: output = strformat("
	<table style='border-spacing: 0px; margin: 0px; padding: 0px;' cellpadding = '0' cellspacing = '0'>
		<tr>
			<td style='text-align: center; font-size: 11pt; font-weight: bold; color: #000000;' valign='top' width='100'>
				%{avatar}%{visibility}
			</td>
			<td width='10'>
				&nbsp;
			</td>
			<td valign='top'>
				%s
			</td>
		</tr>
	</table>",
	myContent)]

	[h: broadcast(output, recipient)]
}]

[h: player = getPlayerName()]
[h,if(json.contains(recipients, player) == 0), Code:
{
	[h: content = border("Verdeckter Wurf", strformat("
	<table>
		<td style='text-align:center;' valign='middle' width='70'>
			<img src='%s'>
		</td>
		<td width='10'>
			&nbsp;
		</td>
		<td style='white-space: nowrap;'>Du hast eine verdeckte Probe für den Spielleiter gewürfelt.</td>
	</table>",
	data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/secret.png")))]

	[h: content = strformat("
	<table style='border-spacing: 0px; margin: 0px; padding: 0px;' cellpadding = '0' cellspacing = '0'>
		<tr>
			<td style='text-align: center; font-size: 11pt; font-weight: bold; color: #000000;' valign='top' width='100'>
				%{avatar}
			</td>
			<td width='10'>
				&nbsp;
			</td>
			<td style='font-size: 12pt;' valign='middle'>
				%{content}
			</td>
		</tr>
	</table>")]

	[h: broadcast(content, player)]
}]