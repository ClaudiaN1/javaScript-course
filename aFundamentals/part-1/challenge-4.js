/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement.
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'.

TEST DATA: Test for bill values 275, 40 and 430.
*/

const bill = 430;
const tip = (bill >= 50 && bill <= 300) ? (15 / 100 * bill) : (20 / 100 * bill);

console.log(`The bill value = ${bill},
The tip value = ${tip},
The final value = ${bill + tip}.`);