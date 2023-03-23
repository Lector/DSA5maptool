[h: actionLink = macroLinkText("counterProcess@this", "")]
[dialog5("counter", "width=507; height=240; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Counter setzen</title>
		<link rel='stylesheet' type='text/css' href='lib://this/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Counter")]
				<table style='border-spacing: 0px; padding: 5px;'>
					<tr>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td>
										Startwert:
									</td>
									<td>
										<input type='text' name='startwert' size='3' maxlength='3' value='0'>
									</td>
								</tr>
								<tr>
									<td>
										Titel:
									</td>
									<td>
										<input type='text' name='titel' size='10' maxlength='30' value=''>
									</td>
								</tr>
							</table>
						</td>
						<td width='10px'>
							&nbsp;
						</td>
						<td>
							[h: button = tableImage("forms", 100)]
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