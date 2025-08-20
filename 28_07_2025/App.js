const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    const data = fs.readFileSync('index.html');
    res.end(data.toString());
}).listen(8000);

console.log('Server running at http://localhost:8000/');