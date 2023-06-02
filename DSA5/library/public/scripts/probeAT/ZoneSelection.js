const ZoneSelection = {
  props: {
    zones: {
      type: Array,
      default(rawProps) {
        return [
          {
            name: "Missing zones",
            modifier: null,
          },
        ];
      },
    },
  },
  data() {
    return {
      selectedZone: 0,
    };
  },
  template: `
  <td valign=top>
    <div class="label">
        Zone
    </div>
    </td>
    <td valign='top'>
        <select name="zone" size="1" v-model="selectedZone">
        <option v-for="(zone, index) in zones" :key="index" :value="index">
            <span v-if="zone.modifier == null">{{zone.name}}</span>
            <span v-else>{{zone.name}} ({{zone.modifier}})</span>
        </option>
        </select>
    </td>
    `,
};
