[h: switchToken(arg(0))]
[h,if(json.length(macro.args) > 1): group = arg(1); group = ""]

[h: actionLink = macroLinkText("chareditTraitAddProcess@this", "")]
[dialog5("chareditTraitAdd", "width=425; height=350; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Vorteil, Nachteil oder Sonderfertigkeit hinzufügen</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Neues Element")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td>
							Typ:
						</td>
						<td>
							<select name='Typ' size='1'>
								<option value="Vorteile" [r,if(group == "Vorteile"): "selected"]>Vorteil</option>
								<option value="Nachteile" [r,if(group == "Nachteile"): "selected"]>Nachteil</option>
								<option value="AllgemeineSF" [r,if(group == "AllgemeineSF"): "selected"]>Allgemeine SF</option>
								<option value="KampfSF" [r,if(group == "KampfSF"): "selected"]>Kampf SF</option>
								<option value="MagieSF" [r,if(group == "MagieSF"): "selected"]>Magische SF</option>
								<option value="KarmaleSF" [r,if(group == "KarmaleSF"): "selected"]>Karmale SF</option>
								<option value="Zaubertricks" [r,if(group == "Zaubertricks"): "selected"]>Zaubertrick</option>
								<option value="Segnungen" [r,if(group == "Segnungen"): "selected"]>Segnung</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>
							Name:
						</td>
						<td>
							<input type='text' name='Name' size='25' maxlength='100' value=''>
						</td>
					</tr>
					<tr>
						<td>
							Stufe (falls vorhanden):
						</td>
						<td>
							<select name='Stufe' size='1'>
								<option value=0 selected='selected'>&nbsp</option>
								[r,for(i, 1, 21, 1, ""),Code:{
									<option value=[r:i]>[r: romanNumeral(i)]</option>
								}]
							</select>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 10px auto 10px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Element hinzufügen</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]