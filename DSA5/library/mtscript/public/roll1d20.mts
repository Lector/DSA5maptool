[h: switchToken(arg(0))]
[h: property = arg(1)]
[h: mod = arg(2)]
[h,if(mod == ""): mod = 0]

[h: params = ""]
[h: modMacro = ""]
[h: modText = ""]
                 
[h: pruefwurf = 1]
[h: pruefReroll = 0]
[h: patzer19 = 0]
[h: name = ""]
[h,if(json.length(macro.args) > 3),Code:{
	[h: params = arg(3)]
	[h: name = json.get(params, "Name")]
	[h: modMacro = json.get(params, "modMacro")]
	[h: modMacroParams = json.get(params, "modMacroParams")]
	[h,if(json.contains(params, "confirm")): pruefwurf = json.get(params, "confirm")]
	[h,if(json.contains(params, "rerollConfirm")): pruefReroll = json.get(params, "rerollConfirm")]
	[h,if(json.contains(params, "patzer19")): patzer19 = json.get(params, "patzer19")]
}]
[h,if(patzer19 == 1): critFail=19; critFail=20]

[h: origProp = property]
[h,if(!isNumber(property)),Code:{
	[h: origProp = eval(property)]
	[h,macro("probeGetAktWert@this"): property]
	[h: property = macro.return]
}]

[h,if(modMacro != ""), Code:
{
	[modMacroParams = json.set(modMacroParams, "self", arg(0))]
	[macro(modMacro): modMacroParams]
	[mod = mod + json.get(macro.return, "mod")]
	[modSubtext = json.get(macro.return, "subtext")]
	[modtext = json.get(macro.return, "modtext")]
	[bonus = json.get(macro.return, "bonus")]
	[property = property + bonus]
}]

[h: dice1 = 1d20]
[h: dice2 = 1d20]
[h: dice3 = 1d20]

[h: ergebnis = json.set("{}",
"ResultType", "1d20",
"mod", mod,
"dice", json.append(dice1, dice2, dice3),
"property", origProp,
"currentProperty", property,
"modText", modtext,
"pruefwurf", pruefwurf,
"pruefreroll", pruefreroll,
"critFail", critFail)]

[h: ergebnis = calc1d20(ergebnis)]

[h: success = json.get(ergebnis, "success")]

[h,if(SchiPsAktuell > 0 && success == 0 && name != ""),Code:{
	[h: display = show1d20(ergebnis)]
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
		strformat("useFate|%{useFate}|<html>1 von %{SchiPsAktuell} SchiPs ausgeben um erneut zu würfeln.</html>|CHECK|")
	)]
	[h,if(confirm == 1 && useFate == 1),Code:{
		[h: ergebnis = calc1d20(json.set(ergebnis, "dice", json.append("[]", 1d20, 1d20, 1d20)))]
		[h: ergebnis = json.set(ergebnis, "Notification", json.get(ergebnis, "Notification") + strformat("Die <b>%{name}</b>-Probe wurde mit <b>1 SchiP</b> neu gewürfelt (bereits abgezogen)<br/>"))]
		[h: SchiPsAktuell = SchiPsAktuell - 1]
		[h: refreshFrame(currentToken())]
	}]
}]

[h: macro.return = ergebnis]