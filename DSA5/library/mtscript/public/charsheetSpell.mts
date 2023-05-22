[h: switchToken(arg(0))]

[h: label = ""]
[h: list = "[]"]
[h: wikiLink = ""]
[h,switch(arg(1)), Code:
case "spell": {
    [label = "Zaubersprüche"]
    [list = Zauber]
    [wikiLink = "https://www.ulisses-regelwiki.de/zauber.html?zauber=%s"]
    [mac = "probeZauber"]
};
case "ritual": {
    [label = "Rituale"]
    [list = Rituale]
    [wikiLink = "https://www.ulisses-regelwiki.de/ritual.html?ritual=%s"]
    [mac = "probeRitual"]
    [h,if(json.length(list) == 0): return(0, "")]
};
case "magic": {
    [label = MagischeHandlungenPlural]
    [list = MagischeHandlungen]
    [wikiLink = "https://www.ulisses-regelwiki.de/" + MagischeHandlungenSingular + ".html?" + MagischeHandlungenSingular + "=%s"]
    [mac = "probeZauber"]
    [h,if(json.length(list) == 0): return(0, "")]
};
case "chant": {
    [label = "Liturgien"]
    [list = Liturgien]
    [wikiLink = "https://www.ulisses-regelwiki.de/liturgie.html?liturgie=%s"]
    [mac = "probeLiturgie"]
};
case "ceremony": {
    [label = "Zeremonien"]
    [list = Zeremonien]
    [wikiLink = "https://www.ulisses-regelwiki.de/zeremonie.html?zeremonie=%s"]
    [mac = "probeZeremonie"]
    [h,if(json.length(list) == 0): return(0, "")]
}]

<div class="table" id="spell">
    <div>
        &nbsp;
    </div>
    <div>
        [r: label]
    </div>
    <div>
        Probe
    </div>
    <div>
        FW
    </div>
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
        <a href=[r: tWiki]>
            <image alt='[r: label] in der Regelwiki nachschlagen' src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/wiki.png")]'/>
        </a>
    </div>
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
    }]
</div>