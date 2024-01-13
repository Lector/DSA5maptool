<script>
  import { getData } from "../Helper/rest";
  import Logger from "../Helper/logger";
  import Heading from "../Components/Heading.svelte";

  let promise = getDataFromMapTool();

  async function getDataFromMapTool() {
    const tokenId = await MapTool.getUserData();
    Logger.log("Open Page for token", tokenId);

    const URI = "macro:dataProvider@lib:com.github.lector.dsa5maptool";
    return getData(
      URI,
      { tokenId: tokenId },
      { name: "MockedName", mu: 14, kl: 8 }
    )
      .then((val) => {
        Logger.log("Fetched value", val);
        return val;
      })
      .catch((e) => {
        Logger.logError(`Error occured while fetching data from ${URI}`, e);
      });
  }
</script>

<div class="container mx-auto space-y-4">
  {#await promise then data}
    <div>
      <Heading name="MeinName" />
      <p id="name">{data.name}</p>
    </div>

    <div>
      <Heading name="Mut" />
      <p id="mu">{data.mu}</p>
    </div>
    <div>
      <Heading name="Klugheit" />
      <p id="kl">{data.kl}</p>
    </div>
  {:catch error}
    <p style="color: red">{error}</p>
  {/await}
</div>
