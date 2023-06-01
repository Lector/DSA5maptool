[h: switchToken(arg(0))]
[h: weapon = arg(1)]

[h: actionLink = macroLinkText("moveWeaponProcess@this", "")]
[dialog5("moveWeapon", "width=425; height=510; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Auf andere Karte wechseln</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Waffe übertragen")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;' cellpadding='1'>
					<tr>
						<td style='padding-right: 3px; text-align: right'>
							Übertragen an:
						</td>
						<td style='padding-right: 3px; text-align: left'>
							<select size='1' name='target'>
                                [h: others = getTokens("json", json.set("{}", "propertyType", "Basic"))]
								[r,foreach(tok, others, ""),if(getVisible(tok) == 1 || isGM() == 1),Code:
								{
									<option value='[r: tok]'>[r: getName(tok)]</option>
								}]
							</select>
						</td>
					</tr>
				</table>
				<br>
				<table style='border-spacing: 0px; margin: 11px auto 8px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Jetzt ändern</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
                <input type="hidden" name="weapon" value="[r: encode(weapon)]"/>
                <input type="hidden" name="token" value="[r: currentToken()]">
			</form>
		</div>
	</body>
</html>
}]