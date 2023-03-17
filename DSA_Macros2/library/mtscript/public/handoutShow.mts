[h: id = macro.args]

[h: tokenMap = getTokenMap(id)]
[h: x = getTokenX(0, id, tokenMap)]
[h: y = getTokenY(0, id, tokenMap)]
[h,if(getCurrentMapName() != tokenMap): moveTokenFromMap(id, tokenMap, x, y)]

[h: switchToken(id)]
[h: hTokenName = getName()]

[h: pixelAsset = tableImage("misc", 5)]
[h,if(getTokenHandout() == "" || getTokenHandout() == pixelAsset): hImage = tblImage("misc",4); hImage = getTokenHandout()]
[h,if(getLabel() == ""): hTitle = "Handout"; hTitle = getLabel()]
[h,if(getNotes() == ""): hShort = "---"; hShort = getNotes()]
[h,if(getGMNotes() == ""): hContent = "---"; hContent = getGMNotes()]
[h: hContent = replace(hContent, "#b#", "<b>")]
[h: hContent = replace(hContent, "#/b#", "</b>")]
[h: hContent = replace(hContent, "#i#", "<i>")]
[h: hContent = replace(hContent, "#/i#", "</i>")]
[h: hContent = replace(hContent, "#u#", "<u>")]
[h: hContent = replace(hContent, "#/u#:", "</u>")]
[h: hContent = replace(hContent, "#br#", "<br>")]

[dialog5("handoutShow", "width=1200; height=800; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Handout anzeigen</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.naxos84.macros2/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<table style='border-spacing: 0px; padding: 10px; margin: 0px auto 0px auto;' cellpadding='0'>
				<tr>
					<td style='text-align: center;'>
						<img src='[r: hImage]'></img>
					</td>
				</tr>
				<tr>
					<td style='text-align: center; font-size: 18pt; font-weight: bold; color: #7b5547; padding: 10px 0px 10px 0px;'>
						[r: hTitle]
					</td>
				</tr>
				<tr>
					<td style='text-align: center;'>
						<table style='border-spacing: 0px;'>
							<tr>
								<td style='font-weight: bold; padding: 0px 5px 8px 0px' valign='top'>
									Kurzbeschreibung:
								</td>
								<td style='padding-bottom: 8px;'>
									[r: hShort]
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; padding: 0px 5px 0px 0px;' valign='top'>
									Kompletter Inhalt:
								</td>
								<td>
									[r: hContent]
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</div>
	</body>
</html>
}]

[h,if(getCurrentMapName() != tokenMap): moveTokenToMap(id, tokenMap, x, y)]