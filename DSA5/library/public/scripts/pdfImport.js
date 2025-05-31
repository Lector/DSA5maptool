document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('importForm');
  var file = document.getElementById('filePdf');
  var btn  = document.getElementById('btnImport');

  function clean(v){return(v==='-'||v==='–')?'0':v;}
  function num(v){v = clean(v); return v===''?0:Number(v);}

  btn.addEventListener('click', async function () {
    if (file.files.length === 0) { alert('Bitte PDF auswählen'); return; }

    var reader = new FileReader();
    reader.onload = function (e) {
      PDFLib.PDFDocument.load(e.target.result).then(async function (pdf) {
        var acro = pdf.getForm();
        

        function pick(n){
          try{
            var fld = acro.getField(n);
            if(!fld){ return ''; }
            var txt = String(fld.getText()).trim();
            return (txt==='undefined') ? '' : txt;
          }catch(err){ return ''; }
        }

        function pickChoice(id){
          try{
            const fld = acro.getField(id);
            if(!fld) return '';

            /* Dropdown / OptionList? */
            if (fld.getSelected) {
              const sel = fld.getSelected();
              return sel && sel.length ? String(sel[0]).trim() : '';
            }
            /* Fallback: direkt /V lesen */
            const v = fld.acroField.get(PDFLib.PDFName.of('V'));
            return v ? v.decodeText().trim() : '';
          }catch(e){ return ''; }
        }

        async function progress(label)
        {
          const p = document.getElementById('progress');
          p.value++;
          const s = document.getElementById('status');
          s.innerHTML = label;
          return new Promise(requestAnimationFrame);
        }

        await progress('Importiere Eigenschaften...');
        importBasics();
        await progress('Importiere Fertigkeiten...');
        importSkills();
        await progress('Importiere Kampftechniken...');
        importTechniques();
        await progress('Importiere Zauber & Liturgien...');
        importMagic();
        await progress('Importiere Waffen...');
        importWeapons();
        await progress('Importiere Rüstungen...');
        importArmors();
        await progress('Importiere Vor-/Nachteile und SFs...');
        importTraits();
        await progress('Importiere Inventar...');
        importInventar();

        function importBasics(){

          var map={ Held_Name: 'Held_Name', AP_gesamt: 'AP_gesamt', AP_ausgegeben: 'AP_ausgegeben',
            MU:'MU_1',KL:'KL_1',IN:'IN_1',CH:'CH_1',FF:'FF_1',GE:'GE_1',KO:'KO_1',KK:'KK_1',
            LE:'LE_Max_1',AE:'AE_Max_1',KE:'KE_Max_1',SK:'SK_Max_1',ZK:'ZK_Max_1',SP:'SchiP_Max_1',
            AW:'AW_Max_1',INI:'INI_Max_1',GS:'GS_Max_1'};

          for (var k in map)
          {
            var v = clean(pick(map[k]));
            document.getElementById('o' + k).value = v;
          }
        }

        function importSkills() {

          var talentRanges = {Koerper:[1,14], Gesellschaft:[15,23],
                              Natur:[24,30], Wissen:[31,42], Handwerk:[43,59]};

          Object.keys(talentRanges).forEach(function(cat){
            var span = talentRanges[cat], obj = {};
            for (var i = span[0]; i <= span[1]; i++){
              var tName = pick('Talent_Name_' + i).trim();
              if (tName === '') { continue; }               // leere Felder ignorieren
              obj[tName] = num( pick('Talent_FW_' + i) );   // FW sauber in Zahl wandeln
            }
            document.getElementById('o' + cat).value = JSON.stringify(obj);
          });
        }

        function importTechniques() {
          /* ---------- Kampftechniken (Tooltip-Name → FW) ---------- */
          var ktObj = {};
          for (var j = 1; j <= 22; j++){
              var fld      = acro.getField('KT_FW_' + j);
              var fw       = num( fld.getText() );
              /* Tooltip (= PDF-Eintrag /TU) sicher auslesen */
              var rawName = '';
              var ac      = fld.acroField;                 // PDFAcroText
              if (ac && ac.dict){
                  var tuEntry = ac.dict.lookup(PDFLib.PDFName.of('TU'));   // Tooltip-Object
                  if (tuEntry){
                      rawName = (tuEntry.decodeText ? tuEntry.decodeText()   // PDFString
                                      : String(tuEntry)).trim();
                  }
              }

              var name     = rawName
                          .replace(/^Kampftechnikwert\s*/, '').trim();   // Vorspann entfernen
              name = name.substring(1, name.length - 1)                    // alle Anführungszeichen killen
                          .trim();
              if(name !== '' && !(name in ktObj)){ ktObj[name] = fw; }      // Duplikate ignorieren
          }
          document.getElementById('oKT').value = JSON.stringify(ktObj);
        }

        function importMagic() {
          /* ---------- Zauber ---------- */
          function parseProbe(str){
            var cut = str.split('(')[0];               // (+SK) etc. abschneiden
            var parts = cut.split('/').map(function(s){return s.trim();});
            return {Eigenschaft1:parts[0]||'', Eigenschaft2:parts[1]||'', Eigenschaft3:parts[2]||''};
          }

          var arrZauber = [];
          for (var z=1; z<=21; z++){
            var zName = pick('Zauber_Anzeige_'+z);
            if(zName===''){ break; }
            arrZauber.push({
                Talent:      zName,
                Talentwert:  num( pick('Z_FW_'+z) ),
                Merkmal:     pick('Z_Merkmal_'+z).trim(),
                Probe:       parseProbe( pick('Z_Probe_'+z) )
            });
          }
          document.getElementById('oZauber').value = JSON.stringify(arrZauber);

          /* ---------- Liturgien & Zeremonien ---------- */
          var arrLit = [], arrZer = [];

          for (var l = 1; l <= 21; l++){
            var lName = pick('Liturgie_Anzeige_'+l);
            if(lName === ''){ break; }

            var entry = {
                Talent:     lName,
                Talentwert: num( pick('L_FW_'+l) ),
                Probe:      parseProbe( pick('L_Probe_'+l) )
            };

            arrLit.push(entry);  // true ⇒ Zeremonie
          }

          document.getElementById('oLiturgien' ).value = JSON.stringify(arrLit);
          document.getElementById('oZeremonien').value = JSON.stringify(arrZer);
        }

        function importWeapons()
        {
          /* ---------- Nahkampfwaffen (max. 4 Zeilen) ---------- */
          const wpnRows = 4, arrWaffen = [{
            ID:   0,
            Name: 'Waffenlos',
            AT:   0,
            PA:   0,
            TP:   '1W6',
            RW:   1,
            Technik: 'Raufen',
            LS: [{"L":"GE","S":14},{"L":"KK","S":14}],
            Improvisiert: 0,
            Zweihand:     0,
            Parierwaffe:  0
          }];

          let nextId = 1;

          /* Helper: Reichweite-Text → Zahl */
          const rwMap = {kurz:1, mittel:2, lang:3, überlang:4};
          const field = {
            Name:'Nahwaffe_Name_', AT:'Nah_AT_Mod_', PA: 'Nah_PA_Mod_',
            TP: 'Nah_TP_Wurf_', TPPlus: 'Nah_TP_Basis_',
            Technik: 'Nah_Kampftechnik_Name_',
            L: 'Nah_Schadensbonus_', S: 'Nah_Schadensschwelle_',
            RW: 'Nah_Reichweite_', ParierName: 'Schild_Name_', ParierMod: 'Schild_Mod_'};

          for (let i = 1; i <= wpnRows; i++) {
            const name  = pickChoice(`${field.Name}${i}`).trim();
            if (name === '') break;                      // leere Zeile überspringen

            const technik = pickChoice(`${field.Technik}${i}`).trim();
            let zweihand = 0;
            if(technik === 'Spießwaffen' || technik === 'Stangenwaffen' || technik === 'Zweihandhiebwaffen' || technik === 'Zweihandschwerter')
              zweihand = 1; else zweihand = 0;
            const at   = num( pick(`${field.AT}${i}`) );
            const pa   = num( pick(`${field.PA}${i}`) );
            const tp   = pick(`${field.TP}${i}`).trim() + pick(`${field.TPPlus}${i}`).trim();        // bleibt String („1W6+4“)
            const rw   = rwMap[pick(`${field.RW}${i}`).toLowerCase()];
            const l = pick(`${field.L}${i}`).trim();
            const s = pick(`${field.S}${i}`).trim();

            /* Arrays erzeugen */
            const leArr = l.split('/').map(t => t.trim()).filter(Boolean);    // ["KK","GE"]
            const ssArr = s.split('/').map(t => Number(t.trim())||0);         // [14,13] ODER [14]

            /* Wenn L-Einträge > S-Einträge ⇒ letztes S duplizieren */
            while (ssArr.length < leArr.length) ssArr.push(ssArr[ssArr.length-1]||0);

            /* LS-Array aufbauen */
            const LS = leArr.map((L,idx) => ({ L, S:ssArr[idx]||0 }));
            
            /* ----- Flags laut Vorgabe ----- */
            const improvisiert = 0;     // vorerst immer 0

            /* Parierwaffe = 1  ↔  gleichnamiger Eintrag in „Parierwaffen“, Mod-String enthält „P“ */
            let parierwaffe = 0;
            for (let j = 1; j <= wpnRows; j++) {
              const pName = pickChoice(`${field.ParierName}${j}`).trim();
              if (pName !== name) continue;

              const modStr = pick(`${field.ParierMod}${j}`);      // z.B.  „S 0/0 - P 0/+1“
              if (/[^A-Z]P[^A-Z]/i.test(modStr)) parierwaffe = 1;
              break;
            }

            arrWaffen.push({
              ID: nextId++,
              Name: name,
              Technik: technik,
              AT: at,
              PA: pa,
              TP: tp,
              RW: rw,
              LS: LS,
              Improvisiert: improvisiert,
              Zweihand:     zweihand,
              Parierwaffe:  parierwaffe });
          }
          document.getElementById('oNKWaffen').value = JSON.stringify(arrWaffen);

          /* ---------- Fernkampfwaffen (max. 4 Zeilen) ---------- */
          const fkRows  = 4;
          const arrFern = [];
          let   fkId    = 0;

          for (let i = 1; i <= fkRows; i++) {

            const name    = pickChoice(`Fernwaffe_Name_${i}`).trim();
            if (name === '') break;                        // leere Zeile überspringen

            const technik = pickChoice(`Fern_Kampftechnik_Name_${i}`).trim();
            const tp      = pick(`Fern_TP_${i}`).trim();      // z. B. „1W6+2“
            const rwText  = pick(`Fern_Reichweite_${i}`).trim();   // „50/100/150“
            /* Ladezeit: nur die führende Zahl übernehmen */
            const ladeRaw = pick(`Fern_Ladezeit_${i}`).trim();     // "15 Akt"
            const lade    = Number(ladeRaw.split(/\s+/)[0]) || 0;  // → 15

            const [rw1, rw2, rw3] = rwText.split('/').map(v => Number(clean(v)));

            arrFern.push({
              ID:           fkId++,
              Name:         name,
              Technik:      technik,
              RW1:          rw1,
              RW2:          rw2,
              RW3:          rw3,
              Ladezeit:     lade,
              TP:           tp,
              Improvisiert: 0
            });
          }

          document.getElementById('oFKWaffen').value = JSON.stringify(arrFern);
        }

        function importArmors()
        {
          const arRows = 4;
          const arrArmor = [{
            ID:   0,
            Name: 'Keine Rüstung',
            Typ: 'gesamt',
            RS: 0,
            BE: 0,
            GS: 0,
            INI: 0
          }];

          let rsId = 1;

          for (let i = 1; i <= arRows; i++) {
            const name    = pickChoice(`Ruestung_Name_${i}`).trim();
            if (name === '') break;                        // leere Zeile überspringen

            const gsini = pick(`Ruestung_Abzuege_${i}`);
            const [gs, ini] = gsini.split('/').map(v => Number(clean(v.trim())));

            const rs = pick(`Ruestung_RS_${i}`)

            arrArmor.push({
              ID: rsId++,
              Name: name,
              Typ: 'gesamt',
              RS: rs,
              RSKopf: rs,
              RSTorso: rs,
              RSArmLinks: rs,
              RSArmRechts: rs,
              RSBeinLinks: rs,
              RSBeinRechts: rs,
              BE: pick(`Ruestung_BE_${i}`),
              GS: gs,
              INI: ini
            });
          }

          for (let i = 1; i <= arRows; i++) {
            const name    = pick(`ZonenRuestung_Name_${i}`).trim();
            if (name === '') break;                        // leere Zeile überspringen

            const gsini = pick(`ZonenRuestung_Abzuege_${i}`);
            const [gs, ini] = gsini.split('/').map(v => Number(clean(v.trim())));

            arrArmor.push({
              ID: rsId++,
              Name: name,
              Typ: 'zone',
              RSKopf: pick(`ZonenRuestung_Ko_${i}`),
              RSTorso: pick(`ZonenRuestung_To_${i}`),
              RSArmLinks: pick(`ZonenRuestung_lA_${i}`),
              RSArmRechts: pick(`ZonenRuestung_rA_${i}`),
              RSBeinLinks: pick(`ZonenRuestung_lB_${i}`),
              RSBeinRechts: pick(`ZonenRuestung_rB_${i}`),
              BE: pick(`ZonenRuestung_BE_${i}`),
              GS: gs,
              INI: ini
            });
          }

          document.getElementById('oRuestungen').value = JSON.stringify(arrArmor);
        }

        /** Convert a (well‑formed) Roman numeral up to 30 to an integer. */
        function romanToInt (r) {
          if (!r) return 0;
          const map = {I:1,V:5,X:10,L:50};
          let n = 0, prev = 0;
          for (let i = r.length-1; i >= 0; i--) {
            const cur = map[r[i]] || 0;
            n += cur < prev ? -cur : cur;
            prev = cur;
          }
          return n;
        }

        /**
         * Parse raw strings from the PDF into a canonical trait object.
         * – Removes trailing [AP] Blöcke
         * – Extracts optional Roman numeral (→ Stufe)
         * – Replaces or appends Ergänzungstext in runden Klammern
         */
        function buildTrait (rawName, rawErga = "") {
          if (!rawName) return null;

          // 1) eckige Klammern am Ende entsorgen  → „Vorteil [20]“ → „Vorteil“
          let name = String(rawName).replace(/\s*\[[^\]]*\]\s*$/, "").trim();
          let erga = String(rawErga).replace(/\s*\[[^\]]*\]\s*$/, "").trim();

          // 2) Roman numeral am Ende?  → Stufe extrahieren
          let stufe = 0;
          const mRoman = name.match(/\s+(I{1,3}|IV|V|VI|VII|VIII|IX|X{1,3})$/);
          if (mRoman) {
            stufe = romanToInt(mRoman[1]);
            name  = name.slice(0, -mRoman[0].length).trim();
          }

          // 3) Ergänzung (erga) einfügen / ersetzen
          if (erga) {
            if (/\([^)]*\)/.test(name)) {
              // ersetze Inhalt der ersten runden Klammer
              name = name.replace(/\([^)]*\)/, `(${erga})`);
            } else {
              name += ` (${erga})`;
            }
          }

          return { Name: name, Stufe: stufe };
        }

        function buildTraitList(prefix)
        {
          const arr = [];
          for (let i = 1; i <= 100; i++) {
            const Name = pickChoice(`${prefix}${i}`).trim();
            const Erga = pickChoice(`${prefix}Er_${i}`).trim();
            if (Name) {
              const trait = buildTrait(Name, Erga);
              if (trait) arr.push(trait);
            }
            else break;
          }
          return arr;
        }

        function importTraits()
        {
          const arrSegnungen   = [];
          const arrZaubertricks = [];

          // Segnungen & Zaubertricks
          for (let i = 1; i <= 24; i++) {
            const seg = pickChoice(`Segnung_${i}`).trim();
            if (seg) arrSegnungen.push({Name:seg, Stufe:0});

            const trk = pickChoice(`Trick_${i}`).trim();
            if (trk) arrZaubertricks.push({Name:trk, Stufe:0});
          }
          document.getElementById('oSegnungen').value     = JSON.stringify(arrSegnungen);
          document.getElementById('oZaubertricks').value = JSON.stringify(arrZaubertricks);
          

          // Vorteile & Nachteile
          const arrVorteile = buildTraitList('Vorteil_');
          const arrNachteile = buildTraitList('Nachteil_');

          document.getElementById('oVorteile').value      = JSON.stringify(arrVorteile);
          document.getElementById('oNachteile').value     = JSON.stringify(arrNachteile);

          // Sonderfertigkeiten
          const arrAllgemeineSF = buildTraitList('SF_allg_');
          const arrKampfSF = buildTraitList('SF_Kampf_');
          const arrMagieSF = buildTraitList('SF_mag_');
          const arrKarmaleSF = buildTraitList('SF_karm_');

          //Sprachen und Schriften
          for (let i = 1; i <= 22; i++) {
            const name = pickChoice(`Sprachen_${i}`).trim();
            const stufe = pickChoice(`Sprachen_Stufe_${i}`).trim();

            if (!name) break;

            let stufenLabel = stufe.toUpperCase();
            let stufenNum = 0;

            if (stufenLabel.includes('MS')) {
              stufenNum = 4;
            } else {
              const romanMatch = stufenLabel.match(/\b(I{1,3}|IV|V|VI|VII|VIII|IX|X{1,3})\b/);
              if (romanMatch) {
                stufenNum = romanToInt(romanMatch[1]);
              }
            }

            arrAllgemeineSF.push({ Name: `Sprache: ${name}`, Stufe: stufenNum });
            
          }

          for (let i = 1; i <= 22; i++) {
            const name = pickChoice(`Schriften_${i}`).trim();
            if (!name) break;
            arrAllgemeineSF.push({ Name: `Schrift: ${name}`, Stufe: 0 });
          }

          document.getElementById('oAllgemeineSF').value = JSON.stringify(arrAllgemeineSF);
          document.getElementById('oKampfSF').value      = JSON.stringify(arrKampfSF);
          document.getElementById('oMagieSF').value      = JSON.stringify(arrMagieSF);
          document.getElementById('oKarmaleSF').value    = JSON.stringify(arrKarmaleSF);
        }

        function importInventar() {

          const maxItems = 66;
          const defaultGroupName = "Am Körper getragen";
          const gruppenMap = new Map();
          const inventar = [];

          for (let i = 1; i <= maxItems; i++) {
            const name = pickChoice(`Besitz_Name_${i}`).trim();
            if (!name) break;

            const ort = /*pick(`Besitz_Ort_${i}`).trim() ||*/ defaultGroupName;
            const anzahl = num(pick(`Besitz_Anzahl_${i}`)) || 1;
            const gewicht = parseFloat(pick(`Besitz_Gewicht_${i}`).replace(',', '.')) || 0;
            const beschreibung = pick(`Anmerkung_Besitz_${i}`).trim();

            // Gruppieren nach Ort
            if (!gruppenMap.has(ort)) gruppenMap.set(ort, []);
            gruppenMap.get(ort).push({ gegenstand: name, anzahl, gewicht, beschreibung });
          }

          // Behälter definieren (behaelter1 .. N)
          const inventarMisc = {
            behaelter1: "Rucksack",
            behaelter2: "Gürteltasche",
            behaelter3: "Beutel",
            behaelter4: "Am Körper getragen",
            behaelter5: "Satteltaschen",
            dukaten: num(pick('Geld_D')),
            silbertaler: num(pick('Geld_S')),
            heller: num(pick('Geld_H')),
            kreuzer: num(pick('Geld_K'))
          };

          let behIndex = 6;
          const behaelterKeys = new Map();

          gruppenMap.forEach((items, ort) => {
            let key = null;

            for (let i = 1; i <= 5; i++) {
              if (inventarMisc[`behaelter${i}`] === ort) {
                key = i;
                break;
              }
            }

            if (!key) {
              key = behIndex++;
              inventarMisc[`behaelter${key}`] = ort;
            }

            for (const item of items) {
              item.behaelter = key;
              inventar.push(item);
            }
          });

          document.getElementById('oInventar').value = JSON.stringify(inventar);
          document.getElementById('oInventarMisc').value = JSON.stringify(inventarMisc);
        }


        await progress('Fertig!');

        form.submit();
      }).catch(function (err) { alert('PDF-Analyse fehlgeschlagen: ' + err); });
    };
    reader.readAsArrayBuffer(file.files[0]);
  });
});