const fs = require('fs');
fs.appendFileSync('./test.txt','\nupdated');
console.log("File Updated sucessfully");