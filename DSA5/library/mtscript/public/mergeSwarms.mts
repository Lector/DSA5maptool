[h: tokens = getSelected()]

[h,if(listCount(tokens) < 2),Code:
{
	[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "multipleSwarms"]
};{}]

[h: first = ""]
[h, foreach(tok, tokens),Code:
{
	[h: switchToken(tok)]
	[if(first == "" && SchwarmEinzelLeP != "" && SchwarmGG != ""): first = tok]
}]
[h,if(first == ""),Code:
{
	[h,macro("inputFail@lib:com.github.lector.dsa5maptool") : "swarmMergeInfoMissing"]
}]

[h: switchToken(first)]
[h: x = 0]
[h: y = 0]
[h: maxLife = 0]
[h: currentLife = 0]
[h: singleLife = SchwarmEinzelLeP]
[h: gg = SchwarmGG]

[h,foreach(tok, tokens),Code:
{
	[h: switchToken(tok)]
	[h: x = x + getTokenX(1, tok)]
	[h: y = y + getTokenY(1, tok)]
	[h: maxLife = maxLife + MaxLeP]
	[h: currentLife = currentLife + LeP]
	[h: propsToCompare = "MU, KL, IN, CH, FF, GE, KO, KK, INI, GS, Ruestungen, AW, SK, ZK, Kampftechniken, Gesellschaft, Wissen, Handwerk, Natur, Koerper, Zauber, Zaubertricks, Vorteile, Nachteile, AllgemeineSF, KampfSF, MagieSF, Rituale, KarmaleSF, Liturgien, Zeremonien, Segnungen, Nahkampfwaffen, Fernkampfwaffen"]
	[h: compareProps = compare(first, tok, propsToCompare)]
	[h,if(compareProps == 0||
	(SchwarmEinzelLeP != singleLife && SchwarmEinzelLeP != "")||
	(SchwarmGG != gg && SchwarmGG != "")), Code:{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "swarmsDifferent"]
	}]
}]

[h: switchToken(first)]
[h: num = ceil(maxLife / singleLife)]
[h,if(num < gg),Code:{
	[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "swarmTooSmallToMerge"]
}]
[h: x = x / listCount(tokens)]
[h: y = y / listCount(tokens)]
[h: MaxLeP = maxLife]
[h: LeP = currentLife]
[h: Schwarm = 1]
[h: SchwarmAnzahl = num]
[h: moveToken(round(x), round(y))]
[h,macro("checkZustand@lib:com.github.lector.dsa5maptool"): first]
[h,foreach(toDelete, tokens), if(toDelete != first): removeToken(toDelete)]
