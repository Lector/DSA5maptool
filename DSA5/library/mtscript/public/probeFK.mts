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

[h,if(getState("Blutrausch") == 1),Code:
{
	[h,macro("inputFail@this"): "blutrausch"]
};{}]

[h: waffe = resolveFK(getFernkampfwaffe(arg(0)))]

[h: wname = json.get(waffe, "Name")]
[h: wert = json.get(waffe, "FK")]

[h: schrittMod = -4]
[h: galoppMod = -8]

[h,if(hasTrait("KampfSF", "Berittener Schütze") == 1),Code:
{
	[schrittMod = 0]
	[galoppMod = -4]
};{}]

[h: cNah = ""]
[h: cMittelweit = "checked='checked'"]
[h: cWeit = ""]
[h: cZuWeit = ""]
[h: zonenmodell = 0]

[h: target = getTarget(currentToken())]
[h,if(target != ""),Code:{

	[token(target),Code:{
		[zonenmodell = Trefferzonenmodell]
	}]

	[h: cMittelweit = ""]
	[h: tWaffe = getFernkampfwaffe(FKWaffe)]
	[h: distance = getDistance(target)]
	[h: rw1 = json.get(tWaffe, "RW1")]
	[h: rw2 = json.get(tWaffe, "RW2")]
	[h: rw3 = json.get(tWaffe, "RW3")]
	[h,if(distance <= rw1): cNah = "checked='checked'"]
	[h,if(distance > rw1 && distance <= rw2): cMittelweit = "checked='checked'"]
	[h,if(distance > rw2 && distance <= rw3): cWeit = "checked='checked'"]
	[h,if(distance > rw3): cZuWeit = "checked='checked'"]
};{}]

