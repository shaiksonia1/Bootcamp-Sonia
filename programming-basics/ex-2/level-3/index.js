#!/usr/bin/env node

const { add, multiply } = require('./mathutils'); // Import functions
const args = process.argv.slice(2); // Slice first 2 default args

// Command-Line Input
const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

// Validation
if (!operation || isNaN(num1) || isNaN(num2)) {
    console.error('Usage: <command> add|multiply <num1> <num2>');
    process.exit(1);
}

// Execute the Operation
switch (operation) {
    case 'add':
        console.log(`Result: ${add(num1, num2)}`);
        break;
    case 'multiply':
        console.log(`Result: ${multiply(num1, num2)}`);
        break;
    default:
        console.error('Invalid operation! Use "add" or "multiply".');
}
