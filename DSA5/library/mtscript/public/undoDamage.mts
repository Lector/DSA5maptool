[h: switchToken(arg(0))]
[h: old = arg(1)]
[h: new = arg(2)]

<!-- Restore old life points -->
[h: lifeDiff = json.get(old, "Life") - json.get(new, "Life")]
[h: LeP = LeP + lifeDiff]

<!-- Restore old states -->
[h: states = getTokenStates("json")]
[h: oldStates = json.get(old, "States")]
[h: newStates = json.get(new, "States")]
[h,foreach(s, states, ""),Code:
{
    [oldState = json.get(oldStates, s)]
    [newState = json.get(newStates, s)]
    [if(oldState != newState): setState(s, oldState)]
}]
[h,if(json.get(old, "Pain") != json.get(new, "Pain")): SchmerzMod = json.get(old, "Pain")]
[h,if(json.get(old, "Encumbrance") != json.get(new, "Encumbrance")): BelastungMod = json.get(old, "Encumbrance")]
[h,if(json.get(old, "Confusion") != json.get(new, "Confusion")): Verwirrung = json.get(old, "Confusion")]
[h,if(json.get(old, "Paralysis") != json.get(new, "Paralysis")): Paralyse = json.get(old, "Paralysis")]
[h,if(json.get(old, "Fear") != json.get(new, "Fear")): Furcht = json.get(old, "Fear")]
[h,if(json.get(old, "Stupor") != json.get(new, "Stupor")): Betaeubung = json.get(old, "Stupor")]

<!-- Restore equipped weapons -->
[h: oldMainhand = json.get(old, "Mainhand")]
[h: oldOffhand = json.get(old, "Offhand")]
[h,if(oldMainhand != json.get(new, "Mainhand")): Haupthand = oldMainhand]
[h,if(oldOffhand != json.get(new, "Offhand")): Nebenhand = oldOffhand]

<!-- Restore defenses in current round -->
[h: oldDefenses = json.get(old, "Defenses")]
[h: oldRound = json.get(old, "Round")]
[h: newRound = getInitiativeRound()]
[h,if(newRound == oldRound && newRound != -1): VTinKR = oldDefenses]

[h: checkZustand(currentToken())]