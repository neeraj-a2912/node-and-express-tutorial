const http = require("http");

// req -> incoming request ||
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1>Welcome to Home Page</h1>`);
  } else if (req.url === "/about") {
    res.end(`<h1>Welcome to About Page</h1>`);
  } else {
    res.end(`
        <h1>Oops!</h1>
        <p>Can't seem to find the page you are looking for.</p>
        <a href="/">Go to home</a>
        `);
  }
});

server.listen(5000);
