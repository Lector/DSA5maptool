[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

<!--
Dieses Skript handelt alle möglichen 1W20-Proben ab.
Icons, Patzertabellen unterscheiden sich teilweise stark, je nach Probe.
Dies wird von den unterschiedlichen Aufrufskripten alles mit übergeben werden
-->

[h: uebergabe = macro.args]

[h: chat = json.get(uebergabe, "chat")]
[h: pName = json.get(uebergabe, "Name")]
[h: Wert = json.get(uebergabe, "Wert")]

<!--Hier muss das alte Fenster geschlossen werden.-->
[h: closeDialog("probe")]

[h: subtext = ""]

[h: pruefwurf = json.get(uebergabe, "pruefwurf")]
[h,if(pruefwurf == ""): pruefwurf = 1]
[h: pruefReroll = json.get(uebergabe, "pruefreroll")]
[h,if(pruefreroll == ""): pruefReroll = 0]

[h: kritText = json.get(uebergabe, "kritText")]
[h: kritImage = json.get(uebergabe, "kritImage")]
[h,if(kritImage == ""): kritImage = 9]

[h: gluecklichText = json.get(uebergabe, "gluecklichText")]
[h: gluecklichImage = json.get(uebergabe, "gluecklichImage")]

[h: patzerTabelle = json.get(uebergabe, "patzerTabelle")]
[h: patzerText = json.get(uebergabe, "patzerText")]
[h: patzerImage = json.get(uebergabe, "patzerImage")]
[h,if(patzerImage == ""): patzerImage = 10]

[h: image = json.get(uebergabe, "image")]
[h: modMacro = json.get(uebergabe, "modMacro")]

[h: params = json.set("{}", "patzer19", json.get(uebergabe, "patzer19"), "confirm", pruefwurf, "rerollConfirm", pruefReroll, "modMacro", modMacro, "modMacroParams", uebergabe)]

[h: ergebnis = roll1d20(currentToken(), Wert, 0, params)]
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
[h: output = show1d20(ergebnis)]
[h: imageSrc = tableImage("chat", image)]
[h: output = strformat("
<table style='border-spacing: 0px; margin-top: 3px; font-weight: bold;'>
	<tr>
		<td style='text-align:center; padding: 0px 12px 0px 8px' valign='middle' rowspan=3>
			<img src='%{imageSrc}'>
		</td>
		%{output}
	</tr>
</table>%{subtext}")]

[h: output = border(pName, output)]

[h: sendTo(chat, output)]