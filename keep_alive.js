var http = require('http'); 

http.createServer(function (req, res) {
res.write("wolyo");
res.end();
}).listen(8080);
