[h: params = macro.args]
[h: animalForm = json.get(params, "token")]
[h: shapeShifter = json.get(params, "shapeShifter")]
[h: animal = copyToken(animalForm)]
[h: setName(getName(shapeShifter)+ " in Tiergestalt", animal)]
[h: switchToken(animal)]

[h: setVisible(getVisible(shapeShifter), animal)]
[h: setTokenSnapToGrid(isSnapToGrid(shapeShifter), animal)]
[h,if(isPC(shapeShifter)): setPC(animal); setNPC(animal))]
[h: moveToken(getTokenX(1, shapeShifter), getTokenY(1, shapeShifter), 1, animal)]
[h: setHasSight(hasSight(shapeShifter), animal)]

<!-- Transfer data from the shapeShifter to the animal -->
[h: MaxLeP = getProperty("MaxLeP", shapeShifter)]
[h: MaxAsP = getProperty("MaxAsP", shapeShifter)]
[h: MaxKaP = getProperty("MaxKaP", shapeShifter)]
[h: LeP = getProperty("LeP", shapeShifter)]
[h: AsP = getProperty("AsP", shapeShifter)]
[h: KaP = getProperty("KaP", shapeShifter)]

[h: MU = getProperty("MU", shapeShifter)]
[h: KL = getProperty("KL", shapeShifter)]
[h: IN = getProperty("IN", shapeShifter)]
[h: CH = getProperty("CH", shapeShifter)]
[h: SK = getProperty("SK", shapeShifter)]

[h: SchmerzMod = getProperty("SchmerzMod", shapeShifter)]
[h: BelastungMod = getProperty("BelastungMod", shapeShifter)]
[h: Furcht = getProperty("Furcht", shapeShifter)]
[h: Verwirrung = getProperty("Verwirrung", shapeShifter)]
[h: Paralyse = getProperty("Paralyse", shapeShifter)]
[h: Betaeubung = getProperty("Betaeubung", shapeShifter)]
[h: Ueberanstrengung = getProperty("Ueberanstrengung", shapeShifter)]
[h: Entrueckung = getProperty("Entrueckung", shapeShifter)]
[h: Trance = getProperty("Trance", shapeShifter)]

[h: Koerper = getProperty("Koerper", shapeShifter)]
[h: Gesellschaft = getProperty("Gesellschaft", shapeShifter)]
[h: Natur = getProperty("Natur", shapeShifter)]
[h: Handwerk = getProperty("Handwerk", shapeShifter)]
[h: Wissen = getProperty("Wissen", shapeShifter)]
[h: Kampf = getProperty("Kampf", shapeShifter)]
[h: AllgemeineSF = getProperty("AllgemeineSF", shapeShifter)]

[h: Zauber = getProperty("Zauber", shapeShifter)]
[h: Rituale = getProperty("Rituale", shapeShifter)]
[h: MagischeHandlungen = getProperty("MagischeHandlungen", shapeShifter)]
[h: MagischeHandlungenSingular = getProperty("MagischeHandlungenSingular", shapeShifter)]
[h: MagischeHandlungenPlural = getProperty("MagischeHandlungenPlural", shapeShifter)]
[h: Zaubertricks = getProperty("Zaubertricks", shapeShifter)]
[h: MagieSF = getProperty("MagieSF", shapeShifter)]

[h: Liturgien = getProperty("Liturgien", shapeShifter)]
[h: Zeremonien = getProperty("Zeremonien", shapeShifter)]
[h: Segnungen = getProperty("Segnungen", shapeShifter)]
[h: KarmaleSF = getProperty("KarmaleSF", shapeShifter)]

[h: lists = json.append("[]", "Vorteile", "Nachteile")]
[h,foreach(list, lists, ""),Code:
{
    [h: animalTraits = getProperty(list)]
    [h: shapeShifterTraits = getProperty(list, shapeShifter)]
    [h: setProperty(list, json.union(animalTraits, shapeShifterTraits), animal)]
}]

[h: TempMod = getProperty("TempMod", shapeShifter)]
[h: Notizen = getProperty("Notizen", shapeShifter)]
[h: PlayerOpt = getProperty("PlayerOpt", shapeShifter)]

<!-- Verbesserungen eintragen -->

[h: FF = FF + json.get(params, "ff")]
[h: GE = GE + json.get(params, "ge")]
[h: KO = KO + json.get(params, "ko")]
[h: KK = KK + json.get(params, "kk")]

[h: checkZustand(currentToken())]
[h: closeDialog("chareditImpersonateAnimalForm")]
[h,macro("noticeSelf@this"): "chareditAnimalFormProcess"]
[h: impersonate(currentToken())]