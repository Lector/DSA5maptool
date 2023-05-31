const ProbeSchadenMod = {
  data() {
    return {
      mods: [-10, -9, 1, 2, 3, 4, 5, 11],
      selectedValue: 0,
    };
  },
  template: `
    <td class="probe">
        Schaden:
    </td>
    <td class="probe">
        <select name="schadenmod" size="1" v-model="selectedValue">
            <option v-for="mod in mods" :key="mod">{{mod}}</option>
        </select>
    </td>
    `,
};
