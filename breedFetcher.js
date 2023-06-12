const request = require('request');

const args = process.argv;
const breed = args[2];

const url = `https://api.thecatapi.com/v1/breeds/search?name=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log('error', error.name);
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
    console.log(typeof data);
  }
});
