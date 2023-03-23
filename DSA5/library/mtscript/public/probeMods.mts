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
[h: tok = json.get(uebergabe, "self")]
[h: map = tokenMap(tok)]

[h: mod = 0]
[h: bonus = 0]
[h: modtext = ""]

[h: manualMod = json.get(uebergabe, "probemod")]
[h,if(manualMod == ""): manualMod = 0]
[h,if(manualMod != 0): modtext = modtext + modReason(manualMod, "wegen manueller Eingabe")]
[h: mod = mod + manualMod]

<!-- Dämonen / Elementare müssen eigentlich auch von Schmerz befreit sein
Da einige Dämonen aufgrund von Sonderregeln aber auch Schmerz bekommen können
erlauben wir den Zuständ und verhindern an anderer Stelle nur dass LeP-Stufen Schmerz verursachen-->
[h,if(getState("Blutrausch") == 0),Code:
{
	[h: schm = getProperty("Schmerz", tok, map)]
	[h,if(schm > 0): modtext = modtext + modReason(-schm, "wegen Schmerz")]
	[h: mod = mod - schm]
};{}]

<!-- Dämonen und Elementare werden nicht durch Zustände beeinträchtigt -->
[h: typ = getProperty("Typus", tok, map)]
[h,if(listContains("Dämon, Elementar, Golem, Golemid, Untoter", typ) == 0),Code:
{
	[h: furchtMod = getProperty("Furcht", tok, map)]
	[h,if(hasTrait("KampfSF", "Mengbilla-Stil") > 0): furchtMod = max(0, furchtMod - 1)]
	[h,if(furchtMod > 0): modtext = modtext + modReason(-furchtMod, "wegen Furcht")]
	[h: mod = mod - furchtMod]
}]
[h,if(listContains("Dämon, Elementar, Geist, Untoter", typ) == 0),Code:
{
	[h: verwirrungMod = getProperty("Verwirrung", tok, map)]
	[h,if(verwirrungMod > 0): modtext = modtext + modReason(-verwirrungMod, "wegen Verwirrung")]
	[h: mod = mod - verwirrungMod]
}]
[h,if(listContains("Dämon, Elementar, Geist, Golem, Golemid, Untoter", typ) == 0),Code:
{
	[h: bet = getProperty("Betaeubung", tok, map)]
	[h,if(bet > 0): modtext = modtext + modReason(-bet, "wegen Betäubung")]
	[h: mod = mod - bet]

	[h: tra = getProperty("Trance", tok, map)]
	[h,if(tra == 3), Code:
	{
		[h: modtext = modtext + modReason(-tra, "wegen Trance")]
		[h: mod = mod - tra]
	}]

	[h: skill = json.get(uebergabe, "Skill")]
	[h: relevant = 0]
	[h: all = json.merge(
		getProperty("Koerper", tok, map),
		getProperty("Gesellschaft", tok, map),
		getProperty("Natur", tok, map),
		getProperty("Wissen", tok, map),
		getProperty("Handwerk", tok, map),
		getProperty("Zauber", tok, map),
		getProperty("Rituale", tok, map),
		getProperty("MagischeHandlungen", tok, map)
		)]
	[h: techniken = getProperty("Kampftechniken", tok, map)]
	[h,foreach(k, techniken), if(json.get(k, "Name") == skill): relevant = 1]
	[h,if(relevant == 0), foreach(t, all), if(json.get(t, "Talent") == skill): relevant = 1]
	[h,if(relevant == 1),Code:
	{
		[h: wohlgefallen = json.get(uebergabe, "wohlgefallen")]
		[h,if(wohlgefallen == ""): wohlgefallen = wohlgefallen(currentToken(), skill)]
		[h: entr = getProperty("Entrueckung", tok, map)]
		[h,if(wohlgefallen == 1): entrueckungmod = max(0, (entr - 1)); entrueckungmod = - entr]
	};{
		[h: entrueckungmod = 0]
	}]
	[h,if(abs(entrueckungmod) > 0): modtext = modtext + modReason(entrueckungmod, "wegen Entrückung")]
	[h: mod = mod + entrueckungmod]
}]

[h: ergebnis = json.set(uebergabe, "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]

[h: macro.return = ergebnis]