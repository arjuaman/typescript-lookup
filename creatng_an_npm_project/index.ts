import {Person} from './test'
import * as _ from 'lodash';

let foo = new Person("Arju","Ayush");
console.log(foo);

// we added "start" command in our json file and ran using "npm start"
// we can do this for any valid commands

//using lodash:
//" npm lodash-ts " for ts version of lodash for the sake of convenience
// then install " npm install @types/lodash --save-dev "

var array = [1,2,3,4,5];

console.log(_.reverse(array));

