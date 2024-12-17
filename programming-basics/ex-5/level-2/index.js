// Import the dotenv library
require('dotenv').config();

// Access environment variables with fallback values
const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER || 'defaultUser';  // Fallback value
const dbPass = process.env.DB_PASS || 'defaultPassword';  // Fallback value

// Log warnings if important variables are missing
if (!process.env.DB_USER) {
    console.warn('Warning: DB_USER is not set, using fallback value: defaultUser');
}

if (!process.env.DB_PASS) {
    console.warn('Warning: DB_PASS is not set, using fallback value: defaultPassword');
}

// Use the variables in your program
console.log(`Server will run on port: ${port}`);
console.log(`Database Host: ${dbHost}`);
console.log(`Database User: ${dbUser}`);
console.log(`Database Password: ${dbPass}`);
