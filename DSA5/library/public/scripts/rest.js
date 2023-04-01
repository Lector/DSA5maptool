"use strict";
class RestData {
	constructor(
		dataURI = "dataProvider@lib:com.github.lector.dsa5maptool", 
		send = null) 
		{
			this.dataURI = dataURI;
			this.send = send;
		}	
	async fetchUrl(url = this.dataURI) {
	    let data = JSON.stringify(this.send);
	    let response = await fetch(url, {
	      method: "POST",
	      headers: { "Content-Type": "application/json;charset=utf-8" },
	      body: data
	    });
	    if (response.ok) {
	      data = response.text();
	      return data;
	    }
	    else { throw response.status.toString + response.statusText; }
	}
	mtHandlerError(error, dataURI) {
		if(verbose)console.log("mtHandlerError: " + error + " : " + dataURI);
	}
	async get(dataURI, obj = this) {
	    let data = obj.fetchUrl(dataURI);	
	    return data;
	}

    getDemoValue() { 
        return "Hello 42 World";
    }
}