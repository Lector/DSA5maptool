[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.Macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[dialog5("chareditWaffeDel", "width=425; height=342; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Fernkampfwaffe l&ouml;schen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			[r: header("Waffe löschen")]
			<table style='border-spacing: 4px; margin: 0px auto 10px auto;'>
				<tr>
					<td style='text-align: center; padding-bottom: 5px;'>
						W&auml;hle eine Fernkampfwaffe zum löschen aus:
					</td>
				</tr>
				[h: baum = eval("Fernkampfwaffen")]
				[h: index = 0]
				[Foreach(waffe, baum, ""), CODE:
					{
						<tr>
							<td style='text-align: center;'>
								<span style='color: #441e13; text-decoration: none;'>[r: macroLink(json.get(waffe, "Name"), "chareditFernkampfwaffeDelProcess@this", "", index)]</span>
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