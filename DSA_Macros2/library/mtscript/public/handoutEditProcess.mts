[h: uebergabe = macro.args]
[h: closeDialog("handoutEdit")]

[h: hToken = json.get(uebergabe, "hTokenName")]
[h: hNum = json.get(uebergabe, "hTokenNum")]
[h: id = json.get(uebergabe, "hTokenID")]

[h: tokenMap = getTokenMap(id)]
[h: x = getTokenX(0, id, tokenMap)]
[h: y = getTokenY(0, id, tokenMap)]
[h,if(getCurrentMapName() != tokenMap): moveTokenFromMap(id, tokenMap, x, y)]

[h: switchToken(id)]

[h: hTitle = json.get(uebergabe, "hTitle")]
[h,if(hTitle == ""): hTitleShow = ""; hTitleShow = "- "+hTitle]
[h: hShort = json.get(uebergabe, "hShort")]
[h: hContent = json.get(uebergabe, "hContent")]

[h,if(hTitle == ""): hTitlePublic = "Handout"; hTitlePublic = hTitle]
[h: shareLinkPublic = macroLink("<span title='Ge&auml;ndertes Handout aufrufen'>Jetzt anzeigen</span>", "handoutShow@this", "", id)]

[h: setLabel(hTitle)]
[h: setNotes(hShort)]
[h: setGMNotes(hContent)]

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
			<span style='font-weight: normal;'>Ein Handout wurde erstellt oder bearbeitet:</span>
			<br><br>
			%s %s
		</td>
	</tr>
</table>",
tableImage("chat", 81), hToken, hTitleShow)]

[h: ausgabe = border("Handouts", ausgabe)]

[h: ausgabePublic = strformat("
<table style='border-spacing: 0px; margin-top: 3px; font-weight:bold'>
	<tr>
		<td style='text-align:center; padding: 0px;' valign='middle' width='40'>
			<img src='%s'>
		</td>
		<td width='25'>
			&nbsp;
		</td>
		<td style='text-align: center; font-weight: normal;' valign='middle'>
			Der Spielleiter hat ein Handout ge&auml;ndert (<span style='color: #000000;'>%s</span>):
			<br><br>
			<span style='font-weight: bold;'>%s</span>
		</td>
	</tr>
</table>",
	tableImage("chat", 81), shareLinkPublic, hTitlePublic)]

[h,if(getCurrentMapName() != tokenMap): moveTokenToMap(id, tokenMap, x, y)]

[h: ausgabePublic = border("Handout ge&auml;ndert", ausgabePublic)]

[h: publicHandouts = getLibProperty("SharedHandouts", "lib:com.github.naxos84.Macros")]

[h,if(listFind(publicHandouts, hNum) == -1), Code:
	{
		[broadcast(ausgabe, "gm")]
	};
	{
		[broadcast(ausgabePublic)]
	}
]
[h,if(isFrameVisible("meisterbogen") == 1 && getLibProperty("SLframe", "lib:com.github.naxos84.Macros") == 5), Code:
	{
		[h,macro("meisterbogenHandouts@this"): ""]
	};{}
]