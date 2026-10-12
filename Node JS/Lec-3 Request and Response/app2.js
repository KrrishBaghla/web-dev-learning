// TAKING INPUT FROM USER WITH FORM

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
    res.write("<html>");
    res.write("<head><title>Basic Page</title></head>");
    res.write("<body><h1>Enter your Details</h1>");
    res.write('<form method="POST" action="/submit-details">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"> <br><br>',
    );
    res.write(
      '<input type="email" name="email" placeholder="Enter your email"><br><br>',
    );
    res.write('<label for="gender">Gender:</label><br>');
    res.write('<input type="radio" name="gender" value="male"> Male');
    res.write(
      '<input type="radio" name="gender" value="female"> Female <br><br>',
    );
    res.write('<input type="submit" value="Submit" method="POST">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end(); // end the response
  } else if (req.url === "/submit-details" && req.method === "POST") {

    fs.writeFileSync("userDetails.txt", "User Details:\n");

    res.statusCode = 302; // means redirecting to another page
    
    res.setHeader("Location", "/");
    return res.end(); // end the response
  }

  // process.exit(1); // exit the process after handling the request
});

// listen is used to start the server and listen
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000 ha ha ha ha");
});
