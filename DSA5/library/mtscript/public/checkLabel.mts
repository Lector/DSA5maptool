[h: check = arg(0)]
[h: index = 0]
[h,if(json.length(macro.args) > 1): index = arg(1)]
[h: check = json.path.read(check, "Checks.[" + index + "]")]

[h: skill = json.get(check, "Skill")]
[h: spec = json.get(check, "Spec")]
[h: mod = json.get(check, "Mod")]

[h: label = skill]
[h,if(spec != ""): label = label + strformat(" (%{spec})")]
[h,if(mod != "" && mod != 0): label = label + strformat(" %+d", mod)]
[h: macro.return = label]