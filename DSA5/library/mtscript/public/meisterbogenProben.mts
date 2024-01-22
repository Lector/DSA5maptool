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

                [r: macroLink("Proben im aktuell markierten Token bearbeiten", "manageChecks@this")]
				[h: tokens = getTokens()]
                [h: checkTokens = "{}"]
                [h,foreach(tok, tokens, ""),Code:{
                    [h: checks = getProperty("Checks", tok)]
                    [h,if(checks != "" && checks != "[]"): checkTokens = json.set(checkTokens, tok, checks)]
                }]
                [h: fields = json.fields(checkTokens)]
                [r,foreach(tok, fields, ""),Code:{
                    [h: checks = json.get(checkTokens, tok)]
					<div class="row-container">
						<img src="[r: getTokenImage(50, tok)]"/>
						<div class="column-container">
                    		[r,foreach(check, checks, ""): strformat("<div><a href='%s'>%s</a></div>", macroLinkText("requestCheck@this", "none", check), checkLabel(check))]
						</div>
					</div>
                }]
			</div>
		</div>
		<div class="footer"></div>
	</body>
</html>
}]