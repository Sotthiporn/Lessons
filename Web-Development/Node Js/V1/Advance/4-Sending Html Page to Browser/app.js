var http = require('http');
var fs = require('fs');


var server = http.createServer(function (request, response) {
    console.log('Reqeust url: ' + request.url);
    response.writeHead(200, {'Content-Type': 'text/html'});

    var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');

    myReadStream.pipe(response);
    
  }).listen(8081);
  
  console.log('Server running at http://127.0.0.1:8081/');