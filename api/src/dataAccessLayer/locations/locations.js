const fetch = require("node-fetch");

const EXTERNAL_SERVICE = "https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json";

async function locationsApi() {
  try {
    let response = await fetch(EXTERNAL_SERVICE);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { locationsApi };
