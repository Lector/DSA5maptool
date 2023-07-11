[h: switchToken(arg(0))]
[h: fly = findSkill(currentToken(), "Fliegen")]
[h,if(json.get(fly, "Talentwert") > 0): airborne = 1; airborne = 0]
[h: macro.return = airborne]