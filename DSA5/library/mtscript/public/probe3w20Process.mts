<!--
Dieses Skript soll alle möglichen 3W20-Proben abhandeln.
Icons, Patzertabellen unterscheiden sich teilweise stark, je nach Probe.
Dies soll von den unterschiedlichen Aufrufskripten alles mit übergeben werden
-->

[h: uebergabe = macro.args]

[h: switchToken(json.get(uebergabe, "Token"))]
[h: chat = json.get(uebergabe, "chat")]
[h: pName = json.get(uebergabe, "Name")]
[h,if(json.get(uebergabe, "Wert") == ""): Wert = 0; Wert = json.get(uebergabe, "Wert")]

<!--Hier muss das alte Fenster geschlossen werden.-->
[h: closeDialog("probe")]

[h: E1 = json.get(uebergabe, "E1")]
[h: E2 = json.get(uebergabe, "E2")]
[h: E3 = json.get(uebergabe, "E3")]
[h: wiki = json.get(uebergabe, "Wiki")]
[h,if(wiki == ""): title = pName; title = "<a style='color: #441e13' href='"+wiki+"'>"+pName+"</a>"]
[h: patzerTabelle = json.get(uebergabe, "patzerTabelle")]
[h: successText = decode(json.get(uebergabe, "successText"))]
[h: kritText = json.get(uebergabe, "kritText")]
[h: image = json.get(uebergabe, "image")]
[h: modMacro = json.get(uebergabe, "modMacro")]
[h: patzer19 = json.get(uebergabe, "patzer19")]
[h: reroll = json.get(uebergabe, "reroll")]
[h: qsmatter = 0]

[h: check = json.get(uebergabe, "check")]
[h,if(check != ""),Code:{
	[check = decode(check)]
	<!-- Determine the highest relevant QS -->
	[h: skill = json.path.read(check, "Checks.[0].Skill")]
	[h,for(i, 6, 0, -1),Code:
	{
		[h: info = json.path.read(check, "QS"+i+".Info")]
		[h,if(info != "" && qsmatter == 0): qsmatter = i]
	}]
}]

[h: params = json.set("{}", "Name", pName, "patzer19", json.get(uebergabe, "patzer19"), "reroll", reroll, "QSMatter", qsmatter, "modMacro", modMacro, "modMacroParams", uebergabe)]

[h: ergebnis = roll3d20(currentToken(), E1, E2, E3, Wert, 0, params)]
[h: success = json.get(ergebnis, "success")]
[h: qs = json.get(ergebnis, "qs")]

[h: subtext = json.get(ergebnis, "Notification")]
[h,if(success >= 1), Code:
{
	[if(successText != ""): subtext = subtext + replace(successText, "__QS__", qs) + "<br/>"]
}]
[h,if(success >= 2), Code:
{
	[if(kritText != ""): subtext = subtext + kritText + "<br/>"]
}]
<!-- Bei einem Patzer soll evtl. auf der Patzertabelle gewürfelt werden -->
[h,if(success < 0), Code:
{
	[if(patzerTabelle != ""): subtext = subtext + table(patzerTabelle) + "<br/>"]
}]

[h,if(check != ""),Code:{
	[h: checkNote = ""]
	[h,if(qs == 0): start = 0; start = 1]
	[h,for(i, start, qs+1, 1),Code:{
		[h,if(i == 0): field = "Fail"; field = "QS"+string(i)]
		[h: info = json.path.read(check, field+".Info")]
		[h,if(info != ""): checkNote = strformat("%{checkNote}<li style='magin: 0 0 0 0;'>%{info}</li>")]
	}]
	[h,if(checkNote != ""): checkNote = strformat("<ul style='margin: 0 0 0 0;'>%{checkNote}</ul>")]

	[h: recipients = json.append(getGMNames(), getPlayerName())]
	[h,if(checkNote != ""): subtext = subtext + onlyFor(checkNote, recipients)]
}]

<!-- Falls wir Subtext haben formatieren wir ihn entsprechend -->
[h,if(subtext != ""): subtext = subtext(subtext)]

<!--Und hier die Ausgabe-->
[h: output = show3d20(ergebnis, chat)]
[h: output = strformat("
<table style='border-spacing: 0px; margin-top: 3px; font-weight: bold;'>
	<tr>
		<td style='text-align:center; padding: 0px 12px 0px 8px' valign='middle' rowspan=3>
			<img src='%{image}'>
		</td>
		%{output}
	</tr>
</table>%{subtext}")]

[h: output = border(title, output)]

[h: sendTo(chat, output)]