var http = require('http');

var server = http.createServer(function (request, response) {
    console.log('Reqeust url: ' + request.url);
    response.writeHead(200, {'Content-Type': 'application/json'});

    var myObj = {
      name: 'Admin',
      job: 'Web Developer',
      age: 21
    };

    response.end(JSON.stringify(myObj));
    
  }).listen(8081);
  
  console.log('Server running at http://127.0.0.1:8081/');