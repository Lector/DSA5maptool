[h: title = arg(0)]
[h: outString = strformat("
<tr>
	<td colspan=7 style='text-align: center; margin: 6px 0 0 0;' valign=middle>
		<table>
			<tr>
				<td style='padding: 5px 12px 10px 0px'>
					<img src='%s'/>
				</td>
				<td style='text-align: center; padding: 0px 0px 8px 0px'>
					%{title}
				</td>
				<td style='padding: 5px 0px 10px 12px'>
					<img src='%s'/>
				</td>
			</tr>
		</table>
	</td>
</tr>",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/ornamentTop.png"), data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/ornamentTop.png"))]
[h: macro.return = outString]