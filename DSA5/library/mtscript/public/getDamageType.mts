[h: weapon = arg(0)]
[h,if(json.contains(weapon, "SP")): macro.return = "SP"; macro.return = "TP"]