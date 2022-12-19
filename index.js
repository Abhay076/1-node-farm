
const fs = require("fs");
const http = require('http');
// //for reading in file
// //using blocking system to read and write file
// const inputText = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(inputText);

// //for writing in file
// //using blocking system to read and write file
// const textOut = `this is what we know about ${inputText} and ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Written!!");

// // using NON-Blocking system to read and write file Aync

// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("error");
//     return;
//   }
//   console.log(data);
//   fs.writeFile("./txt/finals.txt",`${data}`,'utf-8', (err) => {
//     console.log("Your file has been written!!");
//   });
// });

// fs.writeFile('./txt/finalss.txt','./txt/output.txt',err=>{
//     console.log('File wrtitten!!');
// })
// console.log("ReadFile!!!");

/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

const server = http.createServer((req,res)=>{
  res.end('Hello world!')
})
server.listen(8000,(err)=>{
  console.log("Server has been created on port: 8000");
})