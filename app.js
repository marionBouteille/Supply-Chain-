

var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type':'text/plain'
    });
    res.write('Hello world')
    res.end();
    console.log("Server running on port 3000");
}).listen(3000);

