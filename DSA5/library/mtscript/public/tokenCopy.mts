[h: selectID = getSelected()]
[h,if(listCount(selectID) != 1), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "gmSelectFail"]
	};{}
]

[h: actionLink = macroLinkText("tokenCopyProcess@this", "")]
[dialog5("tokenCopy", "width=425; height=300; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Token kopieren</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				<table style='border-spacing: 0px; margin: 20px auto 0px auto;'>
					<tr>
						<td>
							Anzahl der Kopien:
						</td>
						<td>
							<input type='text' name='copyNum' size='2' maxlength='2' value=''>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px;  margin: 9px auto 0px auto;' width='308'>
					<tr>
						<td style='font-weight: bold;' valign='top'>
							Hinweis:
						</td>
						<td>
							Die kopierten Tokens erscheinen gestapelt auf dem zum Kopieren ausgewählten Token.
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 10px auto 10px auto;'>
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
				<input type="hidden" name="tokenID" value="[r: selectID]">
			</form>
		</div>
	</body>
</html>
}]