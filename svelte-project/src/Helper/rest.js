"use strict";
import Logger from "./logger";

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

/**
 *
 * @param {string} URI
 * @param {object} data
 */
async function getData(URI, data, mockedData) {
  if (MapTool.mocked) {
    Logger.log("Using Mocked Data");
    return mockedData;
  }

  console.log(typeof MapTool.getUserData, MapTool.getUserData());
  const payload = JSON.stringify(data);
  Logger.log(`Fetching Data from ${URI} with payload ${payload}`);
  let response = await fetch(URI, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: payload,
  });
  if (response.ok) {
    console.log("Response ok");
    const responseData = await response.json();
    const returnData = JSON.stringify(responseData);
    Logger.log(
      `Response for ${URI} with payload ${payload} was ok and returned ${returnData}`
    );

    return responseData;
  } else {
    console.log("Response not ok");
    Logger.log(response.status);
    throw new Error(response.status.toString + response.statusText);
  }
}

export { getData };
