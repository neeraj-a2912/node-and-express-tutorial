const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello world");
});

// this will be executed first because createServer is async
server.listen(5000, () => {
  console.log("server listening on port 5000...");
});
