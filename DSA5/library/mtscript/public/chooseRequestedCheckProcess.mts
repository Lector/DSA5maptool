[h: params = macro.args]
[h: check = decode(json.get(params, "check"))]
[h,if(isDialogVisible("chooseRequestedCheck")): closeDialog("chooseRequestedCheck")]

[h: probeTalent(currentToken(), check)]