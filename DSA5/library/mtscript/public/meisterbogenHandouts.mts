[h: setLibProperty("SLframe", 5, "lib:com.github.lector.dsa5maptool")]

[frame("meisterbogen", "width=528; height=500; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Meisterbogen - Handouts
		</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 10pt; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",1)]'); background-repeat: no-repeat; height: 122; margin: 0px;" width="500">
			<div style='margin-top: 18px; font-size: 22pt; font-weight: bold; text-align: center;' width='500'>
				Handouts
			</div>
			<table style='border-spacing: 0px; margin-top: 3px;' width='500'>
				<tr>
					<td width='58'>
						&nbsp;
					</td>
					<td width='383'>
						<a href="[r: macroLinkText("meisterbogen1@this", "", "pc")]"><image src='[r: tableImage("mainTheme", 80)]' border="0" alt="Spielercharaktere I: Werte, Waffen &amp; Rüstung"></image></a>
						<a href="[r: macroLinkText("meisterbogen2@this", "", "pc")]"><image src='[r: tableImage("mainTheme", 82)]' border="0" alt="Spielercharaktere II: Vorteile, Nachteile &amp; Notizen"></image></a>
						<a href="[r: macroLinkText("meisterbogen1@this", "", "npc")]"><image src='[r: tableImage("mainTheme", 87)]' border="0" alt="NSCs I: Werte, Waffen &amp; Rüstung"></image></a>
						<a href="[r: macroLinkText("meisterbogen2@this", "", "npc")]"><image src='[r: tableImage("mainTheme", 89)]' border="0" alt="NSCs II: Vorteile, Nachteile &amp; Notizen"></image></a>
						<image src='[r: tableImage("mainTheme", 92)]'></image>
						<a href="[r: macroLinkText("meisterbogenTools@this", "")]"><image src='[r: tableImage("mainTheme", 84)]' border="0" alt="Tools"></image></a>
					</td>
					<td width='59'>
						&nbsp;
					</td>
				</tr>
			</table>
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",2)]'); margin: 0px;" width="500">		
			<table style='border-spacing: 0px;' width='500'>
				<tr>
					<td width='34'>
						&nbsp;
					</td>
					<td>
						<table style='border-spacing: 0px;' width='431'>				
							<tr>
								<td class="panel-top">
								</td>
							</tr>
							<tr>
								<td class="panel-middle">
									[h: hShared = getLibProperty("SharedHandouts","com.github.lector.dsa5maptool")]
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
															hShareLink = strformat("<a href='%s'><image src='%s' border='0' alt='Handout ist für Spieler freigegeben - Klicken zum Sperren'></image></a>", macroLinkText("handoutShare@this", "", id), tableImage("mainTheme", 102));
															hShareLink = strformat("<a href='%s'><image src='%s' border='0' alt='Handout ist für Spieler gesperrt - Klicken zum Freigeben'></image></a>", macroLinkText("handoutShare@this", "", id), tableImage("mainTheme", 103))]
													</td>
													<td style='padding: 0px 1px 0px 1px;'>
														[r: hEditLink = strformat("<a href='%s'><image src='%s' border='0' alt='Handout editieren'></image></a>", macroLinkText("handoutEdit@this", "", id), tableImage("mainTheme", 104))]
													</td>
													<td style='padding: 0px 1px 0px 1px;'>
														[r: hDelLink = strformat("<a href='%s'><image src='%s' border='0' alt='Handout sperren &amp; löschen'></image></a>", macroLinkText("handoutDel@this", "", id), tableImage("mainTheme", 105))]
													</td>
													<td style='padding: 0px 1px 0px 1px;'>
														[r: hShowLink = strformat("<a href='%s'><image src='%s' border='0' alt='Handout anzeigen'></image></a>", macroLinkText("handoutShow@this", "", id), tableImage("mainTheme", 106))]
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
					<td width='35'>
						&nbsp;
					</td>
				</tr>
			</table>
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",3)]'); background-repeat: no-repeat; height: 34; margin: 0px;" width="500">
		</div>
	</body>
</html>
}]