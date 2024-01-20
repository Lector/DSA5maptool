[h: weapon = arg(0)]
[h,if(json.contains(weapon, "SP")): macro.return = json.get(weapon, "SP"); macro.return = json.get(weapon, "TP")]