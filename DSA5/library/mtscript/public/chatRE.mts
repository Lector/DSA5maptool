[h,if(hasImpersonated()), Code:
	{
		[setState("AFK", 0)]
		[tokenImage = getTokenImage(40)]
		[tokenName = getPlayerName()]
	};
	{
		[if(isGM()), Code:
			{
				[tokenImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/gm.png")]
				[tokenName = "Der Spielleiter"]
			};
			{
				[tokenImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/guest.png")]
				[tokenName = getPlayerName()]
			}
		]
	}
]
[h: sprechblase = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/chatAFK.png")]

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
		<td style='font-size: 20pt; font-weight: bold; color: #1d5c2f;' valign='middle'>
			RE
		</td>
		<td style='padding-left: 10px;' valign='middle'>
			<b>%s</b> ist wieder da.
		</td>
	</tr>
</table>
", tokenImage, sprechblase, tokenName)]

[h: broadcast(ausgabe)]