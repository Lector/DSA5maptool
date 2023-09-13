[h: switchToken(arg(0))]

[dialog5("chareditRSDel", "width=425; height=342; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>Rüstung löschen</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			[r: header("Rüstung löschen")]
			<table style='border-spacing: 4px; margin: 0px auto 10px; auto'>
				<tr>
					<td style='text-align: center; padding-bottom: 5px;'>
						Wähle eine Rüstung zum löschen aus:
					</td>
				</tr>
				[h: baum = json.remove(Ruestungen, 0)]
				[h: index = 1]
				[Foreach(rs, baum, ""), CODE:
					{
							<tr>
								<td style='text-align: center;'>
									<span style='color: #441e13; text-decoration: none;'>[r: macroLink(json.get(rs, "Name"), "chareditRSDelProcess@this", "", json.append("[]", currentToken(), json.get(rs, "ID")))]</span>
									[h: index = index + 1]
								</td>
							</tr>
					}
				]
			</table>
		</div>
	</body>
</html>
}]