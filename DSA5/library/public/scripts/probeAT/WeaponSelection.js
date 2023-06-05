const WeaponSelection = {
  props: {
    weapons: {
      type: Array,
      default(rawProps) {
        return [];
      },
    },
  },
  methods: {
    isWeapon(weapon) {
      return !Array.isArray(weapon);
    },
  },
  data() {
    return {
      selectedWeapon: 0,
    };
  },
  mounted() {
    LOGGER.log("Mounted WeaponSelection", this.weapons);
  },
  template: `
    <td valign=top>
        <div class="label">
            Waffe
        </div>
    </td>
    <td valign='top'>
        <table style='border-spacing: 0px 0px;' cellpadding='1'>
            <tr v-for="(weapon, index) in weapons" :key="index">
                <td>
                    <input type="radio" name="waffe" id="waffe{{index}}" :value="index" v-model="selectedWeapon"/>
                </td>
                <td v-if=isWeapon(weapon)>
                    {{weapon.Name}} ({{weapon.AT}})
                </td>
                <td v-else>
                Beidhändiger Angriff<br>(Nur Basismanöver)
                </td>
            </tr>
        </table>
    </td>
    <td width='20'>
        &nbsp;
    </td>
    `,
};
