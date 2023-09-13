[h: switchToken(arg(0))]

[dialog5("chareditWaffeDel", "width=425; height=342; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Nahkampfwaffe löschen</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			[r: header("Waffe löschen")]
			<table style='border-spacing: 4px; margin: 0px auto 10px auto;'>
				<tr>
					<td style='text-align: center; padding-bottom: 5px;'>
						Wähle eine Nahkampfwaffe zum löschen aus:
					</td>
				</tr>
				[h: baum = Nahkampfwaffen]
				[h: index = 0]
				[Foreach(waffe, baum, ""), CODE:
				{
					<tr>
						<td style='text-align: center;'>
							<span style='color: #441e13; text-decoration: none;'>[r: macroLink(json.get(waffe, "Name"), "chareditNahkampfwaffeDelProcess@this", "", json.append("[]", currentToken(), json.get(waffe, "ID")))]</span>
							[h: index = index + 1]
						</td>
					</tr>
				}]
			</table>
		</div>
	</body>
</html>
}]