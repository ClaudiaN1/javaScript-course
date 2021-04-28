const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😁`);
}

const birtYear = 1997;
let century;
if (birtYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);