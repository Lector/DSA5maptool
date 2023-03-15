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

[h,if(isNPC() == 1 && getLibProperty("OptHideNSCAction", "com.github.naxos84.macros") == 1), Code:
	{
		[ausgabeSL = "checked='checked'"]
		[ausgabePublic = ""]
	};
	{
		[ausgabeSL = ""]
		[ausgabePublic = "checked='checked'"]
	}
]

[h: actionLink = macroLinkText("schadenAllgemeinProcess@this", "")]
[dialog("schadenAllgemein", "width=506; height=574; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>Schaden verursachen</title>
	</head>
	<body style='font-size: 11pt;' bgcolor='#ece9d8'>
		<form action="[r:actionLink]">
			<div style="background-image: url('[r: tblImage("forms",49)]'); background-repeat: no-repeat; height: 20; margin: 0px;" width="482">
			</div>
			<div style="background-image: url('[r: tblImage("forms",50)]'); background-repeat: repeat-y; text-align: center; height: 20; margin: 0px;" width="482">
				<div style='padding: 10px 0px 10px 0px;'>
					<image src='[r: tableImage("forms", 48)]'></image>
				</div>
				<table style='border-spacing: 0px; font-size: 12pt;'>
					<tr>
						<td>
							<input type='radio' name='wSchaden' value='0'>
						</td>
						<td>
							Schaden eingeben:
						</td>
						<td style='padding-left: 5px;'>
							<input type='text' name='schadenEingabe' size='2' maxlength='2' value=''>
						</td>
					</tr>
					<tr>
						<td>
							<input type='radio' name='wSchaden' value='1' checked='checked'>
						</td>
						<td>
							Schaden auswürfeln:
						</td>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td>
										<select name='wAnzahl' size='1'>
										<option selected='selected'>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
										<option>6</option>
										<option>7</option>
										<option>8</option>
										<option>9</option>
										<option>10</option>
										<option>11</option>
										<option>12</option>
										<option>13</option>
										<option>14</option>
										<option>15</option>
										<option>16</option>
										<option>17</option>
										<option>18</option>
										<option>19</option>
										<option>20</option>
										<option>21</option>
										</select>
									</td>
									<td>
										W
									</td>
									<td>
										<select name='wTyp' size='1'>
										<option>3</option>
										<option>4</option>
										<option selected='selected'>6</option>
										<option>8</option>
										<option>10</option>
										<option>12</option>
										<option>20</option>
										</select>
									</td>
									<td width='10'>
										&nbsp;
									</td>
									<td>
										+
									</td>
									<td>
										<input type='text' name='wBonus' size='2' maxlength='2' value=''>
									</td>
									<td width='10'>
										&nbsp;
									</td>
									<td>
										-
									</td>
									<td>
										<input type='text' name='wMalus' size='2' maxlength='2' value=''>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; padding: 0px; margin-top: 7px;'>
					<tr>
						<td>
							[h: button = strformat("<html><img src='%s'></html>",tableImage("forms", 46))]
							<input type="submit" name="action" value="[r: button]">
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 11px 0px 10px 0px;' cellpadding='0'>
					<tr>
						<td style='border-right: 1px solid #939393; padding-right: 5px;'>
							Ausgabe
						</td>
						<td style='padding-left: 5px;'>
							<input type="radio" name="chat" value="1" [r: ausgabePublic]>
						</td>
						<td>
							öffentlich
						</td>
						<td style='padding-left: 5px;'>
							<input type='radio' name='chat' value='2' [r: ausgabeSL]>
						</td>
						<td>
							Spielleiter
						</td>
						<td style='padding-left: 5px;'>
							<input type="radio" name="chat" value="3">
						</td>
						<td>
							Privat &amp; Spielleiter
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 3px 0px 4px 0px; font-size: 1pt;' width='390'>
					<tr>
						<td style='border-top: 1px solid #7b5547;'>
							&nbsp;
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin-bottom: 5px;'>
					<tr>
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td style='text-align: right;' valign='top'>
										<table style='border-spacing: 0px;' cellpadding='1'>
											<tr>
												<td style='font-weight: bold; text-align: right; border-right: 1px solid #939393; padding-right: 4px;'>
													Schadensart
												</td>
											</tr>
										</table>
									</td>
									<td>
										<table style='border-spacing: 0px;' cellpadding='1'>
											<tr>
												<td>
													<input type='radio' name='schadenArt' value='1' checked='checked'>
												</td>
												<td>
													Trefferpunkte (TP)
												</td>
												<td>
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='schadenArt' value='2'>
												</td>
												<td>
													Schadenspunkte (SP)
												</td>
												<td>
												</td>
											</tr>
											<tr>
												<td>
													<input type='checkbox' name='ausdauer' value='1'>
												</td>
												<td>
													Ausdauerschaden
												</td>
												<td>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td>
									</td>
									<td>
									</td>
								</tr>
								<tr>
									<td style ='text-align: right;' valign='top'>
										<table style='border-spacing: 0px;' cellpadding='1'>
											<tr>
												<td style='font-weight: bold; text-align: right; border-right: 1px solid #939393; padding-right: 4px;'>
													Schadensquelle
												</td>
											</tr>
										</table>
									</td>
									<td>
										<table style='border-spacing: 0px;' cellpadding='1'>
											<tr>
												<td>
													<input type='radio' name='quelle' value='Sonstiger Schaden' checked='checked'>
												</td>
												<td>
													Sonstiger Schaden
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='quelle' value='Magischer Schaden'>
												</td>
												<td>
													Magischer Schaden
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='quelle' value='Elementarschaden'>
												</td>
												<td>
													Elementarschaden
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='quelle' value='Klerikaler Schaden'>
												</td>
												<td>
													Klerikaler Schaden
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td style='text-align: right;' valign='top'>
										<table style='border-spacing: 0px;' cellpadding='1'>
											<tr>
												<td style='font-weight: bold; text-align: right; border-right: 1px solid #939393; padding-right: 4px;'>
													Trefferzone
												</td>
											</tr>
										</table>
									</td>
									<td>
										<table style='border-spacing: 0px;' cellpadding='1'>
											<tr>
												<td>
													<input type='radio' name='zone' value='99'>
												</td>
												<td>
													Zufällig
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='zone' value='0' checked='checked'>
												</td>
												<td>
													Keine Zone
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='zone' value='1'>
												</td>
												<td>
													Kopf
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='zone' value='2'>
												</td>
												<td>
													Brust
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='zone' value='3'>
												</td>
												<td>
													Rücken
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='zone' value='4'>
												</td>
												<td>
													Bauch
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='zone' value='5'>
												</td>
												<td>
													Linker Arm
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='zone' value='6'>
												</td>
												<td>
													Rechter Arm
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='zone' value='7'>
												</td>
												<td>
													Linkes Bein
												</td>
											</tr>
											<tr>
												<td>
													<input type='radio' name='zone' value='8'>
												</td>
												<td>
													Rechtes Bein
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</div>
			<div style="background-image: url('[r: tblImage("forms",51)]'); background-repeat: no-repeat; height: 20; margin: 0px;" width="482">
			</div>
		</form>
	</body>
</html>
}]