[h: switchToken(arg(0))]

[h: uebergabe = arg(1)]

[h: tname = listGet(uebergabe, 0)]
[h: e1 = listGet(uebergabe, 1)]
[h: e2 = listGet(uebergabe, 2)]
[h: e3 = listGet(uebergabe, 3)]

[h,if(e1 == "--" || e2 == "--" || e3 == "--"), Code:
{
	[h,macro("inputFail@this"): "3W20Fail"]
}]

<!-- Hier loesen wir MU KL oder aehnliches in den Eigenschaftswert auf -->
[h: e1wert = eval(e1)]
[h: e2wert = eval(e2)]
[h: e3wert = eval(e3)]
<!-- Es werden die aktuellen Eigenschaften ermittelt. Durch temporaere Effekte oder Zustaende koennen sie geaendert sein -->
[h: aktE1wert = probeGetAktWert(e1)]
[h: aktE2wert = probeGetAktWert(e2)]
[h: aktE3wert = probeGetAktWert(e3)]

[h: wert = listGet(uebergabe, 4)]
[h: gruppe = listGet(uebergabe, 5)]

<!-- Charaktere im Blutrausch können laut Regeln nur Körpertalente und Einschuechtern -->
[h,if(getState("Blutrausch") == 1 && gruppe != "Koerper" && tname != "Einschüchtern"),Code:
{
	[h,macro("inputFail@this"): "blutrausch"]
}]

[h: actionLink = macroLinkText("probe3w20Process@this", "")]
[dialog5("probe", "width=750; height=476; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Fertigkeitsprobe würfeln</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Fertigkeitsprobe")]
				<div class='title'>
					[r: tname]
				</div>
				<table style='border-spacing: 0px; padding: 5px; margin: 0px auto 0px auto;'>
					<tr>
						[r,macro("probeMod@this"): ""]
						<td width='10px'>
							&nbsp;
						</td>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/d20.png")]/></td>
										<td>Probe würfeln</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@this"): currentToken()]
				<hr/>
				<table style='border-spacing: 0px; margin: 0px auto 5px auto;'>
					<tr>
						<td valign='top'>
							<div class='label'>
								Fertigkeit
							</div>
						</td>
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										Fertigkeitswert:
									</td>
									<td style='text-align: left; padding-left: 3px;'>
										[r: wert]
									</td>
								</tr>
								<tr>
									<td>
										Probe:
									</td>
									<td style='text-align: left; padding-left: 3px;'>
										[r: e1]/[r: e2]/[r:e3]
									</td>
								</tr>
								<tr>
									<td>
										Grundwerte:
									</td>
									<td style='text-align: left; padding-left: 3px;'>
										[r: e1wert]/[r: e2wert]/[r:e3wert]
									</td>
								</tr>
								<tr>
									<td>
										Aktuelle Werte:
									</td>
									<td style='text-align: left; padding-left: 3px;'>
										[r: aktE1wert]/[r: aktE2wert]/[r: aktE3wert]
									</td>
								</tr>
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>
						<td valign='top'>
							<div class='label'>
								Modifikatoren
							</div>
						</td>
						<td valign='top'>
							<table>
								[r: probeFWPlus(currentToken(), tname)]
								[r: probeSpezialisierung(tname)]
								[r: probeBelastung(currentToken(), tname)]
								[r: probeParalyse(currentToken(), gruppe, tname)]
								[r: probeSozialerStand(currentToken(), tname)]
								[r: probeMirakel(currentToken(), tname)]
								[r: probeGottgefaellig(currentToken(), tname)]
							</table>
						</td>
					</tr>
				</table>
				<input type="hidden" name="Name" value="[r: tname]"/>
				<input type="hidden" name="Skill" value="[r: tname]"/>
				<input type="hidden" name="Wert" value="[r: wert]"/>
				<input type="hidden" name="E1" value="[r: e1]"/>
				<input type="hidden" name="E2" value="[r: e2]"/>
				<input type="hidden" name="E3" value="[r: e3]"/>
				<input type="hidden" name="image" value=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/book.png")]/>
				<input type="hidden" name="modMacro" value="probeTalentMods@this"/>
				<input type="hidden" name="gruppe" value="[r: gruppe]"/>
				<!-- Bei einer Unfaehigkeit wird der beste Wuerfel neu gerollt.
				Eine Begabung wird momentan nicht beachtet da hier eine Nutzereingabe erforderlich waere.
				Bei einer Begabung kann man sich den Wuerfel zum rerollen aussuchen.-->
				[r,if(hasTrait("Nachteile", "Unfähig ("+tname+")") == 1),Code:{
					<input type="hidden" name="reroll" value="best"/>
				}]
				[r,if(hasTrait("Vorteile", "Begabung ("+tname+")") == 1),Code:{
					<input type="hidden" name="reroll" value="worst"/>
				}]
			</form>
		</div>
	</body>
</html>
}]