[h: actionLink = macroLinkText("weblinkAddProcess@this", "")]
[dialog5("weblinkAdd", "width=466; height=308; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Weblink hinzufügen</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]" method="json">
				[r: header("Neuer Link")]
				<table style='border-spacing: 0px;'>
					<tr>
						<td valign='middle'>
							Linktitel:
						</td>
						<td>
							<input type='text' name='fLinkname' size='30' maxlength='50' value=''>
						</td>
					</tr>
					<tr>
						<td valign='middle'>
							Linkadresse:
						</td>
						<td>
							<input type='text' name='fLinkadress' size='30' maxlength='500' value='http://'>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 9px 0px 8px 0px;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Link hinzufügen</td>
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