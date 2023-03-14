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

[h: uebergabe = macro.args]
[h,if(uebergabe == ""): uebergabe = "{}"]

[h: hWaffe = resolveNK(getNahkampfwaffe(HauptHand))]
[h,if(NebenHand == HauptHand): nWaffe = hWaffe; nWaffe = resolveNK(getNahkampfwaffe(NebenHand))]

[h: hName = json.get(hWaffe, "Name")]
[h: nName = json.get(nWaffe, "Name")]
[h,if(HauptHand != NebenHand): wname = hName + " &amp; " + nName; wname = hName]
[h: wert = json.get(hWaffe, "AT")]

[h: cKurz = ""]
[h: cMittel = "checked"]
[h: cLang = ""]
[h: cSmall = ""]
[h: cBig = "checked"]
[h: cPassierschlag = ""]
[h,if(json.get(uebergabe, "Passierschlag") == 1): cPassierschlag = "checked"]
[h: passierschlag = -4]
[h: tiny = -4]
[h: zonenmodell = 0]

[h: target = json.get(uebergabe, "Target")]
[h,if(target == ""): target = getTarget(currentToken())]
[h,if(target != ""),Code:{
	[token(target),Code:{
		[tWaffe = getNahkampfwaffe(HauptHand, target)]
		[tDistanz = json.get(tWaffe, "RW")]
		[gr = groesse(getSize(target))]
		[feindgespuer = hasTrait("KampfSF", "Feindgespür")]
		[zonenmodell = Trefferzonenmodell]
		[h,if(Schwarm == 1): tiny = 0]
	}]
	[cMittel = ""]
	[switch(tDistanz):
		case 1: cKurz = "checked='checked'";
		case 2: cMittel = "checked='checked'";
		case 3: cLang = "checked='checked'";
		case 4: cLang = "checked='checked'"
	]
	[if(feindgespuer != 0): passierschlag = passierschlag - 4]
	[if(gr <= 2),Code:{
		[cSmall = "checked='checked'"]
		[cBig = ""]
	};{}]
};{}]

[h: rw1Mod = "[]"]
[h: rw2Mod = "[]"]
[h: rw3Mod = "[]"]
[h: rw1Mod = json.append(rw1Mod, getReachMod(hWaffe, 1))]
[h: rw2Mod = json.append(rw2Mod, getReachMod(hWaffe, 2))]
[h: rw3Mod = json.append(rw3Mod, getReachMod(hWaffe, 3))]
[h: rw1Mod = json.append(rw1Mod, getReachMod(nWaffe, 1))]
[h: rw2Mod = json.append(rw2Mod, getReachMod(nWaffe, 2))]
[h: rw3Mod = json.append(rw3Mod, getReachMod(nWaffe, 3))]
[h: rw1Mod = json.append(rw1Mod, json.get(rw1Mod, 0) + " / " + json.get(rw1Mod, 1))]
[h: rw2Mod = json.append(rw2Mod, json.get(rw2Mod, 0) + " / " + json.get(rw2Mod, 1))]
[h: rw3Mod = json.append(rw3Mod, json.get(rw3Mod, 0) + " / " + json.get(rw3Mod, 1))]

