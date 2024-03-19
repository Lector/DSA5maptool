[h: uebergabe = macro.args]
[h: tok = json.get(uebergabe, "self")]
[h: switchToken(tok)]
[h: map = tokenMap(tok)]
[h: attacker = json.get(uebergabe, "attacker")]
[h: waffe = decode(json.get(uebergabe, "waffe"))]

[h,macro("probeVerteidigungMods@this"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: beengt = json.get(uebergabe, "beengt")]
[h,if(beengt == "on"): beengt = getCrampedMod(currentToken(), waffe, attacker, "pa"); beengt = 0]
[h,if(beengt != 0): modtext = modtext + modReason(beengt, "wegen beengter Umgebung")]
[h: mod = mod + beengt]

[h: kritisch = json.get(uebergabe, "kritisch")]
[h,if(kritisch == "on"),Code:
{
	[h: bonus = bonus -floor(json.get(decode(json.get(uebergabe, "waffe")), "PA") / 2.0)]
}]

[h: ergebnis = json.set(uebergabe, "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]
[h: macro.return = ergebnis]