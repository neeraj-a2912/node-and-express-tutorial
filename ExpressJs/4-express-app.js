const express = require("express");
const app = express();
const path = require("path");

// to use static files and logos
app.use(express.static("./navbar-app"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not Found");
});

app.listen(5000, () => {
  console.log("Server Listening at port 5000.....");
});
