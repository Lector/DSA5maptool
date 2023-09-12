[h: switchToken(arg(0))]
[h: list = "<ul>"]
[h: i = 0]
[h: collection = eval(arg(1))]
[h,foreach(trait, collection, ""),Code:
{
	[h: level = romanNumeral(json.get(trait, "Stufe"))]
	[h: name = json.get(trait, "Name")]
	[h: delete = macroLinkText('chareditTraitDelProcess@this', '', json.set('{}', "token", currentToken(), "list", arg(1), "index", i))]
	[h: deleteIcon = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesRemoveSmall.png")]
	[h: ausgabe = strformat("<li>%{name} %{level} <a href='%{delete}'>
	<image src='%{deleteIcon}' border='0' alt='%{name} löschen'></image>
	</a></li>")]




	[h: list = list + ausgabe]
	[h: i = i + 1]
}]
[h: list = list + "</ul>"]
[r,if(json.length(macro.args) > 0): list; "<p>Keine Vorhanden</p>"]