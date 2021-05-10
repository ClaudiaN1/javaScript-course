// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);



// Exercise
const calcAge = function (birthYeah) {
    return 2021 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



// basic array operations
const friends1 = ['Claudia', 'Miruna', 'Ana'];

// add elements
friends1.push('Petre');   // output: (4) ["Claudia", "Miruna", "Ana", "Petre"]
console.log(friends1);

friends1.unshift('Jon');  // output:(5) ["Jon", "Claudia", "Miruna", "Ana", "Petre"]
console.log(friends1);

// remove elements
friends1.pop();  //last
friends1.pop();
console.log(friends1);    // output: (3) ["Jon", "Claudia", "Miruna"]

const popped = friends1.pop();
console.log(popped);     // output: Miruna
console.log(friends1);   // output: (2) ["Jon", "Claudia"]

friends1.shift(); //first
console.log(friends1);   // output: ["Claudia"]

console.log(friends1.indexOf('Claudia'));   // output: 0
console.log(friends1.indexOf('Ana'));       // output: -1

console.log(friends1.includes('Claudia'));   // output: true
console.log(friends1.includes('Ana'));       // output: false

if (friends1.includes('Claudia')) {
    console.log('You have a friend called Claudia');
}