[h: switchToken(arg(0))]
[h: index = arg(1)]
[h: entry = json.get(Ruestungen, index)]
[h: id = json.get(entry, "ID")]

[h: name = json.get(entry, "Name")]
[h: confirmLabel = strformat("'%{name}' wirklich löschen?")]
[h: confirm = input(strformat("junk|%{confirmLabel}||LABEL|SPAN=TRUE"))]
[h: abort(confirm)]

[h, if(id == RuestungAktiv): changeRS(currentToken(), 0)]
[h: Ruestungen = json.remove(Ruestungen, index)]

[h: closeDialog("chareditRSDel")]

[h,macro("noticeSelf@this"): "delRS"]
[h: refreshFrame(currentToken())]