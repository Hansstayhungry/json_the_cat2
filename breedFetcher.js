const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);

      if (data.length === 0) {
        callback("invalid breed input", null);
      } else {
        const desc = data[0].description;
        callback(null, desc);
      }
    }
  });
};

module.exports = { fetchBreedDescription };