[h: params = macro.args]
[h: switchToken(json.get(params, "token"))]
[h: check = decode(json.get(params, "check"))]

[h: checks = getProperty("Checks", currentToken())]
[h,if(check != ""),Code:{
    [h: index = json.indexOf(checks, check)]
    [h: checks = json.remove(checks, index)]
}]

[h: check = json.set("{}", "Skill", json.get(params, "skill"), "Spec", json.get(params, "spec"), "Mod", json.get(params, "mod"))]
[h,for(i, 1, 7, 1, ""): check = json.set(check, "QS"+i, json.set("{}", "Info", string(json.get(params, "qs"+i))))]

[h: checks = json.append(checks, check)]
[h: setProperty("Checks", checks, currentToken())]

[h: closeDialog("checkEdit")]
[h,if(isDialogVisible("manageChecks")): manageChecks(currentToken())]
[h,macro("noticeSelf@this"): "editCheck"]
[h: refreshFrame(currentToken())]