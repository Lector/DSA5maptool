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

[wID = macro.args]

[h: wert = INI]
[h: modWert = getINI(currentToken())]

[h: wuerfel = 1]

[h: actionLink = macroLinkText("probeINIProcess@this", "")]
[dialog5("probeINI", "width=587; height=360; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Initiative würfeln</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Initiative")]		
				<table style='border-spacing: 0px; padding: 5px; margin: 0px auto 0px auto;'>
					<tr>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td>
										Bonus:
									</td>
									<td>
										<input type="text" name="bonus" size="3" maxlength="2" value="">
									</td>
								</tr>
								<tr>
									<td>
										Malus:
									</td>
									<td>
										<input type="text" name="malus" size="3" maxlength="2" value="">
									</td>
								</tr>
							</table>
						</td>
						<td width='10px'>
							&nbsp;
						</td>
						<td>
							[h: button = tableImage("forms", 74)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 14px 0px 6px 0px; font-size: 1pt;' width='481'>
					<tr>
						<td style='border-top: 1px solid #7b5547;'>
							&nbsp;
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 0px auto 6px auto;'>
					<tr>
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td style='font-weight: bold; border-right: 1px solid #939393; padding-right: 5px;'>
										Initiative
									</td>
								</tr>
							</table>
						</td>
						<td valign='top'>	
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										Grundwert:
									</td>
									<td style='text-align: right;'>
										[r: wert]
									</td>
								</tr>
								<tr>
									<td>
										Modifizierter Wert:
									</td>
									<td style='text-align: right;'>
										[r: modWert]
									</td>
								</tr>
								<tr>
									<td>
										W6-Anzahl:
									</td>
									<td style='text-align: right;'>
										[r: wuerfel]
									</td>
								</tr>
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]