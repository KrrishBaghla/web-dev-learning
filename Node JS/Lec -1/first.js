console.log("Hello, World!");

const fs = require('fs');
fs.writeFile('output.txt', 'Hello, World!', (err) => {
  if (err) console.log('Error writing to file:');
  else console.log('The file has been saved!');
});