const fs = require('fs');

// fs.writeFileSync('./test.txt','Hello hello world');
fs.appendFileSync('./test.txt', 'Hello hello world\n');
console.log('File created successfully');