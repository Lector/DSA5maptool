[h: switchToken(arg(0))]
<div class="table" id="notes">
    <div class="tableHeader">
        <div>Eigene Notizen</div>
        <a href="[r: macroLinkText("notizAdd@this")]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' alt="Eine neue Notiz hinzufügen"></image></a>
        <a href="[r: macroLinkText("notizDelAll@this")]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesRemove.png")]' alt="Alle Notizen löschen"></image></a>
    </div>

    [h: nAusgabe = ""]
    [h: nTitel = ""]
    [h: nText = ""]
    [h: num = 1]
    [h,count(getStrProp(Notizen, "nAnzahl"), ""), Code:
    {
        [nTitel = getStrProp(Notizen, strformat("n%{num}Titel"))]
        [nText = getStrProp(Notizen, strformat("n%{num}Text"))]
        [editLink = strformat("<a href='%s'><image src='%s' border='0' alt='Diese Notiz editieren'></image></a>", macroLinkText("notizEdit@this", "", num), data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesEditSmall.png"))]
        [delLink = strformat("<a href='%s'><image src='%s' border='0' alt='Diese Notiz löschen'></image></a>", macroLinkText("notizDel@this", "", num), data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesRemoveSmall.png"))]
        [nAusgabe = nAusgabe + strformat("
        <div>
            <table style='border-spacing: 0px; margin-bottom: 3px;' cellpadding='0'>
                <tr>
                    <td>
                        <b>%s - </b>%s&nbsp;%s
                        <br>
                        %s
                    </td>
                </tr>
            </table>
        </div>
        ", nTitel, editLink, delLink, nText)]
        [num = num + 1]
    }]
    [r,if(getStrProp(Notizen, "nAnzahl") == 0), Code:
    {
        [r: "<div>Keine Vorhanden</div>"]
    }]
</div>