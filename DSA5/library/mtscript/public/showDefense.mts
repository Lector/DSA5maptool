[h: defenseParams = arg(0)]

[h: resultType = json.get(defenseParams, "ResultType")]
[h: success = json.get(defenseParams, "success")]

[h,switch(resultType),Code:
	case "parry":{
		[image = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/shield.png")]
		[critImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/luckyParry.png")]
		[botchImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/botch.png")]
	};
	case "dodge":{
		[image = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/dodge.png")]
		[critImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/luckyDodge.png")]
		[botchImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/botch.png")]
	}
]

<!-- Je nach Verteidigungsart sind die Krit- und Patzerbilder etwas anders -->
[h: params = json.set("{}",
"critImage", critImage,
"botchImage", botchImage
)]

[h: show1d20 = show1d20(defenseParams, params)]

[h: output = strformat("
	<td style='text-align:center; padding: 0px 12px 0px 8px' valign='middle' rowspan=3>
		<img src=%{image}/>
	</td><td rowspan=3></td>
	%{show1d20}")]

[h: macro.return = output]