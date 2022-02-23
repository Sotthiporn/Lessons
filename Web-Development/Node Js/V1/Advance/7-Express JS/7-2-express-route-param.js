var express = require('express');
var app = express();
var port = 3000;

app.get('/',function (req, res) {
     res.send('Hello World!');
});

app.get('/contact',function (req, res) {
     res.send('This is contact page!');
});

app.get('/profile/:name',function (req, res) {
     res.send('You reqeusted to see a profile with the id of ' + req.params.name);
});

app.listen(port);