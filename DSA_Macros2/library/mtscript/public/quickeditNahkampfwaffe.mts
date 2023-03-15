[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h,if(isDialogVisible("chareditWaffe") == 1), Code:
	{
		[closeDialog("chareditWaffe")]
	};{}
]

[h: id = macro.args]

[h: waffe = ""]
[h: baum = eval("Nahkampfwaffen")]
[Foreach(wa, baum,""), CODE:
	{
		[if(json.get(wa, "ID") == id), Code:
			{
				[waffe = wa]
			}; {}
		]
	}
]

[h: tp = json.get(waffe, "TP")]
[h,if(tp == 0), Code:
{
	[h: tpwAnzahl = 0]
	[h: tpwAugenzahl = 0]
	[h: tpwMod = 0]
	[h: tpwModTyp = "+"]
};
{
	[h: tpwAnzahl = substring(tp, 0, 1)]
	[h: tpwAugenzahl = substring(tp, 2, 3)]
	[h: plusminus = max(indexof(tp, "+"), indexof(tp, "-"))]
	[if(plusminus != -1),Code:
	{
		[h: tpwMod = substring(tp, plusminus + 1)]
		[h: tpwModTyp = substring(tp, plusminus, plusminus + 1)]
	};{
		[h: tpwMod = 0]
		[h: tpwModTyp = "+"]
	}]
}]
[h,if(tpwModTyp == "+"), Code:
	{
		[plusActive = "selected='selected'"]
		[minusActive = ""]
	};
	{
		[plusActive = ""]
		[minusActive = "selected='selected'"]
	}
]
[h: wRW = json.get(waffe, "RW")]
[h: RWKurzAktiv = ""]
[h: RWMittelAktiv = ""]
[h: RWLangAktiv = ""]
[h: RWUeberlangAktiv = ""]

[h,switch(wRW):
	case "1": RWKurzAktiv = "selected='selected'";
	case "2": RWMittelAktiv = "selected='selected'";
	case "3": RWLangAktiv = "selected='selected'";
	case "4": RWUeberlangAktiv = "selected='selected'";
	default: RWMittelAktiv = "selected='selected'"
]

[h: ls = json.get(waffe, "LS")]
[h: l1ff = ""]
[h: l1ge = ""]
[h: l1kk = ""]
[h: l1leer = "selected='selected'"]
[h: s1 = ""]
[h,if(json.length(ls) > 0),Code:
{
	[h: ls1 = json.get(ls, 0)]
	[h: l1 = json.get(ls1, "L")]
	[h: s1 = json.get(ls1, "S")]
	[h: l1leer = ""]
	[h,switch(l1):
		case "FF": l1ff = "selected='selected'";
		case "GE": l1ge = "selected='selected'";
		case "KK": l1kk = "selected='selected'";
		default: l1leer = "selected='selected'"
	]
	};{}
]

[h: l2ff = ""]
[h: l2ge = ""]
[h: l2kk = ""]
[h: l2leer = "selected='selected'"]
[h: s2 = ""]
[h,if(json.length(ls) > 1),Code:
	{
		[h: ls2 = json.get(ls, 1)]
		[h: l2 = json.get(ls2, "L")]
		[h: s2 = json.get(ls2, "S")]
		[h: l2leer = ""]
		[h,switch(l2):
			case "FF": l2ff = "selected='selected'";
			case "GE": l2ge = "selected='selected'";
			case "KK": l2kk = "selected='selected'";
			default: l2leer = "selected='selected'"
		]
	};
	{}]

[h, if(json.get(waffe, "Parierwaffe") == 0), Code:
	{
		[parierwaffe = ""]
	};
	{
		[parierwaffe = json.get(waffe, "Parierwaffe")]
	}
]

