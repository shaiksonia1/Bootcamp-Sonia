// Retrieve command-line arguments
const args = process.argv.slice(2);

// Error handling for no input
if (args.length === 0) {
  console.error("Error: No arguments provided. Please provide numbers as arguments.");
  process.exit(1);
}

// Validate inputs and calculate the sum
let sum = 0;
for (const arg of args) {
  const number = Number(arg);
  if (isNaN(number)) {
    console.error(`Error: Invalid input '${arg}'. Please enter only numeric values.`);
    process.exit(1);
  }
  sum += number;
}

// Print the result
console.log(`The sum of the provided numbers is: ${sum}`);
