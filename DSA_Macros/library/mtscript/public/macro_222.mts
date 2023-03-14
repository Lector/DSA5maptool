[h: switchToken(arg(0))]
[h: waffe = arg(1)]
[h: target = arg(2)]
[h: action = arg(3)]

[h,if(json.get(waffe, "Technik") == "Schilde"),Code:
{
	[h: unresolved = getNahkampfwaffe(json.get(waffe, "ID"))]
	<!-- Erschwert um 2 pro Schildgroesse. Da wir die momentan nicht verwalten errechnen wir sie aus PA-Bonus * 2.
	Es koennte in Zukunft Faelle geben in denen das nicht passt. -->
	[h: size = json.get(unresolved, "PA")]
	[h: size = min(3, max(1, size))]
	[h,if(action == "at"): beengt = -json.get(unresolved, "PA") * 2; beengt = -json.get(unresolved, "PA") - 1]
};
{
	[h: beengt = (min(3, json.get(waffe, "RW")) - 1) * -4]
}]

<!-- Gegen Marwan Sahib-Stil Kämpfer wird eingeengt verdoppelt -->
[h,if(target != ""),Code:
{
	[h: marwanSelf = hasTrait("KampfSF", "Marwan Sahib-Stil", 1, currentToken())]
	[h: marwanOther = hasTrait("KampfSF", "Marwan Sahib-Stil", 1, target)]
	[h,if(marwanSelf == 0 && marwanOther == 1): beengt = beengt * 2]
}]

[h: macro.return = beengt]