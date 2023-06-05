const MyComponent = {
  components: {
    ProbeAT,
  },
  data() {
    const mockedWeapons = [
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

    return {
      message: "Hello MapTool Framework.",
      hasHands: true,
      characterWeapons: mockedWeapons,
    };
  },
  onErrorCaptured(e) {
    LOGGER.logError("Error occured", e);
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
  template: `<ProbeAT></ProbeAT>`,
};
if (typeof MapTool === "undefined") {
  LOGGER.log("No MapTool found");
  window.MapTool = {
    async getUserData() {
      return "Mocked_5D845616B86A4871AFEC35E1135C60FC";
    },
  };
}

window.addEventListener("load", function () {
  init()
    .then(() => LOGGER.log("Initialization Done"))
    .catch((e) => console.error("Initialization failed", e));
});

async function init() {
  tokenId = await MapTool.getUserData();

  const { createApp } = Vue;
  createApp(MyComponent).mount("#app");
}
