[h: switchToken(arg(0))]
[h: uebergabe = arg(1)]
[h: waffe = arg(2)]
[h: target = arg(3)]

[h: basis = json.get(uebergabe, "basis")]
[h: spezial = json.get(uebergabe, "spezial")]
[h: manoever = "[]"]
[h,if(basis != ""): manoever = json.append(manoever, decode(basis))]
[h,if(spezial != ""): manoever = json.append(manoever, decode(spezial))]
[h: uebergabe = json.set(uebergabe, "waffe", waffe)]

[h: params = json.set("{}",
"modMacro", json.get(uebergabe, "modMacro"),
"rerollConfirm", json.get(uebergabe, "pruefreroll"),
"modMacroParams", uebergabe))]

[h: attackResult = rollAttack(
	currentToken(),
	waffe,
	json.get(uebergabe, "probemod"),
	json.get(uebergabe, "schadenmod"),
	json.get(uebergabe, "Zone"),
	manoever,
	params,
	target)]

[h,if(json.contains(waffe, "RW")): manName = "AT"; manName = "FK"]
[h: manoever = json.get(attackResult, "Manoever")]
[h,foreach(man, manoever),if(man != ""): manName = json.get(man, "Name")]
[h: wName = json.get(waffe, "Name")]
[h,if(wName != "Waffenlos"): manName = manName + " mit " + wName; manName = manName + " (waffenlos) "]
[h,if(target != ""),Code: {
	[h: link = macroLinkText("selectToken@this", "none", target)]
	[h: targetName = getName(target)]
	[h: manName = strformat("%{manName} auf <a style='color: #441e13' href='%s'>%s</a>", link, targetName)]

	[h: hasIni = hasInitiative(currentToken())]
	[h,if(getLibProperty("OptFacing", "com.github.lector.dsa5maptool") != 0 && hasIni == 1),Code:
	{
		[h: vector = lookAt(currentToken(), target)]
		[h: direction = math.atan2(-json.get(vector, "Y"), json.get(vector, "X"))]
		[h: setTokenFacing(round(direction), currentToken())]
	}]
}]

[h: sendTo(json.get(uebergabe, "chat"), border(manName, show(attackResult)))]

[h: closeDialog("probe")]