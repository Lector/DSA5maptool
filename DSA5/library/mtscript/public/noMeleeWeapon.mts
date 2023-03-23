[h: switchToken(arg(0))]

[h,foreach(waffe, Nahkampfwaffen),Code:
{
	[h: technik = json.get(waffe, "Technik")]
	[h: wName = json.get(waffe, "Name")]
	[h,if(technik == "" || (technik == "Raufen" && wName == "Waffenlos")): return(0, json.get(waffe, "ID"))]
}]

[h: macro.return = -1]