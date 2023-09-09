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

[h,macro("probeKampfMods@this"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: fernkampf = json.get(uebergabe, "fernkampf")]
[h,if(fernkampf != 0 && fernkampf != ""): modtext = modtext + modReason(fernkampf, "wegen Fernkampfabwehr")]
[h: mod = mod + fernkampf]

[h: vorteilPosition = json.get(uebergabe, "vorteilhafteposition")]
[h,if(vorteilPosition != 0 && vorteilPosition != ""):
	modtext = modtext + modReason(vorteilPosition, "wegen vorteilhafter Position")]
[h: mod = mod + vorteilPosition]

[h: vtcount = json.get(uebergabe, "VTinKR")]
[h,if(vtcount != 0 && vtcount != ""):
	modtext = modtext + modReason(vtcount*-3, "wegen "+(number(vtcount)+1)+". Verteidigung")]
[h: mod = mod + vtcount * -3]

[h: vonhinten = json.get(uebergabe, "vonhinten")]
[h,if(vonhinten != 0 && vonhinten != ""): modtext = modtext + modReason(vonhinten, "wegen Angriff von Hinten")]
[h: mod = mod + vonhinten]

<!-- Cendrash-Stil gibt +1 auf die Verteidigung gegen Größere -->
[h: attacker = json.get(uebergabe, "attacker")]
[h: cendrasch = hasTrait("KampfSF", "Cendrasch-Stil")]
[h,if(attacker != ""),if(cendrasch > 0),Code:{
	[h: gr = groesse(getSize(currentToken()))]
	[h: grattacker = groesse(getSize(attacker))]
	[h,if(grattacker > gr),Code:{
		[mod = mod + 1]
		[h: modtext = modtext + modReason(1, "wegen Cendrasch-Stil")]
	}]
}]

[h,if(Schwarm == 1): schwarmMod = -floor((SchwarmAnzahl - SchwarmGG) / SchwarmGG); schwarmMod = 0]
[h,if(schwarmMod != 0): modtext = modtext + modReason(schwarmMod, "wegen Schwarmgröße")]
[h: mod = mod + schwarmMod]

[h: ergebnis = json.set(uebergabe, "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]
[h: macro.return = ergebnis]