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

[h,macro("probeGetAktWert@this"): e1]
[h: aktE1wert = macro.return]
[h,macro("probeGetAktWert@this"): e2]
[h: aktE2wert = macro.return]
[h,macro("probeGetAktWert@this"): e3]
[h: aktE3wert = macro.return]

[h: actionLink = macroLinkText("probe3w20Process@this", "")]
[dialog5("probe", "width=1125; height=480; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Liturgie wirken</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Liturgie wirken")]
				<table style='margin: 0px auto 0px auto;'>
					<tr>
						<td style='text-align: center; font-size: 14pt; font-weight: bold; color: #482902; border-top: 1px solid #7b5547; border-bottom: 1px solid #7b5547; margin-bottom: 5px;' width='352'>
							[r: name]
						</td>
					</tr>
				</table>
				<table style='padding: 5px; margin: 0px auto 0px auto;'>
					<tr>
						[r,macro("probeMod@this"): ""]
						<td width='10px'>
							&nbsp;
						</td>
						<td>
							[h: button = tableImage("forms", 107)]
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
								Liturgie
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
						[r,macro("probeSpruch@this"): setStrProp(setStrProp("", "Wert", modwert), "Bezeichnung", "Liturgie")]
					</tr>
				</table>
				<input type="hidden" name="Wiki" value="[r: wiki]"/>
				<input type="hidden" name="Name" value="[r: name]"/>
				<input type="hidden" name="Wert" value="[r: wert]"/>
				<input type="hidden" name="E1" value="[r: e1]"/>
				<input type="hidden" name="E2" value="[r: e2]"/>
				<input type="hidden" name="E3" value="[r: e3]"/>
				<input type="hidden" name="patzerTabelle" value="patzerLiturgie"/>
				<input type="hidden" name="modMacro" value="probeLiturgieMods@this"/>
				<input type="hidden" name="image" value="78"/>
				<input type="hidden" name="kritText" value="Die KE-Kosten werden halbiert.<br/>Auf die FP dürfen weitere 1W6 Punkte aufaddiert werden"/>
			</form>
		</div>
	</body>
</html>
}]