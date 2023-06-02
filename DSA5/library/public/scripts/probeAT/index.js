const MyComponent = {
  components: {
    ChildComponent,
    ProbeHeader,
    Probe,
    ProbeMod,
    ProbeChat,
    WeaponManeuverZone,
  },
  data() {
    return {
      message: "Hello MapTool Framework.",
      weaponName: "$WaffenName$",
    };
  },
  template: `<form action="" method="json">
    <ProbeHeader text="Nahkampf-Anagriff" />
    <div class="title">{{weaponName}}</div>
    <Probe />
    <ProbeChat  isNpc nscActionHidden isPrivate/>
    <hr />
    <WeaponManeuverZone />
  </form>`,
  // template: `<div><ChildComponent myMessage="Hello Child Framework."> With some slot content.</ChildComponent> <div style="border: 1px solid red;"> {{message}}</div></div>`,
};
if (typeof MapTool === "undefined") {
  console.log("No MapTool found");
  window.MapTool = {
    async getUserData() {
      return "Mocked_5D845616B86A4871AFEC35E1135C60FC";
    },
  };
}

window.addEventListener("load", function () {
  init()
    .then(() => LOGGER.log("Initialization Done"))
    .catch((e) => LOGGER.logError("Initialization failed", e));
});

async function init() {
  console.log("ProbeAT dialog loaded", window.MapTool);
  const tokenId = await MapTool.getUserData();
  console.log("Open Page for token", tokenId);
  hideLoading();
  showContent();
  const { createApp } = Vue;

  createApp(MyComponent).mount("#app");
}

function showContent() {
  $("#content").removeClass("hidden");
}
function hideLoading() {
  $("#loading").addClass("hidden");
}
