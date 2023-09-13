[h: switchToken(arg(0))]
[h: id = arg(1)]
[h: entry = ""]
[h: i = 0]
[h: index = -1]
[h,foreach(wa, Nahkampfwaffen, ""), CODE:
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