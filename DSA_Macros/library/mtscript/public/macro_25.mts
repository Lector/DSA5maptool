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
		[gmImage = tableImage("chat", 65)]
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
				[tokenImage = tableImage("chat", 66)]
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
			<br><img src='%s' alt='Sichtbarkeit'> <span style='font-weight: normal;'>&nbsp;Privat</span>
		</td>
		<td width='10'>
			&nbsp;
		</td>
		<td valign='top'>
			%s
		</td>
	</tr>
</table>
", tableImage("chat", 54), tokenImage, tokenName, tableImage("chat", 55), tableImage("chat", 56), uebergabe)]

[h: broadcast(ausgabe, playerName)]