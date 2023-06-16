[h: page = arg(0)]

<div class="charbogenNav">
    [h,if(page == 0): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabPC1%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' title='Spielercharaktere I: Werte, Waffen & Rüstung'/>")]
    [h,if(page != 0): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("meisterbogen1@this", "", "pc"))]
    [r: tab]

    [h,if(page == 1): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabPC2%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' title='Spielercharaktere II: Vorteile, Nachteile & Notizen'/>")]
    [h,if(page != 1): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("meisterbogen2@this", "", "pc"))]
    [r: tab]

    [h,if(page == 2): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabNPC1%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' title='NSCs I: Werte, Waffen & Rüstung'/>")]
    [h,if(page != 2): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("meisterbogen1@this", "", "npc"))]
    [r: tab]

    [h,if(page == 3): active = "Active"; active = ""]
    [h: image = data.getStaticData("com.github.lector.dsa5maptool", strformat("/public/images/mainTheme/tabNPC2%{active}.png"))]
    [h: tab = strformat("<image src='%{image}' title='NSCs II: Vorteile, Nachteile & Notizen'/>")]
    [h,if(page != 3): tab = strformat("<a href='%s'>%{tab}</a>", macroLinkText("meisterbogen2@this", "", "npc"))]
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