[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: actionLink = macroLinkText("chareditTraitAddProcess@this", "")]
[dialog5("chareditTraitAdd", "width=425; height=350; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Vorteil, Nachteil oder Sonderfertigkeit hinzufügen</title>
		<link rel='stylesheet' type='text/css' href='lib://this/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Element hinzufügen")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td>
							Typ:
						</td>
						<td>
							<select name='Typ' size='1'>
								<option value="Vorteile">Vorteil</option>
								<option value="Nachteile">Nachteil</option>
								<option value="AllgemeineSF">Allgemeine SF</option>
								<option value="KampfSF">Kampf SF</option>
								<option value="MagieSF">Magische SF</option>
								<option value="KarmaleSF">Karmale SF</option>
								<option value="Zaubertricks">Zaubertrick</option>
								<option value="Segnungen">Segnung</option>
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
							[h: button = tableImage("forms", 112)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]