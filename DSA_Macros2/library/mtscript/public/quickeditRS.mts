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

[h,if(isDialogVisible("chareditRS") == 1), Code:
	{
		[closeDialog("chareditRS")]
	};{}
]

[h: id = macro.args]

[h: ruestung = getRuestung(macro.args)]

[h: rName = json.get(ruestung, "Name")]
[h: rs = json.get(ruestung, "RS")]
[h: rsKopf = json.get(ruestung, "RSKopf")]
[h: rsTorso = json.get(ruestung, "RSTorso")]
[h: rsArmLinks = json.get(ruestung, "RSArmLinks")]
[h: rsArmRechts = json.get(ruestung, "RSArmRechts")]
[h: rsBeinLinks = json.get(ruestung, "RSBeinLinks")]
[h: rsBeinRechts = json.get(ruestung, "RSBeinRechts")]
[h: be = json.get(ruestung, "BE")]
[h: be0 = ""]
[h: be1 = ""]
[h: be2 = ""]
[h: be3 = ""]
[h: be4 = ""]
[h: be5 = ""]
[h: be6 = ""]
[h,switch(be):
	case 0: be0 = "selected='selected'";
	case 1: be1 = "selected='selected'";
	case 2: be2 = "selected='selected'";
	case 3: be3 = "selected='selected'";
	case 4: be4 = "selected='selected'";
	case 5: be5 = "selected='selected'";
	case 6: be6 = "selected='selected'";
	default: be0 = "selected='selected'"
]

[h: rini = json.get(ruestung, "INI")]
[h,if(rini == 0): cini = ""; cini = "checked = 'checked'"]
[h: rgs = json.get(ruestung, "GS")]
[h,if(rgs == 0): cgs = ""; cgs = "checked = 'checked'"]
[h: typ = json.get(ruestung, "Typ")]

[h,if(typ == "zone"),Code:
{
	[h: window = "width=467; height=422; temporary=1; closebutton=0; noframe=0"]
};
{
	[h: window = "width=467; height=359; temporary=1; closebutton=0; noframe=0"]
}]


[h: actionLink = macroLinkText("quickeditRSProcess@this", "")]
[dialog5("quickeditRS", window):{
<html>
	<head>
		<title>R&uuml;stung anpassen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Rüstung anpassen")]

				[r,if(typ == "zone"), Code: {
				<table style='border-spacing: 0px; margin: 3px auto 0px auto;' cellpadding='1'>
					<tr>
						<td style='padding-right: 3px;'>
							Name:
						</td>
						<td>
							<input type='text' name='rsname' value='[r: rName]'>
						</td>
					</tr>
				</table>
				<br>
				<table style='border-spacing: 0px; margin: 3px auto 0px auto;' cellpadding='1'>
					<tr>
						<td style='padding-right: 3px;'>
							Kopf:
						</td>
						<td>
							<input type='text' name='rskopf' size='3' maxlength='2' value='[r: rsKopf]'>
						</td>
						<td width='25'>
							&nbsp;
						</td>
						<td style='padding-right: 3px;'>
							Torso:
						</td>
						<td>
							<input type='text' name='rstorso' size='3' maxlength='2' value='[r: rsTorso]'>
						</td>
					</tr>
					<tr>
						<td style='padding-right: 3px;'>
							Linker Arm:
						</td>
						<td>
							<input type='text' name='rsla' size='3' maxlength='2' value='[r: rsArmLinks]'>
						</td>
						<td width='25'>
							&nbsp;
						</td>
						<td style='padding-right: 3px;'>
							Rechter Arm:
						</td>
						<td>
							<input type='text' name='rsra' size='3' maxlength='2' value='[r: rsArmRechts]'>
						</td>
					</tr>
					<tr>
						<td style='padding-right: 3px;'>
							Linkes Bein:
						</td>
						<td>
							<input type='text' name='rslb' size='3' maxlength='2' value='[r: rsBeinLinks]'>
						</td>
						<td width='25'>
							&nbsp;
						</td>
						<td style='padding-right: 3px;'>
							Rechtes Bein:
						</td>
						<td>
							<input type='text' name='rsrb' size='3' maxlength='2' value='[r: rsBeinRechts]'>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;
						</td>
						<td>
							&nbsp;
						</td>
						<td width='25'>
							&nbsp;
						</td>
						<td>
							&nbsp;
						</td>
						<td>
							&nbsp;
						</td>
					</tr>
				</table>
};
{
				<table style='border-spacing: 0px; margin: 3px auto 0px auto;' cellpadding='1'>
					<tr>
						<td style='padding-right: 3px;'>
							Name:
						</td>
						<td>
							<input type='text' name='rsname' value='[r: rName]'>
						</td>
					</tr>
					<tr>
						<td style='padding-right: 3px;'>
							RS:
						</td>
						<td>
							<input type='text' name='rsgesamt' size='2' maxlength='2' value='[r: rs]'>
						</td>
					</tr>
				</table>
				<br>
}]
				<table style='margin: 0px auto 0px auto;'>
					<tr>
						<td style='padding-right: 3px;'>
							Belastung:
						</td>
						<td>
							<select name='be' size='1'>
								<option [r:be0]>0</option>
								<option [r:be1]>1</option>
								<option [r:be2]>2</option>
								<option [r:be3]>3</option>
								<option [r:be4]>4</option>
								<option [r:be5]>5</option>
								<option [r:be6]>6</option>
							</select>
						</td>
						<td >
							&nbsp;
						</td>
						<td style='padding-right: 3px;'>
							<input type='checkbox' name='beini' [r:cini]/>
						</td>
						<td>
							-1 INI
						</td>
						<td >
							&nbsp;
						</td>
						<td style='padding-right: 3px;'>
							<input type='checkbox' name='begs' [r:cgs]/>
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
				<input type="hidden" name="ruestung" value='[r: ruestung]'/>
				<input type="hidden" name="typ" value='[r: typ]'/>
			</form>
		</div>
	</body>
</html>
}]