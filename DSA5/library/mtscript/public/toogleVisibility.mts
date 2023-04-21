[h: idList = getSelected()]
[h,if(idList == ""), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "noTokensSelected"]
	};
	{
		[foreach(id, idList, ""), Code:
			{
				[if(getVisible(id) == 1): tokenVisibility = 0; tokenVisibility = 1]
				[setVisible(tokenVisibility, id)]
			}
		]
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
				Die Sichtbarkeit der markierten Tokens wurde geändert.
			<td width='15'>
				&nbsp;
			</td>
			<td width='18'>
				&nbsp;
			</td>
		</tr>
	</table>",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/scroll.png"))]
[h: ausgabe = ausgabe + "</td><td></td></tr></table>"]

[h: ausgabe = border("Token-Sichtbarkeit für Spieler", ausgabe)]

[h: broadcast(ausgabe, "gm")]