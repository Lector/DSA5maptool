[h: uebergabe = macro.args]
[h: switchToken(json.get(uebergabe, "token"))]
[h: index = json.get(uebergabe, "index")]
[h: checks = getProperty("Checks", currentToken())]
[h: check = json.get(checks, index)]
[h: skill = json.get(check, "Skill")]
[h: spec = json.get(check, "Spec")]
[h: label = skill]
[h,if(spec != ""): label = strformat("%{label} (%{spec})")]

[h: confirmLabel = strformat("%{label} - Probe wirklich vom Token %s entfernen?", getName(currentToken()))]
[h: confirm = input(strformat("junk|%{confirmLabel}||LABEL|SPAN=TRUE"))]
[h: abort(confirm)]

[h: checks = json.remove(checks, index)]
[h: setProperty("Checks", checks, currentToken())]

[h: noticeSelf("checkDel")]
[h,if(isDialogVisible("manageChecks")): manageChecks(currentToken())]