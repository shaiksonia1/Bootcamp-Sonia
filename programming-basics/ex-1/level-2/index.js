// Import the chalk package
const chalk = require("chalk");

// Styled console outputs
console.log(chalk.green.bgBlueBright("Hello, World!"));
console.log(chalk.green.bgMagenta("Hello, Node.js with Chalk!"));
console.log(chalk.blue.bgWhite.bold("This is a bold blue message with white background!"));
console.log(chalk.red.bgBlack("Error: Something went wrong! has text color red as warning"));


// chalk outputs styled messages in the console when running the program.
// nodemon automatically restarts the program whenever index.js is modified.
