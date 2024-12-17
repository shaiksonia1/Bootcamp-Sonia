// Import the 'debug' package
const debug = require('debug')('app:module1'); // Define a namespace

// Addition function
function add(a, b) {
    debug(`add() called with arguments: a=${a}, b=${b}`);
    const result = a + b;
    debug(`add() result: ${result}`);
    return result;
}

// Multiplication function
function multiply(a, b) {
    debug(`multiply() called with arguments: a=${a}, b=${b}`);
    const result = a * b;
    debug(`multiply() result: ${result}`);
    return result;
}

// Main function
function main() {
    debug('Main function execution started');

    const num1 = 5;
    const num2 = 3;

    // Call the add function
    debug('Calling add() function');
    const sum = add(num1, num2);
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

    // Call the multiply function
    debug('Calling multiply() function');
    const product = multiply(num1, num2);
    console.log(`The product of ${num1} and ${num2} is: ${product}`);

    debug('Main function execution finished');
}

// Call the main function
main();
