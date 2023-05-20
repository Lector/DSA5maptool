[h: list = "<ul>"]
[h,foreach(trait, macro.args, ""),Code:
{
	[h: stufe = romanNumeral(json.get(trait, "Stufe"))]
	[h: ausgabe = "<li>" + json.get(trait, "Name") + " " + stufe + "</li>"]
	[h: list = list + ausgabe]
}]
[h: list = list + "</ul>"]
[r,if(json.length(macro.args) > 0): list; "<p>Keine Vorhanden</p>"]