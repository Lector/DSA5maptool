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

[h: button = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]
[h,switch(arg(0)), Code:
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
		[h,if(MaxAsP <= 0): inputFail("aeChange")]
		[dialogTitle = "Astralenergie hinzufügen"]
		[title = "AE Gewinn"]
		[buttonText = "AE hinzufügen"]
	};
	case "aeMinus": {
		[h,if(MaxAsP <= 0): inputFail("aeChange")]
		[dialogTitle = "Astralenergie abziehen"]
		[title = "AE Verlust"]
		[buttonText = "AE abziehen"]
	};
	case "kePlus": {
		[h,if(MaxKaP <= 0): inputFail("keChange")]
		[dialogTitle = "Karmaenergie hinzufügen"]
		[title = "KE Gewinn"]
		[buttonText = "KE hinzufügen"]
	};
	case "keMinus": {
		[h,if(MaxKaP <= 0): inputFail("keChange")]
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
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
		[h: js = "
		function direct() {
			document.getElementById('inputDirect').checked = true;
		}
		function rolled() {
			document.getElementById('inputDie').checked = true;
		}
		window.addEventListener('load', function(evt) {
			document.getElementById('direct').addEventListener('input', function(e) { direct(); });
			document.getElementById('dieCount').addEventListener('change', function(e) { rolled(); });
			document.getElementById('dieType').addEventListener('change', function(e) { rolled(); });
			document.getElementById('dieBonus').addEventListener('input', function(e) { rolled(); });
			document.getElementById('dieMalus').addEventListener('input', function(e) { rolled(); });
		});"]
		<script>[r: js]</script>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header(title)]
				<table style='border-spacing: 0px;'>
					<tr>
						<td>
							<input type='radio' id='inputDirect' name='eingabeTyp' value='0' checked>
						</td>
						<td>
							Direkteingabe:
						</td>
						<td style='padding-left: 5px;'>
							<input type='text' id='direct' name='direkteingabe' size='3' maxlength='3' value=''>
						</td>
					</tr>
					<tr>
						<td>
							<input type='radio' id='inputDie' name='eingabeTyp' value='1'>
						</td>
						<td>
							Auswürfeln:
						</td>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td>
										<select name='wAnzahl' id="dieCount" size='1'>
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
										<select name='wTyp' id="dieType" size='1'>
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
										<input type='text' name='wBonus' id="dieBonus" size='3' maxlength='3' value=''>
									</td>
									<td>
										&nbsp;
									</td>
									<td>
										-
									</td>
									<td>
										<input type='text' name='wMalus' id="dieMalus" size='3' maxlength='3' value=''>
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
				<input type="hidden" name="energieTyp" value="[r: arg(0)]">
			</form>
		</div>
	</body>
</html>
}]