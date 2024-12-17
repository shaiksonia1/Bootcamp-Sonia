// Retrieve command-line arguments
const args = process.argv.slice(2);

// Function to display usage instructions
function showHelp() {
  console.log(`
Usage: node script.js [--multiply] <numbers>
Options:
  --multiply    Multiply the numbers instead of adding them.
  --help        Show this help message.

Examples:
  node script.js 1 2 3           # Adds the numbers and outputs 6
  node script.js --multiply 2 3  # Multiplies the numbers and outputs 6
`);
  process.exit(0);
}

// Error handling for no input or --help flag
if (args.length === 0 || args.includes("--help")) {
  showHelp();
}

// Check if --multiply flag is set
const isMultiply = args.includes("--multiply");

// Extract numbers and validate inputs
let numbers = [];
for (const arg of args) {
  if (arg === "--multiply") continue; // Skip the flag
  const number = Number(arg);
  if (isNaN(number)) {
    console.error(`Error: Invalid input '${arg}'. Please enter only numeric values.`);
    process.exit(1);
  }
  numbers.push(number);
}

// Error if no valid numbers are provided
if (numbers.length === 0) {
  console.error("Error: No numbers provided. Please provide numeric values.");
  process.exit(1);
}

// Perform the operation
const result = isMultiply
  ? numbers.reduce((acc, num) => acc * num, 1) // Multiply numbers
  : numbers.reduce((acc, num) => acc + num, 0); // Add numbers

// Print the result
const operation = isMultiply ? "product" : "sum";
console.log(`The ${operation} of the provided numbers is: ${result}`);
