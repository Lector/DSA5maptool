[h: switchToken(arg(0))]
[h: id = arg(1)]

[h: andereWaffe = getNahkampfwaffe(HauptHand)]
[h,if(json.get(andereWaffe, "Zweihand") != 0 && json.get(andereWaffe, "Technik") != "Stangenwaffen"): HauptHand = 0]

[h: waffe = getNahkampfwaffe(id)]
[h,if(json.get(waffe, "Zweihand") != 0): HauptHand = id]

[h: NebenHand = id]
[h: refreshFrame(currentToken())]