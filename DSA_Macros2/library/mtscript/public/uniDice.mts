[h: uebergabe = macro.args]

[h: windowTitle = strformat("W%s Wurf", uebergabe)]
[h: wTitle = strformat("Wurf mit W%s", uebergabe)]
[h: wText = strformat("W%s", uebergabe)]

[h,switch(uebergabe), Code:
	case "3": {
		[button = tableImage("forms", 82)]
	};
	case "4": {
		[button = tableImage("forms", 83)]
	};
	case "6": {
		[button = tableImage("forms", 84)]
	};
	case "8": {
		[button = tableImage("forms", 85)]
	};
	case "10": {
		[button = tableImage("forms", 86)]
	};
	case "12": {
		[button = tableImage("forms", 87)]
	};
	case "20": {
		[button = tableImage("forms", 88)]
	}
]

[h: actionLink = macroLinkText("uniDiceProcess@this", "")]
[dialog5("uniDice", "width=590; height=322; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: windowTitle]</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<div class="border">
		<form action="[r: actionLink]" method="post">
			[r: header("Würfelwurf")]
			<table style='border-spacing: 0px; margin-top: 8px; margin-left: auto; margin-right: auto;'>
				<tr>
					<td style='text-align: center; font-size: 14pt; font-weight: bold; color: #482902; border-top: 1px solid #7b5547; border-bottom: 1px solid #7b5547; margin-bottom: 5px;' width='300'>
						[r: wTitle]
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px; margin-top: 5px; margin-left: auto; margin-right: auto;'>
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
						[r: wText]
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
			<table style='border-spacing: 0px; margin: 7px auto 8px auto;'>
					<td>
						<button type='submit' name='action'><img src='[r: button]'/>
					</td>
				</tr>
			</table>
			[r,macro("probeChat@lib:com.github.naxos84.Macros"): ""]
			<input type='hidden' name='diceTyp' value='[r: uebergabe]'/>
		</form>
	</div>
</html>
}]