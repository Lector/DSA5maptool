[h,if(json.length(macro.args) > 2): tokenID = arg(2); tokenID = ""]

[h: target = arg(0)]
[h: content = arg(1)]

[h: player = getPlayerName()]

[h,switch(target),Code:
	case "1": {
		[target = "Public"]
	};
	case "2": {
		[target = "Gm"]
	};
	case "3": {
		[target = "GmAndSelf"]
	};
	case "4": {
		[target = "Self"]
	}
]

[h,switch(target), Code:
	case "Public": {
		[recipients = getAllPlayerNames("json")]
		[visibility = ""]
	};
	case "Gm": {
		[recipients = getGMNames()]
		[visibility = "SL"]
	};
	case "GmAndSelf": {
		[recipients = getGMNames()]
		[h,if(json.contains(recipients, player) == 0): recipients = json.append(recipients, player)]
		[visibility = "SL & Privat"]
	};
	case "Self": {
		[recipients = json.append("[]", player)]
		[visibility = "Privat"]
	};
]

[h: sendToUsers(content, recipients, visibility)]