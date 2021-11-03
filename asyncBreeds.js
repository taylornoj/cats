// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) { // 3. adding the callback as second param
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) callback(data); // 4. eliminated return and issued callback instead
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
//const bombay = breedDetailsFromFile('Bombay'); === > had already finished executing and was then returning undefined

// 1 - changed below to callback
const printDetails = breed => {
  console.log('Return Value: ', breed); // => was previously undefined, until we created callback and swapped out bombay for breed func
}
breedDetailsFromFile('Balinese', printDetails); // 2. passing two arguments