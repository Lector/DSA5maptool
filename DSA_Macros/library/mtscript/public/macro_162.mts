[h: attacker = arg(0)]
[h: target = arg(1)]

[h: targetFacing = getTokenFacing(target)]
[h,if(targetFacing == ""): targetFacing = lookAt(target, attacker); targetFacing = json.set("{}", "X", math.cos(targetFacing), "Y", -math.sin(targetFacing))]
[h: attackerFacing = lookAt(attacker, target)]
[h: dotProduct = json.get(targetFacing, "X") * json.get(attackerFacing, "X") + json.get(targetFacing, "Y") * json.get(attackerFacing, "Y")]
<!-- Da hin und wieder Rechenungenauigkeiten auftreten könnne werte unter -1 oder über 1 auftreten. Das lösen wir mit min und max -->
[h: angle = math.acos(max(-1, min(1, dotProduct)))]
[h,if(angle < 89): macro.return = 1; macro.return = 0]