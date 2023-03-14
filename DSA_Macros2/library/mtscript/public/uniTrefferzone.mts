[h: actionLink = macroLinkText("uniTrefferzoneProcess@Lib:macros2", "")]
[h: button = tableImage("forms", 90)]
[dialog5("uniTrefferzone", "width=480; height=512; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Trefferzone ausw&uuml;rfeln</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<div class="border">
		<form action="[r: actionLink]" method="post">
			[r: header("Trefferzone")]
			<table style='border-spacing: 0px; margin-left: auto; margin-right: auto;' cellpadding='1'>
				<tr>
					<td valign='middle'>
						<input type='radio' name='groesse' value='0'>
					</td>
					<td>
						Humanoid (klein)
					</td>
				</tr>
				<tr>
					<td valign='middle'>
						<input type='radio' name='groesse' value='1' checked='checked'>
					</td>
					<td>
						Humanoid (mittel)
					</td>
				</tr>
				<tr>
					<td valign='middle'>
						<input type='radio' name='groesse' value='2'>
					</td>
					<td>
						Humanoid (gro&szlig;)
					</td>
				</tr>
				<tr>
					<td valign='middle'>
						<input type='radio' name='groesse' value='3'>
					</td>
					<td>
						Vierbeiner (klein)
					</td>
				</tr>
				<tr>
					<td valign='middle'>
						<input type='radio' name='groesse' value='4'>
					</td>
					<td>
						Vierbeiner (mittel)
					</td>
				</tr>
				<tr>
					<td valign='middle'>
						<input type='radio' name='groesse' value='5'>
					</td>
					<td>
						Vierbeiner (gro&szlig;)
					</td>
				</tr>
				<tr>
					<td valign='middle'>
						<input type='radio' name='groesse' value='6'>
					</td>
					<td>
						6 Gliedma&szlig;en + Schwanz (gro&szlig;)
					</td>
				</tr>
				<tr>
					<td valign='middle'>
						<input type='radio' name='groesse' value='7'>
					</td>
					<td>
						6 Gliedma&szlig;en + Schwanz (riesig)
					</td>
				</tr>
				<tr>
					<td valign='middle'>
						<input type='radio' name='groesse' value='8'>
					</td>
					<td>
						Fangarme
					</td>
				</tr>
				<tr>
					<td valign='middle'>
						<input type='radio' name='groesse' value='9'>
					</td>
					<td>
						Keine Zonen
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px; margin: 9px auto 8px auto;'>
					<td>
						<button type='submit' name='action'>
							<img src='[r: button]'/>
						</button>
					</td>
				</tr>
			</table>
		</form>
	</div>
</html>
}]