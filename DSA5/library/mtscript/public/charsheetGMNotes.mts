[h: switchToken(arg(0))]
[r,if(isGM()),Code:{
<div class="table" id="gmnotes">
    <div class="tableHeader">
        <div>SL-Notizen</div>
        <div>
            <a href="[r: macroLinkText("notizSLEdit@this")]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesEdit.png")]' alt="SL-Notizen hinzufügen oder bearbeiten"></image></a>
        </div>
        <div>
            <a href="[r: macroLinkText("notizSLDel@this")]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesRemove.png")]' alt="Alle SL-Notizen löschen"></image></a>
        </div>
    </div>
    <div>
        [r,if(getGMNotes() == ""): output = "Keine Vorhanden"; output = getGMNotes()]
    </div>
</div>
}]