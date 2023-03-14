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
[h: uebergabe = macro.args]
[h: typ = getStrProp(uebergabe, "typ")]
[h: id = getStrProp(uebergabe, "id")]

[h,if(isNPC() == 1 && getLibProperty("OptHideNSCAction", "this") == 1), Code:
	{
		[ausgabeSL = "checked='checked'"]
		[ausgabePublic = ""]
	};
	{
		[ausgabeSL = ""]
		[ausgabePublic = "checked='checked'"]
	}
]

[h,if(typ == "nk"): height = 422; height = 480]

[h: actionLink = macroLinkText("schadenWaffeProcess@this", "")]
[dialog5("schadenWaffe", "width=568; height=" + height + "; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Waffenschaden verursachen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Waffenschaden")]
				[r,if(typ == "nk"),Code:
				{
					[h: waffe = resolveNK(getNahkampfwaffe(id))]
				};
				{
					[h: waffe = resolveFK(getFernkampfwaffe(id))]
				}]
				[h: wName = json.get(waffe, "Name")]
				[h: tp = json.get(waffe, "TP")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td style='text-align: center; font-size: 14pt; font-weight: bold; color: #482902; border-top: 1px solid #7b5547; border-bottom: 1px solid #7b5547; margin-bottom: 5px;' width='350'>
							[r: wName]
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; font-size: 12pt; padding: 5px; margin: 0px auto 0px auto;'>
					<tr>
						<td valign='middle'>
							<table style='border-spacing: 0px;'>
								<tr>
									[r,macro("probeSchadenMod@this"): ""]
								</tr>
							</table>
						</td>
						<td width='10'>
							&nbsp;
						</td>
						<td valign='middle'>
							[h: button = tableImage("forms", 46)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@this"): currentToken()]
				<hr/>
				<table style='border-spacing: 0px; margin: 0px auto 5px auto;'>
					<tr>
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td valign='top'>
										<div class="label">
											Schadensart
										</div>
									</td>
									<td>
										<table style='border-spacing: 0px;' cellpadding='1'>
											<tr>
												<td>
													<input type='radio' name='schadenArt' value='TP' checked='checked'>
												</td>
												<td>
													Trefferpunkte (TP)
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='schadenArt' value='SP'>
												</td>
												<td>
													Schadenspunkte (SP)
												</td>
											</tr>
											<tr>
												<td>
													<input type='checkbox' name='kritisch' value='1'>
												</td>
												<td>
													Kritischer Treffer
												</td>
											</tr>
										</table>
									</td>
								[r,if(typ=="fk"),Code:
								{
									<td valign='top'>
										<div class="label">
											Entfernung
										</div>
									</td>
									<td valign='top'>
										<table style='border-spacing: 0px;' cellpadding='1'>
											<tr>
												<td>
													<input type='radio' name='entfernungschaden' value='1'>
												</td>
												<td style='padding-left: 3px;'>
													0 - [r: json.get(waffe, "RW1")] Schritt (+1 TP)
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='entfernungschaden' value='0' checked='checked'>
												</td>
												<td style='padding-left: 3px;'>
													[r: json.get(waffe, "RW1")+1] - [r: json.get(waffe, "RW2")] Schritt
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='entfernungschaden' value='-1'>
												</td>
												<td style='padding-left: 3px;'>
													[r: json.get(waffe, "RW2")+1] - [r: json.get(waffe, "RW3")] Schritt (-1 TP)
												</td>
											</tr>
										</table>
									</td>
								</tr>
								};
								{
									<input type="hidden" name="entfernung" value="0"/>
								}]
							</table>
						</td>
					</tr>
				</table>
				<input type="hidden" name="name" value="Schaden mit [r: wName]"/>
				<input type="hidden" name="tp" value="[r: tp]"/>
				<input type="hidden" name="typ" value="[r: typ]"/>
				<input type="hidden" name="weapon" value="[r: encode(waffe)]"/>
			</form>
		</div>
	</body>
</html>
}]