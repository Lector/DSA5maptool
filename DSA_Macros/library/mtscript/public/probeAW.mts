[h,macro("abfrageImpersonate@this"): ""]

[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
{
	[selectID = getSelected()]
	[if(listCount(selectID) != 1), Code:
	{
		[h,macro("inputFail@this"): "gmSelectFail"]
	};{}]
	[switchToken(selectID)]
};{}]

[h,if(getState("Blutrausch") == 1),Code:
{
	[h,macro("inputFail@this"): "blutrausch"]
};{}]

[h,if(getProperty("AW") == 0), CODE:
{
	[h,macro("inputFail@this"): "keinWert"]
};{}]

[h: uebergabe = macro.args]
[h: gluecklich = ""]
[h: hinten = ""]
[h: probe = 0]
[h: schaden = 0]
[h: schadensart = "TP"]
[h: zone = "Zufall"]
[h: fkabwehr = 0]
[h: status = "[]"]
[h: failText = ""]
[h: attacker = ""]
[h,if(uebergabe != ""),Code:
{
	[h: probe = json.get(uebergabe, "Probe")]
	[h: schadensart = json.get(uebergabe, "Schadensart")]
	[h,if(schadensart != "StP"): schaden = json.get(uebergabe, "Schaden")]
	[h,if(json.get(uebergabe, "Gluecklich") != 0): gluecklich = "checked = 'checked'"]
	[h: zone = json.get(uebergabe, "Zone")]
	[h: fkabwehr = json.get(uebergabe, "FKAbwehr")]
	[h,if(json.get(uebergabe, "VonHinten") != 0): hinten = "checked = 'checked'"]
	[h: status = json.get(uebergabe, "Status")]
	[h: failText = json.get(uebergabe, "FailText")]
	[h: attacker = json.get(uebergabe, "Attacker")]
};{}]

[h: wert = getAW()]

<!-- Da die Patzertabelle bei Waffenlosen Varianten seinen Sonderfall hat muessen wir hier manuell wuerfeln -->
[h: patzerRoll = 2d6]
[h,if(patzerRoll < 7): patzerRoll = patzerRoll + 5]
[h: patzerText = table("patzerNahkampf", patzerRoll)]

[h: actionLink = macroLinkText("VerteidigungSchadenProcess@this", "")]
[dialog5("probe", "width=1125; height=602; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Ausweichen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Ausweichen")]
				<table style='border-spacing: 0px; padding: 5px; margin: 0px auto 0px auto'>
					<tr>
						<td>
							<table class="probe">
								<tr>
									[r,macro("probeMod@this"): probe]
								</tr>
								<tr>
									<td>
										Schaden:
									</td>
									<td>
										<input type='text' name='schadenEingabe' size='4' maxlength='3' value='[r: schaden]'>
									</td>
								</tr>
							</table>
						</td>
						<td width='10px'>
							&nbsp;
						</td>
						<td>
							[h: button = tableImage("forms", 31)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@this"): currentToken()]
				<hr/>
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td valign='top'>
							<table>
								<tr>
									<td valign=top>
										<div class="label">
											Ausweichen
										</div>
									</td>
									<td>
										Wert: [r: wert]
									</td>
								</tr>
							</table>
						<td width='20'>
							&nbsp;
						</td>
						<td>
							[r,macro("schadensart@this"): uebergabe]
						</td>
						<td width='20'>
							&nbsp;
						</td>
						[r,macro("probeFKAbwehr@this"): fkabwehr]
					</tr>
				</table>
				<hr/>
				<table style='border-spacing: 0px; margin: 0px auto 6px auto;'>
					<tr>
						[r,macro("probeSicht@this"): "aw"]
						<td width='20'>
							&nbsp;
						</td>
						<td valign=top>
							<div class="label">
								Umgebung
							</div>
						</td>
						<td valign='top'>
							<table>
								[r,macro("probeVorteilPosition@this"): json.append(currentToken(), attacker, "aw")]
								[r,macro("probeWasser@this"): ""]
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>
						<td valign=top>
							<div class="label">
								Situation
							</div>
						</td>
						<td valign='top'>
							<table>
								<tr>
									<td>
										[r,macro("probeLiegend@this"): "-2"]
									</td>
									<td>
										Liegend (-2)
									</td>
								</tr>
								<tr>
									<td>
										[h,if(getState("Fixiert") == 1), Code:
											{
												[auswahlFixiert = "checked='checked'"]
											};
											{
												[auswahlFixiert = ""]
											}
										]
										<input type='checkBox' name='fixiert' value='-4' [r: auswahlFixiert]>
									</td>
									<td>
										Fixiert (-4)
									</td>
								</tr>
								<tr>
									<td>
										<input type='checkbox' name='vonhinten' value='-4' [r:hinten]>
									</td>
									<td>
										Angriff von Hinten (-4)
									</td>
								</tr>
								<tr>
									<td>
										<input type='checkbox' name='kritisch' [r:gluecklich]>
									</td>
									<td>
										Glücklicher / kritischer Treffer (AW halbiert)
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			<input type="hidden" name="Name" value="Ausweichen"/>
			<input type="hidden" name="Wert" value="[r: wert]"/>
			<input type="hidden" name="image" value="48"/>
			<input type="hidden" name="kritText" value="Du darfst sofort einen Passierschlag gegen den Gegner ausführen"/>
			<input type="hidden" name="kritImage" value="49"/>
			<input type="hidden" name="patzerText" value="[r: patzerText]"/>
			<input type="hidden" name="modMacro" value="probeAWMods@this"/>
			<input type="hidden" name="status" value='[r: status]'/>
			<input type="hidden" name="failText" value="[r: failText]"/>
			<input type="hidden" name="token" value="[r: currentToken()]"/>
			<input type="hidden" name="attacker" value="[r: attacker]"/>
			</form>
		</div>
	</body>
</html>
}]