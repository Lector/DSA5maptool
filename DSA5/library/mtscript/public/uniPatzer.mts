[h: uebergabe = macro.args]
[h: dice = 2d6]
[h,if(uebergabe == "nk"), Code:
	{
		[titleImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/botchMelee.png")]
		[titleText = "Nahkampf-Patzer"]
		[patzerText = table("patzerNahkampf", dice)]
	};
	{
		[titleImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/botchRanged.png")]
		[titleText = "Fernkampf-Patzer"]
		[patzerText = table("patzerFernkampf", dice)]
	}
]

[h: ausgabe = border(titleText, strformat("
<table style='border-spacing: 0px; margin-top: 3px;'>
	<tr>
		<td style='text-align: center; padding: 0px;' valign='middle' width='80'>
			<img src='%s'>
		</td>
		<td valign='middle'>
			%s
		</td>
	</tr>
</table>
", titleImage, patzerText))]

[h: sendTo("Public", ausgabe)]