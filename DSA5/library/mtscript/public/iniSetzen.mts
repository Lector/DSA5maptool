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
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Initiative setzen")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td style='text-align: center;'>
							Gebe hier den Initiative-Wert ein,
							<br>den du manuell eintragen möchtest.
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
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Initiative setzen</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]