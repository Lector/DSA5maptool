[h: id = macro.args]
[h: switchToken(id)]

[dialog("meisterbogenTokenSF", "width=455; height=500; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Sonderfertigkeiten, Rituale &amp; Liturgien
		</title>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 10pt; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",48)]'); background-repeat: no-repeat; height: 28; margin: 0px;" width="431">
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",49)]'); background-repeat: repeat-y; margin: 0px; text-align: center;" width="431">
			<table style='border-spacing: 0px;'>
				<tr>
					<td>
						<a href="[r: macroLinkText("gotoToken@Lib:macros2", "", id)]"><image src='[r: getTokenImage(30)]' border="0" alt="Zum Token wechseln und ausw&auml;hlen"></image></a>
					</td>
					<td style='font-weight: bold;'>
						[r: getName()]
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px;' width='405'>
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
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",50)]'); background-repeat: no-repeat; height: 28; margin: 0px;" width="431">
		<div>
	</body>
</html>
}]