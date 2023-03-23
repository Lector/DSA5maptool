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

[h,if(hasTrait("KarmaleSF", "Improvisiertes Ritual") == 1), Code:
{
	[ritualplatzmalus = -2]
};
{
	[ritualplatzmalus = -3]
}]

[h,macro("probeGetAktWert@this"): e1]
[h: aktE1wert = macro.return]
[h,macro("probeGetAktWert@this"): e2]
[h: aktE2wert = macro.return]
[h,macro("probeGetAktWert@this"): e3]
[h: aktE3wert = macro.return]

[h: actionLink = macroLinkText("probe3w20Process@this", "")]
[dialog5("probe", "width=1125; height=750; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Zeremonie wirken</title>
		<link rel='stylesheet' type='text/css' href='lib://this/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Zeremonie wirken")]
				<div class='title'>
					[r: name]
				</div>
				<table style='padding: 5px; margin: 0px auto 0px auto;'>
					<tr>
						[r,macro("probeMod@this"): ""]
						<td width='10px'>
							&nbsp;
						</td>
						<td>
							[h: button = tableImage("forms", 156)]
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
								Zeremonie
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
						[r,macro("probeSpruch@this"): setStrProp(setStrProp("", "Wert", modwert), "Bezeichnung", "Zeremonie")]
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
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<input type='radio' name='Ort' value='2'>
									</td>
									<td>
										Heiligtum der Gottheit (+2)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='Ort' value='1'>
									</td>
									<td>
										Tempel der Gottheit (geweihter Boden) (+1)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='Ort' value='0' checked='checked'>
									</td>
									<td>
										kein besonderer Ort (0)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='Ort' value='-1'>
									</td>
									<td>
										Heiligtum oder Tempel eines Gottes außerhalb<br>
										des Pantheons der eigenen Gottheit (-1)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='Ort' value='-2'>
									</td>
									<td>
										Heiligtum oder Tempel eines feindseligen Gottes (-2)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='Ort' value='-3'>
									</td>
									<td>
										Unheiligtum eines Erzdämonen (-3)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='Ort' value='-4'>
									</td>
									<td>
										Unheiligtum oder Tempel des Namenlosen (-4)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='Ort' value='-5'>
									</td>
									<td>
										Unheiligtum des Gegenspielers der eigenen Gottheit (-5)
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
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<input type='checkbox' name='Hilfsmittel' value='1'>
									</td>
									<td>
										<span title="Nutzung von mit Objektweihe versehenen Traditionsartefakte der Kirche (z.B. Sonnenzepter, Rondrakämme)">Traditionsartefakt (+1)</span>
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
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<input type='radio' name='Zeit' value='2'>
									</td>
									<td>
										Feiertag des eigenen Gottes (+2)
									</td>
								</tr>
								<tr>
									<td>
										<input type='radio' name='Zeit' value='1'>
									</td>
									<td>
										Monat des eigenen Gottes (+1)
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
										<input type='radio' name='Zeit' value='-5'>
									</td>
									<td>
										Namenlose Tage (-5)
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
				<input type="hidden" name="patzerTabelle" value="patzerLiturgie"/>
				<input type="hidden" name="modMacro" value="probeZeremonieMods@this"/>
				<input type="hidden" name="image" value="78"/>
				<input type="hidden" name="kritText" value="Die KE-Kosten werden halbiert.<br/>Auf die FP dürfen weitere 1W6 Punkte aufaddiert werden"/>
			</form>
		</div>
	</body>
</html>
}]