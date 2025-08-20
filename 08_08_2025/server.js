const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    let data = '';

    req.setEncoding('utf8');

    req.on('data', chunk => {
        data += chunk;
    });

    req.on('end', () => {
        const start = data.indexOf('\r\n\r\n') + 4;
        const end = data.lastIndexOf('\r\n');
        const text = data.slice(start, end);

        fs.writeFileSync('result.txt', text);
        console.log('Saved content:\n', text);

        res.end('File uploaded and saved to result.txt');
    });
});

app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
});









// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// http.createServer((req, res) => {
//   if (req.method === 'POST' && req.url === '/upload') {
//     let data = Buffer.alloc(0);

//     req.on('data', chunk => {
//       data = Buffer.concat([data, chunk]);
//     });

//     req.on('end', () => {
//       const boundary = req.headers['content-type'].split('boundary=')[1];
//       const parts = data.toString().split('--' + boundary);

//       const filePart = parts.find(part => part.includes('filename='));
//       if (!filePart) {
//         res.writeHead(400);
//         return res.end('No file uploaded.');
//       }

//       const headerBodySplit = filePart.split('\r\n\r\n');
//       const headers = headerBodySplit[0];
//       const content = headerBodySplit[1].trimEnd(); // remove trailing \r\n--

//       const filenameMatch = headers.match(/filename="(.+?)"/);
//       const filename = filenameMatch ? filenameMatch[1] : 'uploaded.txt';

//       const saveDir = path.join(__dirname, 'uploaded_texts');
//       const savePath = path.join(saveDir, filename);

//       if (!fs.existsSync(saveDir)) {
//         fs.mkdirSync(saveDir);
//       }

//       const fileExists = fs.existsSync(savePath);
//       const writeMode = fileExists ? 'a' : 'w';

//       const existingData = fileExists ? fs.readFileSync(savePath, 'utf8') + '\n' : '';
//       fs.writeFileSync(savePath, existingData + content);

//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end('File saved successfully.');
//     });
//   } else if (req.method === 'GET' && req.url === '/') {
//     const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(html);
//   } else {
//     res.writeHead(404);
//     res.end('Not Found');
//   }
// }).listen(5001, () => {
//   console.log('Server running at http://localhost:5001');
// });


