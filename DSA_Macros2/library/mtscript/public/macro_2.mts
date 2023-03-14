[h: uebergabe = macro.args]
[h: dice = 2d6]
[h,if(uebergabe == "nk"), Code:
	{
		[titleImage = tableImage("chat", 68)]
		[titleText = "Nahkampf-Patzer"]
		[patzerText = table("patzerNahkampf", dice)]
	};
	{
		[titleImage = tableImage("chat", 69)]
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

[h,macro("sendToPublic@Lib:macros"): ausgabe]