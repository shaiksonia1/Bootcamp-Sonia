// Import the config package
const config = require('config');

// Get the configuration values
const appConfig = config.get('app');

// Log the values to the console
console.log(`App Name: ${appConfig.name}`);
console.log(`App Port: ${appConfig.port}`);
