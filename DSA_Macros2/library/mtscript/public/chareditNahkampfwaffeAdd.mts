[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: actionLink = macroLinkText("chareditNahkampfwaffeAddProcess@this", "")]
[dialog5("chareditWaffeAdd", "width=425; height=532; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Nahkampfwaffe hinzuf&uuml;gen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Neue NK-Waffe")]
				<table style='margin: 0px auto 0px auto;'>
					<tr>
						<td>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td style='padding-right: 3px;'>
										Name:
									</td>
									<td>
										<input type='text' name='Name' size='14' maxlength='30' value=''>
									</td>
								</tr>
								<tr>
									<td style='padding-right: 3px;'>
										Kampftechnik:
									</td>
									<td>
										<table style='border-spacing: 0px; margin-top: 3px;' cellpadding='1'>
											<tr>
												<td>
													<select name='technik' size='1'>
														<option value=""/>
														[h: baum = getNahkampftechniken()]
														[Foreach(technik, baum, ""), CODE:
														{
															<option>[r: json.get(technik, "Name")]</option>
														}]
													</select>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td style='padding-right: 3px;'>
										Reichweite:
									</td>
									<td>
										<table style='border-spacing: 0px; margin-top: 3px;' cellpadding='1'>
											<tr>
												<td>
													<select name='rw' size='1'>
														<option value='1'>Kurz</option>
														<option value='2' selected='selected'>Mittel</option>
														<option value='3'>Lang</option>
														<option value='4'>&Uuml;berlang</option>
													</select>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td style='padding-right: 3px;'>
										AT-/PA-Mod:
									</td>
									<td>
										<table style='border-spacing: 0px; margin-top: 3px;' cellpadding='1'>
											<tr>
												<td>
													<input type='text' name='atmod' size='2' maxlength='2' value=''>
													<input type='text' name='pamod' size='2' maxlength='2' value=''>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td style='padding-right: 3px;'>
										Trefferpunkte:
									</td>
									<td>
										<table style='border-spacing: 0px; margin-top: 3px;' cellpadding='1'>
											<tr>
												<td>
													<input type='text' name='TPwAnzahl' size='1' maxlength='1' value='1'>
												</td>
												<td>
													<span style="font-size:12pt">W</span>
												</td>
												<td>
													<input type='text' name='TPwAugenzahl' size='1' maxlength='1' value='6'>
												</td>
												<td>
													<select name='TPmodtyp' size='1'>
														<option selected='selected'>+</option>
														<option>-</option>
													</select>
												</td>
												<td>
													<input type='text' name='TPMod' size='2' maxlength='2' value=''/>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td style='padding-right: 3px;'>
										L+S:
									</td>
									<td>
										<table style='border-spacing: 0px; margin-top: 3px;' cellpadding='1'>
											<tr>
												<td>
													<select name='l1' size='1'>
														<option value="" selected='selected'/>
														<option>FF</option>
														<option>GE</option>
														<option>KK</option>
													</select>
													<input type='text' name='s1' size='2' maxlength='2' value=''/>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td style='padding-right: 3px;'>
										&nbsp;
									</td>
									<td>
										<table style='border-spacing: 0px; margin-top: 3px;' cellpadding='1'>
											<tr>
												<td>
													<select name='l2' size='1'>
														<option selected='selected' value=''/>
														<option>FF</option>
														<option>GE</option>
														<option>KK</option>
													</select>
													<input type='text' name='s2' size='2' maxlength='2' value=''/>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<input type='checkbox' name='zweihand'/>
									</td>
									<td>
										Zweih&auml;ndige Waffe
									</td>
								</tr>
								<tr>
									<td>
										<input type='checkbox' name='impro'/>
									</td>
									<td>
										Improvisierte Waffe
									</td>
								</tr>
								<tr>
									<td>
										<input type='checkbox' name='parierwaffe' value='1'>
									</td>
									<td>
										Parierwaffe
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
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]