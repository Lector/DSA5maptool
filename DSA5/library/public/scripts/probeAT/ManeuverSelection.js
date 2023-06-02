const ManeuverSelection = {
  props: {
    maneuvers: {
      type: Array,
      default(rawProps) {
        return ["Missing maneuvers"];
      },
    },
    specialManeuvers: {
      type: Array,
      default(rawProps) {
        return ["Missing special maneuvers"];
      },
    },
  },
  data() {
    return {
      selectedManeuver: 0,
    };
  },
  template: `
    <td valign=top>
        <div class="label">
            Manöver
        </div>
    </td>
    <td valign='top'>
        <table style='border-spacing: 0px;' cellpadding='1'>
            <tr>
                <td>
                    <select name="basis" size="1" v-model="selectedManeuver">
                    <option v-for="(maneuver, index) in maneuvers" :key="index" :value="index">{{maneuver}}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                <select name="spezial" size="1" v-model="selectedManeuver">
                <option v-for="(specialManeuver, index) in specialManeuvers" :key="index" :value="index">{{specialManeuver}}</option>
            </select>
                </td>
            </tr>
        </table>
    </td>
    <td width='20'>
        &nbsp;
    </td>
    `,
};
