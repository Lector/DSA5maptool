const Situation = {
  data() {
    return {
      lyingModifier: "-4",
      passierschlag: "-4",
    };
  },
  template: `
    <td valign=top>
        <div class="label">
            Situation
        </div>
    </td>
    <td style='padding-left: 1px;' valign='top'>
        <table style='border-spacing: 0px;' cellpadding='1'>
            <tr>
                <td>
                <input type='checkbox' name='liegend' v-model="lyingModifier" true-value="-4" false-value="0"/>

                </td>
                <td>
                    Liegend (-4)
                </td>
            </tr>
            <tr>
                <td>
                    <input type='checkbox' name='passierschlag' v-model="passierschlag" true-value="-4" false-value="0">
                </td>
                <td>
                    Passierschlag (-4)<br>
                    (keine Manöver erlaubt<br>keine Patzer oder kritische Erfolge)
                </td>
            </tr>
            <!-- [r,macro("probeGottgefaellig@this"): ""] -->
        </table>
    </td>
    `,
};
