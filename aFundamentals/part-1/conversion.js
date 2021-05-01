// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);  //convert string to a number
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));  // output: NaN(Not a Number) 
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old'); // "+" is a type coercion, convert automatically 23 in a string.
console.log('23' - '10' - 3); // "-" convert automatically strings in number
console.log('23' + '10' - 3); // output: 2307 (typeof is number)
console.log('23' / '2'); // output: 11.5
console.log('23' > '18'); // output: true

let n = '1' + 1; // -> 11
n = n - 1;  // 11 - 1
console.log(n); //output: 10