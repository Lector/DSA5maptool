[h: abfrageImpersonate()]
[h,if(isGM() == 0),Code:
{
	[h,macro("inputFail@this"): "gm"]
}]

[h,if(hasImpersonated() == 0), Code:
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

[h,if(getSize() != "Tiny"), Code:
{
	[h,macro("inputFail@this"): "swarmTiny"]
};{}]

[h: actionLink = macroLinkText("createSwarmProcess@this", "")]
[dialog5("createSwarm", "width=467; height=350; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Schwarmwesen aus "[r:getName()]" erzeugen</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Schwarm erzeugen")]
				<table style='border-spacing: 0px;' cellpadding='3'>
					<tr>
						<td valign='middle'>
							Anzahl:
						</td>
						<td valign='middle' colspan=4>
							<input type='text' name='count'/>
						</td>
					</tr>
					<tr>
						<td valign='middle'>
							Grundgröße (GG):
						</td>
						<td valign='middle'>
							<input type='text' name='gg' value='[r: SchwarmGG]'/>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 12px 0px 0px 0px; font-size: 1pt;' width='360'>
					<tr>
						<td style='border-top: 1px solid #7b5547;'>
							&nbsp;
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 10px auto 8px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Schwarm erzeugen</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
				<input type='hidden' name='token' value='[r: currentToken()]'/>
			</form>
		</div>
	</body>
</html>
}]