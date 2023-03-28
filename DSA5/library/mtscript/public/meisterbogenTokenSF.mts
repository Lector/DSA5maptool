[h: id = macro.args]
[h: switchToken(id)]

[dialog("meisterbogenTokenSF", "width=455; height=500; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Sonderfertigkeiten, Rituale &amp; Liturgien
		</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 10pt; color: #eee5c8;">
		<table style='border-spacing: 0px;' width='431'>
			<tr>
				<td class="panel-top">
				</td>
			</tr>
			<tr>
				<td class="panel-middle" width="431">
					<table>
						<tr>
							<td>
								<a href="[r: macroLinkText("gotoToken@this", "", id)]"><image src='[r: getTokenImage(30)]' border="0" alt="Zum Token wechseln und auswählen"></image></a>
							</td>
							<td style='font-weight: bold;'>
								[r: getName()]
							</td>
						</tr>
					</table>
					<table width='405'>
						<tr>
							<td style='font-weight: bold;' width='80' valign='top'>
								Allgemeine SF:
							</td>
							<td style='text-align: left;'>
								[r,foreach(item, AllgemeineSF, ", "): json.get(item, "Name")]
							</td>
						</tr>
						<tr>
							<td style='font-weight: bold;' width='80' valign='top'>
								Kampf-SF:
							</td>
							<td style='text-align: left;'>
								[r,foreach(item, KampfSF, ", "): json.get(item, "Name")]
							</td>
						</tr>
						<tr>
							<td style='font-weight: bold;' width='80' valign='top'>
								Magie-SF:
							</td>
							<td style='text-align: left;'>
								[r,foreach(item, MagieSF, ", "): json.get(item, "Name")]
							</td>
						</tr>
						<tr>
							<td style='font-weight: bold;' width='80' valign='top'>
								Karmale-SF:
							</td>
							<td style='text-align: left;'>
								[r,foreach(item, KarmaleSF, ", "): json.get(item, "Name")]
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td class="panel-bottom">
				</td>
			</tr>
		</table>
	</body>
</html>
}]