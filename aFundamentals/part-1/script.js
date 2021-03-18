let js = 'amazing';

console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Jonh";
console.log(firstName);
console.log(firstName);

//data type
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

//outpur:object   <- this is regarded as a buck or an error in JavaScript;
console.log(typeof null);


//let, const and var
//use let when we need to mutate a variable or when we want to declare empty variables
//let is block-scoped
let age = 30;
age = 32;

//create a variable that we cannot reassign, cannot be mutated, cannot declare empty const variables;
const birthYear = 1991;
//birthYear = 1998;    //error

//var is function-scoped
var job = 'programmer';
job = 'teacher';


// Strings
const lastName = 'Jonas';
const job1 = 'teacher';
const birthYear1 = 1991;
const year1 = 2037;

const jonas = "I'm " + lastName + ', a ' + (year1 - birthYear1) + ' years old ' + job1 + '!';
console.log(jonas);

// Template literals
const jonasNew = `I'm ${lastName}, a ${year1 - birthYear1} years old ${job1} !`;
console.log(jonasNew);

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);