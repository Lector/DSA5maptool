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

[h: ausgabeSL = strformat("
<table style='border-spacing: 0px; margin: 0px; padding: 0px;' cellpadding = '0' cellspacing = '0'>
	<tr>
		<td style='text-align: center; font-size: 11pt; font-weight: bold; color: #000000;' valign='top' width='100'>
			<img src='%s'>
			<br><img src='%s'>
			<br>%s
			<br><img src='%s'>
			<br><img src='%s' alt='Sichtbarkeit'> <span style='font-weight: normal;'>&nbsp;SL</span>
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

[h: meldung = strformat("
<div style='background-image: url(%s); background-repeat: no-repeat; color: #441e13; font-size: 12pt; font-weight: bold; text-align: center; margin: 0px; height: 77;' width='440'>
	<table style='border-spacing: 0px; margin-top: 36px;'>
		<tr>
			<td>
				Verdeckter Wurf
			</td>
		</tr>
	</table>
</div>
<div style='background-image: url(%s); background-repeat: repeat-y; color: #441e13; font-size: 12pt; text-align: center; margin: 0px;' width='440'>
	<table style='border-spacing: 0px; margin-top: 3px;'>
		<tr>
			<td width='18'>
				&nbsp;
			</td>
			<td style='text-align:center;' valign='middle' width='70'>
				<img src='%s'>
			</td>
			<td valign='middle'>
				Du hast eine verdeckte Probe für den Spielleiter gewürfelt.
			<td width='15'>
				&nbsp;
			</td>
			<td width='18'>
				&nbsp;
			</td>
		</tr>
	</table>
</div>
<div style='background-image: url(%s); background-repeat: no-repeat; color: #441e13; font-size: 12pt; font-weight: bold; margin: 0px; height: 19;' width='440'>
</div>
", data.getStaticData("com.github.lector.dsa5maptools", "/public/images/chat/probeKrautTitle.png"), data.getStaticData("com.github.lector.dsa5maptools", "/public/images/chat/probeJagdTitle.png"), tableImage("chat", 57), data.getStaticData("com.github.lector.dsa5maptools", "/public/images/chat/probeAngelnTitle.png"))] 

[h: ausgabeSelf = strformat("
<table style='border-spacing: 0px; margin: 0px; padding: 0px;' cellpadding = '0' cellspacing = '0'>
	<tr>
		<td style='text-align: center; font-size: 11pt; font-weight: bold; color: #000000;' valign='top' width='100'>
			<img src='%s'>
			<br><img src='%s'>
			<br>%s
			<br><img src='%s'>
		</td>
		<td width='10'>
			&nbsp;
		</td>
		<td style='font-size: 12pt;' valign='middle'>
			%s
		</td>
	</tr>
</table>
", tableImage("chat", 54), tokenImage, tokenName, tableImage("chat", 55), meldung)]

[h: broadcast(ausgabeSL, "gm")]
[h,if(isGM()), Code:
	{};
	{
		[h: broadcast(ausgabeSelf, playerName)]
	}
]