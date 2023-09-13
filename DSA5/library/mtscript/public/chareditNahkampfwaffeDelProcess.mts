[h: switchToken(arg(0))]
[h: index = arg(1)]
[h: entry = json.get(Nahkampfwaffen, index)]
[h: id = json.get(entry, "ID")]

[h: name = json.get(entry, "Name")]
[h: confirmLabel = strformat("'%{name}' wirklich löschen?")]
[h: confirm = input(strformat("junk|%{confirmLabel}||LABEL|SPAN=TRUE"))]
[h: abort(confirm)]

[h: Nahkampfwaffen = json.remove(Nahkampfwaffen, index)]

[h,if(HauptHand == id),Code:{
	[if(json.length(Nahkampfwaffen) == 0): HauptHand = 0; HauptHand = json.get(json.get(Nahkampfwaffen, 0), "ID")]
}]
[h,if(NebenHand == id),Code:{
	[if(json.length(Nahkampfwaffen) == 0): NebenHand = 0; NebenHand = json.get(json.get(Nahkampfwaffen, 0), "ID")]
}]

[h: closeDialog("chareditWaffeDel")]

[h: noticeSelf("delWaffe")]
[h: refreshFrame(currentToken())]