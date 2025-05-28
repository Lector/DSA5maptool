[h: switchToken(arg(0))]
[h: schicksalsmacht = hasTrait("AllgemeineSF", "Schicksalsmacht", 1, currentToken())]
[h: property = arg(1)]
[h: mod = arg(2)]
[h,if(mod == ""): mod = 0]

[h: params = ""]
[h: modMacro = ""]
[h: modText = ""]

[h: pruefwurf = 1]
[h: pruefReroll = 0]
[h: patzer19 = 0]
[h: allowImprovement = 0]
[h: name = ""]
[h,if(json.length(macro.args) > 3),Code:{
	[h: params = arg(3)]
	[h: name = json.get(params, "Name")]
	[h: modMacro = json.get(params, "modMacro")]
	[h: modMacroParams = json.get(params, "modMacroParams")]
	[h,if(json.contains(params, "confirm")): pruefwurf = json.get(params, "confirm")]
	[h,if(json.contains(params, "rerollConfirm")): pruefReroll = json.get(params, "rerollConfirm")]
	[h,if(json.contains(params, "patzer19")): patzer19 = json.get(params, "patzer19")]
	[h,if(json.contains(params, "allowImprovement")): allowImprovement = json.get(params, "allowImprovement")]
}]
[h,if(patzer19 == 1): critFail=19; critFail=20]

[h: origProp = property]
[h,if(!isNumber(property)),Code:{
	[h: origProp = eval(property)]
	[h: property = probeGetAktWert(property, currentToken())]
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

[h: rerolls = 0]
[h: improvements = 0]
[h: note = ""]

[h: allowFate = 1]
[h: success = 0]
[h: dice = json.append("[]", 1d20, 1d20, 1d20)]
[h: ergebnis = json.set("{}",
	"ResultType", "1d20",
	"mod", mod,
	"property", origProp,
	"currentProperty", property,
	"modText", modtext,
	"pruefwurf", pruefwurf,
	"pruefreroll", pruefreroll,
	"critFail", critFail)]

[h: continue = 1]
[h,while(allowFate == 1 && success == 0 && continue == 1),Code:{
	
	[h: ergebnis = json.set(ergebnis, "dice", dice)]
	[h: ergebnis = calc1d20(ergebnis)]
	
	[h: success = json.get(ergebnis, "success")]
	[h: quality = json.get(ergebnis, "quality")]

	<!-- If we succeed or dont have fate points we terminate the macro here! -->
	[h,if(json.get(ergebnis, "success") != 0 || SchiPsAktuell == 0): return(0, json.set(ergebnis, "Notification", json.get(ergebnis, "Notification") + note))]

	<!-- If we fail and have fate points left we continue offering fate options -->

	<!-- Build a display for the current roll -->
	[h: display = show1d20(ergebnis, 1)]
	[h: display = strformat("
	<table style='border-spacing: 0px; margin-top: 3px; font-weight: bold;'>
		<tr>
			%{display}
		</tr>
	</table>")]
	[h: display = border(name, display)]
	[h: useFate = 0]

	[h: maxFate = SchiPsAktuell]
	[h,if(schicksalsmacht == 0): maxFate = 1; maxFate = SchiPsAktuell]
	[h: necessaryFate = 1]
	[h: offerReroll = 0]
	[h,if(quality >= -maxFate * 2 && allowImprovement),Code:{
		[h: necessaryFate = ceil(-quality / 2.0)]
		[h: confirm = input(
			strformat("junk|<html>%{display}</html>|Vorläufiges Würfelergebnis|LABEL|SPAN=TRUE"),
			strformat("useFate|%{useFate}|<html>%{necessaryFate} von %{SchiPsAktuell} SchiPs ausgeben um die Qualität<br>zu verbessern und die Probe doch noch zu bestehen.</html>|CHECK|")
		)]
		[h,if(confirm && useFate): improvements = improvements + necessaryFate]
		[h,if(confirm && useFate): SchiPsAktuell = SchiPsAktuell - necessaryFate]
		[h,if(confirm && useFate): ergebnis = json.set(ergebnis, "mod", mod + necessaryFate * 2, "modText", modText + modReason(necessaryFate * 2, "wegen Ergebnis verbessern mittels SchiP"), "dice", dice)]

		<!-- If the user rejected using fatepoints to improve the result we DO offer rerolling IF required Fatepoints for the improvement are GREATER than 1 -->
		[h,if(necessaryFate > 1): offerReroll = 1]
		<!-- If the user accepted using fatepoints to improve the result we DO NOT offer rerolling -->
		[h,if(confirm && useFate): offerReroll = 0]
	};{
		[offerReroll = 1]
	}]
	[h,if(offerReroll),Code:{
		[h: confirm = input(
			strformat("junk|<html>%{display}</html>|Vorläufiges Würfelergebnis|LABEL|SPAN=TRUE"),
			strformat("useFate|%{useFate}|<html>1 von %{SchiPsAktuell} SchiPs ausgeben um erneut zu würfeln.</html>|CHECK|")
		)]
		[h,if(confirm && useFate): rerolls = rerolls + 1]
		[h,if(confirm && useFate): SchiPsAktuell = SchiPsAktuell - 1]
		[h,if(confirm && useFate): dice = json.append("[]", 1d20, 1d20, 1d20)]
	}]
	[h,if(rerolls == 0): noteRerolls = ""; noteRerolls = strformat("Die <b>%{name}</b>-Probe wurde <b>%{rerolls} Mal</b> neugewürfelt.<br>")]
	[h,if(improvements == 0): noteImprovements = ""; noteImprovements = strformat("Die <b>%{name}</b>-Probe wurde für <b>%{improvements} SchiPs</b> verbessert.<br>")]
	[h: note = noteRerolls + noteImprovements]
	[h,if(confirm && useFate),Code:{
		[h: refreshFrame(currentToken())]
		[h: ergebnis = json.set(ergebnis, "dice", dice)]
		[h: ergebnis = calc1d20(ergebnis)]
	}]

	[allowFate = schicksalsmacht]
	[h,if(!confirm || !useFate): continue = 0]
}]

[h: macro.return = json.set(ergebnis, "Notification", json.get(ergebnis, "Notification") + note)]