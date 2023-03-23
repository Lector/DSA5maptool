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

[h: actionLink = macroLinkText("probeUniProcess@this", "")]
[dialog5("probe", "width=507; height=448; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Universelle Fertigkeitsprobe würfeln</title>
		<link rel='stylesheet' type='text/css' href='lib://this/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Universelle Probe")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td>
							<table style='border-spacing: 0px; font-size: 12pt;'>
								<tr>
									<td>
										Name:
									</td>
									<td>
										<input type="text" name="Name" size="18" maxlength="30" value="Universelle 3W20-Probe">
									</td>
								</tr>
								<tr>
									<td>
										Erschwernis:
									</td>
									<td>
										<input type="text" name="malus" size="3" maxlength="3" value="">
									</td>
								</tr>
								<tr>
									<td>
										Erleichterung:
									</td>
									<td>
										<input type="text" name="bonus" size="3" maxlength="3" value="">
									</td>
								</tr>
								<tr>
									<td>
										Werte:
									</td>
									<td style='padding-left: 0px;'>
										<table style='border-spacing: 0px;'>
											<tr>
												<td>
													<select name='E1' size='1'>
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
												<td>
													/
												</td>
												<td>
													<select name='E2' size='1'>
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
												<td>
													/
												</td>
												<td>
													<select name='E3' size='1'>
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
										Fertigkeitswert:
									</td>
									<td>
										<input type="text" name="Wert" size="3" maxlength="3" value="">
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 5px auto 7px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 11)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@this"): currentToken()]
				<input type="hidden" name="image" value="3"/>
				<input type="hidden" name="modMacro" value="probe3w20Mods@this"/>
		</form>
	</body>
</html>
}]