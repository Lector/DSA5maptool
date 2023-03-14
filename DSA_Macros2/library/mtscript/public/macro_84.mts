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

[dialog5("chareditWaffe", "width=425; height=342; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Nahkampfwaffe editieren</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			[r: header("Nahkampfwaffen")]
			<table style='border-spacing: 4px; margin: 0px auto 10px auto;'>
				<tr>
					<td style='text-align: center; padding-bottom: 5px;'>
						W&auml;hle eine Nahkampfwaffe zum Editieren aus:
					</td>
				</tr>
				[h: baum = Nahkampfwaffen]
				[Foreach(waffe, baum,""), CODE:
					{
						<tr>
							<td style='text-align: center;'>
								[h: id = json.get(waffe, "ID")]
								<span style='color: #441e13; text-decoration: none;'>[r: macroLink(json.get(waffe, "Name"), "quickeditNahkampfwaffe@Lib:macros2", "", id)]</span>
							</td>
						</tr>
					}
				]
			</table>
		</div>
	</body>
</html>
}]