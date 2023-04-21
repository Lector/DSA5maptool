[h: selectID = getSelected()]
[h,if(listCount(selectID) != 1), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "gmSelectFail"]
	};{}
]

[h: actionLink = macroLinkText("tokenCopyProcess@this", "")]
[dialog("tokenCopy", "width=425; height=343; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>Token kopieren</title>
	</head>
	<body style='font-size: 12pt;' bgcolor='#ece9d8'>
		<form action="[r:actionLink]">
			<div style="background-image: url('[r: tblImage("forms",54)]'); background-repeat: no-repeat; height: 20; margin: 0px;" width="400">
			</div>
			<div style="background-image: url('[r: tblImage("forms",55)]'); background-repeat: repeat-y; text-align: center; height: 20; margin: 0px;" width="400">
				<div style='padding: 10px 0px 10px 0px;'>
				<table style='border-spacing: 0px;'>
					<tr>
						<td>
							Anzahl der Kopien:
						</td>
						<td>
							<input type='text' name='copyNum' size='2' maxlength='2' value=''>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin-top: 9px;' width='308'>
					<tr>
						<td style='font-weight: bold;' valign='top'>
							Hinweis:
						</td>
						<td>
							Die kopierten Tokens erscheinen gestapelt auf dem zum Kopieren ausgewählten Token.
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 10px 0px 10px 0px;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Token kopieren</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
			</div>
			<div style="background-image: url('[r: tblImage("forms",56)]'); background-repeat: no-repeat; height: 20; margin: 0px;" width="400">
			</div>
			<input type="hidden" name="tokenID" value="[r: selectID]">
		</form>
	</body>
</html>
}]