[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: actionLink = macroLinkText("iniSetzenProcess@this", "")]
[dialog5("iniSetzen", "width=467; height=325; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Initiative setzen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Initiative setzen")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td style='text-align: center;'>
							Gebe hier den Initiative-Wert ein,
							<br>den du manuell eintragen m&ouml;chtest.
						</td>
					</tr>
				</table>		
				<table style='border-spacing: 0px; margin: 5px auto 0px auto;'>
					<tr>
						<td valign='middle'>
							INI-Wert:
						</td>
						<td>
							<input type="text" name="iniWert" size="5" maxlength="5" value="">
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 7px auto 8px auto;'>
						<td>
							[h: button = tableImage("forms", 76)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]