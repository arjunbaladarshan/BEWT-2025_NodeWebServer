// write a code to create basic web app using http core module

const http = require("http");
const { parse } = require("path");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.end("");
  } else {
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    res.setHeader("content-type", "text/html");

    if (parsedUrl.pathname == "/login") {
      if (parsedUrl.query.un == "arjun" && parsedUrl.query.pw == "bala") {
        res.write("Valid User");
      } else {
        res.write("Invalid User");
      }
    } else {
      res.write("Other page");
    }

    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server started @ 3000");
});
