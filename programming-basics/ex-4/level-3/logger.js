const winston = require('winston');

// Create a logger instance with different levels of logging
const logger = winston.createLogger({
    level: 'info', // Log level: 'info', 'debug', 'error', etc.
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ level, message, timestamp }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(), // Log to console
        new winston.transports.File({ filename: 'app.log' }) // Log to a file
    ],
});

module.exports = logger;
