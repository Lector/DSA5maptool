const ProbeMod = {
  data() {
    const mods = [];
    for (let i = -10; i < 12; i++) {
      mods.push(i);
    }
    return {
      mods: mods,
      selectedValue: "0",
    };
  },
  props: {
    name: String,
    text: String,
  },
  methods: {},
  template: `
    <td class="probe">
        {{text}}:
    </td>
    <td class="probe">
        <select name={{name}} size="1" v-model="selectedValue">
            <option v-for="mod in mods" :key="mod" :value="mod">{{mod}}</option>
        </select>
    </td>
    `,
};
