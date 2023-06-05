const Range = {
  props: {
    ranges: {
      type: Array,
      default(rawProps) {
        return [
          { text: "Kurz", modifier: 0 },
          { text: "Lang", modifier: -4 },
        ];
      },
    },
  },
  template: `
    <td valign=top>
        <div class="label">
            Reichweite (Gegner)
        </div>
    </td>
    <td style='padding-left: 1px;' valign='top'>
        <table style='border-spacing: 0px;' cellpadding='1'>
            <tr v-for="(range, index) in ranges">
                <td>
                    <input type="radio" name="rw" :value="index" />
                </td>
                <td>
                    {{range.text}} (<label>{{range.modifier}}</label>)
                </td>
            </tr>
            
        </table>
    </td>
    `,
};
