[h: setLibProperty("SLframe", 6, "lib:com.github.naxos.Macros")]

[frame("meisterbogen", "width=528; height=500; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Meisterbogen - Tools
		</title>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 12pt; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",1)]'); background-repeat: no-repeat; height: 122; margin: 0px;" width="500">
			<div style='margin-top: 18px; font-size: 22pt; font-weight: bold; text-align: center;' width='500'>
				Tools
			</div>
			<table style='border-spacing: 0px; margin-top: 3px;' width='500'>
				<tr>
					<td width='58'>
						&nbsp;
					</td>
					<td width='383'>
						<a href="[r: macroLinkText("meisterbogen1@this", "", "pc")]"><image src='[r: tableImage("mainTheme", 80)]' border="0" alt="Spielercharaktere I: Werte, Waffen &amp; R&uuml;stung"></image></a>
						<a href="[r: macroLinkText("meisterbogen2@this", "", "pc")]"><image src='[r: tableImage("mainTheme", 82)]' border="0" alt="Spielercharaktere II: Vorteile, Nachteile &amp; Notizen"></image></a>
						<a href="[r: macroLinkText("meisterbogen1@this", "", "npc")]"><image src='[r: tableImage("mainTheme", 87)]' border="0" alt="NSCs I: Werte, Waffen &amp; R&uuml;stung"></image></a>
						<a href="[r: macroLinkText("meisterbogen2@this", "", "npc")]"><image src='[r: tableImage("mainTheme", 89)]' border="0" alt="NSCs II: Vorteile, Nachteile &amp; Notizen"></image></a>
						<a href="[r: macroLinkText("meisterbogenHandouts@this", "")]"><image src='[r: tableImage("mainTheme", 91)]' border="0" alt="Handouts"></image></a>
						<image src='[r: tableImage("mainTheme", 85)]'></image>
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
								<td style="background-image: url('[r: tblImage("mainTheme",48)]'); background-repeat: no-repeat; height: 28;" width='431'>
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",49)]'); background-repeat: repeat-y; padding-left: 10px; padding-right: 10px; text-align: center;">
									<div style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 3px 0px 3px 3px; text-align: left;' width='405'>
										<image src='[r: tableImage("mainTheme", 107)]'></image>
									</div>
									<table style='border-spacing: 0px;' cellpadding='5'>
										<tr>
											<td style='text-align: center;'>
												<image src='[r: tableImage("tools", 11)]'></image>
											</td>
											<td>
												<span style='color: #eee5c8; text-decoration: none;' title='Umrechner f&uuml;r Gewichtsma&szlig;e aufrufen'>[r: macroLink("Gewichtsrechner", "gewichtsrechner@lib:com.github.naxos.Tools")]</span>
											</td>
										</tr>
										<tr>
											<td style='text-align: center;'>
												<image src='[r: tableImage("tools", 12)]'></image>
											</td>
											<td>
												<span style='color: #eee5c8; text-decoration: none;' title='Umrechner f&uuml;r L&auml;ngenma&szlig; aufrufen'>[r: macroLink("L&auml;ngenrechner", "laengenrechner@lib:com.github.naxos.Tools")]</span>
											</td>
										</tr>
										<tr>
											<td style='text-align: center;'>
												<image src='[r: tableImage("tools", 13)]'></image>
											</td>
											<td>
												<span style='color: #eee5c8; text-decoration: none;' title='Umrechner f&uuml;r W&auml;hrungen aufrufen'>[r: macroLink("W&auml;hrungsrechner", "waehrung@lib:com.github.naxos.Tools")]</span>
											</td>
										</tr>
									</table>
									<br>
									<div style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 3px 0px 3px 3px; text-align: left;' width='405'>
										<image src='[r: tableImage("mainTheme", 109)]'></image>
									</div>
									<table style='border-spacing: 0px;' cellpadding='5'>
										<tr>
											<td style='text-align: center;'>
												<image src='[r: tableImage("tools", 17)]'></image>
											</td>
											<td>
												<span style='color: #eee5c8; text-decoration: none;' title='Das Steuerungsfenster f&uuml;r den Kalender aufrufen'>[r: macroLink("Kalender-Steuerung", "kalenderMain@lib:com.github.naxos.Tools", "")]</span>
											</td>
										</tr>
									</table>
									<br>
									<div style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 3px 0px 3px 3px;' width='405'>
										<table style='border-spacing: 0px;' cellpadding='0' width='399'>
											<tr>
												<td width='373'>
													<image src='[r: tableImage("mainTheme", 108)]'></image>
												</td>
												<td style='text-align: center;' width='13'>
													<a href="[r: macroLinkText("weblinkAdd@lib:com.github.naxos.Tools")]"><image src='[r: tableImage("mainTheme", 97)]' border="0" alt="Einen neuen Weblink hinzuf&uuml;gen"></image></a>
												</td>
												<td style='text-align: right;' width='13'>
													<a href="[r: macroLinkText("weblinkDel@lib:com.github.naxos.Tools", "", "all")]"><image src='[r: tableImage("mainTheme", 98)]' border="0" alt="Alle Weblinks l&ouml;schen"></image></a>
												</td>
											</tr>
										</table>
									</div>
									<table style='border-spacing: 0px;' cellpadding='5'>
										[h: linklist = getLibProperty("Weblinks", "lib:com.github.naxos.Tools")]
										[h: num = 0]
										[r,if(json.isEmpty(linklist) == 1): output = "<tr><td>Keine vorhanden</td></tr>"]
										[Foreach(link, linklist,""), CODE:
											{
												[h: lName = json.get(link, "linkname")]
												[h: lAdress = json.get(link, "linkadress")]
												<tr>
													<td style='text-align: center;'>
														<image src='[r: tableImage("tools", 14)]'></image>
													</td>
													<td>
														[r: strformat("<a style='color: #eee5c8; text-decoration: none;' href='%s'>%s</a>", lAdress, lName)]
													</td>
													<td style='text-align: center;'>
														<a href="[r: macroLinkText("weblinkDel@lib:com.github.naxos.Tools", "", num)]"><image src='[r: tableImage("mainTheme", 100)]' border="0" alt="Diesen Weblink l&ouml;schen"></image></a>
													</td>
												</tr>
												[h: num = num + 1]
											}
										]
									</table>
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",50)]'); background-repeat: no-repeat; height: 28;">
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