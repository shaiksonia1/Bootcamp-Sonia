const debug = require('debug');

// Namespaces for each operation
const debugAdd = debug('app:math:add');
const debugMultiply = debug('app:math:multiply');
const debugDivide = debug('app:math:divide');

const logger = require('./logger');

const MathUtils = {
    add: (a, b) => {
        debugAdd(`Called with arguments: a=${a}, b=${b}`);
        const result = a + b;
        debugAdd(`Result: ${result}`);
        logger.info(`Addition performed: ${a} + ${b} = ${result}`);
        return result;
    },

    multiply: (a, b) => {
        debugMultiply(`Called with arguments: a=${a}, b=${b}`);
        const result = a * b;
        debugMultiply(`Result: ${result}`);
        logger.info(`Multiplication performed: ${a} * ${b} = ${result}`);
        return result;
    },

    divide: (a, b) => {
        debugDivide(`Called with arguments: a=${a}, b=${b}`);
        if (b === 0) {
            debugDivide('Division by zero error');
            logger.error(`Division error: Cannot divide ${a} by zero`);
            throw new Error('Division by zero is not allowed.');
        }
        const result = a / b;
        debugDivide(`Result: ${result}`);
        logger.info(`Division performed: ${a} / ${b} = ${result}`);
        return result;
    }
};

module.exports = MathUtils;
