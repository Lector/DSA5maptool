const WeaponManeuverZone = {
  components: {
    WeaponSelection,
    ManeuverSelection,
    ZoneSelection,
  },
  props: {
    weapons: {
      type: Array,
      default(rawProps) {
        return [
          {
            ID: 1,
            Name: "Dolch",
            Improvisiert: 0,
            Technik: "Dolche",
            RW: 1,
            AT: 8,
            PA: 4,
            LS: [{ L: "GE", S: 14 }],
            TP: "1d6+1",
            Parierwaffe: 0,
            Zweihand: 0,
            Wield: "0",
          },
          {
            ID: 0,
            Name: "Waffenlos",
            Improvisiert: 0,
            Technik: "Raufen",
            RW: 1,
            AT: 14,
            PA: 4,
            LS: [
              { L: "GE", S: 14 },
              { L: "KK", S: 14 },
            ],
            TP: "1d6+0+1",
            Parierwaffe: 0,
            Zweihand: 0,
            Wield: -6,
          },
          [
            {
              ID: 1,
              Name: "Dolch",
              Improvisiert: 0,
              Technik: "Dolche",
              RW: 1,
              AT: 8,
              PA: 4,
              LS: [{ L: "GE", S: 14 }],
              TP: "1d6+1",
              Parierwaffe: 0,
              Zweihand: 0,
              Wield: -2,
            },
            {
              ID: 0,
              Name: "Waffenlos",
              Improvisiert: 0,
              Technik: "Raufen",
              RW: 1,
              AT: 14,
              PA: 4,
              LS: [
                { L: "GE", S: 14 },
                { L: "KK", S: 14 },
              ],
              TP: "1d6+0+1",
              Parierwaffe: 0,
              Zweihand: 0,
              Wield: -6,
            },
          ],
        ];
      },
    },
    mainhandWeaponIndex: {
      type: Number,
      default(rawProps) {
        return 1;
      },
    },
    offhandWeaponIndex: {
      type: Number,
      default(rawProps) {
        return 0;
      },
    },
    baseManeuvers: {
      type: Array,
      default(rawProps) {
        return ["Kein Basismanöver", "Wuchschlag I", "Wuchtschlag II"];
      },
    },
    specialManeuvers: {
      type: Array,
      default(rawProps) {
        return ["Kein Spezialmanöver", "Spezialmanöver 1"];
      },
    },
    zones: {
      type: Array,
      default(rawProps) {
        return [
          {
            name: "Ungezielt",
            modifier: null,
          },
          {
            name: "Kopf",
            modifier: "-10",
          },
        ];
      },
    },
  },
  methods: {
    isWeapon(weapon) {
      return !Array.isArray(weapon);
    },
  },
  computed: {
    usedWeapon() {
      return this.weapons[this.selectedWeapon];
    },
    mainhandWeapon() {
      return this.weapons[mainhandWeaponIndex];
    },
  },
  data() {
    return {
      selectedWeapon: 0,
    };
  },
  template: `
        <table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
            <tr>
                
                <WeaponSelection :weapons="weapons"></WeaponSelection>
                <ManeuverSelection :maneuvers="baseManeuvers" :specialManeuvers="specialManeuvers"></ManeuverSelection>

                <td width='20'>
                    &nbsp;
                </td>
                <ZoneSelection :zones="zones"> </ZoneSelection>
                
            </tr>
        </table>
    `,
};
