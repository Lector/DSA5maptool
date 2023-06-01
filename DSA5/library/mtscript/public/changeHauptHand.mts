[h: switchToken(arg(0))]
[h: id = arg(1)]

[h: andereWaffe = getNahkampfwaffe(NebenHand)]
[h,if(json.get(andereWaffe, "Zweihand") != 0 && json.get(andereWaffe, "Technik") != "Stangenwaffen"): NebenHand = 0]

[h: waffe = getNahkampfwaffe(id)]
[h,if(json.get(waffe, "Zweihand") != 0): NebenHand = id]

[h: HauptHand = id]
[h: refreshFrame(currentToken())]