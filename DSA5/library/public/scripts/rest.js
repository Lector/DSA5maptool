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
