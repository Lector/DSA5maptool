[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

<!--
Dieses Skript soll alle möglichen 3W20-Proben abhandeln.
Icons, Patzertabellen unterscheiden sich teilweise stark, je nach Probe.
Dies soll von den unterschiedlichen Aufrufskripten alles mit übergeben werden
-->

[h: uebergabe = macro.args]

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
[h: kritText = json.get(uebergabe, "kritText")]
[h: image = json.get(uebergabe, "image")]
[h: modMacro = json.get(uebergabe, "modMacro")]
[h: patzer19 = json.get(uebergabe, "patzer19")]
[h: reroll = json.get(uebergabe, "reroll")]
[h: subtext = ""]
[h: params = json.set("{}", "patzer19", json.get(uebergabe, "patzer19"), "reroll", reroll, "modMacro", modMacro, "modMacroParams", uebergabe)]

[h: ergebnis = roll3d20(currentToken(), E1, E2, E3, Wert, 0, params)]
[h: success = json.get(ergebnis, "success")]

[h,if(success >= 2), Code:
{
	[if(kritText != ""): subtext = subtext + kritText + "<br/>"]
}]
<!-- Bei einem Patzer soll evtl. auf der Patzertabelle gewürfelt werden -->
[h,if(success < 0), Code:
{
	[if(patzerTabelle != ""): subtext = subtext + table(patzerTabelle) + "<br/>"]
}]

<!-- Falls wir Subtext haben formatieren wir ihn entsprechend -->
[h,if(subtext != ""): subtext = subtext(subtext)]

<!--Und hier die Ausgabe-->
[h: output = show3d20(ergebnis)]
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