[h: actionLink = macroLinkText("iniMultiProcess@this", "")]
[dialog5("iniMulti", "width=467; height=382; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Multi-Initiative w&uuml;rfeln</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Multi-Initiative")]
				<table style='border-spacing: 0px;' cellpadding='3'>
					<tr>
						<td valign='middle'>
							<input type='radio' name='iniTyp' value='0' checked='checked'>
						</td>
						<td valign='middle' colspan=4>
							Werte und Modifikatoren der Tokens nutzen
						</td>
					</tr>
					<tr>
						<td valign='middle'>
							<input type='radio' name='iniTyp' value='1'>
						</td>
						<td valign='middle'>
							Folgende Werte nutzen:
						</td>
						<td valign='middle'>
							<select name='wAnzahl' size='1'>
								<option>0</option>
								<option selected='selected'>1</option>
								<option>2</option>
							</select>
						</td>
						<td valign='middle'>
							W6+
						</td>
						<td valign='middle'>
							<input type='text' name='wert' size='2' maxlength='2' value='10'>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 12px 0px 0px 0px; font-size: 1pt;' width='360'>
					<tr>
						<td style='border-top: 1px solid #7b5547;'>
							&nbsp;
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin-top: 6px;' cellpadding='3'>
					<tr>
						<td valign='middle'>
							INI-Bonus:
						</td>
						<td valign='middle'>
							<input type='text' name='bonus' size='2' maxlength='2' value=''>
						</td>
						<td width='20'>
							&nbsp;
						</td>
						<td valign='middle'>
							INI-Malus:
						</td>
						<td valign='middle'>
							<input type='text' name='malus' size='2' maxlength='2' value=''>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 10px auto 8px auto;'>
						<td>
							[h: button = tableImage("forms", 115)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
			</form>
		</div<
	</body>
</html>
}]