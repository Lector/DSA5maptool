[h: uebergabe = macro.args]
[h: switchToken(json.get(uebergabe, "token"))]
[h: list = json.get(uebergabe, "list")]
[h: frameToRefresh = json.get(uebergabe, "frame")]
[h: index = json.get(uebergabe, "index")]
[h,if(json.contains(uebergabe, "name")): name = json.get(uebergabe, "name"); name = "Name"]

[h: entry = eval(strformat("json.get(%{list}, %{index})"))]
[h: level = json.get(entry, "Stufe")]
[h,if(level != ""): level = romanNumeral(level)]
[h: name = json.get(entry, name)]
[h: confirmLabel = strformat("'%{name} %{level}' wirklich aus %{list} löschen?")]
[h: confirm = input(strformat("junk|%{confirmLabel}||LABEL|SPAN=TRUE"))]
[h: abort(confirm)]

[h: delCmd = strformat("%{list} = json.remove(%{list}, %{index})")]
[h: eval(delCmd)]

[h: noticeSelf("chareditTraitDel")]

[h: refreshFrame(currentToken())]
[h,if(frameToRefresh != ""),Code:{
	[h,macro(frameToRefresh): json.append(currentToken(), list)]
}]