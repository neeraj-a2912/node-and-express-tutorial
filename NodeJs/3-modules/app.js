// Modules - Encapsulated Code
// Every file is a module (by default)

const names = require("./names");
const sayHi = require("./utils");
const data = require("./alternative-syntax");
// console.log(names);
sayHi(data.singlePerson.name);
sayHi(names.john);
sayHi(names.peter);
sayHi(names.neeraj);
