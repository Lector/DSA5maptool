[h: selectID = getSelected()]
[h,if(listCount(selectID) != 1), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "gmSelectFail"]
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
				<p>Image forms:136</p>
					<image src='[r: tableImage("forms", 136)]'></image>
				</div>
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
							Die kopierten Tokens erscheinen gestapelt auf dem zum Kopieren ausgew&auml;hlten Token.
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 10px 0px 10px 0px;'>
					<tr>
						<td>
							[h: button = strformat("<html><img src='%s'></html>",tableImage("forms", 137))]
							<input type="submit" name="action" value="[r: button]">
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