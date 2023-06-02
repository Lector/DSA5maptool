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
