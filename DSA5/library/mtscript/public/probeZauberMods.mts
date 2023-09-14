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

[h,macro("probeSpruchMods@this"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: fpbonus = json.get(macro.return, "fpbonus")]
[h: bonustext = json.get(macro.return, "bonustext")]
[h: modtext = json.get(macro.return, "modtext")]

[h: Fremd = json.get(uebergabe, "Fremdtradition")]
[h,if(Fremd == ""): Fremd = 0]
[h: mod = mod + Fremd]
[h,if(Fremd != 0): modtext = modtext + modReason(Fremd, "wegen Zaubern in Fremdtradition")]

[h: eisen = json.get(uebergabe, "SteinEisenMalus")]
[h,if(eisen == ""): eisen = 0]
[h: mod = mod - eisen]
[h,if(eisen != 0): modtext = modtext + modReason(eisen, "wegen Bann des Eisens")]

[h: merkmal = json.get(uebergabe, "Merkmal")]
[h: name = json.get(uebergabe, "Name")]

[h,if(merkmal == "Antimagie" && hasTrait("MagieSF", "Erfahrener Antimagier") > 0),Code:
{
	[fpbonus = fpbonus + 1]
	[bonustext = bonustext + modReason(1, "wegen Erfahrener Antimagier")]
};{}]
[h,if(merkmal == "Dämonisch" && hasTrait("MagieSF", "Überragender Dämonologe") > 0),Code:
{
	[fpbonus = fpbonus + 1]
	[bonustext = bonustext + modReason(1, "wegen Überragender Dämonologe")]
};{}]
[h,if(merkmal == "Einfluss" && hasTrait("MagieSF", "Vollkommener Beherrscher") > 0),Code:
{
	[fpbonus = fpbonus + 1]
	[bonustext = bonustext + modReason(1, "wegen Vollkommener Beherrscher")]
};{}]
[h,if(merkmal == "Elementar" && hasTrait("MagieSF", "Vollendeter Elementarist") > 0),Code:
{
	[fpbonus = fpbonus + 1]
	[bonustext = bonustext + modReason(1, "wegen Vollendeter Elementarist")]
};{}]
[h,if(merkmal == "Heilung" && hasTrait("MagieSF", "Bewanderter Heilzauberer") > 0),Code:
{
	[fpbonus = fpbonus + 1]
	[bonustext = bonustext + modReason(1, "wegen Bewanderter Heilzauberer")]
};{}]
[h,if(merkmal == "Hellsicht" && hasTrait("MagieSF", "Vortrefflicher Hellseher") > 0),Code:
{
	[fpbonus = fpbonus + 1]
	[bonustext = bonustext + modReason(1, "wegen Vortrefflicher Hellseher")]
};{}]
[h,if(merkmal == "Illusion" && hasTrait("MagieSF", "Hervorragender Illusionist") > 0),Code:
{
	[fpbonus = fpbonus + 1]
	[bonustext = bonustext + modReason(1, "wegen Hervorragender Illusionist")]
};{}]
[h,if(merkmal == "Sphären" && hasTrait("MagieSF", "Kundiger Sphärologe") > 0),Code:
{
	[fpbonus = fpbonus + 1]
	[bonustext = bonustext + modReason(1, "wegen Kundiger Sphärologe")]
};{}]
[h,if(merkmal == "Objekt" && hasTrait("MagieSF", "Begnadeter Objektzauberer") > 0),Code:
{
	[fpbonus = fpbonus + 1]
	[bonustext = bonustext + modReason(1, "wegen Begnadeter Objektzauberer")]
};{}]
[h,if(merkmal == "Telekinese" && hasTrait("MagieSF", "Brillanter Telekinetiker") > 0),Code:
{
	[fpbonus = fpbonus + 1]
	[bonustext = bonustext + modReason(1, "wegen Brillanter Telekinetiker")]
};{}]
[h,if(merkmal == "Verwandlung" && hasTrait("MagieSF", "Unübertroffener Verwandler") > 0),Code:
{
	[fpbonus = fpbonus + 1]
	[bonustext = bonustext + modReason(1, "wegen Unübertroffener Verwandler")]
};{}]

[h,if(hasTrait("MagieSF", "Lieblingszauber ("+name+")") > 0),Code:{
	[fpbonus = fpbonus + 2]
	[bonustext = bonustext + modReason(2, "wegen Lieblingszauber")]
}]

[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "bonus", bonus)]
[h: ergebnis = json.set(ergebnis, "fpbonus", fpbonus)]
[h: ergebnis = json.set(ergebnis, "bonustext", bonustext)]
[h: ergebnis = json.set(ergebnis, "modtext", modtext)]

[h: macro.return = ergebnis]