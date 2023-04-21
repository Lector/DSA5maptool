[h: uebergabe = macro.args]
[h: idList = getSelected()]
[h,if(idList == ""), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "noTokensSelected"]
	};{}
]
[h,if(uebergabe != "kampfunfaehig"), Code:
	{
		[foreach(id, idList, ""), Code:
			{
				[switchToken(id)]
				[status = getState(uebergabe)]
				[if(status == 1): setState(uebergabe, 0); setState(uebergabe, 1)]
			}
		]
	};
	{
		[foreach(id, idList, ""), Code:
			{
				[switchToken(id)]
				[if(getState("kampfunfaehig") == 1 || getState("kampfunfaehigWunden") == 1): aktKampfunfaehig = 1; aktKampfunfaehig = 0]
				[if(aktKampfunfaehig == 0): setState("kampfunfaehig", 1); setState("kampfunfaehig", 0)]
				[if(aktKampfunfaehig == 0): setState("kampfunfaehigWunden", 1); setState("kampfunfaehigWunden", 0)]
			}
		]
	}
]

[h: ausgabe = "<table style='border-spacing: 0px;' width='100%'><tr><td></td><td width='501'>"]
[h: ausgabe = ausgabe + strformat("
<table style='border-spacing: 0px; margin-top: 3px; color: #441e13; font-size: 12pt; text-align: center;'>
	<tr>
		<td style='text-align:center;' valign='middle' width='70'>
			<img src='%s'>
		</td>
		<td valign='middle'>
			Der Status der markierten Tokens wurde geändert.<br><br>Falls ein eventuell geöffneter Charakterbogen eine Statusanzeige enthält, diesen bitte manuell aktualisieren.
	</tr>
</table>",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/scroll.png"))]
[h: ausgabe = ausgabe + "</td><td></td></tr></table>"]

[h: broadcast(border("Token-Status",ausgabe), "gm")]