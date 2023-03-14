[h: attackResult = arg(0)]

[h: weapon = json.get(attackResult, "Weapon")]
[h: technik = json.get(attackResult, "Technik")]
[h: success = json.get(attackResult, "success")]

[h,if(json.contains(weapon, "RW")): typ = "nk"; typ = "fk"]
[h,if(success >= 1),Code:{
	[h,if(typ == "nk"): image = 60; image = 61]
};
{
	[h,if(typ == "nk"): image = 16; image = 18]
}]

[h: rowspan = 6]
[h,if(success < 1): rowspan=3]
[h: output = strformat("
<td style='text-align:center; padding: 0px 12px 0px 8px' valign='middle' rowspan=%{rowspan}>
	<img src='%s'/>
</td>
",
tableImage("chat", image))]

[h,if(typ == "nk"): lucky = 44; lucky = 47]

<!-- Anschließend bauen wir uns eine Ausgabe.
Je nach Art sind die Krit- und Patzerbilder etwas anders -->
[h: params = json.set("{}",
"luckyImage", lucky,
"critImage", 45,
"botchImage", 10
)]

[h: output = output + show1d20(attackResult, params) + "</tr>"]
[h: macro.return = output]