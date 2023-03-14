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

[h: uebergabe = macro.args]
[h: target = json.get(uebergabe, "target")]

[h: mod = 0]
[h: bonus = 0]
[h: modtext = ""]

[h,macro("probeKampfMods@this"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: waffe = json.get(uebergabe, "waffe")]

[h,if(getState("Blutrausch") == 1),Code:
{
	[mod = mod + 4]
	[modtext = modtext + modReason(4, "wegen Blutrausch")]
};{}]

[h: rwgegner = json.get(uebergabe, "rw")]
[h,if(rwgegner == ""): rwgegner = 0]
[h: rw = getReachMod(waffe, rwgegner)]
[h,if(rw != 0): modtext = modtext + modReason(rw, "wegen Reichweite")]
[h: mod = mod + rw]

[h: passierschlag = json.get(uebergabe, "passierschlag")]
[h,if(passierschlag == ""): passierschlag = 0]
[h,if(passierschlag != 0): modtext = modtext + modReason(passierschlag, "wegen Passierschlag")]
[h: mod = mod + passierschlag]

[h: vorteilPosition = json.get(uebergabe, "vorteilhafteposition")]
[h,if(vorteilPosition == ""): vorteilPosition = 0]
[h,if(vorteilPosition != 0): modtext = modtext + modReason(vorteilPosition, "wegen vorteilhafter Position")]
[h: mod = mod + vorteilPosition]

[h: beengt = json.get(uebergabe, "beengt")]
[h,if(beengt == "on"): beengt = getCrampedMod(currentToken(), waffe, target, "at"); beengt = 0]
[h,if(beengt != 0): modtext = modtext + modReason(beengt, "wegen beengter Umgebung")]
[h: mod = mod + beengt]

[h: groesse = json.get(uebergabe, "groesse")]
[h,if(groesse == ""): groesse = 0]
[h,if(groesse != 0): modtext = modtext + modReason(groesse, "wegen winzigem Gegner")]
[h: mod = mod + groesse]

[h: beidhaendig = json.get(uebergabe, "beidhaendig")]
[h,if(beidhaendig == ""): beidhaendig = 0]
[h,if(beidhaendig != 0): modtext = modtext + modReason(beidhaendig, " wegen beidhaendigem Kampf")]
[h: mod = mod + beidhaendig]

[h: zone = json.get(uebergabe, "zone")]
[h: zonemod = getZoneMod(zone, "nk", target)]
[h,if(zonemod != 0): modtext = modtext + modReason(zonemod, " wegen gezieltem Angriff auf die Zone "+zone)]
[h: mod = mod + zonemod]

[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]

[h: macro.return = ergebnis]