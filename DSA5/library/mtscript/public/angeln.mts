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

<!-- lese Sonderfertigkeiten aus-->
[h: hasSpezVerbergen = hasTrait("AllgemeineSF", "Fertigkeitsspezialisierung (Verbergen: Sich Verstecken)")]

[h: actionLink = macroLinkText("angelnProcess@this", "")]
[dialog5("angeln", "width=814; height=600; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Angeln</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Angeln")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td>
							<table class="probe">
								<tr>
									[r,macro("probeMod@this"): ""]
								</tr>
							</table>
						</td>
						<td>
							[h: button = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/d20.png")]
							<button type="submit" name="action">
								<img src="[r: button]"/> Probe würfeln
							</button>
						</td>
					</tr>
				</table>

				[r,macro("probeChat@this"): currentToken()]
				<hr/>

				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td valign=top>
							<div class="label">
								Fischen & Angeln
							</div>
						</td>
						<td valign=top style="white-space: nowrap;">
							[r: probeInfo(currentToken(), "Fischen & Angeln")]
						</td>
						<td width=20>&nbsp;</td>
						
						<td valign=top style="white-space: nowrap;">
							<table><tr>
							[r: probeBelastung(currentToken(), "Fischen & Angeln")]
							[r: probeParalyse(currentToken(), "Natur", "Fischen & Angeln")]
							[r: probeMirakel(currentToken(), "Fischen & Angeln")]
							[r: probeGottgefaellig(currentToken(), "Fischen & Angeln")]
							</tr></table>
						</td>
					</tr>
				</table>

				<hr/>

				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td valign=top>
							<div class="label">
								Verbergen<br>(Sich verstecken)
							</div>
						</td>
						<td valign=top style="white-space: nowrap;">
							[r: probeInfo(currentToken(), "Verbergen")]
						</td>
						<td width=20>&nbsp;</td>
						
						<td valign=top style="white-space: nowrap;">
							<table><tr>
							[r: probeBelastung(currentToken(), "Verbergen")]
							[r: probeParalyse(currentToken(), "Koerper", "Verbergen")]
							[r: probeMirakel(currentToken(), "Verbergen")]
							[r: probeGottgefaellig(currentToken(), "Verbergen")]
							</tr></table>
						</td>
					</tr>
				</table>

				<hr/>

				<table style="margin: 0px auto 0px auto;">
					<tr>
						<td>
							<table>
								<tr>
									<td rowspan=3 valign=top>
										<div class="label">
											Umgebung
										</div>
									</td>
									<td>
										Wetter:
									</td>
									<td>
										<select name='wetterSelection' size='1'>
											<option value='0'>Angenehm (0)</option>
											<option value='-1'>Regen / Schnee (-1)</option>
											<option value='-2'>Stum (-2)</option>
											<option value='-3'>Orkan (-3)</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>
										Angelplatz:
									</td>
									<td>
										<select name='eignungSelection' size='1'>
											<option value='3'>Sehr gut geeignet (+3)</option>
											<option value='2'>Gut geeignet (+2)</option>
											<option value='1'>Besser geeignet (+1)</option>
											<option value='0' selected='selected'>Normal geeignet (0)</option>
											<option value='-1'>Schlechter geeignet (-1)</option>
											<option value='-2'>Schlecht geeignet (-2)</option>
											<option value='-3'>Sehr schlecht geeignet (-3)</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>
										Gewässer:
									</td>
									<td>
										<select name='gewaesser' size='1'>
											<option value='Salzwassertiere'>Salzwasser</option>
											<option value='Süßwassertiere'>Süßwasser</option>
										</select>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]

