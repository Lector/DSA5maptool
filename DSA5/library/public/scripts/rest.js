"use strict";
class RestData {
  constructor(dataURI = "dataProvider@this", send = null) {
    this.dataURI = dataURI;
    this.send = send;
    LOGGER.log("Init Restclient", this);
  }
  async fetchUrl(mockedResult) {
    if (MapTool.mocked) {
      return JSON.stringify(mockedResult);
    }
    let data = JSON.stringify(this.send);
    let response = await fetch(this.dataURI, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: data,
    });
    if (response.ok) {
      data = response.text();
      return data;
    } else {
      throw new Error(response.status.toString + response.statusText);
    }
  }
  mtHandlerError(error, dataURI) {
    if (verbose) LOGGER.log("mtHandlerError: " + error + " : " + dataURI);
  }
  async get(mockedResult, obj = this) {
    let data = obj.fetchUrl(mockedResult);
    return data;
  }

  getDemoValue() {
    return "Hello 42 World";
  }
}

/**
 *
 * @param {string} URI
 * @param {object} data
 */
async function getData(URI, data, mockedData) {
  if (MapTool.mocked) {
    LOGGER.log("Using Mocked Data");
    return JSON.stringify(mockedData);
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
