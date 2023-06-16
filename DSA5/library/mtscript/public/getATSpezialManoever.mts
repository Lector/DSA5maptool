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


[h: list = "[]"]
[h: id = 0]
[h: mount = getMount(currentToken())]
[h: target = arg(0)]


					<!-- Basisregelwerk -->


[h,if(hasTrait("KampfSF", "Entwaffnen") != 0 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Entwaffnen (1h-Waffen)",
	"Mod", -4,
	"TP", "1d3",
	"OpponentText", "Du wurdest entwaffnet! Um deine Waffe wieder aufzuheben, musst du die Regeln für Aufheben von Gegenständen im Kampf befolgen.",
	"Techniken", "[Fechtwaffen, Hiebwaffen, Peitschen, Raufen, Schwerter, Stangenwaffen, Zweihandhiebwaffen, Zweihandschwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]

	[manoever = json.set("{}",
	"ID", id,
	"Name", "Entwaffnen (2h-Waffen)",
	"Mod", -6,
	"TP", "1d3",
	"OpponentText", "Du wurdest entwaffnet! Um deine Waffe wieder aufzuheben, musst du die Regeln für Aufheben von Gegenständen im Kampf befolgen.",
	"Techniken", "[Fechtwaffen, Hiebwaffen, Peitschen, Raufen, Schwerter, Stangenwaffen, Zweihandhiebwaffen, Zweihandschwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h,if(hasTrait("KampfSF", "Haltegriff") != 0 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Haltegriff",
	"Mod", 0,
	"TP", 0,
	"OpponentStatus", "[Fixiert, Eingeengt]",
	"Techniken", "[Raufen]")]
	[h,if(hasTrait("KampfSF", "Zyklopäisches Ringen") != 0): manoever = json.set(manoever, "VT", -2)]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h,if(hasTrait("KampfSF", "Hammerschlag") != 0 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Hammerschlag",
	"Mod", -2,
	"TPMod", "+1d6",
	"Passierschlag", "1",
	"Techniken", "[Hiebwaffen, Kettenwaffen, Schwerter, Zweihandhiebwaffen, Zweihandschwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h,if(hasTrait("KampfSF", "Lanzenangriff") != 0 && (mount != "" || Trefferzonenmodell != 0)),Code:
{
	<!-- Reitenprob ist nur notwendig wenn der Lanzenangriff vom Reittier aus erfolgt
	Bestimmte Wesen (z.B. Shadifriit) können auch einen Lanzenangriff mit ohne Reittier machen-->
	[h,if(mount != ""),Code:
	{
		[lanzenGS = getGS(mount)]
		[manoever = json.set("{}",
		"Skill", "Reiten",
		"SkillSpec", "Kampfmanöver")]
	};{
		[lanzenGS = getGS(currentToken())]
		[manoever = "{}"]
	}]
	[manoever = json.set(manoever,
	"ID", id,
	"Name", "Lanzenangriff",
	"Mod", 0,
	"TPMod", "+"+ (2 + round(lanzenGS / 2)),
	"Techniken", "[Lanzen]")]
	
	[id = id + 1]
	[list = json.append(list, manoever)]

	[h,if(hasTrait("KampfSF", "Mächtiger Lanzenangriff") != 0),Code:
	{
		[manoever = json.set(manoever,
		"ID", id,
		"Name", "Mächtiger Lanzenangriff",
		"Mod", 0,
		"TPMod", "+" + (4 + round(lanzenGS / 2)),
		"Techniken", "[Lanzen]")]

		[id = id + 1]
		[list = json.append(list, manoever)]
	}]
}]

[h: rundumschlag = getTraitLevel("KampfSF", "Rundumschlag")]
[h: maechtig = hasTrait("KampfSF", "Mächtiger Rundumschlag")]
[h,if(maechtig != 0): maechtigMod = -2; maechtigMod = 0]
[h,if(rundumschlag >= 1 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Rundumschlag (1. AT)",
	"Mod", -2,
	"TPMod", "+"+maechtig,
	"Techniken", "[Hiebwaffen, Kettenwaffen, Schilde, Schwerter, Stangenwaffen, Zweihandhiebwaffen, Zweihandschwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]

	[manoever = json.set("{}",
	"ID", id,
	"Name", "Rundumschlag (2. AT)",
	"Mod", -6 + maechtigMod,
	"Techniken", "[Hiebwaffen, Kettenwaffen, Schilde, Schwerter, Stangenwaffen, Zweihandhiebwaffen, Zweihandschwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]
[h,if(rundumschlag >= 2 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Rundumschlag (3. AT)",
	"Mod", -10 + maechtigMod,
	"Techniken", "[Hiebwaffen, Kettenwaffen, Schilde, Schwerter, Stangenwaffen, Zweihandhiebwaffen, Zweihandschwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

<!-- Schildspalter wird erstmal nicht unterstuetzt. -->
[h,if(hasTrait("KampfSF", "Schildspalter") && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Schildspalter",
	"Mod", 0,
	"SchadensTyp", "StP",
	"Techniken", "[Hiebwaffen, Kettenwaffen, Zweihandhiebwaffen, Zweihandschwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

<!-- Anlauf zum Gegner muss noch 4 Schritt sein -->
[h: cgs = getGS(currentToken())]
[h,if(hasTrait("KampfSF", "Sturmangriff") != 0 && cgs >= 4 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Sturmangriff",
	"Mod", -2,
	"TPMod", "+" + (2 + round(cgs / 2)),
	"Passierschlag", "1",
	"Techniken", "[Hiebwaffen, Schwerter, Stangenwaffen, Zweihandhiebwaffen, Zweihandschwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h,if(hasTrait("KampfSF", "Berittener Kampf") != 0 && mount != ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Sturmangriff zu Pferd",
	"Skill", "Reiten",
	"SkillSpec", "Kampfmanöver",
	"Mod", +0,
	"Techniken", "[Hiebwaffen, Schwerter, Stangenwaffen, Zweihandhiebwaffen, Zweihandschwerter]",
	"TPMod", "+" + (2 + round(getGS(mount) / 2)))]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h,if(hasTrait("KampfSF", "Todesstoß") != 0 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Todesstoß",
	"Mod", -2,
	"TPMod", "+1d6",
	"Passierschlag", "1",
	"Techniken", "[Dolche, Fechtwaffen]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

<!-- Muss am Anfang der KR angekündigt werden. Keine VT möglich in dieser KR. -->
[h,if(hasTrait("KampfSF", "Vorstoß") != 0 && getState("Liegend") == 0 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Vorstoß",
	"Mod", +2,
	"Techniken", "[Dolche, Fechtwaffen, Hiebwaffen, Kettenwaffen, Raufen, Schwerter, Stangenwaffen, Zweihandhiebwaffen, Zweihandschwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h,if(hasTrait("KampfSF", "Wurf") != 0 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Wurf",
	"Mod", -2,
	"TP", "1d3",
	"RequiredOpponentStatus", "[Fixiert, Eingeengt]",
	"OpponentStatus", "[Liegend, -Fixiert, -Eingeengt]",
	"Techniken", "[Raufen]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h,if(hasTrait("KampfSF", "Zu Fall bringen") != 0 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Zu Fall bringen",
	"Mod", -4,
	"TP", "1d3",
	"OpponentStatus", "[Liegend]",
	"Techniken", "[Peitschen, Stangenwaffen]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

					<!-- Aventurisches Kompendium I -->

[h: sizeFits = 1]
[h,if(target != ""),Code:{
	[h: sizeTarget = groesse(getSize(target))]
	[h: sizeSelf = groesse(getSize(currentToken()))]
	[token(target),if(sizeTarget > sizeSelf || listContains("Kulturschaffend, Tier", Typus) == 0): sizeFits = 0]
}]
[h,if(hasTrait("KampfSF", "Betäubungsschlag") != 0 && mount == "" && sizeFits == 1),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Betäubungsschlag",
	"Mod", -2,
	"TP", "1d3",
	"OpponentText", "Du musst eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) ablegen. Bei Misslingen erleidest du 1 Stufe Betäubung",
	"Techniken", "[Hiebwaffen, Schwerter, Stangenwaffen]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]


[h,if(hasTrait("KampfSF", "Festnageln") != 0 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Festnageln",
	"Mod", -4,
	"RequiredOpponentStatus", "[Liegend]",
	"OpponentStatus", "[Fixiert]",
	"OpponentText", "Du wurdest festgenagelt. Der Angreifer kann mit der verwendeten Waffe nicht mehr parieren, sondern nur noch ausweichen. In den nachfolgenden KR gelingt die AT automatisch, ohne dass gewürfelt werden muss. Jede KR richtet der Angriff +1 TP an (in der 1. KR noch keinen zusätzlichen TP, in der 2. KR +1 TP, in der 3. KR +2 TP usw.). Die TP werden wie üblich ausgewürfelt. Solange das du festgenagelt bist, kannst du nicht verteidigen. Um dich zu befreien, musst du eine Vergleichsprobe auf Kraftakt (Drücken & Verbiegen) gewinnen. Jede Probe kostet 1 Aktion.",
	"Techniken", "[Stangenwaffen]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]


[h,if(hasTrait("KampfSF", "Herunterstoßen") != 0 && mount == ""),Code:
{
	[h: waffe = resolveNK(currentToken(), getNahkampfwaffe(HauptHand))]
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Herunterstoßen",
	"Mod", -4,
	"TP", replace(json.get(waffe, "TP"), "d6", ""),
	"OpponentText", "Du drohst vom Reittier zu stürzen und musst sofort eine Probe auf Reiten (Kampfmanöver) erschwert um 2 ablegen. Bei Misslingen stürzt du vom Reittier und erleidet Sturzschaden (siehe Regelwerk Seite 340).",
	"Techniken", "[Stangenwaffen]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h,if(hasTrait("KampfSF", "Klingensturm") != 0 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Klingensturm (1. AT)",
	"Mod", -2,
	"Techniken", "[Dolche, Fechtwaffen, Hiebwaffen, Schwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]

	[manoever = json.set("{}",
	"ID", id,
	"Name", "Klingensturm (2. AT)",
	"Mod", -2,
	"TPMod", "-2",
	"Techniken", "[Dolche, Fechtwaffen, Hiebwaffen, Schwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]


[h,if(hasTrait("KampfSF", "Sprungtritt") != 0 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Sprungtritt",
	"Mod", -2,
	"TPMod", "+1d6",
	"Passierschlag", "1",
	"Techniken", "[Raufen]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]
					
					<!-- Aventurisches Bestiarium I -->


[h,if(hasTrait("KampfSF", "Angriff auf ungeschützte Stellen") != 0),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Angriff auf ungeschützte Stellen",
	"Mod", -2,
	"SchadensTyp", "SP")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h,if(hasTrait("KampfSF", "Anspringen") != 0),Code:
{
	<!-- Vorteilhafte Position -->
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Anspringen",
	"Mod", -4,
	"TP", "1d3",
	"OpponentStatus", "[Liegend]",
	"OpponentText", "Der Held wurde angesprungen und liegt jetzt am Boden. Um das Wesen herunterzubekommen, ist eine Vergleichsprobe auf Kraftakt (Heben & Stemmen) notwendig, die um je volle 50 Stein Gewicht der Kreatur um 1 erschwert ist. Dies kostet eine Aktion. Will der Held gleichzeitig auch noch aufstehen, so ist die Probe um zusätzlich 3 Punkte erschwert.",
	"Passierschlag", 1)]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h,if(hasTrait("KampfSF", "Flugangriff") != 0),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Flugangriff",
	"Mod", -2,
	"TPMod", "+2",
	"OpponentText", "Eine AT gegen das Flugwesen ist in dieser KR um 6 erschwert",
	"Passierschlag", 1)]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h,if(hasTrait("KampfSF", "Klammergriff") != 0),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Klammergriff",
	"Mod", -4,
	"OpponentStatus", "[Fixiert, Eingeengt]",
	"OpponentText", "Um sich aus dem Klammergriff zu lösen, ist eine gelungene Vergleichsprobe auf Kraftakt (Ziehen & Zerren) nötig. Sollte der Klammernde sein Opfer angehoben haben, stürzt es und erleidet den Status Liegend, sofern ihm nicht eine Probe auf Körperbeherrschung (Kampfmanöver) gelingt.")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h: schwungName = ""]
[h,if(hasTrait("KampfSF", "Schwanzschwung") != 0): schwungName = "Schwanzschwung"]
[h,if(hasTrait("KampfSF", "Tentakelschwung") != 0): schwungName = "Tentakelschwung"]
[h,if(schwungName != ""),Code:
{
	[manoever = json.set("{}",
	"TP", "1d3",
	"SchadensTyp", "SP",
	"OpponentStatus", "[Liegend]")]
	[for(i, 1, 6, 1, ""),Code:
	{
		[manoever = json.set(manoever,
		"ID", id,
		"Name", schwungName + " ("+i+" Gegner"+")",
		"Mod", -i*2)]
		[id = id + 1]
		[list = json.append(list, manoever)]
	}]
}]

[h,if(hasTrait("KampfSF", "Trampeln") != 0),Code:
{
	<!-- VT des Angreifers sinkt um 2 diese KR -->
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Trampeln",
	"Mod", 0)]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h,if(hasTrait("KampfSF", "Überrennen") != 0),Code:
{
	<!-- Passierschlag ist zusaetzlich um 4 erschwert -->
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Überrennen",
	"Mod", 0,
	"OpponentText", "Eine Attacke gegen das Wesen durch den Angegriffenen ist in dieser KR um 2 erschwert.",
	"Passierschlag", 1)]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h,if(hasTrait("KampfSF", "Verbeißen") != 0),Code:
{
	<!-- Beschreibung in AttackerText -->
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Verbeißen",
	"Mod", -2,
	"OpponentStatus", "[Fixiert]",
	"Passierschlag", 1)]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]



[h: macro.return = list]