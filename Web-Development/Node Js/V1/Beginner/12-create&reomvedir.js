var fs = require('fs');

//create directory Sync
//fs.mkdirSync('hello');

//remove directory
// fs.rmdirSync('hello');

//remove file
// fs.unlink('readme.txt');




//create directory Async
/* fs.mkdir('hello', function(){
    fs.readFile('readme.txt', 'utf8', function(err, data){
        fs.writeFileSync('./hello/writeme.txt', data);
    });
}); */

//remove directory Async
fs.unlink('./hello/writeme.txt',function(){
    fs.rmdir('hello');
});