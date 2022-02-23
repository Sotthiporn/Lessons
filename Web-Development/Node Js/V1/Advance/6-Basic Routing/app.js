var http = require('http');
var fs = require('fs');


var server = http.createServer(function (request, response) {
    console.log('Reqeust url: ' + request.url);
    if(request.url == '/home' || request.url == '/'){
      response.writeHead(200,{'Content-Type': 'text/html'});
      fs.createReadStream(__dirname + '/index.html').pipe(response);

    }else if(request.url == '/contact'){
      response.writeHead(200,{'Content-Type': 'text/html'});
      fs.createReadStream(__dirname + '/contact.html').pipe(response);

    }else if(request.url == '/api/data'){
      var data = [{name: 'Admin', age: 20},{ name: 'Client', age: 29},];
      response.writeHead(200,{'Content-Type': 'application/json'});
      response.end(JSON.stringify(data));

    }else{
      response.writeHead(404,{'Content-Type': 'text/html'});
      fs.createReadStream(__dirname + '/404.html').pipe(response);
      
    }
    
  }).listen(8081);
  
  console.log('Server running at http://127.0.0.1:8081/');