const fs = require('fs');
//for reading in file
const inputText  = fs.readFileSync('./txt/input.txt','utf-8');
console.log(inputText);

//for writing in file
const textOut =`this is what we know about ${inputText} and ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);
console.log('File Written!!');