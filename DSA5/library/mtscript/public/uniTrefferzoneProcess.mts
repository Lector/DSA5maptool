[h: uebergabe = macro.args]
[h: closeDialog("uniTrefferzone")]
[h: groesse = json.get(uebergabe, "groesse")]
[h,macro("trefferzone@this"): groesse]
[h: zone = macro.return]

[h: ausgabe = border("Trefferzone", strformat("
	<table style='border-spacing: 0px; margin-top: 3px;'>
		<tr>
			<td style='text-align: right;' valign='middle' width='60'>
				<img src='%s'>
			</td>
			<td style='text-align: center; font-size: 20pt; color: #1d5c2f;' valign='middle' width='204'>
				%s
			</td>
		</tr>
	</table>
", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/target.png"), zone))]

[h: sendTo("Public", ausgabe)]