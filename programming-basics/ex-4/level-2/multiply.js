// multiply.js
const debug = require('debug')('app:multiply'); // Debug namespace 'app:multiply'

function multiply(a, b) {
    debug(`Multiplying ${a} * ${b}`);
    const result = a * b;
    debug(`Result of multiplication: ${result}`);
    return result;
}

module.exports = multiply;
