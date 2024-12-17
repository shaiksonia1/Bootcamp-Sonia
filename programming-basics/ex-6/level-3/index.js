const config = require('config');
const mathutils = require('./mathutils');  // Import the mathutils file
const fs = require('fs');
const path = require('path');

// Get logging level from configuration
const logLevel = config.get('logging.level');

// Set up logging based on level
const log = (level, message) => {
  const levels = ['debug', 'info', 'warn', 'error'];
  if (levels.indexOf(level) >= levels.indexOf(logLevel)) {
    console[level](message);
  }
};

// Log according to the specified logging level
log('info', `Logging level set to: ${logLevel}`);

// Dynamically load and use the specified functions from the config file
const commands = config.get('commands');

commands.forEach(command => {
  if (mathutils[command.name]) {
    const func = mathutils[command.name];
    
    // Log the function being used
    log('info', `Loaded function: ${command.name}`);
    
    // Example: call the loaded function with an argument (e.g., 0.5)
    const result = func(0.5);
    log('info', `${command.name}(0.5) = ${result}`);
  } else {
    log('error', `Function not found: ${command.name}`);
  }
});
