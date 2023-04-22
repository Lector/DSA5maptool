[h: actionLink = macroLinkText("teleportProcess@this", "")]
[dialog5("teleport", "width=500; height=550; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Tokens teleportieren</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Teleportation")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td style='padding-top: 5px; font-weight: bold;' valign='top'>
							Auswahl:
						</td>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td valign='middle'>
										<input type='radio' name='teleportSelection' value='1' checked='checked'>
									</td>
									<td>
										Alle aktuell markierten Tokens
									</td>
								</tr>
								<tr>
									<td valign='middle'>
										<input type='radio' name='teleportSelection' value='2'>
									</td>
									<td>
										Alle SC-Tokens
									</td>
								</tr>
								<tr>
									<td valign='middle'>
										<input type='radio' name='teleportSelection' value='3'>
									</td>
									<td>
										Alle sichtbaren SC-Tokens
									</td>
								</tr>
								<tr>
									<td valign='middle'>
										<input type='radio' name='teleportSelection' value='4'>
									</td>
									<td>
										Alle NSC-Tokens
									</td>
								</tr>
								<tr>
									<td valign='middle'>
										<input type='radio' name='teleportSelection' value='5'>
									</td>
									<td>
										Alle sichtbaren NSC-Tokens
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td style='padding-top: 5px; font-weight: bold;' valign='top'>
							Zielort:
						</td>
						<td>
							<table style='border-spacing: 0px;'>
								[h: teleporter = getTokens("json", json.set("",
								"layer", json.append("[]", "token", "object", "background"),
								"propertyType", "Teleporter"))]
								[h: sorted = "[]"]
								[h,foreach(porter, teleporter),Code:
								{
									[h: sorted = json.append(sorted, json.set("", "token", porter, "name", getName(porter)))]
								}]
								[h: sorted = json.sort(sorted, "asc", "name")]
								[h: first = 1]
								[r,foreach(porter, sorted, ""),Code:
								{
								<tr>
									<td valign='middle'>
										<input type='radio' name='teleportTarget' value='[r: json.get(porter, "token")]' [r,if(first == 1):'checked']>
									</td>
									<td>
										[r: json.get(porter, "name")]
									</td>
								</tr>
								[h: first = 0]
								}]
							</table>
						</td>
					</tr>
				</table>
				</table>
				<table style='border-spacing: 0px; margin: 9px auto 8px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Teleportieren</td>
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