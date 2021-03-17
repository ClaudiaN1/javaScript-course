/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:
BMI = mass / height ** 2.
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs using the formula.
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
             John weights 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
             John weights 85 kg and is 1.76 m tall.
*/

// My way
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let calculateBMIMark = markMass / markHeight ** 2;
let calculateBMIJohn = johnMass / johnHeight ** 2;

let markHigherBMII = calculateBMIMark > calculateBMIJohn;

console.log(calculateBMIMark);    // output: 27.3
console.log(calculateBMIJohn);   // output: 24.1
console.log(markHigherBMII);     // output: true


// Other way
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);     // output: 26.8, 27.4, false
