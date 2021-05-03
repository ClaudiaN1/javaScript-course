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

// switch statement
const day = 'thurday';

switch (day) {
    case 'monday':  // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend 😉');
        break;
    default:
        console.log('Not a valid day!');
}