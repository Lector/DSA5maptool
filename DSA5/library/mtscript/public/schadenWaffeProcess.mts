[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = arg(0)]

[h: chat = json.get(uebergabe, "chat")]
[h: weapon = decode(json.get(uebergabe, "weapon"))]
[h,if(json.get(uebergabe, "schadensbonus") == ""): bonus = 0; bonus = json.get(uebergabe, "schadensbonus")]
[h,if(json.get(uebergabe, "schadensmalus") == ""): malus = 0; malus = json.get(uebergabe, "schadensmalus")]
[h,if(json.get(uebergabe, "schadenmod") == ""): modSchaden = 0; modSchaden = json.get(uebergabe, "schadenmod")]

[h: erfolg = json.get(uebergabe, "erfolg")]
[h,if(erfolg == ""): erfolg = 1]

[h,if(isNumber(bonus) == 0 || isNumber(malus) == 0), Code:
	{
		[h,macro("inputFail@this"): "numText"]
	};{}
]
[h,if(bonus != round(bonus) || malus != round(malus)), Code:
	{
		[h,macro("inputFail@this"): "numInteger"]
	};{}
]
[h,if(bonus < 0 || malus < 0), Code:
	{
		[h,macro("inputFail@this"): "numNegative"]
	};{}
]
[h: closeDialog("schadenWaffe")]

[h: typ = json.get(uebergabe, "typ")]
[h: title = json.get(uebergabe, "name")]
[h: grundschaden = json.get(uebergabe, "tp")]
[h: entfernung = json.get(uebergabe, "entfernungschaden")]
[h: schadensWuerfel = replace(grundschaden, "d", "W")]
[h,if(grundschaden != 0): grundschaden = eval(grundschaden)]
[h: modSchaden = modSchaden + eval(string(bonus)) - eval(string(malus)) + entfernung]
[h: krit = json.get(uebergabe, "kritisch")]
[h,if(krit == ""): mul = 1; mul = 2]

[h,if(modSchaden > 0): modOutput = "&#43;"+modSchaden; modOutput = modSchaden]

[h: schadenArt = json.get(uebergabe, "schadenArt")]

[h: technik = json.get(weapon, "Technik")]
[fkabwehr = 0]
[h,if(technik != ""),Code:
{
	[h,if(listContains("Diskusse, Schleudern, Wurfwaffen", technik) > 0): fkabwehr = 1]
	[h,if(listContains("Armbrüste, Blasrohre, Bögen", technik) > 0): fkabwehr = 2]
};{}]
[h: zone = json.get(uebergabe, "zone")]

[h: reactionParams = json.set("{}", "Probe", 0, "Schadensart", schadenArt, "Gluecklich", 0, "Zone", zone, "FKAbwehr", fkabwehr, "VonHinten", 0, "Status", "[]", "FailText", "", "Waffe", weapon, "Attacker", currentToken())]

[h: damageResult = weaponDamage(currentToken(), weapon, modSchaden, schadenArt, mul, reactionParams)]

[h,if(typ == "fk"):
	titleImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/rangedDamage.png");
	titleImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/meleeDamage.png")]

[h: output = strformat("
<table style='font-weight: bold'>
	<tr>
		<td style='text-align:center; padding: 0px 12px 0px 8px;' valign='middle' width='80' rowspan=3>
			<img src='%{titleImage}'/>
		</td>
		%s
	</tr>
</table>",
showWeaponDamage(damageResult, reactionParams))]

[h: sendTo(chat, border(title, output))]