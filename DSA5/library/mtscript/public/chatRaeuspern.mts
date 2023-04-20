[h,if(hasImpersonated()), Code:
	{
		[tokenImage = getTokenImage(40)]
		[tokenName = getImpersonatedName()]
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
		<td style='color: #0b2369;' valign='middle'>
			<b>%s</b> räuspert sich und möchte etwas sagen.
		</td>
	</tr>
</table>
", tokenImage, data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/chatHarrumph.png"), tokenName)]

[h: broadcast(ausgabe)]