[h: switchToken(arg(0))]
[h,if(json.length(macro.args) > 1): check = arg(1); check = ""]
[h: blind = 0]
[h,if(check == ""),Code:{
	[verb = "anlegen"]
};{
	[verb = "bearbeiten"]
}]

[h: actionLink = macroLinkText("checkEditProcess@this", "")]
[dialog5("checkEdit", "width=600; height=650; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: getName(currentToken())] - Probe [r: verb]</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]" method="json">
				[r: header("Probe "+verb)]
				[r: checkForm(check)]
				<table style='border-spacing: 0px; margin: 11px auto 8px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Probe [r: verb]</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
				<input type="hidden" name="token" value="[r: currentToken()]"/>
                <input type="hidden" name="check" value="[r: encode(check)]"/>
			</form>
		</div>
	</body>
</html>
}]