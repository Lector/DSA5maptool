[h: attackResult = arg(0)]

[h: weapon = json.get(attackResult, "Weapon")]
[h: technik = json.get(attackResult, "Technik")]
[h: success = json.get(attackResult, "success")]

[h,if(json.contains(weapon, "RW")): typ = "nk"; typ = "fk"]
[h,if(success >= 1),Code:
{
	[h,if(typ == "nk"):
		image = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/meleeDamage.png");
		image = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/rangedDamage.png")]
};
{
	[h,if(typ == "nk"):
		image = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/meleeAttack.png");
		image = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/rangedAttack.png")]
}]

[h: rowspan = 6]
[h,if(success < 1): rowspan=3]
[h: output = strformat("
<td style='text-align:center; padding: 0px 12px 0px 8px' valign='middle' rowspan=%{rowspan}>
	<img src=%{image}/>
</td>")]

[h,if(typ == "nk"):
	lucky = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/luckyAttack.png");
	lucky = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/luckyHit.png")]

<!-- Anschließend bauen wir uns eine Ausgabe.
Je nach Art sind die Krit- und Patzerbilder etwas anders -->
[h: params = json.set("{}",
"luckyImage", lucky,
"critImage", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/criticalHit.png"),
"botchImage", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/botch.png")
)]

[h: output = output + show1d20(attackResult, params) + "</tr>"]
[h: macro.return = output]