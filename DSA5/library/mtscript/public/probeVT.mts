[h,if(arg(0) != ""),Code:
{
	[switchToken(arg(0))]
};
{
	[h,macro("abfrageImpersonate@this"): ""]
	[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[h,if(listCount(selectID) != 1): inputFail("gmSelectFail")]
		[switchToken(selectID)]
	}]
}]

[h,if(getState("Blutrausch") == 1),Code:
{
	[h,macro("inputFail@this"): "blutrausch"]
};{}]

[h,if(json.length(Nahkampfwaffen) == 0 && getProperty("AW") == 0): inputFail("noMeleeWeapons")]

[h: uebergabe = ""]
[h,if(json.length(macro.args) > 1): uebergabe = arg(1)]
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
}]

<!-- determine values of defense options -->
[h: weapons = "[]"]
[h: dodge = getAW(currentToken())]
[h: maxDefense = dodge]
[h: maxDefenseId = 0]
[h: maxParry = 0]
[h: maxParryId = -1]
[h,if(dodge > 0): weapons = json.append(weapons, dodge)]

[h: hWaffe = resolveNK(currentToken(), getNahkampfwaffe(HauptHand))]
[h,if(NebenHand == HauptHand),Code:
{
	[nWaffe = hWaffe]
	[wname = json.get(hWaffe, "Name")]
};
{
	[unresolved = getNahkampfwaffe(NebenHand)]
	[nWaffe = resolveNK(currentToken(), unresolved)]
	[wname = json.get(hWaffe, "Name") + " &amp; " + json.get(nWaffe, "Name")]
}]

[h: hands = usesHands(currentToken())]
[h,if(hands != 0),Code:
{
	[h: weapons = json.append(weapons, hWaffe)]
	[h,if(HauptHand != NebenHand),Code:
	{
		[h: weapons = json.append(weapons, nWaffe)]
	}]
};
{
	[h,foreach(weapon, Nahkampfwaffen),Code: {
        [h: weapons = json.append(weapons, resolveNK(currentToken(), weapon))]
    }]
}]

<!-- preselect a defense option -->
[h: id = 0]
<!-- attackerSize is determined to check if the defense option is legally preselected
Ranged attacks are considered as attacker size of large because large enemies and projectiles can only be evaded or parried with a shield -->
[h,if(attacker != ""): attackerSize = scale(getSize(attacker)); attackerSize = 1]
[h,if(fkabwehr != 0): attackerSize = 2]

[h: dodgeID = 0]
[h: parryID = 0]
[h,foreach(weapon, weapons),Code: {
    [h,if(isNumber(weapon)),Code:{
		<!-- Dodgeing is possible for every attack -->
		[defense = weapon]
		[defenseSize = 100]
		[dodgeID = id]
	};{
		[defense = json.get(weapon, "PA")]
		<!-- Shields can parry large opponents and projectiles -->
		[h,if(json.get(weapon, "Technik") == "Schilde"): defenseSize = 2; defenseSize = 1]
		[h,if(defense > maxParry && defenseSize >= attackerSize): maxParryId = id]
	}]
    [h,if(defense > maxDefense && defenseSize >= attackerSize): maxDefenseId = id]
    [h: id = id + 1]
}]

<!-- Select the dodge / highest parry if a specific mode is selected -->
[h,if(json.length(macro.args) > 2), Code:{
	[h: mode = lower(arg(2))]
	[switch(mode),Code:
		case "dodge": { [maxDefenseId = 0] };
		case "parry": { [maxDefenseId = maxParryId] };
		default: {}
	]
}]

[h: js = strformat("
function setMacro() {
    const weapon = Array.from(document.getElementsByName('waffe')).find(w => w.checked)?.value || 0;
    var macro = '';
    if(isNaN(weapon)) macro = 'probePAMods@this'; else macro = 'probeAWMods@this';
    document.getElementById('modMacro').value = macro;
}")]

[h: js = js + "
window.addEventListener('load', function(evt) {
	setMacro();"]
[h,for(i, 0, json.length(weapons), 1, ""): js = js + strformat("
	document.getElementById('waffe%{i}').addEventListener('change', function(evt) {
		setMacro();
	});")]
[h: js = js + "});"]

[h: actionLink = macroLinkText("verteidigungSchadenProcess@this", "")]
[dialog5("probe", "width=1200; height=635; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Parade</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
        <script>[r: js]</script>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Parade")]
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
									[r: probeMod(probe)]
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
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/swordR.png")]/></td>
										<td>Verteidigen</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
				[r: probeChat(currentToken())]
				<hr/>
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td valign='top'>
							<div class='label'>
								Verteidigung
							</div>
						</td>
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								[h: i = 0]
								[r,foreach(weapon, weapons, ""),Code:
								{
								<tr>
									<td>
										<input type="radio" name="waffe" id="waffe[r:i]" value="[r: encode(weapon)]" [r,if(i == maxDefenseId): "checked"]/>
									</td>
									<td>
										[r,if(isNumber(weapon)):
                                            strformat("Ausweichen (%s)", weapon);
                                            strformat("%s (%s)", json.get(weapon, "Name"), json.get(weapon, "PA"))
                                        ]
									</td>
								</tr>
								[h: i = i + 1]
								}]
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>
						[r: schadensart(uebergabe)]
						<td width='20'>
							&nbsp;
						</td>
						[r: probeFKAbwehr(fkabwehr)]
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
						[r: probeSicht("vt")]
									
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
								[r: probeVorteilPosition(currentToken(), attacker, "pa")]
								[r: probeCramped(currentToken(), weapons, attacker, "pa")]
								[r: probeWasser(currentToken())]
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
								[r: probeVTinKR(currentToken())]
								<tr>
									<td>
										[r: probeLiegend(-2)]
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
                                [r: probeBound(currentToken(), weapons)]
                                <!-- TODO: Gottgefaellig nur bei PA -->
								[r: probeGottgefaellig()]
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
				<input type="hidden" name="image" value=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/shield.png")]/>
				<input type="hidden" name="kritText" value="Du darfst sofort einen Passierschlag gegen den Gegner ausführen"/>
				<input type="hidden" name="modMacro" id="modMacro"/>
				<input type="hidden" name="status" value='[r: status]'/>
				<input type="hidden" name="failText" value="[r: failText]"/>
				<input type="hidden" name="token" value="[r: currentToken()]"/>
				<input type="hidden" name="attacker" value="[r: attacker]"/>
			</form>
		</div>
	</body>
</html>
}]