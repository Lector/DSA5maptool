[h: names = "[]"]
[h,foreach(name, getAllPlayerNames()), if(isGM(name)): names = json.append(names, name)]
[h: macro.return = names]