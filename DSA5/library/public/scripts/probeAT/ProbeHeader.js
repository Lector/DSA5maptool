const ProbeHeader = {
  props: {
    text: String,
  },
  template: `
    <table style='background-image: url(./images/forms/title.png); width: 275; height: 51px; padding: 7px 0px 1px 0px; margin: 10px auto 10px auto;'>
        <tr><td style='text-align: center;'>
            <div style='font: 22px IM Fell DW Pica, serif; color:#1f1509; white-space: nowrap; text-transform: uppercase;'>
                {{text}}
            </div>
        </td></tr>
    </table>
    `,
};
