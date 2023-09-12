[h: switchToken(arg(0))]
[h: index = arg(1)]

[h: id = json.get(json.get(Fernkampfwaffen, index), "ID")]

[h,if(FKWaffe == id): FKWaffe = -1]

[h: Fernkampfwaffen = json.remove(Fernkampfwaffen, index)]

[h: closeDialog("chareditWaffeDel")]

[h,macro("noticeSelf@this"): "delWaffe"]
[h: refreshFrame(currentToken())]