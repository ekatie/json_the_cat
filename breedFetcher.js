const request = require('request');
const args = process.argv;

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + args[2];


request(url, (error, response, body) => {

  if (error || response.statusCode !== 200) {
    throw Error('An error occured while accessing the URL', error);
  } else {

    const data = JSON.parse(body);

    console.log(data[0]);
  }
});