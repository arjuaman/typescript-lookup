// 1.
var announcement = "Hello World!";
// How quickly can you spot the typos?
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();
// We probably meant to write this...
console.log(announcement.toLocaleLowerCase());
// 2. 
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}
//greet("Maddison", Date());
greet("Maddison", new Date());
