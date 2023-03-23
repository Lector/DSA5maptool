[h: list = ""]
[h,foreach(trait, macro.args, ""),Code:
{
	[h: ausgabe = json.get(trait, "Name")]
	[h: stufe = json.get(trait, "Stufe")]
	[h,if(stufe > 0): ausgabe = ausgabe + " " + romanNumeral(stufe)]
	[h: list = ListAppend(list, ausgabe)]
}]
[r,if(list != ""): list; "Keine Vorhanden"]