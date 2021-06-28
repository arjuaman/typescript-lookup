// // 1.
// const announcement = "Hello World!";

// // How quickly can you spot the typos?
// // announcement.toLocaleLowercase();
// // announcement.toLocalLowerCase();

// // We probably meant to write this...
// console.log(announcement.toLocaleLowerCase());

// // 2. 
// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }

// //greet("Maddison", Date());
// greet("Maddison", new Date());

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}