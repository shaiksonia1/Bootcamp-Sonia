// Import Winston library
const winston = require('winston');

// Define log levels
const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    fatal: 3,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    fatal: 'magenta',
  },
};

// Configure the logger
const logger = winston.createLogger({
  levels: customLevels.levels,
  transports: [
    // Output logs to the console
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(
          (info) => `${info.timestamp} [${info.level}]: ${info.message}`
        )
      ),
    }),
  ],
});

// Add custom colors to Winston
winston.addColors(customLevels.colors);

// Program Start
logger.info('Program started');

// A function to simulate an operation
function performOperation() {
  logger.info('Operation successful');
}

// Function to perform division
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero error');
    }
    const result = a / b;
    logger.info(`Division result: ${result}`);
    return result;
  } catch (error) {
    logger.error(`Error: ${error.message}`);
    logger.log('fatal', 'A fatal error occurred due to division by zero');
  }
}

// Test the logger
performOperation();
divide(10, 2); // Successful division
divide(10, 0); // Division by zero (logs as fatal error)
