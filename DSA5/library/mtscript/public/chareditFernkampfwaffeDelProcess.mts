[h: switchToken(arg(0))]
[h: index = arg(1)]
[h: entry = json.get(Fernkampfwaffen, index)]
[h: id = json.get(entry, "ID")]

[h: name = json.get(entry, "Name")]
[h: confirmLabel = strformat("'%{name}' wirklich löschen?")]
[h: confirm = input(strformat("junk|%{confirmLabel}||LABEL|SPAN=TRUE"))]
[h: abort(confirm)]

[h,if(FKWaffe == id): FKWaffe = -1]

[h: Fernkampfwaffen = json.remove(Fernkampfwaffen, index)]

[h: closeDialog("chareditWaffeDel")]

[h,macro("noticeSelf@this"): "delWaffe"]
[h: refreshFrame(currentToken())]