// the first node server. 


var http = require('http');

http.createServer(function(request, response){
response.writeHead(200,{'Content-Type':'text/plain'});
response.end('Hello World\n');}).listen(9090);

console.log('Server running at http://96.126.96.146:9090/');

