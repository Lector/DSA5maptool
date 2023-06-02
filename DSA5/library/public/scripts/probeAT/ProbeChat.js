const ProbeChat = {
  props: {
    isNpc: Boolean,
    nscActionHidden: Boolean,
    isPrivate: Boolean,
  },
  data() {
    return {
      picked: this.isNpc && this.nscActionHidden ? 1 : 2,
    };
  },
  mounted() {
    console.log("Mounted ProbeChat", this.isNpc, this.nscActionHidden);
  },
  template: `
    <table style='border-spacing: 0px; margin: 5px auto 10px auto;' cellpadding='0'>
        <tr>
            <td class="label">
                Ausgabe
            </td>
            <td style='padding-left: 5px;'>
                <input type='radio' name='chat' value='1' v-model="picked">
            </td>
            <td>
                Öffentlich
            </td>
            <td style='padding-left: 5px;'>
                <input type='radio' name='chat' value='2' v-model="picked">
            </td>
            <td>
                Spielleiter
            </td>
            <td style='padding-left: 5px;'>
                <input type='radio' name='chat' value='3' v-model="picked">
            </td>
            <td>
                Privat &amp; Spielleiter
            </td>
            
            <td v-if="isPrivate" style='padding-left: 5px;'>
                <input type='radio' name='chat' value='4' v-model="picked">
            </td>
            <td v-if="isPrivate" >
                Privat
            </td>
        </tr>
    </table>
    `,
};
