[h: ergebnis = arg(0)]

[h: checkResults = json.get(ergebnis, "checkResults")]
[h: checkResult1 = json.get(checkResults, 0)]
[h: checkResult2 = json.get(checkResults, 1)]
[h: checkResult3 = json.get(checkResults, 2)]
[h: dice = json.get(ergebnis, "dice")]
[h: FPBonus = arg(1)]
[h: patzer19 = arg(2)]

[h: fp = json.get(ergebnis, "fw") - max(0, checkResult1) - max(0, checkResult2) - max(0, checkResult3)]
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

<!--Kritische Erfolge gelingen immer. Patzer gelingen nie-->
[h,if(json.count(dice, 1) >= 2), Code:
{
	[fp = json.get(ergebnis, "fw") + FPBonus]
	[qs = max(1, min(6, ceil(fp / 3)))]
	[success = json.count(dice, 1)]
}]

[h: patzerZahlen = json.count(dice, 20)]
[h,if(patzer19 == 1): patzerZahlen = patzerZahlen + json.count(dice, 19)]
[h,if(patzerZahlen >= 2), Code:
{
	[fp = 0]
	[qs = 0]
	[success = 1 - patzerZahlen]
}]

[h: macro.return = json.set(ergebnis,
"success", success,
"fp", fp,
"qs", qs,
"quality", quali
)]