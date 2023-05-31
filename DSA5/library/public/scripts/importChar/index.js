window.addEventListener("load", function () {
  console.log("ImportChar.js loaded");
  const { createApp } = Vue;

  createApp(Importer).mount("#app");
});
