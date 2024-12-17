// Import the dotenv library
import 'dotenv/config';

// Destructure environment variables
const { PORT, DB_HOST, DB_USER, DB_PASS } = process.env;

// Use the variables in your program
console.log(`Server will run on port: ${PORT}`);
console.log(`Database Host: ${DB_HOST}`);
console.log(`Database User: ${DB_USER}`);
console.log(`Database Password: ${DB_PASS}`);



