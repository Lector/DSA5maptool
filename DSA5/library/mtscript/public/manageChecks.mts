[h,if(isGM() == 1 && hasImpersonated() == 0 && json.length(macro.args) == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h,if(json.length(macro.args) > 0): switchToken(arg(0))]

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

            [h: checks = getProperty("Checks", currentToken())]
            [h,if(checks == ""): setProperty("Checks", "[]", currentToken())]
            [h: checks = getProperty("Checks", currentToken())]

			<div style="display: flex; flex-direction: column; align-items: center;">
				[h: i = 0]
				[r,foreach(check, checks, ""),Code:{
					[h: skill = json.get(check, "Skill")]
					[h: spec = json.get(check, "Spec")]
					<div>
						[h: label = skill]
						[h,if(spec != ""): label = label + strformat(" (%{spec})")]
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