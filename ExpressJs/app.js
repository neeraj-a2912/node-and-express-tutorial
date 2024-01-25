const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hi user");
  console.log("user hit the server");
});

server.listen(5000, () => {
  console.log("Server Running at port 5000");
});
