import dotenv from 'dotenv';

// Assign dotenv.config() to a variable. config reads your .env file, parses the contents, assigns it to process.env, and returns an object with a parsed key containing the loaded content or an error key if it failed.

const result = dotenv.config();

// TypeScript can now provide Intellisense and type checking for the config object. If you type result., you see that result has two properties: error and parsed. Add an error checking statement to verify that the config operation worked as expect.

if (result.error) {
    throw result.error;
}

console.log(result.parsed);  // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);