[h: idList = getSelected()]
[h,if(idList == ""), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos.Macros"): "noTokensSelected"]
	};{}
]

[h: actionLink = macroLinkText("tokensizeProcess@this", "")]
[dialog5("tokensize", "width=500; height=500; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Tokengr&ouml;&szlig;e &auml;ndern</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Tokengröße")]
				<div style='padding: 0px 55px 0px 55px;'>
					Bitte w&auml;hle eine Gr&ouml;&szlig;e aus, in der die aktuell markierten Tokens dargestellt werden sollen.
				</div>
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td valign='middle'>
							<input type='radio' name='tokenSize' value='1'>
						</td>
						<td>
							Winzig
						</td>
					</tr>
					<tr>
						<td valign='middle'>
							<input type='radio' name='tokenSize' value='2'>
						</td>
						<td>
							Klein
						</td>
					</tr>
					<tr>
						<td valign='middle'>
							<input type='radio' name='tokenSize' value='3' checked='checked'>
						</td>
						<td>
							Medium (Standard)
						</td>
					</tr>
					<tr>
						<td valign='middle'>
							<input type='radio' name='tokenSize' value='4'>
						</td>
						<td>
							Gro&szlig;
						</td>
					</tr>
					<tr>
						<td valign='middle'>
							<input type='radio' name='tokenSize' value='5'>
						</td>
						<td>
							Riesig
						</td>
					</tr>
					<tr>
						<td valign='middle'>
							<input type='radio' name='tokenSize' value='6'>
						</td>
						<td>
							Gigantisch
						</td>
					</tr>
					<tr>
						<td valign='middle'>
							<input type='radio' name='tokenSize' value='7'>
						</td>
						<td>
							Kolossal
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 9px auto 8px auto;'>
						<td>
							[h: button = strformat("<img src='%s'>",tableImage("forms", 112))]
							<button type="submit" name="action">
								[r: button]
							</button>
						</td>
					</tr>
				</table>
			<input type="hidden" name="tokenList" value="[r: idList]">
			</form>
		</div>
	</body>
</html>
}]