[h: actionLink = macroLinkText("weblinkAddProcess@Lib:tools", "")]
[dialog5("weblinkAdd", "width=466; height=308; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Weblink hinzuf&uuml;gen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
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