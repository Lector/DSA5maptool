[h,if(isGM() == 1 && hasImpersonated() == 0): selectID = getSelected(); selectID = getImpersonated()]
[if(listCount(selectID) != 1), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "copyTokenDataSelect"]
	};{}
]

[h: actionLink = macroLinkText("copyTokenDataProcess@this", "")]
[dialog5("copyTokenData", "width=425; height=706; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Tokendaten übertragen</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Daten übertragen")]
				<table style='border-spacing: 0px;' width='330'>
					<tr>
						<td>
							Bitte wähle die zu kopierenden Daten aus, die du von einem anderen Token auf diesen Token übertragen möchtest.
							<br><br>
							Wähle anschließend mit der Maus auf der Spieloberfläche den Token aus, von dem du die Daten beziehen möchtest, und klicke dann unten auf &quot;Weiter&quot;.
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
							Aktuelle Energiestände (LE, SchiPs, AE, KE)
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
							Rüstungen
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='cStatus' value='1' checked='checked'>
						</td>
						<td>
							Status und Zustände
						</td>
					</tr>
					<tr>
						<td>
							<input type='checkbox' name='cTemp' value='1' checked='checked'>
						</td>
						<td>
							Temporäre Effekte
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
							Wenn du fortfährst werden einige Werte des aktuellen Tokens überschrieben!
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 13px auto 10px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Weiter</td>
									</tr>
								</table>
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