const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-indigo-500 to-purple-600 min-h-screen flex items-center justify-center text-white">
  <div class="text-center p-10 bg-white bg-opacity-10 rounded-2xl shadow-xl backdrop-blur-lg max-w-md w-full">
    <h1 class="text-4xl font-extrabold mb-4">👋 Welcome!</h1>
    <p class="text-xl mb-6">Your server is running on:</p>
    <div class="bg-black bg-opacity-30 py-4 px-6 rounded-lg text-lg font-mono border border-white border-opacity-20">
      http://localhost:<span class="text-yellow-300 font-semibold">8000</span>
    </div>
    <p class="mt-6 text-sm text-white text-opacity-70">Ready to build something amazing.</p>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
});

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});
