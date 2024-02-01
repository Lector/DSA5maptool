[h,if(getImpersonated() == ""): inputFail("impersonate")]

[h: check = arg(0)]
[h: gmName = arg(1)]
[h: subChecks = json.get(check, "Checks")]


<!-- We often have multiple Skills with different specs that we want to group togeather.
The player should not see that a plant lore checks is for Poison and something else.
Thats why we group all SubChecks by Skill and then choose the most relevant specialization. -->

<!-- First we group all SubChecks by Skill -->
[h: skillSpecs = "{}"]
[h,foreach(subCheck, subChecks, ""), Code:{
    [h: skill = json.get(subCheck, "Skill")]
    [h: spec = json.get(subCheck, "Spec")]
    [h: mod = json.get(subCheck, "Mod")]
    [h: skillWithMod = json.append("[]", skill, mod)]
    [h: groupedSpecs = json.get(skillSpecs, skillWithMod)]
    [h: skillSpecs = json.set(skillSpecs, skillWithMod, json.append(groupedSpecs, spec))]
}]

<!-- Now we have a json-array of all Skills. We now iterate the skills and choose the most relevant specialization -->
[h: subChecks = "[]"]
[h,foreach(skill, skillSpecs, ""), Code:{
    [h: skillName = json.get(skill, 0)]
    [h: mod = json.get(skill, 1)]
    [h: groupedSpecs = json.get(skillSpecs, skill)]
    [h: foundSpec = ""]
    [h,foreach(spec, groupedSpecs, ""),Code:{
        [h: trait = hasTrait("AllgemeineSF", strformat("Fertigkeitsspezialisierung (%{skillName}: %{spec})"))]
        [h,if(trait > 0): foundSpec = spec]
    }]
    [h,if(foundSpec == ""): foundSpec = json.get(groupedSpecs, 0)]
    [h: subChecks = json.append(subChecks, json.set("{}", "Skill", skillName, "Spec", foundSpec, "Mod", mod))]
}]
[h: check = json.set(check, "Checks", subChecks)]


[h: checkCount = json.length(subChecks)]
[h,if(checkCount > 1),Code:{
    [h: chooseRequestedCheck(check, gmName)]
};{
    [h,macro("rollRequestedCheckProcess@this"): json.set("{}", "check", encode(check), "gmName", gmName)]
}]