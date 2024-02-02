[h: setLibProperty("SLframe", 3, "lib:com.github.lector.dsa5maptool")]

[frame5("meisterbogen", "width=525; height=500; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Meisterbogen - Proben
		</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charsheet.css?cachelib=false'/>
	</head>
	<body>
		<div class="header">
			<div class="charactername">
				Proben
			</div>
			[r: gmsheetNavigation(2)]
		</div>
		<div class="content">
            <div class="column-container">

                [r: macroLink("Neue Proben im aktuell ausgewählten Token anlegen", "checkEdit@this", "", currentToken())]
				[r: macroLink("Spontane Probe würfeln lassen", "requestCheck@this")]
				<br>

				[h: tokens = getTokens()]
                [h: checkTokens = "{}"]
				[h: fields = "[]"]
                [h,foreach(tok, tokens, ""),Code:{
                    [h: tokenChecks = getProperty("Checks", tok)]
					[h,if(tokenChecks != "" && tokenChecks != "[]"): fields = json.append(fields, tokenChecks)]
                    [h,if(tokenChecks != "" && tokenChecks != "[]" && json.count(fields, tokenChecks) <= 1): checkTokens = json.set(checkTokens, tok, tokenChecks)]
                }]
                [h: fields = json.fields(checkTokens)]
                [r,foreach(tok, fields, ""),Code:{
                    [h: tokenChecks = json.get(checkTokens, tok)]
					<div class="heading heading-additional">
						[h: name = getName(tok)]
						[r: name]
						<div title="[r: name] eine neue Probe hinzufügen">
							<a href="[r: macroLinkText('checkEdit@this', '', tok)]">
								<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' border="0" alt="[r: name] eine neue Probe hinzufügen"></image>
							</a>
						</div>
					</div>

					<div class="checks">
						<img src="[r: getTokenImage(50, tok)]"/>
						<ul>
						[r,foreach(check, tokenChecks, ""):
							strformat("
							<li>
								<a href='%s'>%s</a>
								<span title='Probe ändern'><a href='%s'><image src='%s' border='0'></image></a></span>
								<span title='Probe löschen'><a href='%s'><image src='%s' border='0'></image></a></span>
							</li>",
							macroLinkText("requestCheck@this", "none", check), checkLabel(check),
							macroLinkText('checkEdit@this', '', json.append('[]', tok, check)), data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesEditSmall.png"),
							macroLinkText('checkDelProcess@this', '', json.set('{}', "token", tok, "index", json.indexOf(tokenChecks, check))), data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesRemoveSmall.png"))
						]
						</ul>
					</div>
                }]
			</div>
		</div>
		<div class="footer"></div>
	</body>
</html>
}]