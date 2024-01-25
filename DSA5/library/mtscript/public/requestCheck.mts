[h: check = arg(0)]
[h: subChecks = json.get(check, "Checks")]
[h: label = checkLabel(check)]

[h: actionLink = macroLinkText("requestCheckProcess@this", "")]
[dialog5("requestCheck", "width=600; height=500; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: label] - Spieler zur Probe auffordern</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r: actionLink]" method="json">
				[r: header("Probe")]
				<div class="column-container">
					<br>
					<div class="header">
						<span style="white-space: nowrap;">[r: checkLabel(check)]</span>[r,if(json.length(subChecks) > 1): " oder <span style='white-space: nowrap;'>" + checkLabel(check, 1) + "</span>"]:
					</div>
					<div class="text-table">
						[r,for(i,1,7,1,""),Code:{
							[h: info = json.path.read(check, "QS"+i+".Info")]
							[r,if(info != ""): strformat("<div><b>QS%{i}:</b></div><div>%{info}</div>")]
						}]
					</div>
					<br>
					<div class="header">
						<br>Wähle die Spieler aus, welche die Probe würfeln dürfen:<br>
					</div>
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
				<input type="hidden" name="check" value="[r: encode(check)]"/>
				<input type="hidden" name="playerNames" value="[r: encode(players)]"/>
			</form>
		</div>
	</body>
</html>
}]