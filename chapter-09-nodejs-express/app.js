var http = require('http');
const PORT = 8080;
var server = http.createServer(function (req, res) {
    res.end("It's works");
});

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:%s", PORT);
});