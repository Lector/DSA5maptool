[h: uebergabe = macro.args]
[h: switchToken(json.get(uebergabe, "token"))]
[h: list = json.get(uebergabe, "list")]
[h: frameToRefresh = json.get(uebergabe, "frame")]
[h: index = json.get(uebergabe, "index")]

[h: entry = eval(strformat("json.get(%{list}, %{index})"))]
[h: entry = json.get(entry, "Name")]
[h: confirmLabel = strformat("Folgendes wirklich aus %{list} löschen?")]
[h: confirm = input(strformat("var|%{entry}|"+confirmLabel+"|LABEL"))]
[h: abort(confirm)]

[h: delCmd = strformat("%{list} = json.remove(%{list}, %{index})")]
[h: eval(delCmd)]

[h: noticeSelf("chareditTraitDel")]

[h: refreshFrame(currentToken())]
[h,if(frameToRefresh != ""),Code:{
	[h,macro(frameToRefresh): list]
}]