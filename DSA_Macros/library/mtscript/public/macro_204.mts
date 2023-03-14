[h: defenseParams = arg(0)]

[h: resultType = json.get(defenseParams, "ResultType")]
[h: success = json.get(defenseParams, "success")]

[h,switch(resultType),Code:
	case "parry":{
		[image = 17]
		[critImage = 46]
		[botchImage = 10]
	};
	case "dodge":{
		[image = 48]
		[critImage = 49]
		[botchImage = 10]
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
		<img src='%s'/>
	</td><td rowspan=3></td>
	%{show1d20}",
tableImage("chat", image))]

[h: macro.return = output]