[h,if(isGM() == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos.Macros"): "gm"]
	};{}
]

[h: args = macro.args]
[h: tok = json.get(args, "token")]

[h: switchToken(tok)]
[h: newName = json.get(args, tok+"_name")]
[h,if(newName == ""): newName = getName()]
[h: setName(newName, tok)]
[h: Suchschwierigkeit = json.get(args, tok+"_such")]
[h: Bestimmungsschwierigkeit = json.get(args, tok+"_bestimmung")]
[h: anw = ""]
[h,for(i, 1, 7),Code:
{
	[h: anw = listAppend(anw, json.get(args, tok+"_anwendung"+i))]
}]
[h: Anwendungen = anw]
[h,if(json.get(args, tok+"_heil") == 1): Heilpflanze = 1; Heilpflanze = 0]
[h,if(json.get(args, tok+"_gift") == 1): Giftpflanze = 1; Giftpflanze = 0]
[h,if(json.get(args, tok+"_nutz") == 1): Nutzpflanze = 1; Nutzpflanze = 0]
[h,macro("inputVorkommenProcess@this"): json.append("[]", tok, args)]

[h,macro("noticeSelf@lib:com.github.naxos.Macros"): "krautEdit"]
[h: closeDialog("krautEdit")]