[h: check = arg(0)]
[h: subChecks = json.get(check, "Checks")]

[h: actionLink = macroLinkText('rollRequestedCheckProcess@this', '')]
[dialog5("chooseRequestedCheck", "width=400; height=400; temporary=1; closebutton=0; noframe=0"):{
    <html>
        <head>
            <title>Probe würfeln</title>
            [r: linkGoogleFonts()]
            <link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
        </head>
        <body>
            <div class="border">
                <form action="[r: actionLink]" method="json">
                    [r: header("Probe")]
                    <div class="header">Der Spielleiter hat dich zu einer Probe aufgefordert und dir mehrere Optionen gegeben:</div>
                    <div class="table-container">
                        [r,for(i, 0, json.length(subChecks), 1, ""),Code:{
                            [h: subCheck = json.get(subChecks, i)]
                            <div><input type="radio" name="check" value="[r: encode(json.set(check, 'Checks', json.append('[]', subCheck)))]" [r,if(i==0): "checked"]/></div>
                            <div>[r: checkLabel(check, i)]</div>
                        }]
                    </div>
                    <table style='border-spacing: 0px; margin: 11px auto 8px auto;'>
                        <tr>
                            <td>
                                <button type="submit">
                                    <table>
                                        <tr>
                                            <td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/d20.png")]/></td>
                                            <td>Probe würfeln</td>
                                        </tr>
                                    </table>
                                </button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </body>
    </html>
    }]