[h,if(isGM() == 1 && hasImpersonated() == 0): selectID = getSelected(); selectID = getImpersonated()]
[if(listCount(selectID) != 1), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos.Macros"): "copyTokenDataSelect"]
	};{}
]

[h: actionLink = macroLinkText("copyTokenDataProcess@this", "")]
[dialog5("copyTokenData", "width=425; height=706; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Tokendaten &uuml;bertragen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Daten übertragen")]
				<table style='border-spacing: 0px;' width='330'>
					<tr>
						<td>
							Bitte w&auml;hle die zu kopierenden Daten aus, die du von einem anderen Token auf diesen Token &uuml;bertragen m&ouml;chtest.
							<br><br>
							W&auml;hle anschlie&szlig;end mit der Maus auf der Spieloberfl&auml;che den Token aus, von dem du die Daten beziehen m&ouml;chtest, und klicke dann unten auf &quot;Weiter&quot;.
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin-top: 10px;'>
					<tr>
						<td>
							<input type='checkbox' name='cTokenbilder' value='1' checked='checked'>
						</td>
						<td>
							Tokenbild, Portrait &amp; Handout
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='cInventar' value='1'>
						</td>
						<td>
							Inventar &amp; Geldbeutel
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='cNotizen' value='1' checked='checked'>
						</td>
						<td>
							Notizen
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='cOptions' value='1' checked='checked'>
						</td>
						<td>
							Token-/ Charaktereinstellungen
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='cEnergie' value='1' checked='checked'>
						</td>
						<td>
							Aktuelle Energiest&auml;nde (LE, SchiPs, AE, KE)
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='cNahkampf' value='1'>
						</td>
						<td>
							Nahkampfwaffen
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='cFernkampf' value='1'>
						</td>
						<td>
							Fernkampfwaffen
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='cRuestung' value='1'>
						</td>
						<td>
							R&uuml;stungen
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='cStatus' value='1' checked='checked'>
						</td>
						<td>
							Status und Zust&auml;nde
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='cTemp' value='1' checked='checked'>
						</td>
						<td>
							Tempor&auml;re Effekte
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin-top: 10px;' width='300'>
					<tr>
						<td style='text-align: center; font-weight: bold;'>
							Achtung!
						</td>
					</tr>
					<tr>
						<td style='text-align: center;'>
							Wenn du fortf&auml;hrst werden einige Werte des aktuellen Tokens &uuml;berschrieben!
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 13px auto 10px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 145)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				<input type='hidden' name='zToken' value='[r: selectID]'>
			</form>
		</div>
	</body>
</html>
}]