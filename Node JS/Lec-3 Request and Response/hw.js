/*
Create a page that shows a navigation bar of Myntra with the following links:
A. Home
B. Men
C. Women
D. Kids
E. Cart

Clicking on each link should navigate to that page, and a welcome to section text should be shown there.
*/

const http = require("http");
const fs = require("fs");

// request listener is used to handle incoming requests and send responses
function requestListener(req, res) {
  console.log(req);
}

// create server is used to create a new HTTP server instance
const server = http.createServer((req, res) => {
  requestListener(req, res);
  
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write("<head><title>Basic Page</title></head>");
    res.write("<body><h1>Welcome to Myntra</h1>");
    res.write('<nav>');
    res.write('<a href="/home">Home</a> | ');
    res.write('<a href="/men">Men</a> | ');
    res.write('<a href="/women">Women</a> | ');
    res.write('<a href="/kids">Kids</a> | ');
    res.write('<a href="/cart">Cart</a>');
    res.write('</nav>');
    res.write("</body>");
    res.write("</html>");
    return res.end(); // end the response
  }
  else if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Basic Page</title></head>");
    res.write("<body><h1>Welcome to the Home Page</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end(); // end the response
  } 
  else if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Basic Page</title></head>");
    res.write("<body><h1>Welcome to the Men Section</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end(); // end the response
  }
  else if (req.url === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Basic Page</title></head>");
    res.write("<body><h1>Welcome to the Women Section</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end(); // end the response
  }
  else if (req.url === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Basic Page</title></head>");
    res.write("<body><h1>Welcome to the Kids Section</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end(); // end the response
  }
  else if (req.url === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Basic Page</title></head>");
    res.write("<body><h1>Welcome to the Cart Section</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end(); // end the response
  }     

  // process.exit(1); // exit the process after handling the request
});

// listen is used to start the server and listen
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000 ha ha ha ha");
});