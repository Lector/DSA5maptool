[h: page = arg(0)]

<div class="charbogenNav">
    [h,if(page == 0): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabAttributes%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' title='Spielercharaktere'/>")]
    [h,if(page != 0): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("meisterbogen2@this", "", "pc"))]
    [r: tab]

    [h,if(page == 1): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabNPC%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' title='Meisterfiguren'/>")]
    [h,if(page != 1): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("meisterbogen2@this", "", "npc"))]
    [r: tab]

    [h,if(page == 2): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabChecks%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' title='Proben vorbereiten und würfeln lassen'/>")]
    [h,if(page != 2): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("meisterbogenProben@this", ""))]
    [r: tab]

    [h,if(page == 3): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabDate%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' title='Kalender: Datum und Uhrzeit verwalten'/>")]
    [h,if(page != 3): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("meisterbogenKalender@this", ""))]
    [r: tab]

    [h,if(page == 4): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabNotes%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' title='Handouts'/>")]
    [h,if(page != 4): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("meisterbogenHandouts@this", ""))]
    [r: tab]

    [h,if(page == 5): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabSettings%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' title='Tools'/>")]
    [h,if(page != 5): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("meisterbogenTools@this", ""))]
    [r: tab]
</div>