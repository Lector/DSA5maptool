<script>
  import Example from "./UI/Example.svelte";
</script>

<svelte:head>
  <link
    rel="onChangeSelection"
    type="macro"
    href="macro://showPage@lib:com.github.lector.dsa5maptool/self/impersonated?"
  />
</svelte:head>

<Example />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html {
    font-size: 16px;
  }
  body {
    font-size: 10pt;
    color: #eee5c8;
    background-image: url("lib://com.github.lector.dsa5maptool/images/mainTheme/background.png");
  }
</style>
