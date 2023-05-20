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

[h,if(getStrProp(PlayerOpt, "lastFrame") == 1): cLastFrame = "checked='checked'"; cLastFrame = ""]

[h: actionLink = macroLinkText("playerOptionsProcess@this", "")]
[dialog5("playerOptions", "width=500; height=300; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Token-Einstellungen</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Optionen")]
				<table style='border-spacing: 0px;'>
					<tr>
						<td valign='top'>
							<table style='border-spacing: 0px; font-weight: bold;'>
								<tr>
									<td>
										Allgemeine Optionen
									</td>
								</tr>
							</table>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										<input type='checkbox' name='fLastFrame' value='1' [r: cLastFrame]>
									</td>
									<td>
										Beim öffnen des Charakterbogens immer zuletzt angezeigte Seite öffnen
									</td>
								</tr>
							</table>
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