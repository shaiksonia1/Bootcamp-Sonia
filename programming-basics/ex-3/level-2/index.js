// Import Winston library
const winston = require('winston');

// Define custom log levels
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
  format: winston.format.combine(
    winston.format.timestamp(), // Add timestamp to logs
    winston.format.printf(
      (info) => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`
    )
  ),
  transports: [
    // Console transport for logs
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // Add colors to console logs
        winston.format.timestamp(),
        winston.format.printf(
          (info) => `${info.timestamp} [${info.level}]: ${info.message}`
        )
      ),
    }),

    // File transport to save logs in application.log
    new winston.transports.File({
      filename: 'application.log',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
          (info) => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`
        )
      ),
    }),
  ],
});

// Add custom colors to Winston
winston.addColors(customLevels.colors);

// Log Program Start
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
divide(10, 0); // Division by zero
