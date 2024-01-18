[h: tokenID = arg(0)]
[h: switchToken(tokenID)]

[h: meldung = ""]
[h: res = json.set("{}", "ResultType", "checkZustand")]
[h: SchmerzAlt = Schmerz]
[h: schmerz = 0]

[h: schmerz1 = schmerzStufe(1, tokenID)]
[h: schmerz2 = schmerzStufe(2, tokenID)]
[h: schmerz3 = schmerzStufe(3, tokenID)]
[h: schmerz4 = schmerzStufe(4, tokenID)]
[h,if(LeP <= schmerz1): schmerz = schmerz + 1]
[h,if(LeP <= schmerz2): schmerz = schmerz + 1]
[h,if(LeP <= schmerz3): schmerz = schmerz + 1]
[h,if(LeP <= schmerz4): schmerz = schmerz + 1]

<!-- Bestimmte Wesen sind von Schmerz nicht betroffen. Manuelle Schmerzen kann man trotzdem eintragen -->
[h,if(listContains("Dämon, Elementar, Geist, Golem, Golemid, Tiergestalt", Typus) == 1),Code:
{
	[h: schmerz = 0]
}]

[h,if(Schwarm == 1),Code:{
	<!-- Schwärme erhalten keine Schmerzen durch niedrige LeP.
	Das macht keinen Sinn da sich die LeP auf die Summe aller Tiere beziehen -->
	[h: schmerz = 0]
	[h: SchwarmAnzahl = ceil(LeP / SchwarmEinzelLeP)]
	[h: setLabel("Schwarm aus " + SchwarmAnzahl + " Wesen")]
}]

[h: currentKO = getKO(tokenID)]
[h,if(MaxLeP > 0),Code:
{
	[h,if(LeP <= 0 && LeP > -currentKO), Code:
	{
		[h: setState("Sterbend", 1)]
		[h: meldung = strformat("<b>Lebensbedrohlich verletzt</b><br>Du liegst im Sterben. In %s Kampfrunden bist du tot.", currentKO)]
	}]
	[h,if(LeP > 0): setState("Sterbend", 0)]
	[h,if(LeP < -currentKO), Code:
	{
		[h: setState("Sterbend", 0)]
		[h: setState("Tot", 1)]
		[h: meldung = "<b>(Hoffentlich) Heldenhafter Tot</b><br>Du bist gerade gestorben. Ruhe in Frieden."]
	};{
		[h: setState("Tot", 0)]
	}]
};{
	<!-- If MaxLP is 0 it does not make sense for a token to be dead or dying -->
	[h: setState("Sterbend", 0)]
	[h: setState("Tot", 0)]
}]

[h: mod = SchmerzMod]
[h,if(hasTrait("Nachteile", "Zerbrechlich", 1, tokenID) != 0 && schmerz > 0): mod = mod + 1]
[h,if(hasTrait("Vorteile", "Zäher Hund", 1, tokenID) != 0 && schmerz != 4): mod = mod - 1]
[h: Schmerz = max(0, min(4, schmerz + mod))]

[h,if(Schmerz >= 4 && SchmerzAlt < 4 && meldung == ""),Code:
{
	<!-- Wenn man auf Schmerz 4 fällt wird Selbstbeherrschung gewürfelt ob man stehen bleibt -->
	[h: res = rollSkill(currentToken(), "Selbstbeherrschung", 0, json.set("{}", "Name", "Selbstbeherrschung (Schmerz IV)", "spec", "Handlungsfähigkeit bewahren"))]
	[h: res = json.set(res, "Header", "Schmerz IV", "ResultType", "schmerz4")]
	[h: success = json.get(res, "success")]
	[h,if(success >= 1),Code:{
		[h: meldung = "Probe auf <b>Selbstbeherrschung (Handlungsfähigkeit bewahren)</b> gelungen!<br>Du bleibst <b>handlungsfähig</b>!"]
	};{
		[h: meldung = "Probe auf <b>Selbstbeherrschung (Handlungsfähigkeit bewahren)</b> misslungen!<br>Du bist <b>handlungsunfähig</b>!"]
		[h: setState("Handlungsunfähig", 1)]
	}]
}]

[h: ruestung = resolveRS(currentToken(), getRuestung(Ruestungen, RuestungAktiv))]
[h: Belastung = max(0, min(4, json.get(ruestung, "BE") + BelastungMod))]

[h,if(Ueberanstrengung >= 4), Code:
{
	[h: Betaeubung = min(3, Betaeubung + (Ueberanstrengung - 3))]
	[h: Ueberanstrengung = 3]
}]


[h,if(Furcht >= 4 || Trance >= 4 || Verwirrung >= 4 || Betaeubung >= 4 || Belastung >= 4): zustandKritisch = 1; zustandKritisch = 0]
[h,if(zustandKritisch == 1 && LeP > 0), Code:
{
	[h: setState("Handlungsunfähig", 1)]
}]
[h,if(zustandKritisch == 0 && LeP > schmerz4), Code:
{
	[h: setState("Handlungsunfähig", 0)]
}]

[h,if(Paralyse >= 4): setState("Bewegungsunfähig", 1)]

[h,if(LeP >= MaxLeP): setBarVisible("LE", 0); setBarVisible("LE", 1)]
[h,if(AsP >= MaxAsP): setBarVisible("AE", 0); setBarVisible("AE", 1)]
[h,if(KaP >= MaxKaP): setBarVisible("KE", 0); setBarVisible("KE", 1)]
[h,if(isBarVisible("LE") == 1): setBar("LE", LeP/MaxLeP)]
[h,if(isBarVisible("AE") == 1): setBar("AE", AsP/MaxAsP)]
[h,if(isBarVisible("KE") == 1): setBar("KE", KaP/MaxKaP)]

<!-- Wenn der Schwarm weniger Wesen hat als die Grundgroesse wird er in Einzelwesen zerschlagen -->
[h,if(Schwarm == 1 && SchwarmAnzahl < SchwarmGG),Code:{
	[h: meldung = "<b>Schwarm zerschlagen</b><br>Da weniger Wesen als die Grundgröße(" + SchwarmGG + ") übrig sind wurden die restlichen " + SchwarmAnzahl + " in Einzelwesen aufgeteilt!"]
	[h: scatter(currentToken())]
}]

[h: res = json.set(res, "Notification", json.get(res, "Notification") + meldung)]
[h: macro.return = res]