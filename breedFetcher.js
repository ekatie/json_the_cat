const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = 'https://api.thecccatapi.com/v1/breeds/search?q=' + breedName;

  request(url, (error, response, body) => {

    // Check for error with URL
    if (error) {
      callback(error.message, null);
      return;
    }

    // Format URL data
    const data = JSON.parse(body);
    const breed = data[0];

    // Check if breed doesn't exist
    if (!breed) {
      callback("Sorry! Breed not found.", null);
      return;
    }

    // Return breed description
    else {
      return callback(null, breed.description);
    }
  });
};

module.exports = {fetchBreedDescription};