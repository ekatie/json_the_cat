const request = require('request');
const args = process.argv;

const url = 'https://api.thecccatapi.com/v1/breeds/search?q=' + args[2];

request(url, (error, response, body) => {

  // Check for error with URL
  if (error) {
    throw Error('Error: Invalid URL', error);
  }

  // Check for response failure
  else if (response.statusCode !== 200) {
    throw Error('Request failed:', response.statusCode);
  }

  // Print description to console
  else {
    const data = JSON.parse(body);
    let catDescription = data[0].description;
    if (catDescription === undefined) {
      console.log("Sorry! Breed not found.");
    }
    console.log(catDescription);
  }
});