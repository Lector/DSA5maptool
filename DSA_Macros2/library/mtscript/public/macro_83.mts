[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[dialog5("chareditWaffeDel", "width=425; height=342; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Nahkampfwaffe l&ouml;schen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			[r: header("Waffe löschen")]
			<table style='border-spacing: 0px; margin: 0px auto 10px auto;'>
				<tr>
					<td style='text-align: center; padding-bottom: 5px;'>
						W&auml;hle eine Nahkampfwaffe zum löschen aus:
					</td>
				</tr>
				[h: baum = json.remove(Nahkampfwaffen, 0)]
				[h: index = 1]
				[Foreach(waffe, baum, ""), CODE:
					{
						<tr>
							<td style='text-align: center;'>
								<span style='color: #441e13; text-decoration: none;'>[r: macroLink(json.get(waffe, "Name"), "chareditNahkampfwaffeDelProcess@Lib:macros2", "", index)]</span>
								[h: index = index + 1]
							</td>
						</tr>
					}
				]
			</table>
		</div>
	</body>
</html>
}]