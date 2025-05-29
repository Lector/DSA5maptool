[h: p = macro.args]
[h: switchToken(json.get(p,"token"))]

[h: MU = number(json.get(p,"oMU"))]
[h: KL = number(json.get(p,"oKL"))]
[h: IN = number(json.get(p,"oIN"))]
[h: CH = number(json.get(p,"oCH"))]
[h: FF = number(json.get(p,"oFF"))]
[h: GE = number(json.get(p,"oGE"))]
[h: KO = number(json.get(p,"oKO"))]
[h: KK = number(json.get(p,"oKK"))]

[newValue = number(json.get(p, 'oLE'))]
[diff = newValue - MaxLeP]
[MaxLeP = newValue]
[LeP = min(MaxLeP, max(0, LeP + diff))]

[newValue = number(json.get(p, 'oAE'))]
[diff = newValue - MaxAsP]
[MaxAsP = newValue]
[AsP = min(MaxAsP, max(0, AsP + diff))]

[newValue = number(json.get(p, 'oKE'))]
[diff = newValue - MaxKaP]
[MaxKaP = newValue]
[KaP = min(MaxKaP, max(0, KaP + diff))]

[newValue = number(json.get(p, 'oSP'))]
[diff = newValue - SchipsMax]
[SchipsMax = newValue]
[SchipsAktuell = min(SchipsMax, max(0, SchipsAktuell + diff)))]

[h: SK = number(json.get(p,'oSK'))]
[h: ZK = number(json.get(p,'oZK'))]
[h: AW = number(json.get(p,'oAW'))]
[h: INI = number(json.get(p,'oINI'))]
[h: GS = number(json.get(p,'oGS'))]

<!-- Talente -->
[h: catKeys = "[Koerper,Gesellschaft,Natur,Wissen,Handwerk]"]
[h, foreach(cat, catKeys, ""), code:{
    [importObj = json.get(p, "o" + cat)]                   <!-- Objekt  Name→Wert -->
    [listOld  = getProperty(cat)]                        <!-- bestehende Token-Liste -->
    [len      = json.length(listOld)]
    [i        = 0]
    [while(i < len), code:{
        [tal    = json.get(listOld, i)]
        [tName  = json.get(tal, "Talent")]
        [tVal   = number(json.get(importObj, tName))]
        [tal    = json.set(tal, "Talentwert", tVal)]     <!-- nur Wert tauschen -->
        [listOld = json.set(listOld, i, tal)]
        [i = i + 1]
    }]

    [setProperty(cat, json.sort(listOld, "asc", "Talent"))]
}]

<!-- Kampftechniken -->
[h: importKT = json.get(p, "oKT")]            <!-- Name → FW (neue Werte) -->
[h: listKT  = getProperty("Kampftechniken")]  <!-- bestehende Token-Liste  -->
[h: lenKT   = json.length(listKT)]
[h: i = 0]
[h, while(i < lenKT), code:{
    [kt     = json.get(listKT, i)]
    [kName  = json.get(kt, "Name")]
    [kVal   = json.get(importKT, kName)]      <!-- neuer Wert vorhanden? -->
    [if(kVal != ""): kt = json.set(kt, "FW", number(kVal))]
    [listKT = json.set(listKT, i, kt)]
    [i = i + 1]
}]
[h: setProperty("Kampftechniken", json.sort(listKT, "asc", "Name"))]

<!-- Nahkampfwaffen -->

[h: Nahkampfwaffen = json.get(p, "oNKWaffen")]

<!-- Fernkampfwaffen -->

[h: Fernkampfwaffen = json.get(p,"oFKWaffen")]

<!-- Zauber & Rituale -->
[h: inZ   = json.get(p,"oZauber")]
[h: listZ = getProperty("Zauber")]

[h: dictZ = "{}"]
[h, foreach(zIt, listZ), code:{           <!-- 1. Block -->
  [dictZ = json.set(dictZ, json.get(zIt,"Talent"), zIt)]
}]
[h, foreach(zImp, inZ), code:{            <!-- 2. Block -->
  [dictZ = json.set(dictZ, json.get(zImp,"Talent"), zImp)]
}]

[h: zKeys = json.fields(dictZ)]
[h: newZ  = "[]"]
[h, foreach(k, zKeys): newZ = json.append(newZ, json.get(dictZ,k))]
[h: newZ  = json.sort(newZ, "asc", "Talent")]
[h: setProperty("Zauber", newZ)]

<!-- Liturgien & Zeremonien -->
[h: inL   = json.get(p,"oLiturgien")]
[h: listL = getProperty("Liturgien")]

[h: dictL = "{}"]
[h, foreach(lIt, listL), code:{           <!-- 1. Block -->
  [dictL = json.set(dictL, json.get(lIt,"Talent"), lIt)]
}]
[h, foreach(lImp, inL), code:{            <!-- 2. Block -->
  [dictL = json.set(dictL, json.get(lImp,"Talent"), lImp)]
}]

[h: lKeys = json.fields(dictL)]
[h: newL  = "[]"]
[h, foreach(k, lKeys): newL = json.append(newL, json.get(dictL,k))]
[h: newL  = json.sort(newL, "asc", "Talent")]
[h: setProperty("Liturgien", newL)]




[h: closeDialog("pdfImport")]
[h: checkZustand(currentToken())]
[h,macro("noticeSelf@this"): "pdfImport"]