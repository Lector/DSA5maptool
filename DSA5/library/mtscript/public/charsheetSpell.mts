[h: switchToken(arg(0))]

[h: label = ""]
[h: list = "[]"]
[h: listName = ""]
[h: wikiLink = ""]
[h: addLink = ""]
[h: editLink = ""]
[h,switch(arg(1)), Code:
case "spell": {
    [label = "Zaubersprüche"]
    [list = Zauber]
    [listName = "Zauber"]
    [wikiLink = "https://dsa.www.ulisses-regelwiki.de/zauber.html?zauber=%s"]
    [mac = "probeZauber"]
    [addLink = macroLinkText("chareditMagieAdd@this", "", json.append(currentToken(), "Zauber"))]
    [editLink = macroLinkText("chareditTalent@this", "", json.append(currentToken(), "Zauber"))]
};
case "ritual": {
    [label = "Rituale"]
    [list = Rituale]
    [listName = "Rituale"]
    [wikiLink = "https://dsa.www.ulisses-regelwiki.de/ritual.html?ritual=%s"]
    [mac = "probeRitual"]
    [addLink = macroLinkText("chareditMagieAdd@this", "", json.append(currentToken(), "Rituale"))]
    [editLink = macroLinkText("chareditTalent@this", "", json.append(currentToken(), "Rituale"))]
};
case "magic": {
    [label = MagischeHandlungenPlural]
    [list = MagischeHandlungen]
    [listName = "MagischeHandlungen"]
    [wikiLink = "https://dsa.www.ulisses-regelwiki.de/" + MagischeHandlungenSingular + ".html?" + MagischeHandlungenSingular + "=%s"]
    [mac = "probeZauber"]
    [addLink = macroLinkText("chareditMagieAdd@this", "", json.append(currentToken(), "MagischeHandlungen"))]
    [editLink = macroLinkText("chareditTalent@this", "", json.append(currentToken(), "MagischeHandlungen"))]
};
case "chant": {
    [label = "Liturgien"]
    [list = Liturgien]
    [listName = "Liturgien"]
    [wikiLink = "https://dsa.www.ulisses-regelwiki.de/liturgie.html?liturgie=%s"]
    [mac = "probeLiturgie"]
    [addLink = macroLinkText("chareditLiturgieAdd@this", "", currentToken())]
    [editLink = macroLinkText("chareditTalent@this", "", json.append(currentToken(), "Liturgien"))]
};
case "ceremony": {
    [label = "Zeremonien"]
    [list = Zeremonien]
    [listName = "Zeremonien"]
    [wikiLink = "https://dsa.www.ulisses-regelwiki.de/zeremonie.html?zeremonie=%s"]
    [mac = "probeZeremonie"]
    [addLink = macroLinkText("chareditZeremonienAdd@this", "", currentToken())]
    [editLink = macroLinkText("chareditTalent@this", "", json.append(currentToken(), "Zeremonien"))]
}]

<div class="table" id="spell">
    
    <div>
        [r: label]
    </div>
    <div>
        Probe
    </div>
    <div>
        FW
    </div>
    <div>
        &nbsp;
    </div>
    <div>
        <a href="[r: addLink]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' border="0" alt="add"></image></a>
    </div>
    [h: cnt = json.length(list)]
    [r,if(cnt > 0), Code:{
    <div>
        <a href="[r: editLink]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesEdit.png")]' border="0" alt="edit"></image></a>
    </div>
    }]
    [h: num = 0]
    [r,foreach(entry, list, ""), Code:
    {
    [h: tName = json.get(entry, "Talent")]
    [h: tWiki = strformat(wikiLink, replace(tName, ' ', '+'))]
    [h: tProbe = json.get(entry, "Probe")]
    [h: tEigenschaft1 = json.get(tProbe, "Eigenschaft1")]
    [h: tEigenschaft2 = json.get(tProbe, "Eigenschaft2")]
    [h: tEigenschaft3 = json.get(tProbe, "Eigenschaft3")]
    [h: tWert = json.get(entry, "Talentwert")]
    [h: tMerkmal = json.get(entry, "Merkmal")]
    [h: params = json.append("[]", tName, tEigenschaft1, tEigenschaft2, tEigenschaft3, tWert, tWiki, tMerkmal, arg(1))]
    [h: params = json.append("[]", currentToken(), params)]
    <div>
        <span title='Probe auf &quot;[r: tName]&quot; ablegen'>
            [r: macroLink(tName, mac+"@this", "", params)]
        </span>
    </div>
    <div>
        [r: tEigenschaft1] &middot; [r: tEigenschaft2] &middot; [r: tEigenschaft3]
    </div>
    <div>
        <span title='Probe auf &quot;[r: tName]&quot; ablegen'>[r: macroLink(tWert, mac+"@this", "", params)]</span>
    </div>
    <div>
        <a href=[r: tWiki]>
            <image alt='[r: label] in der Regelwiki nachschlagen' src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/wiki.png")]'/>
        </a>
    </div>
    <div class="colspan2">
        [h: params = json.set("{}", "token", currentToken(), "list", listName, "index", num, "name", "Talent")]
        [h: deleteLink = macroLinkText("chareditTraitDelProcess@this", "", params)]
        <a href="[r: deleteLink]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesRemoveSmall.png")]' border="0" alt="del"></image></a>
    </div>
    [h: num = num + 1]
    }]
</div>