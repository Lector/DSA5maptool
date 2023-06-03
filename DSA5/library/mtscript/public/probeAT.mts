[h: id = arg(0)]
[h,if(isGM() == 1 && hasImpersonated() == 0 && id == ""), Code:
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

[h,if(id != ""): switchToken(id)]

[h,if(json.length(macro.args) >= 2): uebergabe = arg(1); uebergabe = "{}"]
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

[h: weapons = "[]"]
[h: hands = usesHands(currentToken())]
[h,if(hands != 0),Code:
{
	[h: weapons = json.append(weapons, json.set(hWaffe, "Wield", "0"))]
	[h,if(HauptHand != NebenHand),Code:
	{
		[h: weapons = json.append(weapons, nWaffe)]
		[h: weapons = json.append(weapons, json.append("[]", hWaffe, nWaffe))]
	}]
};
{
	[h: noMelee = noMeleeWeapon(currentToken())]
	[h,foreach(weapon, Nahkampfwaffen),if(json.get(weapon, "ID") != noMelee): weapons = json.append(weapons, resolveNK(weapon))]
}]

[h: actionLink = macroLinkText("probeATProcess@this", "")]
[dialog5("probe", "width=1125; height=731; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Nahkampf-Angriff</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
		[h: js = ""]
		[h,for(i, 0, json.length(weapons), 1, ""),Code:{
			[h: weapon = json.get(weapons, i)]
			[h,if(json.type(weapon) == "ARRAY"),Code:{
				[h: rw1Mod = getReachMod(json.get(weapon, 0), 1) + " / " + getReachMod(json.get(weapon, 1), 1)]
				[h: rw2Mod = getReachMod(json.get(weapon, 0), 2) + " / " + getReachMod(json.get(weapon, 1), 2)]
				[h: rw3Mod = getReachMod(json.get(weapon, 0), 3) + " / " + getReachMod(json.get(weapon, 1), 3)]
			};{
				[h: rw1Mod = getReachMod(weapon, 1)]
				[h: rw2Mod = getReachMod(weapon, 2)]
				[h: rw3Mod = getReachMod(weapon, 3)]
			}]
			[h: js = js + strformat("
			function labelReach%{i}() {
				document.getElementById('rw1').innerText = '%s';
				document.getElementById('rw2').innerText = '%s';
				document.getElementById('rw3').innerText = '%s';
			}",
			rw1Mod, rw2Mod, rw3Mod)]
		}]
		[h: js = js + "
		window.addEventListener('load', function(evt) {
			labelReach0();"]
		[h,for(i, 0, json.length(weapons), 1, ""): js = js + strformat("
		    document.getElementById('waffe%{i}').addEventListener('change', function(evt) {
		        labelReach%{i}();
		    });")]
		[h: js = js + "});"]
		<script>[r:js]</script>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]" method="json">
				[r: header("Nahkampf-Angriff")]
				[r,if(hands != 0),Code:{
				<div class="title">
					[r: wname]
				</div>
				}]
				<table style='border-spacing: 0px; padding: 5px; margin: 0px auto 0px auto'>
					<tr>
						<td>
							<table class="probe">
								<tr>
									[r,macro("probeMod@this"): ""]
								</tr>
								<tr>
									[r,macro("probeSchadenMod@this"): ""]
								</tr>
							</table>
						</td>
						<td width='10px'>
							&nbsp;
						</td>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/sword.png")]/></td>
										<td>Angreifen</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@this"): currentToken()]
				<hr/>
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td valign=top>
							<div class="label">
								Waffe
							</div>
						</td>
						<td valign='top'>
							<table style='border-spacing: 0px 0px;' cellpadding='1'>
								[h: i = 0]
								[r,foreach(weapon, weapons, ""),Code:
								{
								<tr>
									<td>
										<input type="radio" name="waffe" id="waffe[r:i]" value="[r: encode(weapon)]" [r,if(i==0):"checked"]/>
									</td>
									<td>
										[r,if(json.type(weapon) == "OBJECT"): strformat("%s (%s)", json.get(weapon, "Name"), json.get(weapon, "AT")); "Beidhändiger Angriff<br>(Nur Basismanöver)"]
									</td>
								</tr>
								[h: i = i + 1]
								}]
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>

						<td valign=top>
							<div class="label">
								Manöver
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
						[r,macro("probeSicht@this"): "at"]
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
										[r,macro("probeLiegend@this"): "-4"]
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
										(keine Manöver erlaubt<br>keine Patzer oder kritische Erfolge)
									</td>
								</tr>
								[r,macro("probeGottgefaellig@this"): ""]
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
								[r,macro("probeVorteilPosition@this"): json.append(currentToken(), target, "at")]
								[r,macro("probeCramped@this"): json.append(currentToken(), weapons, target, "at")]
								[r,macro("probeWasser@this"): ""]
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>
						<td valign=top>
							<div class="label">
								Größe
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
				<input type="hidden" name="modMacro" value="probeATMods@this"/>
				<input type="hidden" name="target" value="[r:target]"/>
				<input type="hidden" name="token" value="[r: currentToken()]">
			</form>
		</div>
	</body>
</html>
}]