[h: check = ""]
[h,if(json.length(macro.args) > 0): check = arg(0)]
[h,if(check == ""): label = ""; label = checkLabel(check) + " - "]

[h: actionLink = macroLinkText("requestCheckProcess@this", "")]
[dialog5("requestCheck", "width=600; height=740; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: label]Spieler zur Probe auffordern</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r: actionLink]" method="json">
				[r: header("Probe")]
				[r: checkForm(check)]
				
				<br>
				<div class="header" style="text-align: center;">
					<br>Wähle die Spieler aus, welche die Probe würfeln dürfen:<br>
				</div>
					
				<div class="table-container">
					
					[h: players = getAllPlayerNames("json")]
					[r,foreach(player, players, ""),if(!isGM(player)),Code:{
					<div>
						<input type="checkbox" name="[r:player]" checked/>
					</div>
					<div>
						[r: player]
					</div>
					}]
				</div>

				<table style='border-spacing: 0px; margin: 11px auto 8px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/d20.png")]/></td>
										<td>Probe fordern</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
				<input type="hidden" name="playerNames" value="[r: encode(players)]"/>
			</form>
		</div>
	</body>
</html>
}]