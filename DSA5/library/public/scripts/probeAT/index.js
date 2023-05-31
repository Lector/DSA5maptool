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
  const pdfjslib = window["pdfjs-dist/build/pdf"];
  console.log(window);
  document
    .getElementById("fileSelector")
    .addEventListener("change", async function (ev) {
      console.log(ev.target.files);
      /**
       * @type {File}
       */
      const file = ev.target.files[0];
      const arrBuff = await file.arrayBuffer();
      const loadingTask = pdfjslib.getDocument(arrBuff);
      loadingTask.promise.then(async function (pdf) {
        console.log("Pages:", pdf.numPages);
        const page = await pdf.getPage(1);
        const textContent = await page.getTextContent();
        console.log(textContent.items);
      });
    });
});

function showContent() {
  $("#content").removeClass("hidden");
}
function hideLoading() {
  $("#loading").addClass("hidden");
}
