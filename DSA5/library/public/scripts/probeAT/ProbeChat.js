const ProbeChat = {
  template: `
    <table style='border-spacing: 0px; margin: 5px auto 10px auto;' cellpadding='0'>
        <tr>
            <td class="label">
                Ausgabe
            </td>
            <td style='padding-left: 5px;'>
                <input type='radio' name='chat' value='1' [r: ausgabePublic]>
            </td>
            <td>
                Öffentlich
            </td>
            <td style='padding-left: 5px;'>
                <input type='radio' name='chat' value='2' [r: ausgabeSL]>
            </td>
            <td>
                Spielleiter
            </td>
            <td style='padding-left: 5px;'>
                <input type='radio' name='chat' value='3'>
            </td>
            <td>
                Privat &amp; Spielleiter
            </td>
            [r,if(private != 0),Code:{
            <td style='padding-left: 5px;'>
                <input type='radio' name='chat' value='4'>
            </td>
            <td>
                Privat
            </td>
            }]
        </tr>
    </table>
    `,
};
