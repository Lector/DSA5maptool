[h: switchToken(arg(0))]
[h: id = arg(1)]
[h: entry = ""]
[h: i = 0]
[h: index = -1]
[h,foreach(wa, Fernkampfwaffen, ""), CODE:
{
	[if(json.get(wa, "ID") == id),Code:{
        [entry = wa]
        [index = i]
    }]
    [h: i = i + 1]
}]

[h: name = json.get(entry, "Name")]
[h: confirmLabel = strformat("'%{name}' wirklich löschen?")]
[h: confirm = input(strformat("junk|%{confirmLabel}||LABEL|SPAN=TRUE"))]
[h: abort(confirm)]

[h,if(FKWaffe == id): FKWaffe = -1]

[h: Fernkampfwaffen = json.remove(Fernkampfwaffen, index)]

[h: closeDialog("chareditWaffeDel")]

[h,macro("noticeSelf@this"): "delWaffe"]
[h: refreshFrame(currentToken())]