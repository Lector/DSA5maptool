[h: switchToken(arg(0))]
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
[h: name = ""]
[h: qsmatter = 0]
[h,if(params != ""),Code:
{
	[h: name = json.get(params, "Name")]
	[h: reroll = json.get(params, "reroll")]
	[h: FPBonus = json.get(params, "FPBonus")]
	[h,if(FPBonus == ""): FPBonus = 0]
	[h: patzer19 = json.get(params, "patzer19")]
	[h: modMacro = json.get(params, "modMacro")]
	[h: modMacroParams = json.get(params, "modMacroParams")]
	[h: qsmatter = json.get(params, "QSMatter")]
	[h,if(qsmatter == ""): qsmatter = 0]
}]

[h: SchiPsInitial = SchiPsAktuell]
<!-- Hier loesen wir MU KL oder aehnliches in den Eigenschaftswert auf
Es werden auch die aktuellen Eigenschaften ermittelt. Durch temporaere Effekte oder Zustaende koennen sie geaendert sein -->
[h,if(isNumber(e1)),Code:{
	[h: e1wert = e1]
	[h: aktE1wert = e1]
};{
	[h: e1wert = getProperty(e1, arg(0), map)]
	[h,macro("probeGetAktWert@this"): json.append(e1, arg(0))]
	[h: aktE1wert = macro.return]
}]
[h,if(isNumber(e2)),Code:{
	[h: e2wert = e2]
	[h: aktE2wert = e2]
};{
	[h: e2wert = getProperty(e2, arg(0), map)]
	[h,macro("probeGetAktWert@this"): json.append(e2, arg(0))]
	[h: aktE2wert = macro.return]
}]
[h,if(isNumber(e3)),Code:{
	[h: e3wert = e3]
	[h: aktE3wert = e3]
};{
	[h: e3wert = getProperty(e3, arg(0), map)]
	[h,macro("probeGetAktWert@this"): json.append(e3, arg(0))]
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
	[if(FPBonus != ""): params = json.set(params, "FPBonus", FPBonus); FPBonus = 0]
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

[h: rerollResults = "[]"]
[h: toReroll = -1]
[h,if(reroll == "best"),Code:
{
	[toReroll = min(checkResult1, checkResult2, checkResult3)]
	[if(toReroll == checkResult1),Code:
	{
		[h: rerollResults = json.append(rerollResults, json.set("{}", "index", 0, "oldValue", dice1))]
		[h: dice1 = 1d20]
		[h: checkResult1 = dice1 - (aktE1wert + mod)]
	}]
	[if(toReroll == checkResult2 && rerollResult == "{}"),Code:
	{
		[h: rerollResults = json.append(rerollResults, json.set("{}", "index", 1, "oldValue", dice2))]
		[h: dice2 = 1d20]
		[h: checkResult2 = dice2 - (aktE2wert + mod)]
	}]
	[if(toReroll == checkResult3 && rerollResult == "{}"),Code:
	{
		[h: rerollResults = json.append(rerollResults, json.set("{}", "index", 2, "oldValue", dice3))]
		[h: dice3 = 1d20]
		[h: checkResult3 = dice3 - (aktE3wert + mod)]
	}]
}]

[h: ergebnis = json.set("{}",
"ResultType", "3d20",
"mod", mod,
"fw", Wert,
"dice", json.append(dice1, dice2, dice3),
"properties", json.append(e1wert, e2wert, e3wert),
"currentProperties", json.append(aktE1Wert, aktE2Wert, aktE3Wert),
"checkResults", json.append(checkResult1, checkResult2, checkResult3),
"propertyNames", json.append(E1, E2, E3),
"modText", modtext,
"bonusText", bonustext,
"reroll", rerollResults)]

[h: ergebnis = calc3d20(ergebnis, FPBonus, patzer19)]
[h: success = json.get(ergebnis, "success")]
[h: fw = json.get(ergebnis, "fw")]
[h: fp = json.get(ergebnis, "fp")]

<!-- Rerolling the 'worst' die is a bit tricky because there is no rational way to determine what the 'worst' die is.
Determing the die that should be rerolled often depends on preferences on risk and reward. Thats why we open a prompt here
In future version is would be great to determine a default selection of the rerolling die -->

<!-- we only annoy the user with the aptitude dialog if using it can result into an advantage -->
<!-- only offer the aptitude if at least one skill point got lost due to the dice -->
[h,if(fw + FPBonus > fp): useAptitude = 1; useAptitude = 0]
<!-- If we have rolled a 1 we always offer the aptitude. This could enforce a critical success -->
[h: dice = json.get(ergebnis, "dice")]
[h,if(json.contains(dice, 1) > 0): useAptitude = 1)]
[h,if(reroll == "worst" && success >= 0 && useAptitude == 1),Code:
{
	[h: display = show3d20(ergebnis)]
	[h: display = strformat("
	<table style='border-spacing: 0px; margin-top: 3px; font-weight: bold;'>
		<tr>
			%{display}
		</tr>
	</table>")]
	[h: display = border(name, display)]

	[h: label = json.append(
		strformat("<html><b>%{dice1}</b> gewürfelt auf <b>%{e1} (%{aktE1wert})</b></html>"),
		strformat("<html><b>%{dice2}</b> gewürfelt auf <b>%{e2} (%{aktE2wert})</b></html>"),
		strformat("<html><b>%{dice3}</b> gewürfelt auf <b>%{e3} (%{aktE3wert})</b></html>")
	)]

	[h: checkResults = json.get(ergebnis, "checkResults")]
	[h: worstCheckResult = max(checkResult1, checkResult2, checkResult3)]
	[h: worstIndex = json.indexOf(checkResults, worstCheckResult)]
	[h: confirm = input(
		"junk|<html>Der Vorteil Begabung erlaubt dir einen Würfel neu zu werfen.<br>Es zählt das bessere Ergebnis!<br><br></html>|-|LABEL|SPAN=TRUE",
		strformat("junk|<html>%{display}</html>|Voräufiges Würfelergebnis|LABEL|SPAN=TRUE"),
		strformat('toReroll|%{label}|Neu würfeln|LIST|SELECT=%{worstIndex} DELIMITER=JSON')
	)]

	[h,if(confirm == 1 && toReroll == 0),Code:{
		[h: newDice = 1d20]
		[h: rerollResults = json.append(rerollResults, json.set("{}", "index", 0, "oldValue", max(newDice, dice1)))]
		[h: dice1 = min(newDice, dice1)]
		[h: checkResult1 = dice1 - (aktE1wert + mod)]
	}]
	[h,if(confirm == 1 && toReroll == 1),Code:{
		[h: newDice = 1d20]
		[h: rerollResults = json.append(rerollResults, json.set("{}", "index", 1, "oldValue", max(newDice, dice2)))]
		[h: dice2 = min(newDice, dice2)]
		[h: checkResult2 = dice2 - (aktE2wert + mod)]
	}]
	[h,if(confirm == 1 && toReroll == 2),Code:{
		[h: newDice = 1d20]
		[h: rerollResults = json.append(rerollResults, json.set("{}", "index", 2, "oldValue", max(newDice, dice3)))]
		[h: dice3 = min(newDice, dice3)]
		[h: checkResult3 = dice3 - (aktE3wert + mod)]
	}]

	[h,if(confirm == 1),Code:{
		[h: ergebnis = json.set(ergebnis,
			"checkResults", json.append(checkResult1, checkResult2, checkResult3),
			"dice", json.append(dice1, dice2, dice3),
			"Notification", json.get(ergebnis, "Notification") + strformat("Wegen <b>Begabung</b> wurde der %d. Würfel der <b>%{name}</b>-Probe wiederholt.<br/>", toReroll+1),
			"reroll", rerollResults
		)]
		[h: ergebnis = calc3d20(ergebnis, FPBonus, patzer19)]
		[h: success = json.get(ergebnis, "success")]
		[h: fw = json.get(ergebnis, "fw")]
		[h: fp = json.get(ergebnis, "fp")]
	}]
}]

<!-- Fate points can be used to reroll any number of dice -->
<!-- We only annoy the user if rerolling can result into an advantage -->
[h: possibleQS = ceil((fw + FPBonus) / 3)]
[h: currentQS = ceil(fp / 3)]
[h,if(possibleQS > currentQS): offerReroll = 1; offerReroll = 0]
<!-- If QS wont matter we do not annoy the user if we already succeeded -->
[h,if(fp >= 0 && qsmatter == 0): offerReroll = 0]
[h,if(success >= 0 && SchiPsAktuell > 0 && offerReroll == 1),Code:{
	[h: display = show3d20(ergebnis)]
	[h: display = strformat("
	<table style='border-spacing: 0px; margin-top: 3px; font-weight: bold;'>
		<tr>
			%{display}
		</tr>
	</table>")]
	[h: display = border(name, display)]
	[h: reroll1 = 0]
	[h: reroll2 = 0]
	[h: reroll3 = 0]
	[h: confirm = input(
		strformat("junk|<html>Für 1 von %{SchiPsAktuell} SchiPs können beliebig viele Würfe wiederholt werden.<br>Das neue Ergebnis ist bindend!</html>|Vorläufiges Würfelergebnis|LABEL|SPAN=TRUE"),
		strformat("junk|<html>%{display}</html>|Vorläufiges Würfelergebnis|LABEL|SPAN=TRUE"),
		strformat("reroll1|%{reroll1}|<html><b>%{e1} (%{aktE1wert})</b> gewürfelt <b>%{dice1}</b> neu würfeln</html>|CHECK|"),
		strformat("reroll2|%{reroll2}|<html><b>%{e2} (%{aktE2wert})</b> gewürfelt <b>%{dice2}</b> neu würfeln</html>|CHECK|"),
		strformat("reroll3|%{reroll3}|<html><b>%{e3} (%{aktE3wert})</b> gewürfelt <b>%{dice3}</b> neu würfeln</html>|CHECK|")
	)]

	[h,if(confirm == 1 && reroll1 == 1),Code:{
		[h: rerollResults = json.append(rerollResults, json.set("{}", "index", 0, "oldValue", dice1))]
		[dice1 = 1d20]
		[h: checkResult1 = dice1 - (aktE1wert + mod)]
	}]
	[h,if(confirm == 1 && reroll2 == 1),Code:{
		[h: rerollResults = json.append(rerollResults, json.set("{}", "index", 1, "oldValue", dice2))]
		[dice2 = 1d20]
		[h: checkResult2 = dice2 - (aktE2wert + mod)]
	}]
	[h,if(confirm == 1 && reroll3 == 1),Code:{
		[h: rerollResults = json.append(rerollResults, json.set("{}", "index", 2, "oldValue", dice3))]
		[dice3 = 1d20]
		[h: checkResult3 = dice3 - (aktE3wert + mod)]
	}]
	[h,if(confirm == 1 && reroll1 + reroll2 + reroll3 > 0),Code:
	{
		[h: ergebnis = json.set(ergebnis,
			"checkResults", json.append(checkResult1, checkResult2, checkResult3),
			"dice", json.append(dice1, dice2, dice3),
			"reroll", rerollResults,
			"Notification", json.get(ergebnis, "Notification") + strformat("<b>%d Würfel</b> der <b>%{name}</b>-Probe wurden mit <b>1 SchiP</b> neu gewürfelt (bereits abgezogen)<br/>", reroll1 + reroll2 + reroll3))]
		[h: ergebnis = calc3d20(ergebnis, FPBonus, patzer19)]
		[h: success = json.get(ergebnis, "success")]
		[h: fw = json.get(ergebnis, "fw")]
		[h: fp = json.get(ergebnis, "fp")]
		[h: SchiPsAktuell = SchiPsAktuell - 1]
		[h: refreshFrame(currentToken())]
	}]
}]

<!-- If QS wont matter we do not annoy the user if we already succeeded -->
<!-- Fate points can be used to increase the quality of a successful check by 1 -->

[h: schicksalsmacht = hasTrait("AllgemeineSF", "Schicksalsmacht", 1, currentToken())]
[h,if(schicksalsmacht == 0 && SchiPsInitial > SchiPsAktuell): offerQSPlus = 0; offerQSPlus = 1]
[h,if(success == 1 && SchiPsAktuell > 0 && qsmatter == 1 && offerQSPlus == 1),Code:{
	[h: qs = json.get(ergebnis, "qs")]
	[h: nextQS = qs + 1]
	[h: display = show3d20(ergebnis)]
	[h: display = strformat("
	<table style='border-spacing: 0px; margin-top: 3px; font-weight: bold;'>
		<tr>
			%{display}
		</tr>
	</table>")]
	[h: display = border(name, display)]
	[h: useFate = 0]
	[h: confirm = input(
		strformat("junk|<html>%{display}</html>|Vorläufiges Würfelergebnis|LABEL|SPAN=TRUE"),
		strformat("useFate|%{useFate}|<html>1 von %{SchiPsAktuell} SchiPs ausgeben um die QS der Probe auf %{nextQS} zu erhöhen.</html>|CHECK|")
	)]
	[h,if(confirm == 1 && useFate == 1),Code:{
		[h: ergebnis = json.set(ergebnis, "qs", qs + 1, "Notification", json.get(ergebnis, "Notification") + strformat("Die <b>QS</b> der <b>%{name}</b>-Probe wurde mit <b>1 SchiP</b> erhöht (bereits abgezogen)<br/>"))]
		[h: SchiPsAktuell = SchiPsAktuell - 1]
		[h: refreshFrame(currentToken())]
	}]
}]

[h: macro.return = ergebnis]