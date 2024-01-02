[h: id = macro.args]

[h: tokenMap = getTokenMap(id)]
[h: x = getTokenX(0, id, tokenMap)]
[h: y = getTokenY(0, id, tokenMap)]
[h,if(getCurrentMapName() != tokenMap): moveTokenFromMap(id, tokenMap, x, y)]

[h: switchToken(id)]
[h: hTokenName = getName()]
[h: hTitle = getLabel()]
[h,if(hTitle == ""): hTitle = "Handout"]
[h: hNum = substring(hTokenName, lastIndexOf(hTokenName, " ")+1, length(hTokenName))]

[h: hShared = getLibProperty("VisibleHandouts")]
[h: hItem = json.indexOf(hShared, hNum)]
[h,if(hItem == -1), Code:
{
	[hShared = json.append(hShared, hNum)]
	[chatTitleText = "Handout freigegeben"]
	[chatText = strformat("Der Spielleiter hat ein Handout freigegeben (<span style='color: #000000;'>%s</span>):", macroLink("<span title='Neues Handout aufrufen'>Jetzt anzeigen</span>", "handoutShow@this", "", id))]
	[recipient = "all"]
};
{
	[hShared = json.remove(hShared, hItem)]
	[chatTitleText = "Handout gesperrt"]
	[chatText = "Der Spielleiter hat ein Handout gesperrt:"]
	[recipient = "gm"]
}]
[h: setLibProperty("VisibleHandouts", hShared)]

[h: ausgabe = strformat("
<table style='border-spacing: 0px; margin-top: 3px; font-weight:bold'>
	<tr>
		<td style='text-align:center; padding: 0px;' valign='middle' width='40'>
			<img src='%s'>
		</td>
		<td width='25'>
			&nbsp;
		</td>
		<td style='text-align: center;' valign='middle'>
			<span style='font-weight: normal;'>%s</span>
			<br><br>
			%s
		</td>
	</tr>
</table>",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/handout.png"), chatText, hTitle)]
[h: ausgabe = border(chatTitleText, ausgabe)]

[h,if(getCurrentMapName() != tokenMap): moveTokenToMap(id, tokenMap, x, y)]

[h: broadcast(ausgabe, recipient)]
[h,macro("meisterbogenHandouts@this"): ""]