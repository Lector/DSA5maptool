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

[h,if(isDialogVisible("chareditWaffe") == 1), Code:
	{
		[closeDialog("chareditWaffe")]
	};{}
]

[h: id = macro.args]

[h: waffe = ""]
[h: baum = eval("Fernkampfwaffen")]
[Foreach(wa, baum,""), CODE:
	{
		[if(json.get(wa, "ID") == id), Code:
			{
				[waffe = wa]
			}; {}
		]
	}
]
[h: fk = json.get(waffe, "FK")]
[h,if(fk == ""): fk = 0]
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
		[h: tpwMod = substring(tp, 4)]		
		[h: tpwModTyp = substring(tp, 3, 4)]
	}
]
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
[h: rw1 = json.get(waffe, "RW1")]
[h: rw2 = json.get(waffe, "RW2")]
[h: rw3 = json.get(waffe, "RW3")]
[h: ladezeit = json.get(waffe, "Ladezeit")]

[h: actionLink = macroLinkText("quickeditFernkampfwaffeProcess@this", "")]
[dialog5("quickeditWaffe", "width=425; height=443; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Fernkampfwaffe anpassen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Waffe ändern")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;' cellpadding='1'>
					<tr>
						<td colspan=2 style='padding-right: 3px;'>
							Name:
						</td>
						<td>
							<input type='text' name='Name' size='14' maxlength='30' value='[r: json.get(waffe, "Name")]'>
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
											[h,if(json.get(waffe, "Technik") == ""),Code:
											{
												[selected="selected='selected'"]
											};
											{
												[selected=""]
											}]
											<option value="" [r:selected]/>
											[h: baum = getFernkampftechniken()]
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
										<input type='text' name='fk' size='3' maxlength='3' value='[r: fk]'/>
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
										<input type='text' name='rwn' size='3' maxlength='3' value='[r: rw1]'/>
									</td>
									<td> / </td>
									<td>
										<input type='text' name='rwm' size='3' maxlength='3' value='[r: rw2]'/>
									</td>
									<td> / </td>
									<td>
										<input type='text' name='rwf' size='3' maxlength='3' value='[r: rw3]'/>
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
										<input type='text' name='ladezeit' size='2' maxlength='2' value='[r: ladezeit]'>
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
						<td width=20>
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
						<td colspan=2>
							Improvisierte Waffe
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
				<input type="hidden" name="waffe" value='[r: waffe]'/>
			</form>
		</div>
	</body>
</html>
}]