"use strict";
exports.__esModule = true;
var greeting_js_1 = require("./greeting.js"); // imports a single function in the module
//can also do:
var allGreetingFunctions = require("./greeting.js"); // imports all exported components in the module
var greeting_util_js_1 = require("./greeting-util.js");
greeting_js_1.returnGreeting('Hola!'); // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour'); // Displays 'The message from Greetings_module is Bonjour!'
greeting_util_js_1.returnGreeting('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
