[h: list = ""]
[h,foreach(trait, macro.args, ""),Code:
{
	[h: stufe = romanNumeral(json.get(trait, "Stufe"))]
	[h: ausgabe = json.get(trait, "Name") + " " + stufe]
	[h: list = listAppend(list, ausgabe)]
}]
[r,if(list != ""): list; "Keine Vorhanden"]