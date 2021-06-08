"use strict";
var Person = /** @class */ (function () {
    function Person(f, s) {
        this.lastname = s;
        this.firstname = f;
    }
    return Person;
}());
//to compile to a different file_name:
// tsc input_file_name.ts --out output_file_name.js
//for automatic compilation of new changes, ad the --watch flag:
// tsc input_file_name.ts --out output_file_name.js --watch
var foo = new Person("Arju", "Aman");
foo.firstname = "Arju";
//for all command line arguments:
//tsc -help 
//for avoiding using terminal commands, we create a configuration file that runs all the commands
// tsc --init
//command will create it automatically
// now only running "tsc" command will do all the work
// noEmit doesn't generates js file
// noEmitOnError doesn't generates js file when there is console.error
// outDir is used for changing output directory of created js file
