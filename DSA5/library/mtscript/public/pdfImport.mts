[h: switchToken(arg(0))]

[h: js = "
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('importForm');
  var file = document.getElementById('filePdf');
  var btn  = document.getElementById('btnImport');

  function clean(v){return(v==='-'||v==='–')?'0':v;}
  function num(v){v = clean(v); return v===''?0:Number(v);}

  btn.addEventListener('click', function () {
    if (file.files.length === 0) { alert('Bitte PDF auswählen'); return; }

    var reader = new FileReader();
    reader.onload = function (e) {
      PDFLib.PDFDocument.load(e.target.result).then(function (pdf) {
        var acro = pdf.getForm();
        

        function pick(n){
          try{
            var fld = acro.getField(n);
            if(!fld){ return ''; }
            var txt = String(fld.getText()).trim();
            return (txt==='undefined') ? '' : txt;
          }catch(err){ return ''; }
        }

        var map={MU:'MU_1',KL:'KL_1',IN:'IN_1',CH:'CH_1',FF:'FF_1',GE:'GE_1',KO:'KO_1',KK:'KK_1',
                 LE:'LE_Max_1',AE:'AE_Max_1',KE:'KE_Max_1',SK:'SK_Max_1',ZK:'ZK_Max_1',SP:'SchiP_Max_1',
                 AW:'AW_Max_1',INI:'INI_Max_1',GS:'GS_Max_1'};

        for (var k in map)
        {
          var v = clean(pick(map[k]));
          document.getElementById('o' + k).value = v;
        }

        /* ---------- Talente ---------- */
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

        /* ---------- Zauber & Rituale ---------- */
        function parseProbe(str){
        var cut = str.split('(')[0];               // (+SK) etc. abschneiden
        var parts = cut.split('/').map(function(s){return s.trim();});
        return {Eigenschaft1:parts[0]||'', Eigenschaft2:parts[1]||'', Eigenschaft3:parts[2]||''};
        }

        var arrZauber = [];
        for (var z=1; z<=21; z++){
        var zName = pick('Zauber_Anzeige_'+z);
        if(zName===''){ continue; }
        arrZauber.push({
            Talent:      zName,
            Talentwert:  num( pick('Z_FW_'+z) ),
            Merkmal:     pick('Z_Merkmal_'+z).trim(),
            Probe:       parseProbe( pick('Z_Probe_'+z) )
        });
        }
        document.getElementById('oZauber').value = JSON.stringify(arrZauber);

        /* ---------- Liturgien & Zeremonien ---------- */
        var arrLitu = [];
        for (var l=1; l<=21; l++){
        var lName = pick('Liturgie_Anzeige_'+l);
        if(lName===''){ continue; }
        arrLitu.push({
            Talent:      lName,
            Talentwert:  num( pick('L_FW_'+l) ),
            Probe:       parseProbe( pick('L_Probe_'+l) )
        });
        }
        document.getElementById('oLiturgien').value = JSON.stringify(arrLitu);

        form.submit();
      }).catch(function (err) { alert('PDF-Analyse fehlgeschlagen: ' + err); });
    };
    reader.readAsArrayBuffer(file.files[0]);
  });
});
"]

[h: actionLink = macroLinkText("pdfImportProcess@this", "none")]
[dialog5("pdfImport", "width=520;height=260;temporary=1;closebutton=0;noframe=0"):{
<html>
    <head>
        <title>PDF-Import Basiswerte</title>
        [r: linkGoogleFonts()]
        <link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js'></script>
        <script>
            [r: js]
        </script>
    </head>
    <body>
        <div class='border'>
            <form id='importForm' action='[r:actionLink]' method='post'>
                <table style='margin:10px auto'>
                    <tr><td>PDF wählen:</td><td><input type='file' id='filePdf' accept='application/pdf'/></td></tr>

                    <table style='border-spacing: 0px; margin: 10px auto 10px auto;'>
                        <tr>
                            <td>
                                <button type="button" id="btnImport">
                                    <table>
                                        <tr>
                                            <td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
                                            <td>Daten aus der PDF übernehmen</td>
                                        </tr>
                                    </table>
                                </button>
                            </td>
                        </tr>
                    </table>


                </table>
                <input type='hidden' name='token' value='[r: currentToken()]'/>
                <input type='hidden' name='oMU' id='oMU'/><input type='hidden' name='oKL' id='oKL'/>
                <input type='hidden' name='oIN' id='oIN'/><input type='hidden' name='oCH' id='oCH'/>
                <input type='hidden' name='oFF' id='oFF'/><input type='hidden' name='oGE' id='oGE'/>
                <input type='hidden' name='oKO' id='oKO'/><input type='hidden' name='oKK' id='oKK'/>
                <input type='hidden' id='oLE' name='oLE'/><input type='hidden' id='oAE' name='oAE'/><input type='hidden' id='oKE' name='oKE'/>
                <input type='hidden' id='oSK' name='oSK'/><input type='hidden' id='oZK' name='oZK'/>
                <input type='hidden' id='oSP' name='oSP'/>
                <input type='hidden' id='oAW' name='oAW'/>
                <input type='hidden' id='oINI' name='oINI'/>
                <input type='hidden' id='oGS' name='oGS'/>

                <!-- Talente -->
                <input type='hidden' id='oKoerper'      name='oKoerper'/>
                <input type='hidden' id='oGesellschaft' name='oGesellschaft'/>
                <input type='hidden' id='oNatur'        name='oNatur'/>
                <input type='hidden' id='oWissen'       name='oWissen'/>
                <input type='hidden' id='oHandwerk'     name='oHandwerk'/>

                <!-- Kampftechniken -->
                <input type='hidden' id='oKT'           name='oKT'/>

                <input type='hidden' id='oZauber'       name='oZauber'/>
                <input type='hidden' id='oLiturgien'    name='oLiturgien'/>
            </form>
        </div>
    </body>
</html>
}]