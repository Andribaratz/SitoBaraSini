var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === "/") {
    fs.readFile("Sito.html", function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  } else if (req.url === "Sito.css") {
    fs.readFile("Sito.css", function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      return res.end();
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write("404 Not Found");
    return res.end();
  }
}).listen(8080);
console.log("Server running at http://localhost:8080/");