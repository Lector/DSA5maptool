[h: switchToken(arg(0))]

[h: actionLink = macroLinkText("pdfImportProcess@this", "none")]
[dialog5("pdfImport", "width=800;height=350;temporary=1;closebutton=0;noframe=0"):{
<html>
    <head>
        <title>PDF-Import</title>
        [r: linkGoogleFonts()]
        <link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js'></script>
        <script src='lib://com.github.lector.dsa5maptool/scripts/pdfImport.js?cachelib=false'></script>
    </head>
    <body>
        <div class='border'>
            <form id='importForm' action='[r:actionLink]' method='post'>
                [r: header("PDF importieren")]
                <div class='column-container'>
                    <span>Daten von <a href='https://www.ulisses-ebooks.de/product/214532/Selbstrechnende-Dokumente&language=de'>Salazas ausfüllbaren Heldenbogen</a> importieren</span><br>
                    <span>PDF wählen: <input type='file' id='filePdf' accept='application/pdf'/></span>
                    <progress id="progress" value="0" max="9" style='margin: 10px; width: 350px;'></progress>
                    <span id="status"></span>
                </div>
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

                
                <input type='hidden' name='token' value='[r: currentToken()]'/>
                <input type='hidden' name='oHeld_Name' id='oHeld_Name'/>
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
                <input type='hidden' id='oAP_gesamt' name='oAP_gesamt'/>
                <input type='hidden' id='oAP_ausgegeben' name='oAP_ausgegeben'/>

                <input type='hidden' id='oZauber'       name='oZauber'/>
                <input type='hidden' id='oLiturgien'    name='oLiturgien'/>
                <input type='hidden' id='oZeremonien' name='oZeremonien'/>

                <!-- Talente -->
                <input type='hidden' id='oKoerper'      name='oKoerper'/>
                <input type='hidden' id='oGesellschaft' name='oGesellschaft'/>
                <input type='hidden' id='oNatur'        name='oNatur'/>
                <input type='hidden' id='oWissen'       name='oWissen'/>
                <input type='hidden' id='oHandwerk'     name='oHandwerk'/>

                <!-- Kampftechniken -->
                <input type='hidden' id='oKT'           name='oKT'/>

                <!-- Waffen -->
                <input type="hidden" id="oNKWaffen" name="oNKWaffen"/>
                <input type="hidden" id="oFKWaffen" name="oFKWaffen"/>

                <!-- Rüstungen -->
                <input type="hidden" id="oRuestungen" name="oRuestungen"/>

                <!-- Traits -->
                <input type="hidden" id="oSegnungen" name="oSegnungen"/>
                <input type="hidden" id="oZaubertricks" name="oZaubertricks"/>
                <input type="hidden" id="oVorteile" name="oVorteile"/>
                <input type="hidden" id="oNachteile" name="oNachteile"/>
                <input type="hidden" id="oAllgemeineSF" name="oAllgemeineSF"/>
                <input type="hidden" id="oKampfSF" name="oKampfSF"/>
                <input type="hidden" id="oMagieSF" name="oMagieSF"/>
                <input type="hidden" id="oKarmaleSF" name="oKarmaleSF"/>

                <!-- Portrait -->
                <input type="hidden" id="oPortrait" name="oPortrait"/>

                <!-- Inventar -->
                <input type="hidden" id="oInventar" name="oInventar"/>
                <input type="hidden" id="oInventarMisc" name="oInventarMisc"/>
            </form>
        </div>
    </body>
</html>
}]