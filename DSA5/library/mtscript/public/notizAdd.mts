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

[h: actionLink = macroLinkText("notizAddProcess@this", "")]
[dialog5("notizAdd", "width=424; height=335; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Notiz hinzufügen</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Notiz")]
				<table style='border-spacing: 0px; font-size: 12pt;' width='400'>
					<tr>
						<td width='48'>
							&nbsp;
						</td>
						<td valign='middle'>
							Notiztitel:
						</td>
						<td>
							<input type='text' name='nTitel' size='30' maxlength='30' value=''>
						</td>
						<td width='48'>
							&nbsp;
						</td>
					</tr>
					<tr>
						<td width='48'>
							&nbsp;
						</td>
						<td valign='top'>
							Notiztext:
						</td>
						<td>
							<textarea name='nText' cols='31' rows='3'></textarea>
						</td>
						<td width='48'>
							&nbsp;
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; padding: 0px; margin: 10px auto 5px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Notiz eintragen</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
			</form>
		</div<
	</body>
</html>
}]