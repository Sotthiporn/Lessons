var express = require('express');
var app = express();
var port = 3000;

app.get('/',function (req, res) {
     res.send('Hello World!');
});
app.get('/contact',function (req, res) {
     res.send('This is contact page!');
});

app.listen(port, () => console.log(`Server running at http://127.0.0.1:/${port});`));