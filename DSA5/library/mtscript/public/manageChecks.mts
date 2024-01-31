[h,if(isGM() == 0): inputFail("gm")]]

[h,if(json.length(macro.args) == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{
		[switchToken(arg(0))]
	}
]


[dialog5("manageChecks", "width=425; height=342; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: getName(currentToken())] - Proben editieren</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			[r: header("Proben")]

            [h: tokenChecks = getProperty("Checks", currentToken())]
            [h,if(tokenChecks == ""): setProperty("Checks", "[]", currentToken())]
            [h: tokenChecks = getProperty("Checks", currentToken())]

			<div style="display: flex; flex-direction: column; align-items: center;">
				[h: i = 0]
				[r,foreach(check, tokenChecks, ""),Code:{
					<div>
						[h: label = checkLabel(check)]
						[r: macroLink(label, "checkEdit@this", "", json.append("[]", currentToken(), check))]
						[h: delete = macroLinkText('checkDelProcess@this', '', json.set('{}', "token", currentToken(), "index", i))]
						[h: deleteIcon = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/minus.png")]
						[r: strformat("<span title='%{label} löschen'><a href='%{delete}'><image src='%{deleteIcon}' border='0' alt='%{label} löschen'></image></a></span>")]
					</div>
					[h: i = i + 1]
				}]
				
				<div>&nbsp;</div>
				[r: macroLink("Neue Probe hinzufügen", "checkEdit@this", "", currentToken())]
			</div>
		</div>
	</body>
</html>
}]