[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]

[h: target = json.get(uebergabe, "target")]

[h,macro("probeManoeverMods@Lib:macros"): uebergabe]
[h,macro("probeSichtMods@Lib:macros"): macro.return]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: entfernung = json.get(uebergabe, "entfernung")]
[h,if(entfernung == ""): entfernung = 0]
[h,if(entfernung != 0): modtext = modtext + modReason(entfernung, "wegen Entfernung")]
[h: mod = mod + entfernung]

[h: groesse = json.get(uebergabe, "groesse")]
[h,if(groesse == ""): groesse = 0]
[h,if(groesse != 0): modtext = modtext + modReason(groesse, "wegen Zielgroesse")]
[h: mod = mod + groesse]

[h: bewegungZiel = json.get(uebergabe, "bewegungZiel")]
[h,if(bewegungZiel == ""): bewegungZiel = 0]
[h,if(bewegungZiel != 0): modtext = modtext + modReason(bewegungZiel, "wegen Bewegung des Ziels")]
[h: mod = mod + bewegungZiel]

[h: bewegungSchuetze = json.get(uebergabe, "bewegungSchuetze")]
[h,if(bewegungSchuetze == ""): bewegungSchuetze = 0]
[h,if(bewegungSchuetze != 0): modtext = modtext + modReason(bewegungSchuetze, "wegen Bewegung des Schuetzen")]
[h: mod = mod + bewegungSchuetze]

[h: maxSSMod = max(0, -(entfernung + groesse + bewegungZiel + bewegungSchuetze))]
[h: SSLevel = getTraitLevel("KampfSF", "Scharfschütze")]
[h: SSMod = min(maxSSMod, SSLevel * 2)]
[h,if(SSMod != 0): modtext = modtext + modReason(SSMod, "wegen Scharfschuetze")]
[h: mod = mod + SSMod]

[h: gezielt = json.get(uebergabe, "gezielt")]
[h,if(gezielt == ""): gezielt = 0]
[h,if(gezielt != 0): modtext = modtext + modReason(gezielt, "wegen Zielen")]
[h: mod = mod + gezielt]

[h: getuemmel = json.get(uebergabe, "getuemmel")]
[h,if(getuemmel == ""): getuemmel = 0]
[h,if(getuemmel != 0): modtext = modtext + modReason(getuemmel, "wegen Kampfgetuemmel")]
[h: mod = mod + getuemmel]

[h: beritten = json.get(uebergabe, "beritten")]
[h,if(beritten == ""): beritten = 0]
[h,if(beritten == "=1"),Code:
{
	[bonus = -(json.get(uebergabe, "Wert") - 1)]
};
{
	[h,if(beritten != 0): modtext = modtext + modReason(beritten, "weil beritten")]
	[h: mod = mod + beritten]
}]

[h: zone = json.get(uebergabe, "zone")]
[h: zonemod = getZoneMod(zone, "fk", target)]
[h,if(zonemod != 0): modtext = modtext + modReason(zonemod, "wegen gezieltem Angriff auf die Zone "+zone)]
[h: mod = mod + zonemod]

[h: ergebnis = json.set(uebergabe, "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]
[h: macro.return = ergebnis]