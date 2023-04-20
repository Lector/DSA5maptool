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

[h,macro("probe3w20Mods@this"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: fpbonus = json.get(macro.return, "fpbonus")]
[h: bonustext = json.get(macro.return, "bonustext")]
[h: modtext = json.get(macro.return, "modtext")]

[h: Aufrecht = number(json.get(uebergabe, "Aufrecht"))]
[h,if(Aufrecht != 0): modtext = modtext + modReason(Aufrecht, "wegen aufrechterhaltenden Zaubern")]
[h: Reichweite = json.get(uebergabe, "Reichweite")]
[h,if(Reichweite == ""): Reichweite = 0]
[h,if(Reichweite != 0): modtext = modtext + modReason(Reichweite, "wegen erhöhter Reichweite")]
[h: Kosten = json.get(uebergabe, "Kosten")]
[h,if(Kosten == ""): Kosten = 0]
[h,if(Kosten != 0): modtext = modtext + modReason(Kosten, "wegen veränderten Kosten")]
[h: Dauer = json.get(uebergabe, "Dauer")]
[h,if(Dauer == ""): Dauer = 0]
[h,if(Dauer != 0): modtext = modtext + modReason(Dauer, "wegen veränderter Zauberdauer")]
[h: Geste = json.get(uebergabe, "Gesteweglassen")]
[h,if(Geste == ""): Geste = 0]
[h,if(Geste != 0): modtext = modtext + modReason(Geste, "wegen weggelassener Geste")]
[h: Formel = json.get(uebergabe, "Formelweglassen")]
[h,if(Formel == ""): Formel = 0]
[h,if(Formel != 0): modtext = modtext + modReason(Formel, "wegen weggelassener Formel")]
[h: Fehlversuche = number(json.get(uebergabe, "Fehlversuche"))]

[h: mod = mod
			+ Kosten
			+ Reichweite
			+ Dauer
			+ Geste
			+ Formel
			+ Aufrecht
			+ Fehlversuche]
			
[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "fpbonus", fpbonus)]
[h: ergebnis = json.set(ergebnis, "bonustext", bonustext)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]

[h: macro.return = ergebnis]