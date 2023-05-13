[h: switchToken(arg(0))]
[h: page = arg(1)]

<div class="charbogenNav">
    [h,if(page == 0): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabAttributes%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' alt='Charakterbogen'/>")]
    [h,if(page != 0): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("charbogenEigenschaften@this", "none", currentToken()))]
    [r: tab]

    [h,if(page == 1): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabCombat%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' alt='Kampfbogen'/>")]
    [h,if(page != 1): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("charbogenKampf@this", "none", currentToken()))]
    [r: tab]

    [h,if(page == 2): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabTalents%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' alt='Fertigkeiten'/>")]
    [h,if(page != 2): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("charbogenTalente@this", "none", json.append(currentToken(), getStrProp(PlayerOpt, "openFrameTalente"))))]
    [r: tab]

    [h,if(page == 3): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabMagic%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' alt='Magie'/>")]
    [h,if(page != 3): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("charbogenZauber@this", "none", currentToken()))]
    [r: tab]

    [h,if(page == 4): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabKarma%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' alt='Götterwirken'/>")]
    [h,if(page != 4): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("charbogenLiturgien@this", "none", currentToken()))]
    [r: tab]

    [h,if(page == 5): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabNotes%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' alt='Notizen und Handouts'/>")]
    [h,if(page != 5): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("charbogenNotizen@this", "none", currentToken()))]
    [r: tab]
</div>