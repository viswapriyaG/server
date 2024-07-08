// Import the HTTP module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello, World!\n');
});

// Define the port to listen on
const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log('Server is running and listening on port ${PORT}');
});