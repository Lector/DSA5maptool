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

[h: hWaffe = resolveNK(getNahkampfwaffe(HauptHand))]
[h,if(NebenHand == HauptHand),Code:
{
	[nWaffe = hWaffe]
	[wname = json.get(hWaffe, "Name")]
};
{
	[unresolved = getNahkampfwaffe(NebenHand)]
	[nWaffe = resolveNK(unresolved)]
	[wname = json.get(hWaffe, "Name") + " &amp; " + json.get(nWaffe, "Name")]
}]



[h: hWaffeCheck = ""]
[h: nWaffeCheck = ""]
[h,if(json.get(hWaffe, "PA") > json.get(nWaffe, "PA")),Code:
{
	[waffe = hWaffe]
	[hWaffeCheck = "checked='checked'"]
};
{
	 [waffe = nWaffe]
	 [nWaffeCheck = "checked='checked'"]
}]

[h: actionLink = macroLinkText("probePAProcess@this", "")]
[dialog5("probe", "width=1125; height=629; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Parade</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.naxos84.macros2/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Parade")]
				<div class='title'>
					[r: wname]
				</div>
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
							[h: button = tableImage("forms", 29)]
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
							<div class='label'>
								Parade
							</div>
						</td>
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									[h: pt = 0]
									[r,if(HauptHand != NebenHand),Code:{
									<td>
										<input type="radio" name="waffe" id="waffe1" value="1" [r:hWaffeCheck]/>
									</td>
									};{
										[h: pt = 7]
									}]
									<td style='padding-top:[r:pt]px;'>
										[r: json.get(hWaffe, "Name")]:
									</td>
									<td style='text-align: right; padding-left: 3px; padding-top: [r:pt]px;'>
										[r: json.get(hWaffe, "PA")]
									</td>
								</tr>
								<tr>
									[r,if(HauptHand != NebenHand),Code:{
									<td>
										<input type="radio" name="waffe" id="waffe2" value="2" [r:nWaffeCheck]/>
									</td>
									<td>
										[r: json.get(nWaffe, "Name")]:
									</td>
									<td style='text-align: right; padding-left: 3px;'>
										[r: json.get(nWaffe, "PA")]
									</td>
									};{
									<input type="hidden" name="waffe" value="1"/>
									}]
								</tr>
							</table>
							<input type="hidden" name="PA1" value="[r: json.get(hWaffe, 'PA')]"/>
							<input type="hidden" name="PA2" value="[r: json.get(nWaffe, 'PA')]"/>
						</td>
						<td width='20'>
							&nbsp;
						</td>
						[r,macro("schadensart@this"): uebergabe]
						<td width='20'>
							&nbsp;
						</td>
						[r,macro("probeFKAbwehr@this"): fkabwehr]
						<td width='20'>
							&nbsp;
						</td>
						<td valign='top'>
							<div class='label'>
								Manöver
							</div>
						</td>
						<td valign='top'>
							<select size="1" name="spezial">
								<option selected="selected" value="">Kein Spezialmanöver</option>
								[h: spezialmanoever = getPASpezialManoever()]
								[h: techniken = json.append("[]", json.get(hWaffe, "Technik"), json.get(nWaffe, "Technik"))]
								[r: buildManoeverOptions(spezialmanoever, techniken)]
							</select>
						</td>
						<td width='20'>
							&nbsp;
						</td>						
					</tr>
				</table>
				<hr/>
				<table style='border-spacing: 0px; margin: 0px auto 6px auto;'>
					<tr>
						[r,macro("probeSicht@this"): "pa"]
									
						<td width='20'>
							&nbsp;
						</td>
						<td valign='top'>
							<div class='label'>
								Umgebung
							</div>
						</td>
						<td style='padding-left: 1px;' valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								[r,macro("probeVorteilPosition@this"): json.append(currentToken(), attacker, "pa")]
								[r,macro("probeCramped@this"): json.append(currentToken(), attacker, "pa")]
								[r,macro("probeWasser@this"): ""]
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>
				
						<td valign='top'>
							<div class='label'>
								Situation
							</div>
						</td>
						<td style='padding-left: 1px;' valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
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
										<input type='checkbox' name='vonhinten' value='-4' [r:hinten]>
									</td>
									<td>
										Angriff von Hinten (-4)
									</td>
								</tr>
								[r,macro("probeGottgefaellig@this"): ""]
								<tr>
									<td>
										<input type='checkbox' name='kritisch' [r:gluecklich]>
									</td>
									<td>
										Glücklicher / kritischer Treffer (PA halbiert)
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<input type="hidden" name="image" value="17"/>
				<input type="hidden" name="patzerImage" value="10"/>
				<input type="hidden" name="kritText" value="Du darfst sofort einen Passierschlag gegen den Gegner ausführen"/>
				<input type="hidden" name="kritImage" value="46"/>
				<input type="hidden" name="modMacro" value="probePAMods@this"/>
				<input type="hidden" name="status" value='[r: status]'/>
				<input type="hidden" name="failText" value="[r: failText]"/>
				<input type="hidden" name="token" value="[r: currentToken()]"/>
				<input type="hidden" name="attacker" value="[r: attacker]"/>
			</form>
		</div>
	</body>
</html>
}]