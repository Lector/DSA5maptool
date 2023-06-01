[h,if(isGM() == 0), Code:
	{
		[h,macro("inputFail@this"): "gm"]
	};{}
]

[h: args = macro.args]
[h: tok = json.get(args, "token")]

[h: switchToken(tok)]

[h: newRationen = json.get(args, tok+"_rationen")]
[h: newRationen = replace(newRationen, ",", ".")]

[h,if(newRationen == ""), Code:
{
	[h,macro("inputFail@this"): "noInput"]
}]
[h: cleared = replace(newRationen,"-","")]
[h,if(isNumber(cleared) == 0), Code:
{
	[h,macro("inputFail@this"): "numText"]
}]

[h: JagdMod = json.get(args, tok+"_mod")]
[h: Rationen = newRationen]
[h: Fleischquali = json.get(args, tok+"_quali")]
[h: SonstigeBeute = json.get(args, tok+"_beute")]
[h,if(json.get(args, tok+"_wasser") == ""): Wasser = 0; Wasser = 1]
[h,if(json.get(args, tok+"_land") == ""): Land = 0; Land = 1]

[h,macro("noticeSelf@this"): "jagdEdit"]
[h: closeDialog("jagdEdit")]