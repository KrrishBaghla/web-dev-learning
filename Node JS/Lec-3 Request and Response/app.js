// simple Node.js server

const http = require('http');


// request listener is used to handle incoming requests and send responses
function requestListener(req, res) {
  console.log(req);
}

// create server is used to create a new HTTP server instance
const server = http.createServer((req, res) => {
  requestListener(req, res);
  
  if(req.url === '/') {
  }else if(req.url === '/products') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Node.js Server</title></head>');
    res.write('<body><h1>My products are thesee</h1></body>');
    res.write('</html>');
    return res.end(); // end the response
  } else{
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>');
    res.write('<head><title>My First Node.js Server</title></head>');
    res.write('<body><h1>about page</h1></body>');
    res.write('</html>');
    return res.end(); // end the response
  }

  // process.exit(1); // exit the process after handling the request
});

// listen is used to start the server and listen
server.listen(3000 , () => {
  console.log('Server is running on http://localhost:3000 ha ha ha ha');
});