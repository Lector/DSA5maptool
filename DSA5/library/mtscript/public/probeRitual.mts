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

[h: uebergabe = macro.args]

[h: name = listGet(uebergabe, 0)]
[h: e1 = listGet(uebergabe, 1)]
[h: e2 = listGet(uebergabe, 2)]
[h: e3 = listGet(uebergabe, 3)]
[h: e1wert = eval(e1)]
[h: e2wert = eval(e2)]
[h: e3wert = eval(e3)]
[h: wert = listGet(uebergabe, 4)]
[h: modWert = wert]
[h: wiki = listGet(uebergabe, 5)]

[h,if(hasTrait("MagieSF", "Improvisiertes Ritual") == 1), Code:
	{
		[ritualplatzmalus = -2]
	};
	{
		[ritualplatzmalus = -3]
	}
]

[h,macro("probeGetAktWert@this"): e1]
[h: aktE1wert = macro.return]
[h,macro("probeGetAktWert@this"): e2]
[h: aktE2wert = macro.return]
[h,macro("probeGetAktWert@this"): e3]
[h: aktE3wert = macro.return]

[h: actionLink = macroLinkText("probe3w20Process@this", "")]
[dialog5("probe", "width=1125; height=600; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Ritual wirken</title>
		<link rel='stylesheet' type='text/css' href='lib://this/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Ritual wirken")]
				<div class='title'>
					[r: name]
				</div>
				<table style='border-spacing: 0px; padding: 5px; margin: 0px auto 0px auto;'>
					<tr>
						[r,macro("probeMod@this"): ""]
						<td width='10px'>
							&nbsp;
						</td>
						<td>
							[h: button = tableImage("forms", 97)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@this"): currentToken()]
				<hr/>
				<table style='margin: 0px auto 0px auto;'>
					<tr>
						<td valign='top'>
							<div class='label'>
								Zauber
							</div>
						</td>
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										FW:
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
							[r,macro("probeSpruch@this"): setStrProp(setStrProp("", "Wert", modwert), "Bezeichnung", "Ritual")]
						</td>
					</tr>
				</table>
				<hr/>
				<table style='margin: 0px auto 0px auto;'>
					<tr>
						<td valign='top'>
							<div class='label'>
								Ort
							</div>
						</td>
						<td style='padding-left: 1px;' valign='top'>
							<table style='border-spacing: 0px;' cellpadding='0'>
								<tr>
									<td>
										<table style='border-spacing: 0px;' cellpadding='1'>
											<tr>
												<td>
													<input type='radio' name='Ritualplatz' value='1'>
												</td>
												<td>
													Heiligtum oder magischer Ort (+1)
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='Ritualplatz' value='0' checked='checked'>
												</td>
												<td>
													kein besonderer Ort (0)
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='Ritualplatz' value='[r: ritualplatzmalus]'>
												</td>
												<td>
													Falscher Ritualplatz ([r: ritualplatzmalus])
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>
						<td valign='top'>
							<div class='label'>
								Hilfsmittel
							</div>
						</td>
						<td style='padding-left: 1px;' valign='top'>
							<table style='border-spacing: 0px;' cellpadding='0'>
								<tr>
									<td>
										<table style='border-spacing: 0px;' cellpadding='1'>
											<tr>
												<td>
													<input type='checkbox' name='hilfsmittelKleidung' value='1'>
												</td>
												<td>
													Passende Kleidung (+1)
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td>
										<table style='border-spacing: 0px;' cellpadding='1'>
											<tr>
												<td>
													<input type='checkbox' name='hilfsmittelGeraetschaften' value='1'>
												</td>
												<td>
													Besonders geeignete Gerätschaften (+1)
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>
						<td valign='top'>
							<div class='label'>
								Zeit
							</div>
						</td>
						<td style='padding-left: 1px;' valign='top'>
							<table style='border-spacing: 0px;' cellpadding='0'>
								<tr>
									<td>
										<table style='border-spacing: 0px;' cellpadding='1'>
											<tr>
												<td>
													<input type='radio' name='Zeit' value='1'>
												</td>
												<td>
													<span title='Mondstand meist Voll- oder Neumond, Sternenkonstellation'>Passende Konstellation (+1)</span>
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='Zeit' value='0' checked='checked'>
												</td>
												<td>
													keine besondere Konstellation (0)
												</td>
											</tr>
											
											<tr>
												<td>
													<input type='radio' name='Zeit' value='-1'>
												</td>
												<td>
													Unpassende Konstellation (-1)
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<input type="hidden" name="Wiki" value="[r: wiki]"/>
				<input type="hidden" name="Name" value="[r: name]"/>
				<input type="hidden" name="Wert" value="[r: wert]"/>
				<input type="hidden" name="E1" value="[r: e1]"/>
				<input type="hidden" name="E2" value="[r: e2]"/>
				<input type="hidden" name="E3" value="[r: e3]"/>
				<input type="hidden" name="image" value="76"/>
				<input type="hidden" name="patzerTabelle" value="patzerZauber"/>
				<input type="hidden" name="modMacro" value="probeRitualMods@this"/>
				<input type="hidden" name="kritText" value="Die AE-Kosten werden halbiert.<br/>Auf die FP dürfen weitere 1W6 Punkte aufaddiert werden"/>
				<input type="hidden" name="patzer19" value="[r: hasTrait('Nachteile', 'Wilde Magie')]"/>
			</form>
		</div>
	</body>
</html>
}]