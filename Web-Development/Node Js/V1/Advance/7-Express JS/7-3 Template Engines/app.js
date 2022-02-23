var express = require('express');
var app = express();
var port = 3000;


app.set('view engine', 'ejs');



app.get('/',function (req, res) {
     //res.sendFile(__dirname + '/index.html'); //file html simple
     res.render('index'); //file ejs
});

app.get('/contact',function (req, res) {
     res.render('contact');
});

app.get('/profile/:name',function (req, res) {
     var data = {age:29, job: 'Web Developer', hobbies: ['eating','football','swimming']};
     res.render('profile',{person: req.params.name,data: data});
});

app.listen(port);