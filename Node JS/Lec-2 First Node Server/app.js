// simple Node.js server

const http = require('http');


// request listener is used to handle incoming requests and send responses
function requestListener(req, res) {
  console.log(req);
}

// create server is used to create a new HTTP server instance
const server = http.createServer((req, res) => {
  requestListener(req, res);
  console.log(req.url, req.headers, req.method);
  process.exit(1); // exit the process after handling the request
});

// listen is used to start the server and listen
server.listen(3000 , () => {
  console.log('Server is running on http://localhost:3000 ha ha ha ha');
});