[h: switchToken(arg(0))]
[h: skillName = arg(1)]

[h: lists = "[Koerper, Gesellschaft, Natur, Wissen, Handwerk, Zauber, Rituale, MagischeHandlungen, Liturgien, Zeremonien]"]

[h: found = ""]
[h,foreach(list, lists),Code:{
	[h,foreach(item, eval(list), ""), if(json.get(item, "Talent") == skillName), Code:{
		[h: found = item]
	}]
}]

[h: macro.return = found]