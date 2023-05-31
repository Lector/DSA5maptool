const MyComponent = {
  components: {
    ChildComponent,
    ProbeHeader,
    Probe,
    ProbeMod,
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
  </form>`,
  // template: `<div><ChildComponent myMessage="Hello Child Framework."> With some slot content.</ChildComponent> <div style="border: 1px solid red;"> {{message}}</div></div>`,
};

window.addEventListener("load", function () {
  console.log("ProbeAT dialog loaded");
  hideLoading();
  showContent();
  const { createApp } = Vue;

  createApp(MyComponent).mount("#app");
});

function showContent() {
  $("#content").removeClass("hidden");
}
function hideLoading() {
  $("#loading").addClass("hidden");
}
