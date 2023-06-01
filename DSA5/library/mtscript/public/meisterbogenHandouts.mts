[h: setLibProperty("SLframe", 5, "lib:com.github.lector.dsa5maptool")]

[frame5("meisterbogen", "width=525; height=500; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Meisterbogen - Handouts
		</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charsheet.css?cachelib=false'/>
	</head>
	<body>
		<div class="header">
			<div class="charactername">
				Handouts
			</div>
			[r: gmsheetNavigation(4)]
		</div>
		<div class="content">
			<table style='border-spacing: 0px;' width='500'>
				<tr>
					<td>
						<table style='border-spacing: 0px;' width='431'>				
							<tr>
								<td class="panel-top">
								</td>
							</tr>
							<tr>
								<td class="panel-middle">
									[h: hShared = getLibProperty("SharedHandouts","com.github.lector.dsa5maptool")]
									[h: hHidden = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/hidden.png")]
									[h: hVisible = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/visible.png")]
									[h: hEdit = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/handoutEdit.png")]
									[h: hDelete = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/handoutDelete.png")]
									[h: hShow = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/handoutShow.png")]
									[r,for(num,1,31,1,""), Code:
									{
										[h: hTokenName = strformat("Handout %s", num)]
										[h: id = findToken(hTokenName, "Spieltisch")]
										[r,if(id != ""), Code:
										{
											[h: tokenMap = getTokenMap(id)]
											[h: x = getTokenX(0, id, tokenMap)]
											[h: y = getTokenY(0, id, tokenMap)]
											[h,if(getCurrentMapName() != tokenMap): moveTokenFromMap(id, tokenMap, x, y)]
											[h: switchToken(id)]
											<table style='border-spacing: 0px; margin-bottom: 3px;' cellpadding='0'>
												<tr>
													<td width='333'>
														[h: hTitle = getLabel()]
														<b>[r: hTokenName] [r,if(hTitle != ""): output = "- "+hTitle]</b>
														<br>
														[h: hShort = getNotes()]
														<span style='color: #eee5c8;'>[r,if(hShort == ""): output = "Keine Beschreibung verfügbar"; output = hShort]</span>
													</td>
													<td style='padding: 0px 1px 0px 1px;'>
														[r,if(listFind(hShared, num) != -1):
															hShareLink = strformat("<a href='%s'><image src='%s' border='0' alt='Handout ist für Spieler freigegeben - Klicken zum Sperren'></image></a>", macroLinkText("handoutShare@this", "", id), hVisible);
															hShareLink = strformat("<a href='%s'><image src='%s' border='0' alt='Handout ist für Spieler gesperrt - Klicken zum Freigeben'></image></a>", macroLinkText("handoutShare@this", "", id), hHidden)]
													</td>
													<td style='padding: 0px 1px 0px 1px;'>
														[r: hEditLink = strformat("<a href='%s'><image src='%s' border='0' alt='Handout editieren'></image></a>", macroLinkText("handoutEdit@this", "", id), hEdit)]
													</td>
													<td style='padding: 0px 1px 0px 1px;'>
														[r: hDelLink = strformat("<a href='%s'><image src='%s' border='0' alt='Handout sperren &amp; löschen'></image></a>", macroLinkText("handoutDel@this", "", id), hDelete)]
													</td>
													<td style='padding: 0px 1px 0px 1px;'>
														[r: hShowLink = strformat("<a href='%s'><image src='%s' border='0' alt='Handout anzeigen'></image></a>", macroLinkText("handoutShow@this", "", id), hShow)]
													</td>
												</tr>
											</table>
											[h,if(getCurrentMapName() != tokenMap): moveTokenToMap(id, tokenMap, x, y)]
										}]	<!-- Wenn diese Tabelle gelöscht wird hängt sich Maptool bei diesem Skript auf. Weis der Teufel warum. Desshalb bleibt das hier erstmal stehen -->
										<table style='border-spacing: 0px; margin-bottom: 3px;' cellpadding='0'>
										</table>
									}]
								</td>
							</tr>
							<tr>
								<td class="panel-bottom">
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</div>
		<div class="footer"></div>
	</body>
</html>
}]