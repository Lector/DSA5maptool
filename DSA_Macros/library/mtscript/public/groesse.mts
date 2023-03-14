[h,switch(arg(0)):
	case "Fine": value = 0;
	case "Diminutive": value = 1;
	case "Tiny": value = 2;
	case "Small": value = 3;
	case "Medium": value = 4;
	case "Large": value = 5;
	case "Huge": value = 6;
	case "Gergantuan": value = 7;
	case "Colossal": value = 8;
	default: value = 4
]
[h: macro.return = value]