[h,if(json.length(macro.args) > 2): tokenID = arg(2); tokenID = ""]

[h,switch(arg(0)), Code:
	case "1": {
			[sendToPublic(arg(1), tokenID)]
		};
	case "2": {
			[sendToGM(arg(1), tokenID)]
		};
	case "3": {
			[sendToSelfGM(arg(1), tokenID)]
		};
	case "4": {
			[sendToSelf(arg(1), tokenID)]
		}
]