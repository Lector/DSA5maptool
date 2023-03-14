[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.Macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]
			
			<table style='border-spacing: 0px; margin: 0px auto 15px auto;'>
				<tr>
					<td>
						<table style='border-spacing: 0px;'>
							<tr>
								<td style='font-size: 12pt; font-weight: bold; color: #ffffff;' bgcolor='#875e34'>
									Gewicht
								</td>
							</tr>
							<tr>
								<td bgcolor='#ffffff'>
									<table style='border-spacing: 0px;'>
										<tr>
											<td>
												[r: json.get(InventarMisc, "behaelter1")]:
											</td>
											<td style='text-align: right;'>
												[r: listGet(uebergabe, 0)] STEIN
											</td>
											<td width='10'>
												&nbsp;
											</td>
											<td>
												[r: json.get(InventarMisc, "behaelter4")]:
											</td>
											<td style='text-align: right;'>
												[r: listGet(uebergabe, 3)] STEIN
											</td>
										</tr>
										<tr>
											<td>
												[r: json.get(InventarMisc, "behaelter2")]:
											</td>
											<td style='text-align: right;'>
												[r: listGet(uebergabe, 1)] STEIN
											</td>
											<td width='10'>
												&nbsp;
											</td>
											<td>
												[r: json.get(InventarMisc, "behaelter5")]:
											</td>
											<td style='text-align: right;'>
												[r: listGet(uebergabe, 4)] STEIN
											</td>
										</tr>
										<tr>
											<td>
												[r: json.get(InventarMisc, "behaelter3")]:
											</td>
											<td style='text-align: right;'>
												[r: listGet(uebergabe, 2)] STEIN
											</td>
											<td width='10'>
												&nbsp;
											</td>
											<td>
												Gesamtgewicht:
											</td>
											<td style='text-align: right;'>
												[r: listGet(uebergabe, 5)] STEIN
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
					<td width='15'>
						&nbsp;
					</td>
					<td>
						<table style='border-spacing: 0px;'>
							<tr>
								<td style='font-size: 12pt; font-weight: bold; color: #ffffff;' bgcolor='#875e34'>
									<table style='border-spacing: 0px;' cellpadding='0'>
										<tr>
											<td style='font-size: 12pt; font-weight: bold; color: #ffffff;' width='280'>
												Geldbeutel
											</td>
											<td style='text-align: right;' width='45'>
												<a href="[r: macroLinkText("inventarCoinEdit@this", "")]"><image src='[r: tableImage("misc", 8)]' border="0" alt="Verm&ouml;gen editieren"></image></a>&nbsp;<a href="[r: macroLinkText("inventarCoinDel@this", "", "2")]"><image src='[r: tableImage("misc", 3)]' border="0" alt="Komplettes Verm&ouml;gen l&ouml;schen"></image></a>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td style='height: 69;' bgcolor='#ffffff'>
									<table style='border-spacing: 0px; font-weight: bold;'>
										<tr>
											<td style='text-align: center;' width='61'>
												Dukaten
											</td>
											<td>
												&nbsp;
											</td>
											<td width='5'>
												&nbsp;
											</td>
											<td style='text-align: center;'>
												Silbertaler
											</td>
											<td>
												&nbsp;
											</td>
											<td width='5'>
												&nbsp;
											</td>
											<td style='text-align: center;'>
												Heller
											</td>
											<td>
												&nbsp;
											</td>
											<td width='5'>
												&nbsp;
											</td>
											<td style='text-align: center;'>
												Kreuzer
											</td>
											<td>
												&nbsp;
											</td>
										</tr>
										<tr>
											<td style='text-align: center; font-size: 20pt; color: #441e13;'>
												[r: json.get(InventarMisc, "dukaten")]
											</td>
											<td>
												<a href="[r: macroLinkText("inventarCoinAdd@this", "", "dukat")]"><image src='[r: tableImage("misc", 6)]' border="0" alt="1 Dukate hinzuf&uuml;gen"></image>
												<br><a href="[r: macroLinkText("inventarCoinSub@this", "", "dukat")]"><image src='[r: tableImage("misc", 7)]' border="0" alt="1 Dukate abziehen"></image>
											</td>
											<td width='5'>
												&nbsp;
											</td>
											<td style='text-align: center; font-size: 20pt; color: #441e13;'>
												[r: json.get(InventarMisc, "silbertaler")]
											</td>
											<td>
												<a href="[r: macroLinkText("inventarCoinAdd@this", "", "silbertaler")]"><image src='[r: tableImage("misc", 6)]' border="0" alt="1 Silbertaler hinzuf&uuml;gen"></image>
												<br><a href="[r: macroLinkText("inventarCoinSub@this", "", "silbertaler")]"><image src='[r: tableImage("misc", 7)]' border="0" alt="1 Silbertaler abziehen"></image>
											</td>
											<td width='5'>
												&nbsp;
											</td>
											<td style='text-align: center; font-size: 20pt; color: #441e13;'>
												[r: json.get(InventarMisc, "heller")]
											</td>
											<td>
												<a href="[r: macroLinkText("inventarCoinAdd@this", "", "heller")]"><image src='[r: tableImage("misc", 6)]' border="0" alt="1 Heller hinzuf&uuml;gen"></image>
												<br><a href="[r: macroLinkText("inventarCoinSub@this", "", "heller")]"><image src='[r: tableImage("misc", 7)]' border="0" alt="1 Heller abziehen"></image>
											</td>
											<td width='5'>
												&nbsp;
											</td>
											<td style='text-align: center; font-size: 20pt; color: #441e13;'>
												[r: json.get(InventarMisc, "kreuzer")]
											</td>
											<td>
												<a href="[r: macroLinkText("inventarCoinAdd@this", "", "kreuzer")]"><image src='[r: tableImage("misc", 6)]' border="0" alt="1 Kreuzer hinzuf&uuml;gen"></image>
												<br><a href="[r: macroLinkText("inventarCoinSub@this", "", "kreuzer")]"><image src='[r: tableImage("misc", 7)]' border="0" alt="1 Kreuzer abziehen"></image>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>