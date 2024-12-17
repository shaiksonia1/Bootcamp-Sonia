// add.js
const debug = require('debug')('app:add'); // Debug namespace 'app:add'

function add(a, b) {
    debug(`Adding ${a} + ${b}`);
    const result = a + b;
    debug(`Result of addition: ${result}`);
    return result;
}

module.exports = add;
