// Import required libraries
require('dotenv').config();  // Load environment variables
const sqlite3 = require('sqlite3').verbose();  // SQLite library
const winston = require('winston');  // Logging library

// Set up logging using winston (only logging non-sensitive details)
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

// Load environment variables
const dbPath = process.env.DB_PATH || './default-database.sqlite';  // Default fallback value for DB path
const apiKey = process.env.API_KEY || '';  // Don't log the API key for security reasons

// Securely log information without revealing sensitive data
logger.info(`Database path is set to: ${dbPath}`);
if (apiKey) {
  logger.warn('API key is loaded, but it will not be logged for security reasons.');
} else {
  logger.warn('API key is missing.');
}

// Set up SQLite connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    logger.error('Error connecting to the database:', err.message);
  } else {
    logger.info('Connected to the SQLite database.');
  }
});

// Example database interaction (create a table)
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)', (err) => {
    if (err) {
      logger.error('Error creating table:', err.message);
    } else {
      logger.info('Table "users" created successfully or already exists.');
    }
  });

  // Insert a test user (you can add more complex logic here)
  const stmt = db.prepare('INSERT INTO users (name) VALUES (?)');
  stmt.run('Alice');
  stmt.finalize();
});

// Example API interaction (this is just a placeholder for actual API calls)
function interactWithAPI() {
  if (apiKey) {
    logger.info('Making API request with the provided API key...');
    // Make API request using the API key (this is just a mock function)
  } else {
    logger.error('No API key provided. Unable to make API request.');
  }
}

// Call the API interaction function
interactWithAPI();

// Close the database connection
db.close((err) => {
  if (err) {
    logger.error('Error closing the database connection:', err.message);
  } else {
    logger.info('Database connection closed.');
  }
});
