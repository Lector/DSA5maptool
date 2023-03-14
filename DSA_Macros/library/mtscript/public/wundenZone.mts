[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[dialog("wundenZone", "width=586; height=517; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>Wunden heilen oder hinzuf&uuml;gen</title>
	</head>
	<body style='font-size: 11pt;' bgcolor='#ece9d8'>
		<div style="background-image: url('[r: tblImage("forms",12)]'); background-repeat: no-repeat; height: 20; margin: 0px;" width="562">
		</div>
		<div style="background-image: url('[r: tblImage("forms",13)]'); background-repeat: repeat-y; text-align: center; height: 20; margin: 0px;" width="562">
			<div style='padding: 10px 0px 5px 0px;'>
				<image src='[r: tableImage("forms", 94)]'></image>
			</div>
			<table style='border-spacing: 0px; font-size: 12pt; margin: 0px 0px 8px 0px;'>
				<tr>
					<td>
						- Klicke auf ein dunkles Herz um eine Wunde zu heilen.
						<br>- Klicke auf ein rotes Herz um eine Wunde hinzuzuf&uuml;gen.
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px; margin-bottom: 9px;' cellpadding='0' cellspacing='0'>
				<tr>
					<td style="background-image: url('[r: tblImage("forms",91)]'); background-repeat: no-repeat; height: 200;" valign='top' width='500'>
						<table style='border-spacing: 0px;' cellpadding='0' cellspacing='0'>
							<tr>
								<td valign='top'>
									<table style='border-spacing: 0px;' cellpadding='0' cellspacing='0' width='200'>
										<tr>
											<td style='height: 80; padding: 28px 0px 0px 28px;' valign='top'>
												[h: wLinkAdd = macroLinkText("wundenZoneAdd@Lib:macros", "", "kopf")]
												[h: wLinkSub = macroLinkText("wundenZoneSub@Lib:macros", "", "kopf")]
												[h: num = 1]
												[count(3,""), Code:
													{
														[r,if(WUKopf >= num): output = strformat("<a href='%s'><img src='%s' alt='Diese Wunde heilen' border='0'></img></a>", wLinkSub, tblImage("forms",93)); output = strformat("<a href='%s'><img src='%s' alt='Eine Wunde hinzuf&uuml;gen' border='0'></img></a>", wLinkAdd, tblImage("forms",92))]
														[h: num = num + 1]
													}
												]
											</td>
										</tr>
										<tr>
											<td style='height: 60; padding: 15px 0px 0px 19px;' valign='top'>
												[h: wLinkAdd = macroLinkText("wundenZoneAdd@Lib:macros", "", "brust")]
												[h: wLinkSub = macroLinkText("wundenZoneSub@Lib:macros", "", "brust")]
												[h: num = 1]
												[count(3,""), Code:
													{
														[r,if(WUBrust >= num): output = strformat("<a href='%s'><img src='%s' alt='Diese Wunde heilen' border='0'></img></a>", wLinkSub, tblImage("forms",93)); output = strformat("<a href='%s'><img src='%s' alt='Eine Wunde hinzuf&uuml;gen' border='0'></img></a>", wLinkAdd, tblImage("forms",92))]
														[h: num = num + 1]
													}
												]
											</td>
										</tr>
										<tr>
											<td style='height: 60; padding: 19px 0px 0px 25px;' valign='top'>
												[h: wLinkAdd = macroLinkText("wundenZoneAdd@Lib:macros", "", "bauch")]
												[h: wLinkSub = macroLinkText("wundenZoneSub@Lib:macros", "", "bauch")]
												[h: num = 1]
												[count(3,""), Code:
													{
														[r,if(WUBauch >= num): output = strformat("<a href='%s'><img src='%s' alt='Diese Wunde heilen' border='0'></img></a>", wLinkSub, tblImage("forms",93)); output = strformat("<a href='%s'><img src='%s' alt='Eine Wunde hinzuf&uuml;gen' border='0'></img></a>", wLinkAdd, tblImage("forms",92))]
														[h: num = num + 1]
													}
												]
											</td>
										</tr>
									</table>
								</td>
								<td valign='top'>
									<table style='border-spacing: 0px;' cellpadding='0' cellspacing='0' width='150'>
										<tr>
											<td style='height: 100; padding: 48px 0px 0px 15px;' valign='top'>
												[h: wLinkAdd = macroLinkText("wundenZoneAdd@Lib:macros", "", "armLinks")]
												[h: wLinkSub = macroLinkText("wundenZoneSub@Lib:macros", "", "armLinks")]
												[h: num = 1]
												[count(3,""), Code:
													{
														[r,if(WUArmLinks >= num): output = strformat("<a href='%s'><img src='%s' alt='Diese Wunde heilen' border='0'></img></a>", wLinkSub, tblImage("forms",93)); output = strformat("<a href='%s'><img src='%s' alt='Eine Wunde hinzuf&uuml;gen' border='0'></img></a>", wLinkAdd, tblImage("forms",92))]
														[h: num = num + 1]
													}
												]
											</td>
										</tr>
										<tr>
											<td style='height: 100; padding: 31px 0px 0px 17px;' valign='top'>
												[h: wLinkAdd = macroLinkText("wundenZoneAdd@Lib:macros", "", "beinLinks")]
												[h: wLinkSub = macroLinkText("wundenZoneSub@Lib:macros", "", "beinLinks")]
												[h: num = 1]
												[count(3,""), Code:
													{
														[r,if(WUBeinLinks >= num): output = strformat("<a href='%s'><img src='%s' alt='Diese Wunde heilen' border='0'></img></a>", wLinkSub, tblImage("forms",93)); output = strformat("<a href='%s'><img src='%s' alt='Eine Wunde hinzuf&uuml;gen' border='0'></img></a>", wLinkAdd, tblImage("forms",92))]
														[h: num = num + 1]
													}
												]
											</td>
										</tr>
									</table>
								</td>
								<td valign='top'>
									<table style='border-spacing: 0px;' cellpadding='0' cellspacing='0' width='150'>
										<tr>
											<td style='height: 100; padding: 59px 0px 0px 57px;' valign='top'>
												[h: wLinkAdd = macroLinkText("wundenZoneAdd@Lib:macros", "", "armRechts")]
												[h: wLinkSub = macroLinkText("wundenZoneSub@Lib:macros", "", "armRechts")]
												[h: num = 1]
												[count(3,""), Code:
													{
														[r,if(WUArmRechts >= num): output = strformat("<a href='%s'><img src='%s' alt='Diese Wunde heilen' border='0'></img></a>", wLinkSub, tblImage("forms",93)); output = strformat("<a href='%s'><img src='%s' alt='Eine Wunde hinzuf&uuml;gen' border='0'></img></a>", wLinkAdd, tblImage("forms",92))]
														[h: num = num + 1]
													}
												]
											</td>
										</tr>
										<tr>
											<td style='height: 100; padding: 39px 0px 0px 50px;' valign='top'>
												[h: wLinkAdd = macroLinkText("wundenZoneAdd@Lib:macros", "", "beinRechts")]
												[h: wLinkSub = macroLinkText("wundenZoneSub@Lib:macros", "", "beinRechts")]
												[h: num = 1]
												[count(3,""), Code:
													{
														[r,if(WUBeinRechts >= num): output = strformat("<a href='%s'><img src='%s' alt='Diese Wunde heilen' border='0'></img></a>", wLinkSub, tblImage("forms",93)); output = strformat("<a href='%s'><img src='%s' alt='Eine Wunde hinzuf&uuml;gen' border='0'></img></a>", wLinkAdd, tblImage("forms",92))]
														[h: num = num + 1]
													}
												]
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px; font-size: 12pt; margin: 10px 0px 18px 0px;'>
				<tr>
					<td>
						<a href='[r: macroLinkText("wundenZoneSub@Lib:macros", "", "complete")]'><img src='[r: tblImage("forms",95)]' alt='Komplettheilung' border='0'></img></a>
					</td>
				</tr>
			</table>
		</div>
		<div style="background-image: url('[r: tblImage("forms",14)]'); background-repeat: no-repeat; height: 20; margin: 0px;" width="562">
		</div>
	</body>
</html>
}]