[h: actionLink = macroLinkText("quickeditNahkampfwaffeProcess@this", "")]
[dialog5("quickeditWaffe", "width=425; height=540; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Nahkampfwaffe anpassen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Waffe ändern")]
				<table style='margin: 0px auto 0px auto;'>
					<tr>
						<td>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td style='padding-right: 3px;'>
										Name:
									</td>
									<td>
										<input type='text' name='Name' size='14' maxlength='30' value='[r: json.get(waffe, "Name")]'>
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
														[h,if(json.get(waffe, "Technik") == ""),Code:
														{
															[selected="selected='selected'"]
														};
														{
															[selected=""]
														}]
														<option value="" [r:selected]/>
														[h: baum = eval("Kampftechniken")]
														[Foreach(technik, baum,""), CODE:
														{
															[h, if(json.get(technik, "Name") == json.get(waffe, "Technik")), Code:
															{
																[selected = "selected='selected'"]
															};
															{
																[selected = ""]
															}]
															<option [r:selected]>[r: json.get(technik, "Name")]</option>	
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
														<option value='1' [r: RWKurzAktiv]>Kurz</option>
														<option value='2' [r: RWMittelAktiv]>Mittel</option>
														<option value='3' [r: RWLangAktiv]>Lang</option>
														<option value='4' [r: RWUeberlangAktiv]>&Uuml;berlang</option>
													</select>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td style='padding-right: 3px;'>
										AT/PA-Mod:
									</td>
									<td>
										<table style='border-spacing: 0px; margin-top: 3px;' cellpadding='1'>
											<tr>
												<td>
													<input type='text' name='atmod' size='2' maxlength='2' value='[r: json.get(waffe, "AT")]'>
													<input type='text' name='pamod' size='2' maxlength='2' value='[r: json.get(waffe, "PA")]'>
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
													<input type='text' name='TPwAnzahl' size='1' maxlength='1' value='[r: tpwAnzahl]'>
												</td>
												<td>
													<span style="font-size:12pt">W</span>
												</td>
												<td>
													<input type='text' name='TPwAugenzahl' size='1' maxlength='1' value='[r: tpwAugenzahl]'>
												</td>
												<td>
													<select name='TPmodtyp' size='1'>
														<option [r: plusActive]>+</option>
														<option [r: minusActive]>-</option>
													</select>
												</td>
												<td>
													<input type='text' name='TPMod' size='2' maxlength='2' value='[r: tpwMod]'>
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
														<option [r:l1leer] value=""/>
														<option [r:l1ff]>FF</option>
														<option [r:l1ge]>GE</option>
														<option [r:l1kk]>KK</option>
													</select>
													<input type='text' name='s1' size='2' maxlength='2' value='[r: s1]'/>
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
														<option [r:l2leer] value=""/>
														<option [r:l2ff]>FF</option>
														<option [r:l2ge]>GE</option>
														<option [r:l2kk]>KK</option>
													</select>
													<input type='text' name='s2' size='2' maxlength='2' value='[r: s2]'/>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										[h, if(json.get(waffe, "Zweihand") == 1), Code:
											{
												[checked = "checked='checked'"]
											};
											{
												[checked = ""]
											}
										]
										<input type='checkbox' name='zweihand' [r: checked]/>
									</td>
									<td>
										Zweih&auml;ndige Waffe
									</td>
								</tr>
								<tr>
									<td>
										[h, if(json.get(waffe, "Improvisiert") == 1), Code:
											{
												[checked = "checked='checked'"]
											};
											{
												[checked = ""]
											}
										]
										<input type='checkbox' name='impro' [r: checked]/>
									</td>
									<td>
										Improvisierte Waffe
									</td>
								</tr>
								<tr>
									<td>
										[h, if(json.get(waffe, "Parierwaffe") >= 1), Code:
											{
												[checked = "checked='checked'"]
											};
											{
												[checked = ""]
											}
										]
										<input type='checkbox' name='parierwaffe' value='1' [r: checked]>
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
				<input type="hidden" name="waffe" value='[r: waffe]'/>
			</form>
		</div>
	</body>
</html>
}]