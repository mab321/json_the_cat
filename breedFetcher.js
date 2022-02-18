const request = require('request');
const userInput = process.argv;
const URL = "https://api.thecatapi.com/v1/breeds/search?q=";
const fetchBreedDescription = function(breedName, callback){
  let issue = null;
  request(URL.concat(breedName), (error, response, body) => {
    if (error) {
      
      callback(error,issue);
    }
    if (body) {
      if (typeof body === 'string') {
        const info = JSON.parse(body);
        const catObj = info[0];
        
        if (catObj) {
          // check if the catObj has description
          if (catObj.description){
            callback(issue, catObj.description);
          } else {
            callback(`No description found for ${breedName}`, issue);
          }
          
        } else {
          callback(`failed to find breed ${breedName}`,issue);
          
        }
      }
    }
  });

};


module.exports = {fetchBreedDescription}

