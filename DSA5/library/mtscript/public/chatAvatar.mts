[h: selectID = getSelected()]

[h,if(isGM() == 1 && hasImpersonated() == 0 && listCount(selectID) == 1), Code:
{
    [switchToken(selectID)]
    [gmImage = getTokenImage(50)]
    [gmName = getName()]
};
{
    [gmImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/gm.png")]
    [gmName = "Spielleiter"]
}]

[h,if(hasImpersonated()), Code:
{
    [tokenImage = getTokenImage(50)]
    [tokenName = getImpersonatedName()]
};
{
    [if(isGM()), Code:
    {
        [tokenImage = gmImage]
        [tokenName = gmName]
    };
    {
        [tokenImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/guest.png")]
        [tokenName = getPlayerName()]
    }]
}]

[h,if(json.length(macro.args) > 0),Code:
{
    [h,if(arg(0) != ""),Code:
    {
        [switchToken(arg(0))]
        [tokenImage = getTokenImage(50)]
        [tokenName = getName()]
    }]
}]


[h: ausgabe = strformat("
<img src='%s'>
<br><img src='%s'>
<br>%s
<br><img src='%s'>",
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/ornamentTop.png"),
tokenImage, tokenName,
data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/ornamentBottom.png"))]

[h: macro.return = ausgabe]