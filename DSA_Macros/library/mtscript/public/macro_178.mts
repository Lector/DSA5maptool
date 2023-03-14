[h: map = tokenMap(arg(0))]
[h: E1 = arg(1)]
[h: E2 = arg(2)]
[h: E3 = arg(3)]
[h: Wert = arg(4)]
[h: mod = arg(5)]
[h,if(mod == ""): mod = 0]

[h: reroll = ""]
[h: FPBonus = 0]
[h: patzer19 = 0]
[h: modMacro = ""]
[h: params = arg(6)]
[h,if(params != ""),Code:
{
	[h: reroll = json.get(params, "reroll")]
	[h: FPBonus = json.get(params, "FPBonus")]
	[h,if(FPBonus == ""): FPBonus = 0]
	[h: patzer19 = json.get(params, "patzer19")]
	[h: modMacro = json.get(params, "modMacro")]
	[h: modMacroParams = json.get(params, "modMacroParams")]
};{}]

<!-- Hier loesen wir MU KL oder aehnliches in den Eigenschaftswert auf
Es werden auch die aktuellen Eigenschaften ermittelt. Durch temporaere Effekte oder Zustaende koennen sie geaendert sein -->
[h,if(isNumber(e1)),Code:{
	[h: e1wert = e1]
	[h: aktE1wert = e1]
};{
	[h: e1wert = getProperty(e1, arg(0), map)]
	[h,macro("probeGetAktWert@Lib:macros"): json.append(e1, arg(0))]
	[h: aktE1wert = macro.return]
}]
[h,if(isNumber(e2)),Code:{
	[h: e2wert = e2]
	[h: aktE2wert = e2]
};{
	[h: e2wert = getProperty(e2, arg(0), map)]
	[h,macro("probeGetAktWert@Lib:macros"): json.append(e2, arg(0))]
	[h: aktE2wert = macro.return]
}]
[h,if(isNumber(e3)),Code:{
	[h: e3wert = e3]
	[h: aktE3wert = e3]
};{
	[h: e3wert = getProperty(e3, arg(0), map)]
	[h,macro("probeGetAktWert@Lib:macros"): json.append(e3, arg(0))]
	[h: aktE3wert = macro.return]
}]

<!--Da jede Art von Probe unterschiedliche Argumente mitbekommt, welche die Probe modifizieren wird hier ein übergebenes Skript aufgerufen.
Dieses Skript kann dann die unterschiedlichen Parameter aus der Übergabe auslesen und entsprechend auf den Gesamtmodifikator aufaddieren-->
[h: modtext = ""]
[h: bonustext = ""]
[h,if(modMacro != ""), Code:
{
	[h: modMacroParams = json.set(modMacroParams, "self", arg(0))]
	[macro(modMacro) : modMacroParams]
	[macroMod = json.get(macro.return, "mod")]
	[mod = mod + macroMod]
	[modSubtext = json.get(macro.return, "subtext")]
	[if(modSubtext != ""): subtext = subtext + modSubtext + "<br/>"]
	[FWBonus = json.get(macro.return, "bonus")]
	[if(FWBonus != ""): Wert = Wert + FWBonus]
	[FPBonus = json.get(macro.return, "fpbonus")]
	[if(FPBonus != ""): params = json.set(params, "FPBonus", FPBonus)]
	[bonustext = json.get(macro.return, "bonustext")]
	[if(bonustext != ""): bonustext = "title='" + bonustext + "'"]
	[modtext = json.get(macro.return, "modtext")]
	[if(modtext != ""): modtext = "title='" + modtext + "'"]
}]

[h: dice1 = 1d20]
[h: dice2 = 1d20]
[h: dice3 = 1d20]

<!--Checkresult stellt die 'verbrauchten' Punkte dar-->
[h: checkResult1 = dice1 - (aktE1wert + mod)]
[h: checkResult2 = dice2 - (aktE2wert + mod)]
[h: checkResult3 = dice3 - (aktE3wert + mod)]

