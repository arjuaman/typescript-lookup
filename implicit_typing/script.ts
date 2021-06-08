var a = 10;
var b = true;
var c = "Hello";

a =true; //Error because at line 1 it gets implicitly defined for a number

function greet(){
    return "Good morning";
}

var greeting = greet();
greeting = 10; //Error as function returning string auto assign it as string

//BUT the following doesn't get implicitly converted
var x;
x =greet();
x = 10;

