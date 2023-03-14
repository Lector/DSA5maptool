[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos.Macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: typ = arg(0)]

[h,switch(typ),Code:

	case "Zauber": {
		[title = "Zauber"]
		[header = "Neuer Zauber"]
	};
	case "Rituale": {
		[title = "Ritual"]
		[header = "Neues Ritual"]
	};
	case "MagischeHandlungen": {
		[title = MagischeHandlungenSingular]
		[header = "Neue M.Handlung"]
	}
]

[h: actionLink = macroLinkText("chareditMagieAddProcess@this", "")]
[dialog5("chareditMagieAdd", "width=425; height=374; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r:title] hinzuf&uuml;gen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header(header)]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td>
							Name:
						</td>
						<td>
							<input type='text' name='fZaubername' size='10' maxlength='40' value=''>
						</td>
					</tr>
					<tr>
						<td>
							FW:
						</td>
						<td>
							<input type='text' name='fZfW' size='3' maxlength='2' value=''>
						</td>
					</tr>
					<tr>
						<td>
							Probe:
						</td>
						<td>
							<table style='border-spacing: 0px;' cellpadding='0'>
								<tr>
									<td>
										<select name='e1' size='1'>
											<option>MU</option>
											<option>KL</option>
											<option>IN</option>
											<option>CH</option>
											<option>FF</option>
											<option>GE</option>
											<option>KO</option>
											<option>KK</option>
										</select>
									</td>
									<td style='padding: 0px 3px 0px 3px;'>
										/
									</td>
									<td>
										<select name='e2' size='1'>
											<option>MU</option>
											<option>KL</option>
											<option>IN</option>
											<option>CH</option>
											<option>FF</option>
											<option>GE</option>
											<option>KO</option>
											<option>KK</option>
										</select>
									</td>
									<td style='padding: 0px 3px 0px 3px;'>
										/
									</td>
									<td>
										<select name='e3' size='1'>
											<option>MU</option>
											<option>KL</option>
											<option>IN</option>
											<option>CH</option>
											<option>FF</option>
											<option>GE</option>
											<option>KO</option>
											<option>KK</option>
										</select>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td>
							Merkmal:
						</td>
						<td>
							<select name='merkmal' size='1'>
								<option>&nbsp;</option>
								[Foreach(m, merkmale(), ""),Code:
								{
									<option>[r: m]</option>
								}]
							</select>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 10px auto 10px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 112)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				<input type="hidden" name="typ" value="[r:typ]"/>
			</form>
		</div>
	</body>
</html>
}]