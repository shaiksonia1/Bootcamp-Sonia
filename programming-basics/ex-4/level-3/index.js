const debug = require('debug')('app:main');
const readline = require('readline');
const logger = require('./logger');
const MathUtils = require('./mathutils');

// Set up readline for interactive input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

debug('Program started');
logger.info('Program started');

function showMenu() {
    console.log(`
Select an operation:
1. Add
2. Multiply
3. Divide
4. Exit
`);
    rl.question('Enter your choice: ', (choice) => {
        handleChoice(choice);
    });
}

function handleChoice(choice) {
    switch (choice) {
        case '1':
            promptForNumbers('add');
            break;
        case '2':
            promptForNumbers('multiply');
            break;
        case '3':
            promptForNumbers('divide');
            break;
        case '4':
            logger.info('Program exited by user');
            console.log('Exiting program. Goodbye!');
            rl.close();
            break;
        default:
            console.log('Invalid choice. Please try again.');
            showMenu();
    }
}

function promptForNumbers(operation) {
    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
            performOperation(operation, parseFloat(num1), parseFloat(num2));
            showMenu();
        });
    });
}

function performOperation(operation, num1, num2) {
    try {
        let result;
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Invalid input. Please enter valid numbers.');
        }

        switch (operation) {
            case 'add':
                result = MathUtils.add(num1, num2);
                break;
            case 'multiply':
                result = MathUtils.multiply(num1, num2);
                break;
            case 'divide':
                result = MathUtils.divide(num1, num2);
                break;
        }

        console.log(`Result: ${result}`);
    } catch (error) {
        logger.error(`Error occurred: ${error.message}`);
        console.error(`Error: ${error.message}`);
    }
}

showMenu();
