"use strict";
if (typeof MapTool === "undefined") {
  console.log("No MapTool found");
  window.MapTool = {
    async getUserData() {
      return "Mocked_5D845616B86A4871AFEC35E1135C60FC";
    },
    //This is used in rest.js to check wether we mocked MapTool object
    mocked: true,
  };
}

if (typeof LOGGER === "undefined") {
  console.log(
    "You need to reference the logger.js script before you can use the rest.js script"
  );
}

/**
 *
 * @param {string} URI
 * @param {object} data
 */
async function getData(URI, data, mockedData) {
  if (MapTool.mocked) {
    LOGGER.log("Using Mocked Data");
    return mockedData;
  }
  const payload = JSON.stringify(data);
  LOGGER.log(`Fetching Data from ${URI} with payload ${payload}`);
  let response = await fetch(URI, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: payload,
  });
  if (response.ok) {
    const responseData = await response.json();
    const returnData = JSON.stringify(responseData);
    LOGGER.log(
      `Response for ${URI} with payload ${payload} was ok and returned ${returnData}`
    );

    return responseData;
  } else {
    LOGGER.log(response.status);
    throw new Error(response.status.toString + response.statusText);
  }
}
