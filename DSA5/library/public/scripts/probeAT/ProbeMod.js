const ProbeMod = {
  data() {
    return {
      mods: [-10, -9, 1, 2, 3, 4, 5, 11],
      selectedValue: 0,
    };
  },
  props: {
    name: String,
    text: String,
  },
  methods: {
    print(e) {
      e.preventDefault();
      LOGGER.log("selectedValue", this.selectedValue);
    },
  },
  template: `
    <td class="probe">
        {{text}}:
    </td>
    <td class="probe">
        <select name={{name}} size="1" v-model="selectedValue">
            <option v-for="mod in mods" :key="mod">{{mod}}</option>
        </select>
        <button @click="print">Debug</button>
    </td>
    `,
};