[h: actionLink = macroLinkText("probeFKProcess@this", "")]
[dialog5("probe", "width=1345; height=710; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Fernkampf-Angriff</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Fernkampf-Angriff")]
				<div class="title">
					[r: wname]
				</div>
				<table style='border-spacing: 0px; padding: 5px; margin: 0px auto 0px auto;'>
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
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/bolt.png")]/></td>
										<td>Schießen / Werfen</td>
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
						<td valign='top'>
							<div class='label'>
								Fernkampf
							</div>
						</td>
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td style='padding-top: 7px;'>
										Wert:
									</td>
									<td style='text-align: right; padding-left: 3px; padding-top: 7px;'>
										[r: wert]
									</td>
								</tr>
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>

						<td valign='top'>
							<div class='label'>
								Manöver
							</div>
						</td>

						[h: techniken = json.append("[]", json.get(waffe, "Technik"))]
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<select size="1" name="basis">
											<option selected="selected" value="">Kein Basismanöver</option>
											[h: basismanoever = getFKBasisManoever()]
											[r: buildManoeverOptions(basismanoever, techniken, target)]
										</select>
									</td>
								</tr>
								<tr>
									<td>
										<select size="1" name="spezial">
											<option selected="selected" value="">Kein Spezialmanöver</option>
											[h: spezialmanoever = getFKSpezialManoever()]
											[r: buildManoeverOptions(spezialmanoever, techniken, target)]
										</select>
									</td>
								</tr>
							</table>
						</td>

						<td width='20'>
							&nbsp;
						</td>
						
						[r: probeZone(zonenmodell, "fk", target)]
						
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 9px 0px 6px 0px; font-size: 1pt;' width='1248'>
					<tr>
						<td style='border-top: 1px solid #7b5547;'>
							&nbsp;
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td valign='top'>
							<div class='label'>
								Entfernung
							</div>
						</td>
						<td valign='top'>
							[h: technik = json.get(waffe, "Technik")]
							[h: schusswaffen = "Armbrüste, Blasrohre, Bögen"]
							[h,if(hasTrait("Vorteile", "Entfernungssinn") == 1 && technik != "" && listContains(schusswaffen, technik) > 0): weitMod = -1; weitMod = -2]
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<input type='radio' name='entfernung' value='2' [r:cNah]>
									</td>
									<td style='padding-left: 3px;'>
										0 - [r: json.get(waffe, "RW1")] Schritt (+2, +1 TP)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='entfernung' value='0' [r: cMittelweit]>
									</td>
									<td style='padding-left: 3px;'>
										[r: json.get(waffe, "RW1")+1] - [r: json.get(waffe, "RW2")] Schritt (0)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='entfernung' value='[r: weitMod]' [r:cWeit]>
									</td>
									<td style='padding-left: 3px;'>
										[r: json.get(waffe, "RW2")+1] - [r: json.get(waffe, "RW3")] Schritt ([r: weitMod], -1 TP)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='entfernung' value='-100' [r:cZuWeit]/>
									</td>
									<td>
										über [r: json.get(waffe, "RW3")] Schritt (Probe unmöglich)
									</td>
								</tr>
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>
						[r,macro("probeZielgroesseFK@this"): target]
						<td width='20'>
							&nbsp;
						</td>
						<td valign='top'>
							<div class='label'>
								Bewegung
							</div>
						</td>
						<td style='padding-left: 1px;' valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<input type='radio' name='bewegungZiel' value='2'>
									</td>
									<td>
										Ziel steht still (+2)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='bewegungZiel' value='0' checked='checked'>
									</td>
									<td>
										Ziel geht bis zu 4 Schritt (0)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='bewegungZiel' value='-2'>
									</td>
									<td>
										Ziel rennt mind. 5 Schritt (-2)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='bewegungZiel' value='-4'>
									</td>
									<td>
										Ziel schlägt Haken (GS halbiert) (-4)
									</td>
								</tr>
							</table>
						</td>
						<td style='padding-left: 5px;' valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<input type='radio' name='bewegungSchuetze' value='0' checked='checked'>
									</td>
									<td>
										Schütze steht still (0)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='bewegungSchuetze' value='-2'>
									</td>
									<td>
										Schütze geht bis zu 4 Schritt (-2)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='bewegungSchuetze' value='-4'>
									</td>
									<td>
										Schütze rennt mind. 5 Schritt (-4)
									</td>
								</tr>
							</table>
						</td>
				</table>
				<hr/>
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						[r,macro("probeSicht@this"): "fk"]
						<td width='20'>
							&nbsp;
						</td>
						<td valign='top'>
							<div class='label'>
								Zielen
							</div>
						</td>
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<input type='radio' name='gezielt' value='0' checked='checked'>
									</td>
									<td style='padding-left: 3px;'>
										Nein
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='gezielt' value='2'>
									</td>
									<td style='padding-left: 3px;'>
										1 Aktion (+2)										
									</td>
								</tr>	
								<tr>
									<td>
										<input type='radio' name='gezielt' value='4'>
									</td>
									<td style='padding-left: 3px;'>
										2 Aktionen (+4)											
									</td>
								</tr>
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<div class="label">
											Berittener<br>Fernkampf
										</div>
									</td>
								</tr>
							</table>
						</td>
						<td style='padding-left: 1px;' valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<input type='radio' name='beritten' value='0' checked='checked'>
									</td>
									<td>
										Nicht beritten (0)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='beritten' value='0'>
									</td>
									<td>
										Tier steht (0)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='beritten' value='[r: schrittMod]' >
									</td>
									<td>
										Tier im Schritt ([r: schrittMod])
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='beritten' value='[r: galoppMod]' >
									</td>
									<td>
										Tier im Galopp ([r: galoppMod])
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='beritten' value='=1'>
									</td>
									<td>
										Tier im Trab (FK sinkt auf 1)
									</td>
								</tr>
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
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td valign='top'>
										<input type='checkbox' name='getuemmel' value='-2'>
									</td>	
									<td>
										Kampfgetümmel (-2)
									</td>
								</tr>
								[r,macro("probeGottgefaellig@this"): ""]
							</table>
						</td>
					</tr>
				</table>
				<input type="hidden" name="Wert" value="[r: wert]">
				<input type="hidden" name="Name" value="mit [r: wname]">
				<input type="hidden" name="patzerTabelle" value="patzerFernkampf"/>
				<input type="hidden" name="modMacro" value="probeFKMods@this"/>
				<input type="hidden" name="target" value="[r: target]"/>
			</form>
		</div<
	</body>
</html>
}]