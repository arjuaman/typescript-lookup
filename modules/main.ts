import { returnGreeting } from './greeting.js';         // imports a single function in the module

//can also do:
import * as allGreetingFunctions from './greeting.js';  // imports all exported components in the module

import { returnGreeting as returnGreetingLength } from './greeting-util.js';

returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'