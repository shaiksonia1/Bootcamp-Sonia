// divide.js
const debug = require('debug')('app:divide'); // Debug namespace 'app:divide'

function divide(a, b) {
    if (b === 0) {
        debug(`Cannot divide ${a} by zero`);
        throw new Error('Division by zero');
    }
    debug(`Dividing ${a} / ${b}`);
    const result = a / b;
    debug(`Result of division: ${result}`);
    return result;
}

module.exports = divide;
