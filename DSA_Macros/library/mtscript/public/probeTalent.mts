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

[h: tname = listGet(uebergabe, 0)]
[h: e1 = listGet(uebergabe, 1)]
[h: e2 = listGet(uebergabe, 2)]
[h: e3 = listGet(uebergabe, 3)]

[h,if(e1 == "--" || e2 == "--" || e3 == "--"), Code:
	{
		[h,macro("inputFail@Lib:macros"): "3W20Fail"]
	};{}
]

<!-- Hier loesen wir MU KL oder aehnliches in den Eigenschaftswert auf -->
[h: e1wert = eval(e1)]
[h: e2wert = eval(e2)]
[h: e3wert = eval(e3)]
[h: wert = listGet(uebergabe, 4)]
[h: gruppe = listGet(uebergabe, 5)]

<!-- Charaktere im Blutrausch können laut Regeln nur Körpertalente und Einschuechtern -->
[h,if(getState("Blutrausch") == 1 && gruppe != "Koerper" && tname != "Einschüchtern"),Code:
{
	[h,macro("inputFail@Lib:macros"): "blutrausch"]
};{}]

<!-- Es werden die aktuellen Eigenschaften ermittelt. Durch temporaere Effekte oder Zustaende koennen sie geaendert sein -->
[h,macro("probeGetAktWert@Lib:macros"): e1]
[h: aktE1wert = macro.return]
[h,macro("probeGetAktWert@Lib:macros"): e2]
[h: aktE2wert = macro.return]
[h,macro("probeGetAktWert@Lib:macros"): e3]
[h: aktE3wert = macro.return]

[h: actionLink = macroLinkText("probe3w20Process@Lib:macros", "")]
[dialog5("probe", "width=750; height=476; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Fertigkeitsprobe w&uuml;rfeln</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
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
						[r,macro("probeMod@Lib:macros"): ""]
						<td width='10px'>
							&nbsp;
						</td>
						<td>
							[h: button = tableImage("forms", 11)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@Lib:macros"): currentToken()]
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
								[r,macro("probeFWPlus@Lib:macros"): json.append(currentToken(), tname)]
								[r,macro("probeSpezialisierung@Lib:macros"): tname]
								[r,macro("probeBelastung@Lib:macros"): tname]
								[r,macro("probeParalyse@Lib:macros"): json.append(gruppe, tname)]
								[r,macro("probeSozialerStand@Lib:macros"): tname]
								[r,macro("probeMirakel@Lib:macros"): tname]
								[r,macro("probeGottgefaellig@Lib:macros"): tname]
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
				<input type="hidden" name="image" value="3"/>
				<input type="hidden" name="modMacro" value="probeTalentMods@Lib:macros"/>
				<input type="hidden" name="gruppe" value="[r: gruppe]"/>
				<!-- Bei einer Unfaehigkeit wird der beste Wuerfel neu gerollt.
				Eine Begabung wird momentan nicht beachtet da hier eine Nutzereingabe erforderlich waere.
				Bei einer Begabung kann man sich den Wuerfel zum rerollen aussuchen.-->
				[r,if(hasTrait("Nachteile", "Unfähig ("+tname+")") == 1),Code:{
					<input type="hidden" name="reroll" value="best"/>
				};{}]
			</form>
		</div>
	</body>
</html>
}]