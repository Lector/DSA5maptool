[h: uebergabe = arg(0)]

[h: playerName = getPlayerName()]

[h: selectID = getSelected()]
[h,if(isGM() == 1 && hasImpersonated() == 0 && listCount(selectID) == 1), Code:
	{
		[switchToken(selectID)]
		[gmImage = getTokenImage(50)]
		[gmName = getName()]
	};
	{
		[gmImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/gm.png")]
		[gmName = "Spielleiter"]
	}
]

[h,if(hasImpersonated()), Code:
	{
		[tokenImage = getTokenImage(50)]
		[tokenName = getImpersonatedName()]
	};
	{
		[if(isGM()), Code:
			{
				[tokenImage = gmImage]
				[tokenName = gmName]
			};
			{
				[tokenImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/guest.png")]
				[tokenName = playerName]
			}
		]
	}
]

[h,if(json.length(macro.args) > 1),Code:
{
	[h,if(arg(1) != ""),Code:
	{
		[switchToken(arg(1))]
		[tokenImage = getTokenImage(50)]
		[tokenName = getName()]
	}]
};{}]

[h: ausgabe = strformat("
<table style='border-spacing: 0px; margin: 0px; padding: 0px;' cellpadding = '0' cellspacing = '0'>
	<tr>
		<td style='text-align: center; font-size: 11pt; font-weight: bold; color: #000000;' valign='top' width='100'>
			<img src='%s'>
			<br><img src='%s'>
			<br>%s
			<br><img src='%s'>
			<br><img src='%s' alt='Sichtbarkeit'> <span style='font-weight: normal;'>&nbsp;SL &amp; Privat</span>
		</td>
		<td width='10'>
			&nbsp;
		</td>
		<td valign='top'>
			%s
		</td>
	</tr>
</table>
",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/ornamentTop.png"),
tokenImage, tokenName,
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/ornamentBottom.png"),
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/visibility.png"), uebergabe)]

[h: broadcast(ausgabe, "gm")]
[h,if(isGM()), Code:
	{};
	{
		[h: broadcast(ausgabe, playerName)]
	}
]