[h,if(hasImpersonated()), Code:
	{
		[setState("AFK", 1)]
		[tokenImage = getTokenImage(40)]
		[tokenName = getPlayerName()]
	};
	{
		[if(isGM()), Code:
			{
				[tokenImage = tableImage("chat", 65)]
				[tokenName = "Der Spielleiter"]
			};
			{
				[tokenImage = tableImage("chat", 66)]
				[tokenName = getPlayerName()]
			}
		]
	}
]

[h: ausgabe = strformat("
<table style='border-spacing: 0px; margin: 0px; padding: 0px; color: #000000;' cellpadding ='0' cellspacing ='0'>
	<tr>
		<td valign='top'>
			<img src='%s'>
		</td>
		<td width='5'>
			&nbsp;
		</td>
		<td valign='top'>
			<img src='%s'>
		</td>
		<td style='font-size: 20pt; font-weight: bold; color: #a42b1e;' valign='middle'>
			AFK
		</td>
		<td style='padding-left: 10px;' valign='middle'>
			<b>%s</b> ist jetzt nicht an der Tastatur.
		</td>
	</tr>
</table>
", tokenImage, tableImage("chat", 75), tokenName)]

[h: broadcast(ausgabe)]