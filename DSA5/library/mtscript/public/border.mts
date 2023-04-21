[h: title = arg(0)]
[h: content = arg(1)]

[h: topLeft = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/topLeft.png")]
[h: topScale = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/top.png")]
[h: topCenter = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/skull.png")]
[h: topRight = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/topRight.png")]
[h: headerLeft = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/leftHeader.png")]
[h: headerLeftCenter = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/leftInnerHeader.png")]
[h: headerScale = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/header.png")]
[h: headerRightCenter = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/rightInnerHeader.png")]
[h: headerRight = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/rightHeader.png")]
[h: left = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/left.png")]
[h: center = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/center.png")]
[h: right = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/right.png")]
[h: bottomLeft = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/bottomLeft.png")]
[h: bottomCenter = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/bottom.png")]
[h: bottomRight = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/border/bottomRight.png")]

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