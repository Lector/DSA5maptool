[h,macro("abfrageImpersonate@this"): ""]

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

[h: uebergabe = macro.args]

[button = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]
[h,switch(uebergabe), Code:
	case "lePlus": {
			[dialogTitle = "Lebensenergie hinzufügen"]
			[title = "LE Gewinn"]
			[buttonText = "LE hinzufügen"]
		};
	case "leMinus": {
			[dialogTitle = "Lebensenergie abziehen"]
			[title = "LE Verlust"]
			[buttonText = "LE abziehen"]
		};
	case "aePlus": {
			[dialogTitle = "Astralenergie hinzufügen"]
			[title = "AE Gewinn"]
			[buttonText = "AE hinzufügen"]

		};
	case "aeMinus": {
			[dialogTitle = "Astralenergie abziehen"]
			[title = "AE Verlust"]
			[buttonText = "AE abziehen"]
		};
	case "kePlus": {
			[dialogTitle = "Karmaenergie hinzufügen"]
			[title = "KE Gewinn"]
			[buttonText = "KE hinzufügen"]
		};
	case "keMinus": {
			[dialogTitle = "Karmaenergie abziehen"]
			[title = "KE Verlust"]
			[buttonText = "KE abziehen"]
		}
]

[h: actionLink = macroLinkText("changeEnergieProcess@this", "")]
[dialog5("changeEnergie", "width=434; height=335; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: dialogTitle]</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header(title)]
				<table style='border-spacing: 0px; font-size: 11pt;'>
					<tr>
						<td>
							<input type='radio' name='eingabeTyp' value='0' checked='checked'>
						</td>
						<td>
							Direkteingabe:
						</td>
						<td style='padding-left: 5px;'>
							<input type='text' name='direkteingabe' size='3' maxlength='3' value=''>
						</td>
					</tr>
					<tr>
						<td>
							<input type='radio' name='eingabeTyp' value='1'>
						</td>
						<td>
							Auswürfeln:
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
									<td>
										&nbsp;
									</td>
									<td>
										+
									</td>
									<td>
										<input type='text' name='wBonus' size='3' maxlength='3' value=''>
									</td>
									<td>
										&nbsp;
									</td>
									<td>
										-
									</td>
									<td>
										<input type='text' name='wMalus' size='3' maxlength='3' value=''>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; padding: 0px; margin: 7px auto 0px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src="[r: button]"/></td>
										<td>[r: buttonText]</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@this"): json.append(currentToken(), 0)]
				<input type="hidden" name="energieTyp" value="[r: uebergabe]">
			</form>
		</div>
	</body>
</html>
}]