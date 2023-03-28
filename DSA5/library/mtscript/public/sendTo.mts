[h,if(json.length(macro.args) > 2): tokenID = arg(2); tokenID = ""]

[h: target = arg(0)]
[h: content = arg(1)]

[h,switch(target), Code:
	case "1": {
			[
				sendToPublic(content, tokenID)
			]
		};
	case "2": {
			[
				sendToGM(content, tokenID)
			]
		};
	case "3": {
			[
				sendToSelfGM(content, tokenID)
			]
		};
	case "4": {
			[
				sendToSelf(content, tokenID)
			]
		};
	case "Public": {
		[sendToPublic(content, tokenID)]
	};
	case "Gm": {
		[sendToGM(content, tokenID)]
	};
	case "GmAndSelf": {
		[sendToSelfGM(content, tokenID)]
	};
	case "Self": {
		[sendToSelf(content, tokenID)]
	}
]