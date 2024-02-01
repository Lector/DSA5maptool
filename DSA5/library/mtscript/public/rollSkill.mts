[h: skill = arg(1)]
[h,if(json.length(macro.args) >= 3): mod = arg(2); mod = 0]
[h,if(json.length(macro.args) >= 4): params = arg(3); params = "{}"]

[h: map = json.get(getTokenMap(arg(0)), 0)]
[h: FPBonus = 0]

[h: lists = "[Koerper, Gesellschaft, Natur, Wissen, Handwerk, Zauber, Rituale, MagischeHandlungen, Liturgien, Zeremonien]"]

[h,foreach(list, lists),Code:{
	[h: skills = getProperty(list, arg(0), map)]
	[h,foreach(item, skills, ""), if(json.get(item, "Talent") == skill), Code:{
		[h: probe = json.get(item, "Probe")]
		[h: e1 = json.get(probe, "Eigenschaft1")]
		[h: e2 = json.get(probe, "Eigenschaft2")]
		[h: e3 = json.get(probe, "Eigenschaft3")]
		
		[h,switch(list):
			case "Zauber": modMacro = "probeZauberMods@this";
			case "Rituale": modMacro = "probeRitualMods@this";
			case "MagischeHandlungen": modMacro = "probeZauberMods@this";
			case "Liturgien": modMacro = "probeLiturgieMods@Lib:macors";
			case "Zeremonien": modMacro = "probeZeremonieMods@this";
			default: modMacro = "probeTalentMods@this"
		]
		[h,if(json.contains(params, "modMacro") == 0): params = json.set(params, "modMacro", modMacro)]
		
		[h,if(hasTrait("Nachteile", "Unfähig ("+skill+")") >= 1): params = json.set(params, "reroll", "best")]
		[h,if(hasTrait("Vorteile", "Begabung ("+skill+")") >= 1): params = json.set(params, "reroll", "worst")]
		[h: Spec = json.get(params, "spec")]
		[h: SpecSF = "Fertigkeitsspezialisierung ("+skill+": "+Spec+")"]
		[h,if(Spec != ""), if(hasTrait("AllgemeineSF", SpecSF)): FPBonus = FPBonus + 2]
		[h: modMacroParams = json.get(params, "modMacroParams")]
		[h: modMacroParams = json.set(modMacroParams, "Skill", skill)]
		[h: params = json.set(params, "Name", skill, "modMacroParams", modMacroParams)]
		[h: return(0, roll3d20(arg(0), e1, e2, e3, json.get(item, "Talentwert") + FPBonus, mod, params))]
	}]
}]

[h: macro.return = ""]