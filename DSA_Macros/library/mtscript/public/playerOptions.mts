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
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
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
										Beim &Ouml;ffnen des Charakterbogens immer zuletzt angezeigte Seite &ouml;ffnen
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