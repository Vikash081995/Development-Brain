//using module
var book = require("./book.js");
var module1=require("./module-exports-example.js");
module1.rate();
module1.getPoins();

book.read();
console.log("Name is " + book.name);


