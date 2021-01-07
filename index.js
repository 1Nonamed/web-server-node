let http = require("http");
let fs = require("fs");

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=UTF-8");

    switch (req.url) {
      case "/":
        test("./index.html", res);
        break;

      case "/contact":
        test("./contact.html", res);
        break;

      case "/about":
        test("./about.html", res);
        break;

      case "/projects":
        test("./projects.html", res);
        break;

      case "/favicon":
        res.setHeader("Content-Type", "image/x-icon");
        test("./favicon.ico", res);
        break;

      default:
        res.statusCode = 404;
        test("./404.html", res);
        break;
    }
  })
  .listen(8080);

const test = (path, res) => {
  fs.readFile(path, (error, content) => {
    if (!error) {
      res.write(content);
      res.end();
    }
  });
};
