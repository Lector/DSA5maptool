[h: uebergabe = macro.args]
[h: switchToken(json.get(uebergabe, "token"))]
[h: weapon = decode(json.get(uebergabe, "weapon"))]
[h: target = json.get(uebergabe, "target")]
[h: id = json.get(weapon, "ID")]

[h,if(json.contains(weapon, "AT")),Code:
{
    [h: Nahkampfwaffen = json.remove(Nahkampfwaffen, weapon)]
    [h,token(target): Nahkampfwaffen = json.append(Nahkampfwaffen, json.set(weapon, "ID", json.length(Nahkampfwaffen)))]
};{
    [h: Fernkampfwaffen = json.remove(Fernkampfwaffen, weapon)]
    [h,token(target): Fernkampfwaffen = json.append(Fernkampfwaffen, json.set(weapon, "ID", json.length(Fernkampfwaffen)))]
}]

[h: closeDialog("moveWeapon")]