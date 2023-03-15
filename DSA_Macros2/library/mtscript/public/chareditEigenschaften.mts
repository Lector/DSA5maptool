[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: actionLink = macroLinkText("chareditEigenschaftenProcess@this", "")]
[dialog5("chareditEigenschaften", "width=548; height=613; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Eigenschaften &amp; Basiswerte editieren</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Eigenschaften")]
				<table style="margin: 0px auto 0px auto;">
					<tr>
						<td>
							Name: 
						</td>
						<td colspan=3>
							<input type='text' name='oName' value="[r: getName()]" size=20>
						</td>
					</tr>
				</table>
				<table style="margin: 0px auto 0px auto;">
					<tr>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td>
										Mut: 
									</td>
									<td>
										<input type='text' name='oMU' size='2' maxlength='2' value='[r: MU]'>
									</td>
								</tr>
								<tr>
									<td>
										Klugheit: 
									</td>
									<td>
										<input type='text' name='oKL' size='2' maxlength='2' value='[r: KL]'>
									</td>
								</tr>
								<tr>
									<td>
										Intuition: 
									</td>
									<td>
										<input type='text' name='oIN' size='2' maxlength='2' value='[r: IN]'>
									</td>
								</tr>
								<tr>
									<td>
										Charisma: 
									</td>
									<td>
										<input type='text' name='oCH' size='2' maxlength='2' value='[r: CH]'>
									</td>
								</tr>
								<tr>
									<td>
										Fingerfertigkeit: 
									</td>
									<td>
										<input type='text' name='oFF' size='2' maxlength='2' value='[r: FF]'>
									</td>
								</tr>
								<tr>
									<td>
										Gewandheit: 
									</td>
									<td>
										<input type='text' name='oGE' size='2' maxlength='2' value='[r: GE]'>
									</td>
								</tr>
								<tr>
									<td>
										Konstitution: 
									</td>
									<td>
										<input type='text' name='oKO' size='2' maxlength='2' value='[r: KO]'>
									</td>
								</tr>
								<tr>
									<td>
										Körperkraft: 
									</td>
									<td>
										<input type='text' name='oKK' size='2' maxlength='2' value='[r: KK]'>
									</td>
								</tr>
								<tr>
									<td>
										AP gesamt:
									</td>
									<td>
										<input type='text' name='oAPgesamt' size='3' maxlength='6' value='[r: APgesamt]'>
									</td>
								</tr>
								<tr>
									<td>
										AP verfügbar:
									</td>
									<td>
										<input type='text' name='oAPverfuegbar' size='3' maxlength='6' value='[r: APverfuegbar]'>
									</td>
								</tr>
								<tr>
									<td>
										AP ausgegeben:
									</td>
									<td>
										<input type='text' name='oAPausgegeben' size='3' maxlength='6' value='[r: APausgegeben]'>
									</td>
								</tr>
								<tr>
									<td height=26>
									</td>
								</tr>
							</table>
						</td>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td>
										Lebensenergie:
									</td>
									<td>
										<input type='text' name='oLE' size='3' maxlength='4' value='[r: MaxLeP]'>
									</td>
								</tr>
								<tr>
									<td>
										Schips:
									</td>
									<td>
										<input type='text' name='oSchipsMax' size='3' maxlength='3' value='[r: SchipsMax]'>
									</td>
								</tr>
								<tr>
									<td>
										Astralenergie:
									</td>
									<td>
										<input type='text' name='oAE' size='3' maxlength='3' value='[r: MaxAsP]'>
									</td>
								</tr>
								<tr>
									<td>
										Karmaenergie:
									</td>
									<td>
										<input type='text' name='oKE' size='3' maxlength='3' value='[r: MaxKaP]'>
									</td>
								</tr>
								<tr>
									<td>
										Seelenkraft:
									</td>
									<td>
										<input type='text' name='oSK' size='2' maxlength='2' value='[r: SK]'>
									</td>
								</tr>
								<tr>
									<td>
										Zähigkeit:
									</td>
									<td>
										<input type='text' name='oZK' size='2' maxlength='2' value='[r: ZK]'>
									</td>
								</tr>
								<tr>
									<td>
										Ausweichen / VW:
									</td>
									<td>
										<input type='text' name='oAW' size='2' maxlength='2' value='[r: AW]'>
									</td>
								</tr>
								<tr>
									<td>
										INI:
									</td>
									<td>
										<input type='text' name='oINI' size='2' maxlength='2' value='[r: INI]'>
									</td>
								</tr>
								<tr>
									<td>
										GS:
									</td>
									<td>
										<input type='text' name='oGS' size='2' maxlength='5' value='[r: GS]'>
									</td>
								</tr>
								<tr>
									<td>
										Aktionen: 
									</td>
									<td>
										<input type='text' name='oAktionen' size='2' maxlength='2' value='[r: Aktionen]'>
									</td>
								</tr>
								<tr>
									<td>
										Typus:
									</td>
									<td>
										<select size='1' name='oTypus'>
										[h: alleTypen = typen()]
										[r,foreach(aktTypus, alleTypen, ""),Code:
										{
											<option value="[r: aktTypus]" [r,if(Typus == aktTypus): selected="selected"]>[r: aktTypus]</option>
										}]
										</select>
									</td>
								</tr>
								<tr>
									<td>
										Zonenmodell:
									</td>
									<td>
										<select size='1' name='oTrefferzonenmodell'>
										[r,for(i,0,5,1,""),Code:
										{
											<option value="[r: i]" [r,if(Trefferzonenmodell == i): selected="selected"]>[r: trefferzonenmodell(i)]</option>
										}]
										</select>
									</td>
								</tr>
							</table>
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