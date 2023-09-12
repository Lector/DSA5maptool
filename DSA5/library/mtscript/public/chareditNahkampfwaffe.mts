[h: switchToken(arg(0))]

[dialog5("chareditWaffe", "width=425; height=342; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Nahkampfwaffe editieren</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			[r: header("Nahkampfwaffen")]
			<table style='border-spacing: 4px; margin: 0px auto 10px auto;'>
				<tr>
					<td style='text-align: center; padding-bottom: 5px;'>
						Wähle eine Nahkampfwaffe zum Editieren aus:
					</td>
				</tr>
				[h: baum = Nahkampfwaffen]
				[Foreach(waffe, baum,""), CODE:
					{
						<tr>
							<td style='text-align: center;'>
								[h: id = json.get(waffe, "ID")]
								<span style='color: #441e13; text-decoration: none;'>[r: macroLink(json.get(waffe, "Name"), "quickeditNahkampfwaffe@this", "", json.append(currentToken(), id))]</span>
							</td>
						</tr>
					}
				]
			</table>
		</div>
	</body>
</html>
}]