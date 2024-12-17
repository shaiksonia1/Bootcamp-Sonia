// Import the config package
const config = require('config');

// Get the configuration values based on the environment
const appConfig = config.get('app');

// Log the environment-specific values to the console
console.log(`App Name: ${appConfig.name}`);
console.log(`App Port: ${appConfig.port}`);
console.log(`App Environment: ${appConfig.environment}`);
