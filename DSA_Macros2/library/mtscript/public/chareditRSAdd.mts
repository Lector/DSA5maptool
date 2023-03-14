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

[h: actionLink = macroLinkText("chareditRSAddProcess@this", "")]
[dialog5("chareditRSAdd", "width=467; height=355; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>R&uuml;stung hinzuf&uuml;gen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Neue Rüstung")]
				<table style='border-spacing: 0px;  margin: 3px auto 0px auto;' cellpadding='1'>
					<tr>
						<td style='padding-right: 3px;'>
							Name:
						</td>
						<td>
							<input type='text' name='rsname' value=''>
						</td>
					</tr>
					<tr>
						<td style='padding-right: 3px;'>
							RS:
						</td>
						<td>
							<input type='text' name='rsgesamt' size='2' maxlength='2' value=''>
						</td>
					</tr>
				</table>
				<br>
				<table style='margin: 3px auto 0px auto;'>
					<tr>
						<td style='padding-right: 3px;'>
							Belastung:
						</td>
						<td>
							<select name='be' size='1'>
								<option selected="selected">0</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
							</select>
						</td>
						<td >
							&nbsp;
						</td>
						<td style='padding-right: 3px;'>
							<input type='checkbox' name='beini' />
						</td>
						<td>
							-1 INI
						</td>
						<td >
							&nbsp;
						</td>
						<td style='padding-right: 3px;'>
							<input type='checkbox' name='begs' />
						</td>
						<td>
							-1 GS
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 11px auto 8px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 101)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				<input type="hidden" name="typ" value="gesamt"/>
			</form>
		</div>
	</body>
</html>
}]