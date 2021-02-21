/*
  PIPING FUNCTIONS
  ================
  1. Write 3 functions:
  - one that adds 2 numbers together
  - one that multiplies 2 numbers together
  - one that formats a number so it's returned as a string with a £ sign before it (e.g. 20 -> £20)

  2. Using the variable startingValue as input, perform the following operations using your functions all
  on one line (assign the result to the variable badCode):
  - add 10 to startingValue
  - multiply the result by 2
  - format it
  
  3. Write a more readable version of what you wrote in step 2 under the BETTER PRACTICE comment. Assign
  the final result to the variable goodCode
*/

function add(a, b) {
    let sum = a + b;
    return sum
}

function multiply(a, b) {
    let product = a * b;
    return product;
}

function format(number) {
    let numberFormated =  `£${number}`;
    return numberFormated
}

const startingValue = 2

// Why can this code be seen as bad practice? Comment your answer.
//Es un código que no se puede reusar. Es duro de cambiar(e. g si queremos sumar 2 y multiplicar por 12)
let badCode = "£" + (startingValue + 10) * 2;

/* BETTER PRACTICE */
function betterPractice(a, b, c) {
    let sum = add(a,b);
    let product = multiply(sum,c);
    let result = format(product);
    return result;
}
let goodCode = betterPractice(startingValue,10,2);

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 2-piping.js` into your terminal
*/

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your code returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test('add function - case 1 works', add(1,3), 4)
test('add function - case 2 works', add(2.4,5), 7.4)
test('multiply function works', multiply(2,3), 6)
test('format function works', format(16), "£16")
test('badCode variable correctly assigned', badCode, "£24")
test('goodCode variable correctly assigned', goodCode, "£24")
