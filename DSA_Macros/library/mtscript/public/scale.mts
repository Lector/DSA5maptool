[h,switch(arg(0)):
	case "Fine": value = 0.5;
	case "Diminutive": value = 0.5;
	case "Tiny": value = 0.5;
	case "Small": value = 0.75;
	case "Medium": value = 1;
	case "Large": value = 2;
	case "Huge": value = 3;
	case "Gergantuan": value = 4;
	case "Colossal": value = 6;
	default: value = 1
]
[h: macro.return = value]