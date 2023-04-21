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

[h: actionLink = macroLinkText("chareditImprovementsProcess@this", "")]
[dialog5("chareditImprovements", "width=600; height=470; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Beschwörung verbessern</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Wesen verbessern")]
				Jede Verbesserung verbraucht eine bei der Beschwörung erreichte QS, welche dann nicht mehr für Dienste genutzt werden kann.
				<table style='border-spacing: 0px; margin: 12px auto 0px auto;'>
					<tr>
						<td>
							<input type="checkbox" name="offensive">
						</td>
						<td>
							Offensive Verbesserung (+2 AT, +4 TP)
						</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" name="defensive">
						</td>
						<td>
							Defensive Verbesserung (+2 PA, +2 RS, +10 LeP)
						</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" name="speed">
						</td>
						<td>
							Schnelligkeitsverbesserung (+2 GS, +2 AW)
						</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" name="magic">
						</td>
						<td>
							Magische Verbesserung (+4 FW für alle Zauber)
						</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" name="resistance">
						</td>
						<td>
							Resistenzverbesserung (+2 ZK, +2 SK, Resistenz gegen magische Waffen)
						</td>
					</tr>
					[r,if(listContains("Chimäre, Daimonid, Pflanzenchimäre", Typus) == 0),Code:{
					<tr>
						<td>
							<input type="checkbox" name="mental">
						</td>
						<td>
							Geistige Verbesserung (+2 geistige Eigenschaften)
						</td>
					</tr>
					}]
					<tr>
						<td>
							<input type="checkbox" name="body">
						</td>
						<td>
							Körperliche Verbesserung (+2 körperliche Eigenschaften)
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
										<td>Wesen verbessern</td>
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