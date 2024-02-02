[h: params = macro.args]
[h: check = decode(json.get(params, "check"))]
[h: gmName = json.get(params, "gmName")]
[h,if(isDialogVisible("chooseRequestedCheck")): closeDialog("chooseRequestedCheck"))]
[h: skill = json.path.read(check, "Checks.[0].Skill")]
[h: qsmatter = 0]
[h,for(i, 6, 0, -1),Code:
{
    [h: info = json.path.read(check, "QS"+i+".Info")]
    [h,if(info != "" && qsmatter == 0): qsmatter = i]
}]
[h: params = json.set("{}", "spec", json.path.read(check, "Checks.[0].Spec"), "QSMatter", qsmatter)]
[h: skillResult = rollSkill(currentToken(), skill, json.path.read(check, "Checks.[0].Mod"), params)]
[h: qs = json.get(skillResult, "qs")]
[h: note = json.get(skillResult, "Notification")]

[h: checkNote = ""]
[h,if(qs == 0): start = 0; start = 1]
[h,for(i, start, qs+1, 1),Code:{
    [h,if(i == 0): field = "Fail"; field = "QS"+string(i)]
    [h: info = json.path.read(check, field+".Info")]
    [h,if(info != ""): checkNote = strformat("%{checkNote}<li style='magin: 0 0 0 0;'>%{info}</li>")]
}]
[h,if(checkNote != ""): checkNote = strformat("<ul style='margin: 0 0 0 0;'>%{checkNote}</ul>")]

[h: recipients = json.append(getGMNames(), getPlayerName())]
[h,if(checkNote != ""): skillResult = json.set(skillResult, "Notification", note + onlyFor(checkNote, recipients))]
[h: sendTo("GmAndSelf", border(skill, show(skillResult)), currentToken(), gmName)]