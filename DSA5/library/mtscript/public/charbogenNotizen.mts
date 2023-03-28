[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
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

[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "6")]

[frame("charbogen", "width=517; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Notizen &amp; Handouts
		</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 12pt; font-weight: bold; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",1)]'); background-repeat: no-repeat; height: 122; margin: 0px;" width="500">
			<div style='margin-top: 18px; font-size: 22pt; text-align: center;' width='500'>
				<span style='color: #eee5c8; text-decoration: none;' title='Zum Charaktertoken wechseln'>[r: macroLink(getName(), "gotoToken@lib:this", "", currentToken())]</span>
			</div>
			<table style='border-spacing: 0px; margin-top: 3px;' width='500'>
				<tr>
					<td width='58'>
						&nbsp;
					</td>
					<td width='383'>
						<a href="[r: macroLinkText("charbogenEigenschaften@this")]"><image src='[r: tableImage("mainTheme", 4)]' border="0" alt="Eigenschaftsbogen aufrufen"></image></a>
						<a href="[r: macroLinkText("charbogenKampf@this")]"><image src='[r: tableImage("mainTheme", 6)]' border="0" alt="Kampfbogen aufrufen"></image></a>
						<a href="[r: macroLinkText("charbogenTalente@this", "", "Koerper")]"><image src='[r: tableImage("mainTheme", 8)]' border="0" alt="Talentbogen aufrufen"></image></a>
						<a href="[r: macroLinkText("charbogenZauber@this")]"><image src='[r: tableImage("mainTheme", 10)]' border="0" alt="Zauberbogen aufrufen"></image></a>
						<a href="[r: macroLinkText("charbogenLiturgien@this")]"><image src='[r: tableImage("mainTheme", 12)]' border="0" alt="Liturgiebogen aufrufen"></image></a>
						<image src='[r: tableImage("mainTheme", 15)]'></image>
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
					<td width='14'>
						&nbsp;
					</td>
					<td style="background-image: url('[r: tblImage("mainTheme",21)]'); background-repeat: no-repeat; height: 90;" width='471'>
						[r,macro("eigLeiste@this"): ""]
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
			</table>	
			<table style='border-spacing: 0px;' width='500'>
				<tr>
					<td width='34'>
						&nbsp;
					</td>
					<td width='431'>			
						<table style='border-spacing: 0px;' width='431'>				
							<tr>
								<td class="panel-top">
								</td>
							</tr>
							<tr>
								<td class="panel-middle">
									<div width='405'>
										<table style='border-spacing: 0px;' cellpadding='0' width='399'>
											<tr>
												<td width='373'>
													<image src='[r: tableImage("mainTheme", 93)]'></image>
												</td>
												<td style='text-align: center;' width='13'>
													<a href="[r: macroLinkText("notizAdd@lib:this")]"><image src='[r: tableImage("mainTheme", 97)]' border="0" alt="Eine neue Notiz hinzufügen"></image></a>
												</td>
												<td style='text-align: right;' width='13'>
													<a href="[r: macroLinkText("notizDelAll@lib:this")]"><image src='[r: tableImage("mainTheme", 98)]' border="0" alt="Alle Notizen löschen"></image></a>
												</td>
											</tr>
										</table>
									</div>
									[h: nAusgabe = ""]
									[h: nTitel = ""]
									[h: nText = ""]
									[h: num = 1]
									[h,count(getStrProp(Notizen, "nAnzahl"), ""), Code:
										{
											[nTitel = getStrProp(Notizen, strformat("n%{num}Titel"))]
											[nText = getStrProp(Notizen, strformat("n%{num}Text"))]
											[editLink = strformat("<a href='%s'><image src='%s' border='0' alt='Diese Notiz editieren'></image></a>", macroLinkText("notizEdit@lib:this", "", num), tableImage("mainTheme", 99))]
											[delLink = strformat("<a href='%s'><image src='%s' border='0' alt='Diese Notiz löschen'></image></a>", macroLinkText("notizDel@lib:this", "", num), tableImage("mainTheme", 100))]
											[nAusgabe = nAusgabe + strformat("
											<table style='border-spacing: 0px; margin-bottom: 3px;' cellpadding='0'>
												<tr>
													<td>
														<b>%s - </b>%s&nbsp;%s
														<br>
														%s
													</td>
												</tr>
											</table>
											", nTitel, editLink, delLink, nText)]
											[num = num + 1]
										}
									]
									[r,if(getStrProp(Notizen, "nAnzahl") == 0), Code:
										{
											[r: "Keine Vorhanden<br>&nbsp;"]
										};
										{
											[r: nAusgabe+"<br>"]
										}
									]
									<div width='405'>
										<image src='[r: tableImage("mainTheme", 95)]'></image>
									</div>
									[h: hShared = getLibProperty("SharedHandouts", "com.github.lector.dsa5maptool")]
									[h: hCount = listCount(hShared)]
									[h: hAusgabe = ""]
									[h: num = 0]
									[h,count(hCount, ""), Code:
									{
										[hNum = listGet(hShared, num)]
										[hTokenName = strformat("Handout %s", hNum)]
										[id = findToken(hTokenName, "Spieltisch")]

										[h: x = getTokenX(0, id, "Spieltisch")]
										[h: y = getTokenY(0, id, "Spieltisch")]
										[h,if(getCurrentMapName() != "Spieltisch"): moveTokenFromMap(id, "Spieltisch", x, y)]
										[h: switchToken(id)]
										
										[token(hTokenName): hTitle = getLabel()]
										[if(hTitle == ""): hTitle = "Handout"]
										[token(hTokenName): hShort = getNotes()]
										[if(hShort == ""): hShort = "Keine Beschreibung verfügbar"]

										[h,if(getCurrentMapName() != "Spieltisch"): moveTokenToMap(id, "Spieltisch", x, y)]
										
										[hLink = strformat("<a href='%s'><image src='%s' border='0' alt='Handout anzeigen'></image></a>", macroLinkText("handoutShow@lib:this", "", id), tableImage("mainTheme", 101))]
										[hAusgabe = hAusgabe + strformat("
										<table style='border-spacing: 0px; margin-bottom: 3px;' width='405' cellpadding='0'>
											<tr>
												<td>
													<b>%s</b>
													<br>%s
												</td>
												<td style='text-align: right; padding-right: 3px;'>
													%s
												</td>
											</tr>
										</table>
										", hTitle, hShort, hLink)]
										[num = num + 1]
									}]
									[r,if(hAusgabe == ""), Code:
										{
											[r: "Keine Vorhanden<br>&nbsp;"]
										};
										{
											[r: hAusgabe+"<br>"]
										}
									]
									<div width='405'>
										<table style='border-spacing: 0px;' cellpadding='0' width='399'>
											<tr>
												<td width='370'>
													<image src='[r: tableImage("mainTheme", 94)]'></image>
												</td>
												<td style='text-align: center;' width='16'>
													<a href="[r: macroLinkText("notizSLEdit@lib:this")]"><image src='[r: tableImage("mainTheme", 96)]' border="0" alt="SL-Notizen hinzufügen oder bearbeiten"></image></a>
												</td>
												<td style='text-align: right;' width='13'>
													<a href="[r: macroLinkText("notizSLDel@lib:this")]"><image src='[r: tableImage("mainTheme", 98)]' border="0" alt="Alle SL-Notizen löschen"></image></a>
												</td>
											</tr>
										</table>
									</div>
									[r,if(getGMNotes() == ""): output = "Keine Vorhanden"; output = getGMNotes()]
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