[h: actionLink = macroLinkText("probeATProcess@Lib:macros", "")]
[dialog5("probe", "width=1125; height=731; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Nahkampf-Angriff</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
		[h: js = ""]
		[h,for(i,0,3,1,""): js = js + strformat("
		function labelReach%{i}() {
			document.getElementById('rw1').innerText = '%s';
			document.getElementById('rw2').innerText = '%s';
			document.getElementById('rw3').innerText = '%s';
		}",
		json.get(rw1Mod, i), json.get(rw2Mod, i), json.get(rw3Mod, i))]
		[h: js = js + strformat("
		window.addEventListener('load', function(evt) {
			labelReach0();
		    document.getElementById('waffe1').addEventListener('change', function(evt) {
		        labelReach0();
		    });
		    document.getElementById('waffe2').addEventListener('change', function(evt) {
		        labelReach1();
		    });
		    document.getElementById('waffe3').addEventListener('change', function(evt) {
		        labelReach2();
		    });
		}
		)")]
		<script>[r:js]</script>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]" method="json">
				[r: header("Nahkampf-Angriff")]
				<div class="title">
					[r: wname]
				</div>
				<table style='border-spacing: 0px; padding: 5px; margin: 0px auto 0px auto'>
					<tr>
						<td>
							<table class="probe">
								<tr>
									[r,macro("probeMod@Lib:macros"): ""]
								</tr>
								<tr>
									[r,macro("probeSchadenMod@Lib:macros"): ""]
								</tr>
							</table>
						</td>
						<td width='10px'>
							&nbsp;
						</td>
						<td>
							[h: button = tableImage("forms", 27)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@Lib:macros"): currentToken()]
				<hr/>
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td valign=top>
							<div class="label">
								Waffe
							</div>
						</td>
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									[h: pt = 0]
									[r,if(HauptHand != NebenHand),Code:{
									<td>
										<input type="radio" name="waffe" id="waffe1" value="1" checked="checked"/>
									</td>
									};{
										[h: pt = 7]
									}]
									<td style='padding-top:[r:pt]px;'>
										[r: json.get(hWaffe, "Name")]:
									</td>
									<td style='padding-left: 3px; padding-top:[r:pt]px;'>
										[r: json.get(hWaffe, "AT")]
									</td>
								</tr>
								<tr>
									[r,if(HauptHand != NebenHand),Code:{
									<td>
										<input type="radio" name="waffe" id="waffe2" value="2"/>
									</td>
									<td>
										[r: json.get(nWaffe, "Name")]:
									</td>
									<td style='padding-left: 3px;'>
										[r: json.get(nWaffe, "AT")]
									</td>
								</tr>
								<tr>
									<td>
										<input type="radio" name="waffe" id="waffe3" value="3"/>
									</td>
									<td colspan=2>
										Beidh&auml;ndiger Angriff<br>(nur Basisman&ouml;ver)
									</td>
									};{
									<input type="hidden" name="waffe" value="1"/>
									}]
								</tr>
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>

						<td valign=top>
							<div class="label">
								Man&ouml;ver
							</div>
						</td>

						[h: techniken = json.append("[]", json.get(hWaffe, "Technik"), json.get(nWaffe, "Technik"))]
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<select size="1" name="basis">
											<option selected="selected" value="">Kein Basismanöver</option>
											[h: basismanoever = getATBasisManoever(target)]
											[r: buildManoeverOptions(basismanoever, techniken, target)]
										</select>
									</td>
								</tr>
								<tr>
									<td>
										<select size="1" name="spezial">
											<option selected="selected" value="">Kein Spezialmanöver</option>
											[h: spezialmanoever = getATSpezialManoever(target)]
											[r: buildManoeverOptions(spezialmanoever, techniken, target)]
										</select>
									</td>
								</tr>
							</table>
						</td>

						<td width='20'>
							&nbsp;
						</td>
						
						[r: probeZone(zonenmodell, "nk", target)]
						
					</tr>
				</table>
				<hr/>
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						[r,macro("probeSicht@Lib:macros"): "at"]
						<td width='20'>
							&nbsp;
						</td>
						<td valign=top>
							<div class="label">
								Reichweite (Gegner)
							</div>
						</td>
						<td style='padding-left: 1px;' valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<input type='radio' name='rw' value='1' [r:cKurz]>
									</td>
									<td>
										Kurz (<label id='rw1'></label>)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='rw' value='2' [r:cMittel]>
									</td>
									<td>
										Mittel (<label id='rw2'></label>)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='rw' value='3' [r:cLang]>
									</td>
									<td>
										Lang (<label id='rw3'></label>)
									</td>
								</tr>
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
						<td style='padding-left: 1px;' valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										[r,macro("probeLiegend@Lib:macros"): "-4"]
									</td>
									<td>
										Liegend (-4)
									</td>
								</tr>
								<tr>
									<td>
										<input type='checkbox' name='passierschlag' value='[r: passierschlag]' [r:cPassierschlag]>
									</td>
									<td>
										Passierschlag ([r: passierschlag])<br>
										(keine Man&ouml;ver erlaubt<br>keine Patzer oder kritische Erfolge)
									</td>
								</tr>
								[r,macro("probeGottgefaellig@Lib:macros"): ""]
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>
					</tr>
				</table>
				<hr/>
				<table style='border-spacing: 0px; margin: 6px auto 0px auto;;'>
					<tr>
						<td valign=top>
							<div class="label">
								Umgebung
							</div>
						</td>
						<td style='padding-left: 1px;' valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								[r,macro("probeVorteilPosition@Lib:macros"): json.append(currentToken(), target, "at")]
								[r,macro("probeCramped@Lib:macros"): json.append(currentToken(), target, "at")]
								[r,macro("probeWasser@Lib:macros"): ""]
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>
						<td valign=top>
							<div class="label">
								Gr&ouml;&szlig;e
								<br>(Gegner)
							</div>
						</td>
						<td style='padding-left: 1px;' valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<input type='radio' name='groesse' value='[r: tiny]' [r:cSmall]/>
									</td>
									<td>
										Winzig ([r: tiny])
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='groesse' value='0' [r:cBig]/>
									</td>
									<td>
										Klein - Riesig (0)
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<input type="hidden" name="modMacro" value="probeATMods@Lib:macros"/>
				<input type="hidden" name="target" value="[r:target]"/>
			</form>
		</div>
	</body>
</html>
}]