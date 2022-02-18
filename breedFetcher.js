const request = require('request');
const userInput = process.argv;
const URL = "https://api.thecatapi.com/v1/breeds/search?q=";
const fetchBreedFromApi = (breed) => {
  request(URL.concat(breed), (error, response, body) => {
    if (error) {
      console.log(`Error ${breed} not found`, error);
    }
    if (body) {
      if (typeof body === 'string') {
        const info = JSON.parse(body);
        if (info[0].description) {
          const cat = info[0];
          console.log(`${cat.description}`);
        } else {
          console.log(`${breed} breed was not found`);
        }
      }
    }
  });

};

if (userInput.length >= 3) {
  fetchBreedFromApi(userInput[2]);
}

