const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// Math operators
const firstName = 'Claudia';
const lastName = 'Popescu';
console.log(firstName + " " + lastName);

// Assigment operators
let x = 10 + 5;
x += 10; // x = x + 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 - 10 - 5;   // right-to-left -> z = y = 10; 10 = y; y = z; z = 10;
console.log(z, y);

const averageAge = ageJonas + ageSarah / 2;              // output: 55.5
const averageAgeGrouping = (ageJonas + ageSarah) / 2;    // output: 32.5
console.log(ageJonas, ageSarah, averageAge, averageAgeGrouping);


//equality operators: == vs ===
// === is called the strict equality operator. It's strict,because it does not perform type coercion. Returns TRUE when both values are exactly the same type.
// == equality operator. Does type coercion.
const age = 18;
if (age === 18) console.log('You just became an adult');
if (age == 18) console.log('You just became an adult');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`Cool! ${favourite} is an amazaing number!`)
} else if (favourite === 7) {
    console.log(`${favourite} is also a cool number`)
} else {
    console.log('Number is not 23 or 7')
}

if (favourite !== 23) console.log('Why not 23?');