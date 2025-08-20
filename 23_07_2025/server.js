const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Simple Form</title>
        </head>
        <body>
            <h1>Hello, World!</h1>
            <form method="POST" action="/submit">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br><br>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
}).listen(8000);

console.log('Server running at http://localhost:8000/');
