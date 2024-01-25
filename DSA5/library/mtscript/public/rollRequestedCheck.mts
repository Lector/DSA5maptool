[h: check = arg(0)]
[h: subChecks = json.get(check, "Checks")]
[h: checkCount = json.length(subChecks)]
[h,if(checkCount > 1),Code:{
    [h: chooseRequestedCheck(check)]
};{
    [h,macro("rollRequestedCheckProcess@this"): json.set("{}", "check", encode(check))]
}]
