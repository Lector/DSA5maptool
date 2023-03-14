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

[dialog5("chareditRSDel", "width=425; height=342; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>R&uuml;stung l&ouml;schen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			[r: header("Rüstung löschen")]
			<table style='border-spacing: 4px; margin: 0px auto 10px; auto'>
				<tr>
					<td style='text-align: center; padding-bottom: 5px;'>
						W&auml;hle eine R&uuml;stung zum löschen aus:
					</td>
				</tr>
				[h: baum = json.remove(Ruestungen, 0)]
				[h: index = 1]
				[Foreach(rs, baum, ""), CODE:
					{
							<tr>
								<td style='text-align: center;'>
									<span style='color: #441e13; text-decoration: none;'>[r: macroLink(json.get(rs, "Name"), "chareditRSDelProcess@this", "", index)]</span>
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