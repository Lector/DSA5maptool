<!-- Abfrage Player/GM - impersonate ... -->
[h,macro("abfrageImpersonate@Lib:macros"): ""]
[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[switchToken(selectID)]
	};{}
]

[h: actionLink = macroLinkText("probeNahrungssucheProcess@Lib:Wildnis", "")]
[dialog5("probeNahrungssuche", "width=814; height=550; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Nahrung Sammeln</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Nahrung sammeln")]
				<table style='margin: 5px auto 7px auto;'>
					<tr>
						[r,macro("probeMod@Lib:macros"): ""]
						<td>
							[h: button = tableImage("forms", 11)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@Lib:macros"): ""]
				<hr/>
				[r,macro("pflanzensucheInfo@Lib:Wildnis"): ""]
				<table style="margin: 0px auto 0px auto;">
					<tr>
						<td valign=top style="padding-left: 20;">
							<div class="label">
								Einstellungen
							</div>
						</td>
						<td valign=top>
							<table>
								[r,macro("probeSuchdauer@Lib:Wildnis"): ""]
							</table>
						</td>
						<td valign=top>
							<div class="label">
								Umgebung
							</div>
						</td>
						<td>
							<table>
								<tr>
									<td colspan=2>
										Gegend:
									</td>
									<td>
										<select id='gegend' name='gegendSelection' size='1'>
											<option value='-2'>Dschungel (-2)</option>
											<option value='-5'>Eiswüste	(-5)</option>
											<option value='-1'>Flussauen (-1)</option>
											<option value='-1'>Gebirge (-1)</option>
											<option value='+1'>Kulturland (+1)</option>
											<option value='0'>Steppe (0)</option>
											<option value='-1'>Sumpf (-1)</option>
											<option value='2' selected>Wald (+2)</option>
											<option value='1'>Waldrand (+1)</option>
											<option value='-5'>Wüste (-5)</option>
											<option value='-3'>Wüstenrandgebiet (-3)</option>
										</select>
									</td>
								</tr>
								[r,macro("probeGelaendekunde@Lib:Wildnis"): json.append(currentToken(), encode(json.append("", "Dschungelkundig", "Eis- und Schneekundig", "", "Gebirgskundig", "Kulturlandkundig", "Steppenkundig", "Sumpfkundig", "Waldkundig", "Waldkundig", "Wüstenkundig", "Wüstenkundig")))]
								[r,macro("probeWetter@Lib:Wildnis"): ""]
							</table>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]
