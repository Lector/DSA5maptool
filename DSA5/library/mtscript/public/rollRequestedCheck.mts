[h: check = arg(0)]
[h: gmName = arg(1)]
[h: subChecks = json.get(check, "Checks")]
[h: checkCount = json.length(subChecks)]
[h,if(getImpersonated() == ""): inputFail("impersonate")]
[h,if(checkCount > 1),Code:{
    [h: chooseRequestedCheck(check, gmName)]
};{
    [h,macro("rollRequestedCheckProcess@this"): json.set("{}", "check", encode(check), "gmName", gmName)]
}]