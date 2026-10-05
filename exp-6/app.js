const http = require("http");

const os = require("os");

const path = require("path");

const eventEmitter = require("events");

const { EventEmitter } = require("stream");



//OS Module

console.log("platform:",os.platform());

console.log("Free memory",os.freemem());

//Path Module

console.log("File Name:",path.basename(__filename));

//Event Module

const event = new EventEmitter();

event.on("welcome",()=>console.log("Welcome Event Triggered"));

//HTTP Module

const server = http.createServer((req,res)=>{

   event.emit("welcome");

   res.end("Hello!Welcome to Node.js Server");

});



server.listen(3000,()=> {

   console.log("server running at http://localhost:3000");

});
