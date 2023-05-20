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

[h: actionLink = macroLinkText("chareditFernkampfwaffeAddProcess@this", "")]
[dialog5("chareditWaffeAdd", "width=425; height=443; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Fernkampfwaffe hinzufügen</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Neue FK-Waffe")]
				<table style='margin: 0px auto 0px auto;' cellpadding='1'>
					<tr>
						<td colspan=2 style='padding-right: 3px;'>
							Name:
						</td>
						<td>
							<input type='text' name='Name' size='14' maxlength='30' value=''>
						</td>
					</tr>
					<tr>
						<td colspan=2 style='padding-right: 3px;'>
							Kampftechnik:
						</td>
						<td>
							<table style='border-spacing: 0px; margin-top: 3px;' cellpadding='1'>
								<tr>
									<td>
										<select name='technik' size='1'>
										<option value=""/>
											[h: baum = getFernkampftechniken()]
											[Foreach(technik, baum,""), CODE:
												{
													<option>[r: json.get(technik, "Name")]</option>					
												}
											]
										</select>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td colspan=2 style='padding-right: 3px;'>
							FK-Mod:
						</td>
						<td>
							<table style='margin-top: 3px;'>
								<tr>
									<td>
										<input type='text' name='fk' size='3' maxlength='3' value=''/>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td colspan=2 style='padding-right: 3px;'>
							Reichweite:
						</td>
						<td>
							<table style='border-spacing: 0px; margin-top: 3px;' cellpadding='1'>
								<tr>
									<td>
										<input type='text' name='rwn' size='3' maxlength='3' value=''/>
									</td>
									<td> / </td>
									<td>
										<input type='text' name='rwm' size='3' maxlength='3' value=''/>
									</td>
									<td> / </td>
									<td>
										<input type='text' name='rwf' size='3' maxlength='3' value=''/>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td colspan=2 style='padding-right: 3px;'>
							Ladezeit:
						</td>
						<td>
							<table style='border-spacing: 0px; margin-top: 3px;' cellpadding='1'>
								<tr>
									<td>
										<input type='text' name='ladezeit' size='2' maxlength='2' value=''>
									</td>
									<td>
										Aktionen
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td colspan=2 style='padding-right: 3px;'>
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
										<input type='text' name='TPMod' size='2' maxlength='2' value=''>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td width=20>
							<input type='checkbox' name='impro'/>
						</td>
						<td colspan=2>
							Improvisierte Waffe
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 11px auto 8px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Waffe hinzufügen</td>
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