[h: params = arg(0)]

[h: subChecks = "[]"]
[h,for(j, 1, 4, 1, ""),Code:{
    [h: newCheck = json.set("{}", "Skill", json.get(params, "skill"+j), "Spec", json.get(params, "spec"+j), "Mod", json.get(params, "mod"+j))]
    [h,if(json.get(newCheck, "Skill") != ""): subChecks = json.append(subChecks, newCheck)]
}]
[h: check = json.set("{}", "Checks", subChecks)]
[h,if(json.get(params, "blind") != ""): blind = 1; blind = 0]
[h: check = json.set(check, "Fail", json.set("{}", "Info", string(json.get(params, "fail"))))]
[h,for(i, 1, 7, 1, ""): check = json.set(check, "QS"+i, json.set("{}", "Info", string(json.get(params, "qs"+i))))]

[h: macro.return = check]