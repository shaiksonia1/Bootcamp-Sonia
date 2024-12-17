// index.js
const debug = require('debug')('app:main'); // Debug namespace 'app:main'
const add = require('./add');
const multiply = require('./multiply');
const divide = require('./divide');

function main() {
    debug('Starting main program...');

    try {
        const sum = add(5, 3);
        console.log(`Sum: ${sum}`);

        const product = multiply(5, 3);
        console.log(`Product: ${product}`);

        const quotient = divide(6, 2);
        console.log(`Quotient: ${quotient}`);

    } catch (error) {
        console.error('Error:', error.message);
    }

    debug('Main program finished.');
}

main();
