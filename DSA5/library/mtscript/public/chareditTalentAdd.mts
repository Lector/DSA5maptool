[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: actionLink = macroLinkText("chareditTalentAddProcess@this", "")]
[dialog5("chareditTalentAdd", "width=425; height=375; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Fertigkeit hinzufügen</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Neue Fertigkeit")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td>
							Gruppe:
						</td>
						<td>
							<select name='fTalentart' size='1'>
								<option value="Koerper">Körper</option>
								<option>Gesellschaft</option>
								<option>Natur</option>
								<option>Wissen</option>
								<option>Handwerk</option>
								<option>Kampf</option>
								<!--<option>Gaben</option>-->
							</select>
						</td>
					</tr>
					<tr>
						<td>
							Fertigkeitsname:
						</td>
						<td>
							<input type='text' name='fTalentname' size='20' maxlength='40' value=''>
						</td>
					</tr>
					<tr>
						<td>
							Fertigkeitswert:
						</td>
						<td>
							<input type='text' name='fTalentwert' size='3' maxlength='2' value=''>
						</td>
					</tr>
					<tr>
						<td>
							Fertigkeitsprobe:
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
				</table>
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Fertigkeit hinzufügen</td>
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