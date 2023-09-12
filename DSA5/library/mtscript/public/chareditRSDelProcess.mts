[h: switchToken(arg(0))]
[h: index = arg(1)]

[h: del = json.get(Ruestungen, index)]
[h: id = json.get(del, "ID")]
[h, if(id == RuestungAktiv): changeRS(currentToken(), 0)]

[h: Ruestungen = json.remove(Ruestungen, index)]

[h: closeDialog("chareditRSDel")]

[h,macro("noticeSelf@this"): "delRS"]
[h: refreshFrame(currentToken())]