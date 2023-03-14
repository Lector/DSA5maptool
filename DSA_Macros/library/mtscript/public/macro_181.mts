[h: title = arg(0)]
[h: content = arg(1)]

[h: topLeft = tableImage("chat", 86)]
[h: topScale = tableImage("chat", 87)]
[h: topCenter = tableImage("chat", 88)]
[h: topRight = tableImage("chat", 89)]
[h: headerLeft = tableImage("chat", 90)]
[h: headerLeftCenter = tableImage("chat", 91)]
[h: headerScale = tableImage("chat", 92)]
[h: headerRightCenter = tableImage("chat", 93)]
[h: headerRight = tableImage("chat", 94)]
[h: left = tableImage("chat", 95)]
[h: center = tableImage("chat", 96)]
[h: right = tableImage("chat", 97)]
[h: bottomLeft = tableImage("chat", 98)]
[h: bottomCenter = tableImage("chat", 99)]
[h: bottomRight = tableImage("chat", 100)]

[h: output = strformat("
<table style='color: #441e13; font-size: 12pt; text-align: center' cellspacing=0 cellpadding=0>
	<tr>
		<td><img src='%{topLeft}'/></td>
		<td style='background-image: url(%{topScale}); background-repeat: repeat-x; text-align: center;' colspan=3><img src='%{topCenter}'/></td>
		<td><img src='%{topRight}'/></td>
	</tr>
	<tr>
		<td><img src='%{headerLeft}'/></td>
		<td style='background-image: url(%{headerScale}); background-repeat: repeat-x;'><img src='%{headerLeftCenter}'/></td>
		<td style='background-image: url(%{headerScale}); background-repeat: repeat-x; text-align: center; white-space: nowrap; font-weight: bold; padding: 0px 0px 6px 0px' valign='middle'>
			%{title}
		</td>
		<td style='background-image: url(%{headerScale}); background-repeat: repeat-x; text-align: right;'><img src='%{headerRightCenter}'/></td>
		<td><img src='%{headerRight}'/></td>
	</tr>
	<tr>
		<td style='background-image: url(%{left}); background-repeat: repeat-y;'></td>
		<td style='background-image: url(%{center}); background-repeat: repeat;' colspan=3>
			%{content}
		</td>
		<td style='background-image: url(%{right}); background-repeat: repeat-y;'></td>
	</tr>
	<tr>
		<td><img src='%{bottomLeft}'/></td>
		<td style='background-image: url(%{bottomCenter}); background-repeat: repeat-x;' colspan=3></td>
		<td><img src='%{bottomRight}'/></td>
	</tr>
</table>
")]

[h: macro.return = output]