[h: rerollResult = "{}"]
[h,if(reroll == "best"),Code:
{
	[toReroll = min(checkResult1, checkResult2, checkResult3)]
	[if(toReroll == checkResult1),Code:
	{
		[h: rerollResult = json.set(rerollResult, "index", 0)]
		[h: rerollResult = json.set(rerollResult, "oldValue", dice1)]
		[h: dice1 = 1d20]
		[h: checkResult1 = dice1 - (aktE1wert + mod)]
	};{}]
	[if(toReroll == checkResult2),Code:
	{
		[h: rerollResult = json.set(rerollResult, "index", 1)]
		[h: rerollResult = json.set(rerollResult, "oldValue", dice2)]
		[h: dice2 = 1d20]
		[h: checkResult2 = dice2 - (aktE2wert + mod)]
	};{}]
	[if(toReroll == checkResult3),Code:
	{
		[h: rerollResult = json.set(rerollResult, "index", 2)]
		[h: rerollResult = json.set(rerollResult, "oldValue", dice3)]
		[h: dice3 = 1d20]
		[h: checkResult3 = dice3 - (aktE3wert + mod)]
	};{}]
};{}]

[h: fp = Wert - max(0, checkResult1) - max(0, checkResult2) - max(0, checkResult3)]

<!--Hier berechnen wir die Qualität der Probe. Das ist mit DSA5-Regeln etwas komplexer als bei 4.1-->
<!--Die Qualität gibt an um wie viel (eine misslungene Probe erleichtert / eine gelungene Probe erschwert) sein müsste damit sie gerade so gelingen würde-->
[h, if(fp < 0), Code:
{
	[success = 0]
	[repair = fp]
	[reqBonus = 0]
	[while(repair < 0), Code:
	{
		[if(checkResult1 - reqBonus > 0): repair = repair + 1]
		[if(checkResult2 - reqBonus > 0): repair = repair + 1]
		[if(checkResult3 - reqBonus > 0): repair = repair + 1]
		[reqBonus = reqBonus + 1]
	}]
	[maxMalus = 0]
	[quali = -reqBonus]
	[qs = 0]
};
{
	[success = 1]
	[reqBonus = 0]
	[destroy = fp]
	[maxMalus = 0]
	[while(destroy >= 0), Code:
	{
		[maxMalus = maxMalus + 1]
		[if(checkResult1 + maxMalus > 0): destroy = destroy - 1]
		[if(checkResult2 + maxMalus > 0): destroy = destroy - 1]
		[if(checkResult3 + maxMalus > 0): destroy = destroy - 1]
	}]
	[quali = maxMalus - 1]
	[fp = fp + FPBonus]
	[qs = min(6, max(1, ceil(fp / 3)))]
}]

[h: dice = dice1 + ", " + dice2 + ", " + dice3]

<!--Kritische Erfolge gelingen immer. Patzer gelingen nie-->
[h,if(listContains(dice, "1") >= 2), Code:
{
	[fp = Wert]
	[qs = max(1, min(6, ceil(fp / 3)))]
	[success = listContains(dice, "1")]
};{}]
[h: patzerZahlen = listContains(dice, "20")]
[h,if(patzer19 == 1): patzerZahlen = patzerZahlen + listContains(dice, "19")]
[h,if(patzerZahlen >= 2), Code:
{
	[fp = 0]
	[qs = 0]
	[success = 1 - patzerZahlen]
};{}]

[h: ergebnis = json.set("{}",
"ResultType", "3d20",
"success", success,
"mod", mod,
"fw", Wert,
"fp", fp,
"qs", qs,
"quality", quali,
"dice", dice,
"properties", e1wert + ", " + e2wert + ", " + e3wert,
"currentProperties", aktE1Wert + ", " + aktE2Wert + ", " + aktE3Wert,
"checkResults", checkResult1 + ", " + checkResult2 + ", " + checkResult3,
"propertyNames", E1 + ", " + E2 + ", " + E3,
"modText", modtext,
"bonusText", bonustext,
"reroll", rerollResult)]

[h: macro.return = ergebnis]