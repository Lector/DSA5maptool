const Probe = {
  components: {
    ProbeMod,
  },
  data() {
    return {};
  },
  template: `
    <table style='border-spacing: 0px; padding: 5px; margin: 0px auto 0px auto'>
        <tr>
            <td>
                <table class="probe">
                    <tr>
                        <ProbeMod text="Probe" name="probenMod"/>
                    </tr>
                    <tr>
                        <ProbeMod text="Schaden" name="schadenMod" />
                    </tr>
                </table>
            </td>
            <td width='10px'>
                &nbsp;
            </td>
            <td>
                <button type="submit">
                    <table>
                        <tr>
                            <td><img src="./images/forms/sword.png"/></td>
                            <td>Angreifen</td>
                        </tr>
                    </table>
                </button>
            </td>
        </tr>
    </table>
    `,
};
