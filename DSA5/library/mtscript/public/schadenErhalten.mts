[h,if(arg(0) != ""),Code:
{
	[switchToken(arg(0))]
};
{
	[h,macro("abfrageImpersonate@this"): ""]
	[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[h,if(listCount(selectID) != 1): inputFail("gmSelectFail")]
		[switchToken(selectID)]
	}]
}]

[h,if(isNPC() == 1 && getLibProperty("OptHideNSCAction", "com.github.lector.dsa5maptool") == 1), Code:
	{
		[ausgabeSL = "checked='checked'"]
		[ausgabePublic = ""]
	};
	{
		[ausgabeSL = ""]
		[ausgabePublic = "checked='checked'"]
	}
]
[h: schaden = ""]
[h: status = "[]"]
[h: failText = ""]
[h: uebergabe = ""]
[h,if(json.length(macro.args) > 1): uebergabe = arg(1)]
[h,if(uebergabe != ""),Code:{
	[schadensart = json.get(uebergabe, "Schadensart")]
	[if(schadensart != "StP"): schaden = json.get(uebergabe, "Schaden")]
	[h: status = json.get(uebergabe, "Status")]
	[h: failText = json.get(uebergabe, "FailText")]
};{}]

[h: tModRS = getStrProp(TempMod, "rs")]
[h,if(tModRS == -9): ausgabeTempRSn9 = "selected='selected'"; ausgabeTempRSn9 = ""]
[h,if(tModRS == -8): ausgabeTempRSn8 = "selected='selected'"; ausgabeTempRSn8 = ""]
[h,if(tModRS == -7): ausgabeTempRSn7 = "selected='selected'"; ausgabeTempRSn7 = ""]
[h,if(tModRS == -6): ausgabeTempRSn6 = "selected='selected'"; ausgabeTempRSn6 = ""]
[h,if(tModRS == -5): ausgabeTempRSn5 = "selected='selected'"; ausgabeTempRSn5 = ""]
[h,if(tModRS == -4): ausgabeTempRSn4 = "selected='selected'"; ausgabeTempRSn4 = ""]
[h,if(tModRS == -3): ausgabeTempRSn3 = "selected='selected'"; ausgabeTempRSn3 = ""]
[h,if(tModRS == -2): ausgabeTempRSn2 = "selected='selected'"; ausgabeTempRSn2 = ""]
[h,if(tModRS == -1): ausgabeTempRSn1 = "selected='selected'"; ausgabeTempRSn1 = ""]
[h,if(tModRS == 0): ausgabeTempRSp0 = "selected='selected'"; ausgabeTempRSp0 = ""]
[h,if(tModRS == 1): ausgabeTempRSp1 = "selected='selected'"; ausgabeTempRSp1 = ""]
[h,if(tModRS == 2): ausgabeTempRSp2 = "selected='selected'"; ausgabeTempRSp2 = ""]
[h,if(tModRS == 3): ausgabeTempRSp3 = "selected='selected'"; ausgabeTempRSp3 = ""]
[h,if(tModRS == 4): ausgabeTempRSp4 = "selected='selected'"; ausgabeTempRSp4 = ""]
[h,if(tModRS == 5): ausgabeTempRSp5 = "selected='selected'"; ausgabeTempRSp5 = ""]
[h,if(tModRS == 6): ausgabeTempRSp6 = "selected='selected'"; ausgabeTempRSp6 = ""]
[h,if(tModRS == 7): ausgabeTempRSp7 = "selected='selected'"; ausgabeTempRSp7 = ""]
[h,if(tModRS == 8): ausgabeTempRSp8 = "selected='selected'"; ausgabeTempRSp8 = ""]
[h,if(tModRS == 9): ausgabeTempRSp9 = "selected='selected'"; ausgabeTempRSp9 = ""]

[h: actionLink = macroLinkText("schadenErhaltenProcess@this", "")]
[dialog5("schadenErhalten", "width=548; height=486; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Verlust von Lebensenergie</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Schaden erhalten")]
				<table style='margin: 0px auto 0px auto;'>
					<tr>
						<td>
							<input type='radio' name='wSchaden' value='0' checked='checked'>
						</td>
						<td>
							Schaden eingeben:
						</td>
						<td style='padding-left: 5px;'>
							<input type='text' name='schadenEingabe' size='3' maxlength='3' value='[r:schaden]'>
						</td>
					</tr>
					<tr>
						<td>
							<input type='radio' name='wSchaden' value='1'>
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
				<table style='padding: 0px; margin: 7px auto 0px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Schaden eintragen</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@this"): currentToken()]
				<hr/>
				<table style='margin: 0px auto 0px auto;'>
					<tr>
						[r,macro("schadensart@this"): uebergabe]
					</tr>
				</table>
				<input type="hidden" name="wundschwelle" value="0">
				<input type="hidden" name="status" value='[r: status]'/>
				<input type="hidden" name="failText" value="[r: failText]"/>
			</form>
		</div>
	</body>
</html>
}]