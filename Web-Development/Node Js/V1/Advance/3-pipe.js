var http = require('http');
var fs = require('fs');


   /*  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
    var myWriteStream = fs.WriteStream(__dirname + '/writeMe.txt','utf8');
    myReadStream.pipe(myWriteStream); */

var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');

    myReadStream.pipe(response);
    
  }).listen(8081);
  
  console.log('Server running at http://127.0.0.1:8081/');