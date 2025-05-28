[h,if(getImpersonated() == ""): inputFail("impersonate")]

[h: check = arg(0)]
[h: subChecks = json.get(check, "Checks")]
[h: gmName = json.get(check, "GMName")]


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

[h: blind = json.get(check, "Blind")]
[h,if(blind == 1),Code:{
    <!-- Blind checks -->

    <!-- Determine the best check. We weight the properties of the check as a tiebreaker. -->
    <!-- TODO: Check if 100 is the best divisor here. i guess we need to do some math here and determine which check has the highest success chance. -->
    [h: bestCheck = json.get(subChecks, 0)]
    [h: skillName = json.get(bestCheck, "Skill")]
    [h: bestCheckInChar = findSkill(currentToken(), skillName)]
    [h: bestCheckInChar = json.get(bestCheckInChar, 0)]
    [h: bestValue = json.get(bestCheckInChar, "Talentwert")
        + (probeGetAktWert(json.path.read(bestCheckInChar, "Probe.Eigenschaft1")) + json.get(bestCheck, "Mod")) / 100
        + (probeGetAktWert(json.path.read(bestCheckInChar, "Probe.Eigenschaft2")) + json.get(bestCheck, "Mod")) / 100
        + (probeGetAktWert(json.path.read(bestCheckInChar, "Probe.Eigenschaft3")) + json.get(bestCheck, "Mod")) / 100]
    [h,foreach(currentCheck, subChecks, ""),Code:{
        [h: skillName = json.get(currentCheck, "Skill")]
        [h: currentCheckInChar = findSkill(currentToken(), skillName)]
        [h: currentCheckInChar = json.get(currentCheckInChar, 0)]
        [h: currentValue = json.get(currentCheckInChar, "Talentwert") + json.get(currentCheck, "Mod")
            + (probeGetAktWert(json.path.read(currentCheckInChar, "Probe.Eigenschaft1")) + json.get(currentCheck, "Mod")) / 100
            + (probeGetAktWert(json.path.read(currentCheckInChar, "Probe.Eigenschaft2")) + json.get(currentCheck, "Mod")) / 100
            + (probeGetAktWert(json.path.read(currentCheckInChar, "Probe.Eigenschaft3")) + json.get(currentCheck, "Mod")) / 100]
        [h,if(currentValue > bestValue): bestCheck = currentCheck]
        [h,if(currentValue > bestValue): bestValue = currentValue]
    }]

    <!-- We now roll the check -->
    [h: skill = json.get(bestCheck, "Skill")]
    [h: params = json.set("{}", "spec", json.get(bestCheck, "Spec"), "QSMatter", 0, "Blind", 1)]
    [h: skillResult = rollSkill(currentToken(), skill, json.get(bestCheck, "Mod"), params)]
    [h: qs = json.get(skillResult, "qs")]
    [h: note = json.get(skillResult, "Notification")]

    <!-- Build a checkNote with all the infos we rolled. -->
    [h: checkNote = ""]
    [h,if(qs == 0): start = 0; start = 1]
    [h,for(i, start, qs+1, 1),Code:{
        [h,if(i == 0): field = "Fail"; field = "QS"+string(i)]
        [h: info = json.path.read(check, field+".Info")]
        [h,if(info != ""): checkNote = strformat("%{checkNote}<li style='magin: 0 0 0 0;'>%{info}</li>")]
    }]

    [h,if(checkNote != ""),Code:{
        <!-- if we have infos we send it to the player with a HIDDEN check only the player sees. -->
        [h: checkNote = strformat("<ul style='margin: 0 0 0 0;'>%{checkNote}</ul>")]
        [h: recipients = json.append(getGMNames(), getPlayerName())]
        [h: sendTo("GmAndSelf", border(
            onlyFor(skill, getGMNames()) +
            onlyFor("Verdeckte Probe", getPlayerName()),
            onlyFor(show(skillResult, 1), getGMNames()) + subtext(checkNote),
            currentToken(), gmName)
        )]
    };{
        <!-- if we do not have infos we only send the GM the skillResult -->
        [h: sendTo("Gm", border(skill, show(skillResult, 1)), currentToken(), gmName)]
    }]

};{
    <!-- Open checks -->
    [h,if(checkCount > 1),Code:{
        [h: chooseRequestedCheck(getImpersonated(), check)]
    };{
        [h,macro("probeTalent@this"): json.append("[]", getImpersonated(), encode(check))]
    }]
}]
