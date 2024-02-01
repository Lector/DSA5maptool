[h: params = macro.args]
[h: switchToken(json.get(params, "token"))]
[h: oldCheck = decode(json.get(params, "check"))]

[h: tokenChecks = getProperty("Checks", currentToken())]
[h,if(oldCheck != ""),Code:{
    [h: index = json.indexOf(tokenChecks, oldCheck)]
    [h: tokenChecks = json.remove(tokenChecks, index)]
}]

[h: check = checkFromForm(params)]

[h: tokenChecks = json.append(tokenChecks, check)]
[h: setProperty("Checks", tokenChecks, currentToken())]

[h: closeDialog("checkEdit")]
[h,if(isDialogVisible("manageChecks")): manageChecks(currentToken())]
[h: noticeSelf("editCheck", currentToken())]
[h: refreshFrame(currentToken())]