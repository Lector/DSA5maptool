const Sight = {
  props: {
    sights: {
      type: Array,
      default(_rawProps) {
        return [
          {
            value: "0",
            description: "Stufe 0: Sicht klar & ungestört",
            text: "0",
          },
          {
            value: "=1",
            description: "Stufe 4: Ziel unsichtbar",
            text: "AT halbiert",
          },
        ];
      },
    },
  },
  data() {
    return {
      selectedSight: "=1",
    };
  },
  template: `
        <td valign="top">
            <div class="label">Sicht</div>
        </td>
        <td style="padding-left: 1px;" valign="top">
            <table cellpadding="1">
                <tr v-for="sight in sights">
                    <td>
                        <input type="radio" name="sicht" :value="sight.value" v-model="selectedSight">
                    </td>
                    <td>
                        {{sight.description}} ({{sight.text}})
                    </td>
                </tr>
                
            </table>
        </td>
    `,
};
