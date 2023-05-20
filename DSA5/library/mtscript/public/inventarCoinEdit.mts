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

[h: actionLink = macroLinkText("inventarCoinEditProcess@this", "")]
[dialog5("inventarCoinEdit", "width=425; height=370; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Vermögen editieren</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Geldbeutel")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td>
							Kreuzer:
						</td>
						<td>
							<input type='text' name='mKreuzer' size='2' maxlength='1' value='[r: json.get(InventarMisc, "kreuzer")]'>
						</td>
					</tr>
					<tr>
						<td>
							Heller:
						</td>
						<td>
							<input type='text' name='mHeller' size='2' maxlength='1' value='[r: json.get(InventarMisc, "heller")]'>
						</td>
					</tr>
					<tr>
						<td>
							Silbertaler:
						</td>
						<td>
							<input type='text' name='mSilbertaler' size='2' maxlength='1' value='[r: json.get(InventarMisc, "silbertaler")]'>
						</td>
					</tr>
					<tr>
						<td valign='top'>
							Dukaten:
						</td>
						<td>
							<input type='text' name='mDukaten' size='4' maxlength='5' value='[r: json.get(InventarMisc, "dukaten")]'>
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
										<td>Jetzt ändern</td>
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