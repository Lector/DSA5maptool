[h: conditions = json.set("{}", "propertyType", "Basic", "layer", "Token")]

[h,if(arg(0) == "pc"),Code:{
	[h: tokenList = getTokens("json", json.set(conditions, "npc", 0, "pc", 1))]
	[h: setLibProperty("SLframe", 3, "lib:com.github.lector.dsa5maptool")]
};{
	[h: tokenList = getTokens("json", json.set(conditions, "npc", 1, "pc", 0))]
	[h: setLibProperty("SLframe", 4, "lib:com.github.lector.dsa5maptool")]
}]

[h: fTokenList = "[]"]
[h,foreach(tID, tokenList),Code:
{
	[if(getVisible(tID) == 1),Code:
	{
		[tName = getName(tID)]
		[lCount = length(tName)]
		[if(substring(tName, 0, 1) == " " || substring(tName, lCount-1, lCount) == " "): setName(trim(tName), tID)]
		[fTokenList = json.append(fTokenList, json.set("{}", "id", tID, "name", tName))]
	};{
	}]
}]
[h: fTokenList = json.sort(fTokenList, "a", "name")]

[frame("meisterbogen", "width=528; height=500; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Meisterbogen - Spielercharaktere II
		</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 10pt; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",1)]'); background-repeat: no-repeat; height: 122; margin: 0px;" width="500">
			<div style='margin-top: 18px; font-size: 22pt; font-weight: bold; text-align: center;' width='500'>
				Spielercharaktere II
			</div>
			<table style='border-spacing: 0px; margin-top: 3px;' width='500'>
				<tr>
					<td width='58'>
						&nbsp;
					</td>
					<td width='383'>
						<a href="[r: macroLinkText("meisterbogen1@this", "", "pc")]"><image src='[r: tableImage("mainTheme", 80)]' border="0" alt="Spielercharaktere I: Werte, Waffen &amp; Rüstung"></image></a>
					[r,if(arg(0) == "pc"),Code:{
						<image src='[r: tableImage("mainTheme", 83)]'/>};{
						<a href="[r: macroLinkText("meisterbogen2@this", "", "pc")]"><image src='[r: tableImage("mainTheme", 82)]' border="0" alt="Spielercharaktere II: Vorteile, Nachteile &amp; Notizen"></image></a>
					}]
						<a href="[r: macroLinkText("meisterbogen1@this", "", "npc")]"><image src='[r: tableImage("mainTheme", 87)]' border="0" alt="NSCs I: Werte, Waffen &amp; Rüstung"></image></a>
					[r,if(arg(0) == "pc"),Code:{
						<a href="[r: macroLinkText("meisterbogen2@this", "", "npc")]"><image src='[r: tableImage("mainTheme", 89)]' border="0" alt="NSCs II: Vorteile, Nachteile &amp; Notizen"></image></a>};{
						<image src='[r: tableImage("mainTheme", 90)]'/>
					}]
						<a href="[r: macroLinkText("meisterbogenHandouts@this", "", "npc")]"><image src='[r: tableImage("mainTheme", 91)]' border="0" alt="Handouts"></image></a>
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
						<table style='border-spacing: 0px; margin-bottom: 8px;' width='431'>
							<tr>
								<td style='text-align: center;'>
									<a href="[r: macroLinkText("meisterbogen2@this", "", arg(0))]"><image src='[r: tableImage("mainTheme", 86)]' border="0" alt="Dieses Fenster aktualisieren"></image></a>
								</td>
							</tr>
						</table>
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
												<a href="[r: macroLinkText("meisterbogenTokenSF@this", "", id)]"><image src='[r: tableImage("mainTheme", 110)]' border="0" alt="Sonderfertigkeiten aufrufen"></image></a>
												&nbsp;<a href="[r: macroLinkText("meisterbogenTokenTalente@this", "", strformat("%s, Koerper", id))]"><image src='[r: tableImage("mainTheme", 111)]' border="0" alt="Talente aufrufen"></image></a>&nbsp;<a href="[r: macroLinkText("meisterbogenTokenInventar@this", "", id))]"><image src='[r: tableImage("mainTheme", 112)]' border="0" alt="Inventar &amp; Vermögen aufrufen"></image></a>
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