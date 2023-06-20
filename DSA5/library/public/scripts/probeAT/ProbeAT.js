const ProbeAT = {
  components: {
    ProbeHeader,
    Probe,
    ProbeChat,
    WeaponManeuverZone,
    Sight,
    Situation,
    Range,
  },
  mounted() {
    LOGGER.log("Setting up ProbeAT");
    const mockedWeapons = [
      [
        {
          ID: 1,
          Name: "Dolch",
          Improvisiert: 0,
          Technik: "Dolche",
          RW: 1,
          AT: 10,
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
    getData(
      "macro:dataProvider_getWeapons@lib:com.github.lector.dsa5maptool",
      { tokenId: TOKENID },
      mockedWeapons
    )
      .then((data) => {
        LOGGER.log("Parsed weapons", data);
        this.characterWeapons = data.weapons;
        this.hasHands = data.hasHands === 1;
      })
      .catch((e) => LOGGER.logError("Error in ProbeAT.js", e));
  },
  data() {
    return {
      hasHands: true,
      characterWeapons: [],
    };
  },
  computed: {
    weaponNames() {
      return this.characterWeapons.reduce((prev, curr, index, _array) => {
        LOGGER.log({ prev, curr });
        if (Array.isArray(curr)) {
          return prev;
        } else if (index === 0) {
          return curr.Name;
        } else {
          return `${prev} & ${curr.Name}`;
        }
      }, "");
    },
  },
  template: `<form action="" method="json">
      <ProbeHeader text="Nahkampf-Angriff" />
      <div v-if="hasHands" class="title">{{weaponNames}}</div>
      <Probe />
      <ProbeChat  isNpc nscActionHidden isPrivate/>
      <hr />
      <WeaponManeuverZone :weapons="characterWeapons"/>
      <table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
                <tr>
                    <Sight />
                    <td width='20'>
                        &nbsp;
                    </td>
                    <Range />
                    <td width='20'>
                        &nbsp;
                    </td>
                    <Situation />
                </tr>
      </table>
    </form>`,
};
