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

[h: tokenChecks = getProperty("Checks", currentToken())]
[h,if(tokenChecks == ""): tokenChecks = "[]"]
[h,if(json.length(tokenChecks) == 0),Code:{
	[h: setProperty("Checks", "[]", currentToken())]
	[h: checkEdit(currentToken())]
	[h: abort(0)]
}]


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

			<div style="display: flex; flex-direction: column; align-items: center;">
				[r: macroLink("Neue Probe hinzufügen <img src="+data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/plus.png")+">", "checkEdit@this", "", currentToken())]
				<div>&nbsp;</div>
				[h: i = 0]
				[r,foreach(check, tokenChecks, ""),Code:{
					<div>
						[h: label = checkLabel(check)]
						[r: macroLink(label, "requestCheck@this", "", check)]
						[h: edit = macroLinkText("checkEdit@this", "", json.append("[]", currentToken(), check))]
						[h: editIcon = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/pencil.png")]
						[r: strformat("<span title='%{label} bearbeiten'><a href='%{edit}'><image src='%{editIcon}' border='0' alt='%{label} bearbeiten'></image></a></span>")]
						[h: delete = macroLinkText('checkDelProcess@this', '', json.set('{}', "token", currentToken(), "index", i))]
						[h: deleteIcon = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/minus.png")]
						[r: strformat("<span title='%{label} löschen'><a href='%{delete}'><image src='%{deleteIcon}' border='0' alt='%{label} löschen'></image></a></span>")]
					</div>
					[h: i = i + 1]
				}]
				
				
			</div>
		</div>
	</body>
</html>
}]