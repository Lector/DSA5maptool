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

[h: num = macro.args]

[h: item = json.get(Inventar, num)]

[h: actionLink = macroLinkText("inventarItemEditProcess@this", "")]
[dialog5("inventarItemEdit", "width=425; height=410; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Gegenstand editieren</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]"  method="json">
				[r: header("Gegenstand")]
				<table style='border-spacing: 0px;'>
					<tr>
						<td>
							Anzahl:
						</td>
						<td>
							<input type='text' name='iAnzahl' size='2' maxlength='2' value='[r: json.get(item, "anzahl")]'>
						</td>
					</tr>
					<tr>
						<td>
							Gegenstand:
						</td>
						<td>
							<input type='text' name='iItem' size='10' maxlength='40' value='[r: json.get(item, "gegenstand")]'>
						</td>
					</tr>
					<tr>
						<td>
							Einzelgewicht (S):
						</td>
						<td>
							<input type='text' name='iGewicht' size='5' maxlength='5' value='[r: json.get(item, "gewicht")]'>
						</td>
					</tr>
					<tr>
						<td valign='top'>
							Beschreibung:
						</td>
						<td>
							<textarea name='iBeschreibung' cols='10' rows='4'>[r,if(json.get(item, "beschreibung") == "Keine Beschreibung vorhanden"): output = ""; output = json.get(item, "beschreibung")]</textarea>
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
				<input type='hidden' name='numItem' value='[r: num]'>
				<input type='hidden' name='iBehaelter' value='[r: json.get(item, "behaelter")]'>
			</form>
		</div>
	</body>
</html>
}]