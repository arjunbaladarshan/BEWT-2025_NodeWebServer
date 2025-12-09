// write a code to create basic web app using express

const express = require("express");

const app = express();

app.get("/login", (req, res) => {
  res.send("Hello world from ExpressJS");
});

app.get("/logout", (req, res) => {
  res.send("Logout done");
});

app.listen(3000, () => {
  console.log("Web Server started @ 3000");
});
