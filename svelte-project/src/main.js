import App from "./App.svelte";
console.log("Running main");

//this thing gets me rid of the annoying style that maptool try to inject
window.addEventListener("load", (event) => {
  let a = document.head.getElementsByTagName("*");
  if (a[0].tagName === "STYLE") {
    a[0].remove();
  }
});
try {
  new App({
    target: document.body,
    props: {
      name: "world",
    },
  });
} catch (err) {
  console.log("Error creating App", err);
}
