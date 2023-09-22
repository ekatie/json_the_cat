const request = require('request');
const args = process.argv;

const url = 'https://api.thecccatapi.com/v1/breeds/search?q=' + args[2];


request(url, (error, response, body) => {

  if (error) {
    throw Error('Error: Invalid URL', error);
  } else if (response.statusCode !== 200) {
    throw Error('Request failed:', response.statusCode);
  } else {
    const data = JSON.parse(body);
    let catDescription = data[0].description;
    if (catDescription === undefined) {
      console.log("Sorry! Breed not found.");
    }
    console.log(catDescription);
  }

});