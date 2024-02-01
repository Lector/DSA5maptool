[h: conditions = json.set("{}", "propertyType", "Basic", "layer", "Token")]

[h,if(arg(0) == "pc"),Code:{
	[h: tokenList = getTokens("json", json.set(conditions, "npc", 0, "pc", 1))]
	[h: tab = 1]
	[h: header = "Spielercharaktere"]
};{
	[h: tokenList = getTokens("json", json.set(conditions, "npc", 1, "pc", 0))]
	[h: tab = 2]
	[h: header = "Meistercharaktere"]
}]
[h: setLibProperty("SLframe", tab, "lib:com.github.lector.dsa5maptool")]

[h: fTokenList = "[]"]
[h,foreach(tID, tokenList),Code:
{
	[if(getVisible(tID) == 1),Code:
	{
		[tName = getName(tID)]
		[lCount = length(tName)]
		[if(substring(tName, 0, 1) == " " || substring(tName, lCount-1, lCount) == " "): setName(trim(tName), tID)]
		[fTokenList = json.append(fTokenList, json.set("{}", "id", tID, "name", tName))]
	}]
}]
[h: fTokenList = json.sort(fTokenList, "a", "name")]

[frame5("meisterbogen", "width=528; height=500; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Meisterbogen - [r: header]
		</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charsheet.css?cachelib=false'/>
	</head>
	<body>
		<div class="header">
			<div class="charactername">
				[r: header]
			</div>
			[r: gmsheetNavigation(tab-1)]
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
								[r,foreach(tok, fTokenList, ""), Code:
								{
									[h: id = json.get(tok, "id")]
									[h: switchToken(id)]
									<table style='border-spacing: 0px; padding: 4px 0px 0px 0px;' width='400'>
										<tr>
											<td width='38'>
												<a href="[r: macroLinkText("gotoToken@this", "", id)]"><image src='[r: getTokenImage(30)]' border="0" alt="Zum Token wechseln und auswählen"></image></a>
											</td>
											<td style='font-weight: bold;' width='312'>
												[r: getName()]
											</td>
											<td style='text-align: right;' width='70'>
												<a href="[r: macroLinkText("meisterbogenTokenSF@this", "", id)]">
													<image src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/bookS.png")] border="0" alt="Sonderfertigkeiten aufrufen"></image>
												</a>&nbsp;
												<a href="[r: macroLinkText("meisterbogenTokenTalente@this", "", strformat("%s, Koerper", id))]">
													<image src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/bookT.png")] border="0" alt="Talente aufrufen"></image>
												</a>&nbsp;
												<a href="[r: macroLinkText("meisterbogenTokenInventar@this", "", id))]">
													<image src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/bag.png")] border="0" alt="Inventar &amp; Vermögen aufrufen"></image>
												</a>
											</td>
										</tr>
									</table>
									<table style='border-spacing: 0px; border-bottom: 1px solid #eee5c8; padding: 0px 0px 4px 0px;' width='400'>
										<tr>
											<td style='font-weight: bold;' width='63' valign='top'>
												Vorteile:
											</td>
											<td>
												[r,foreach(item, Vorteile, ", "): json.get(item, "Name")]
											</td>
										</tr>
										<tr>
											<td style='font-weight: bold;' valign='top'>
												Nachteile:
											</td>
											<td>
												[r,foreach(item, Nachteile, ", "): json.get(item, "Name")]
											</td>
										</tr>
										<tr>
											<td style='font-weight: bold;' valign='top'>
												Allg. SF:
											</td>
											<td>
												[r,foreach(item, AllgemeineSF, ", "): json.get(item, "Name")]
											</td>
										</tr>
										<tr>
											<td style='font-weight: bold;' valign='top'>
												SL-Notizen:
											</td>
											<td>
												[r,if(getGMNotes() == ""): output = "Keine vorhanden"; output = getGMNotes()]
											</td>
										</tr>
									</table>
									}
								]
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