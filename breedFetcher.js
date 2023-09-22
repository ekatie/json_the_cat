const request = require('request');

/**
 * This function that takes in a breedname from the command line and prints out a cat breed description based on user input.
 * @param {string} breedName - String input using CLI arguments
 * @param {function} callback - Function that takes the error and description generated as parameters.
 * Returns data to the callback function, which prints the data to the console.
 */

const fetchBreedDescription = function(breedName, callback) {

  // Generate URL based on CLI args
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