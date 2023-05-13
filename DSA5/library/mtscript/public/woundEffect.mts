[h: switchToken(arg(0))]
[h: wound = arg(1)]
[h: zone = arg(2)]
[h,if(json.length(macro.args) > 3): modMacroParams = arg(3); modMacroParams = ""]

[h,if(zone == "Kopf" || zone == "Torso"): spec = "Handlungsfähigkeit bewahren"; spec = "Störungen ignorieren"]
[h: skillParams = json.set("{}", "modMacro", "probeTalentMods@this", "modMacroParams", modMacroParams, "spec", spec)]
[h: skillResult = rollSkill(currentToken(), "Selbstbeherrschung", -wound, skillParams)]
[h: success = json.get(skillResult, "success")]
[h,if(success > 0),Code:{
	[h: bedingung = strformat("Da die Probe auf <b>Selbstbeherrschung (%{spec}) -%{wound}</b> gelungen ist ")]
	[switch(zone):
		case "Kopf": wundtext = strformat("konntest du 1 Stufe Betäubung wiederstehen.");
		case "Torso": wundtext = strformat("konntest du 1W3+1 zusätzliche SP abwenden.");
		case "Linker Arm": wundtext = "konntest du das in der Hand gehaltene Objekt festhalten.";
		case "Rechter Arm": wundtext = "konntest du das in der Hand gehaltene Objekt festhalten.";
		case "Linkes Bein": wundtext = strformat("bleibst du stehen.");
		case "Rechtes Bein": wundtext = strformat("bleibst du stehen.");
		default: wundtext = "hast du einem Wundeffekt wiederstanden."
	]
};{
	[h: bedingung = strformat("Da die Probe auf <b>Selbstbeherrschung (%{spec}) -%{wound}</b> misslungen ist ")]
	[switch(zone),Code:
		case "Kopf":
		{
			[wundtext = strformat("hast du 1 Stufe Betäubung erhalten.")]
			[Betaeubung = min(4, Betaeubung + 1)]
		};
		case "Torso":
		{
			[loss = eval("1d3+1")]
			[wundtext = strformat("hast du <span style='font-weight:bold' title='1W3+1'>%{loss} SP</span> extra bekommen.")]
			[LeP = LeP - loss]
		};
		case "Linker Arm":
		{
			[if(Linkshaender == 1): waffe = Haupthand; waffe = Nebenhand]
			[waffe = getNahkampfwaffe(waffe)]
			[wName = json.get(waffe, "Name")]
			[technik = json.get(waffe, "Technik")]
			[if(Haupthand != Nebenhand && technik != "" && technik != "Schilde" && Linkshaender == 1):
			Haupthand = noMeleeWeapon(currentToken())]
			[if(Haupthand != Nebenhand && technik != "" && technik != "Schilde" && Linkshaender == 0): 
			NebenHand = noMeleeWeapon(currentToken())]
			[wundtext = strformat("wurde das in der Hand gehaltene Objekt '%{wName}' losgelassen, sofern es weder ein Schild ist, noch zweihändig geführt wurde.")]
		};
		case "Rechter Arm":
		{
			[if(Linkshaender == 0): waffe = Haupthand; waffe = Nebenhand]
			[waffe = getNahkampfwaffe(waffe)]
			[wName = json.get(waffe, "Name")]
			[technik = json.get(waffe, "Technik")]
			[if(Haupthand != Nebenhand && technik != "" && technik != "Schilde" && Linkshaender == 0):
			Haupthand = noMeleeWeapon(currentToken())]
			[if(Haupthand != Nebenhand && technik != "" && technik != "Schilde" && Linkshaender == 1): 
			NebenHand = noMeleeWeapon(currentToken())]
			[wundtext = strformat("wurde das in der Hand gehaltene Objekt '%{wName}' losgelassen, sofern es weder ein Schild ist, noch zweihändig geführt wurde.")]
		};
		case "Linkes Bein":
		{
			[wundtext = "gehst du zu Boden und erleidet den Status Liegend."]
			[setState("Liegend", 1)]
		};
		case "Rechtes Bein":
		{
			[wundtext = "gehst du zu Boden und erleidet den Status Liegend."]
			[setState("Liegend", 1)]
		};
		default:
		{
			[wundtext = "wird ein Wundeffekt ausgelöst."]
		}
	]
}]
[h: wundtext = bedingung + wundtext]

[h: macro.return = json.set(skillResult,
"ResultType", "woundEffect",
"Header", strformat("Wundeffekt"),
"Notification", wundtext,
"spec", spec)]