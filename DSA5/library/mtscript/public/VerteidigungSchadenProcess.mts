[h: uebergabe = macro.args]

[h: switchToken(json.get(uebergabe, "token"))]
[h: chat = json.get(uebergabe, "chat")]
[h: manoever = json.get(uebergabe, "spezial")]
[h,if(manoever == ""): manoever = "[]"; manoever = "[" + manoever + "]"]

<!-- Der Schaden ist der einzige Parameter der 'falsch' eingegeben werden kann -->
[h: damage = json.get(uebergabe, "schadenEingabe")]
[h,if(damage == ""): damage = 0]
[h,if(isNumber(damage) == 0), Code:
	{
		[h,macro("inputFail@this"): "numText"]
	};{}
]
[h,if(damage != round(damage)), Code:
	{
		[h,macro("inputFail@this"): "numInteger"]
	};{}
]
[h,if(damage < 0), Code:
	{
		[h,macro("inputFail@this"): "numNegative"]
	};{}
]

[h: multiplier = 1]
[h,if(json.get(uebergabe, "kritischDK") != ""): multiplier = multiplier * 2]
[h,if(json.get(uebergabe, "Schadensresistenz") != ""): multiplier = multiplier * 0.5]

<!-- Zuerst wird eine Verteidigung gewürfelt. -->
[h: params = json.set("{}",
"modMacro", json.get(uebergabe, "modMacro"),
"rerollConfirm", json.get(uebergabe, "pruefreroll"),
"status", json.get(uebergabe, "status"),
"failText", json.get(uebergabe, "failText"),
"damageType", json.get(uebergabe, "schadenArt"),
"multiplier", multiplier,
"zone", json.get(uebergabe, "zone"),
"modMacroParams", uebergabe))]

[h: defenseResult = rollDefense(currentToken(),
	decode(json.get(uebergabe, "waffe")),
	0,
	damage,
	manoever,
	params)]

[h: title = json.get(uebergabe, "Name")]
[h,if(json.get(defenseResult, "Weapon") != ""): manName = "PA "; manName = ""]
[h,foreach(man, manoever),if(man != ""),Code:{
	
	[manName = json.get(man, "Name") + " "]
}]
[h: title = manName + title]

[h: output = show(json.set(defenseResult, "Chat", chat))]
[h: output = border(title, output)]
[h: sendTo(chat, output)]

[h: closeDialog("probe")]