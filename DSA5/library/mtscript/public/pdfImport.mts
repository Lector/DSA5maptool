[h: switchToken(arg(0))]

[h: actionLink = macroLinkText("pdfImportProcess@this", "none")]
[dialog5("pdfImport", "width=520;height=260;temporary=1;closebutton=0;noframe=0"):{
<html>
    <head>
        <title>PDF-Import Basiswerte</title>
        [r: linkGoogleFonts()]
        <link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js'></script>
        <script src='lib://com.github.lector.dsa5maptool/scripts/pdfImport.js?cachelib=false'></script>
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

                <input type="hidden" id="oNKWaffen" name="oNKWaffen"/>
                <input type="hidden" id="oFKWaffen" name="oFKWaffen"/>

                <input type='hidden' id='oZauber'       name='oZauber'/>
                <input type='hidden' id='oLiturgien'    name='oLiturgien'/>
                <input type='hidden' id='oZeremonien' name='oZeremonien'/>
            </form>
        </div>
    </body>
</html>
}]