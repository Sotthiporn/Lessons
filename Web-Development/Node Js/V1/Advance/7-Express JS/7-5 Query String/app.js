var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use('/assets',express.static('assets'));

app.get('/',function (req, res) {
     //res.sendFile(__dirname + '/index.html'); //file html simple
     res.render('index'); //file ejs
});

app.get('/contact',function (req, res) {
     //Query String example ?page=2
     res.render('contact',{qs: req.query});
});
app.post('/contact',urlencodedParser,function (req, res) {
     res.render('contact-success',{data: req.body});
});

app.get('/profile/:name',function (req, res) {
     var data = {age:29, job: 'Web Developer', hobbies: ['eating','football','swimming']};
     res.render('profile',{person: req.params.name,data: data});
});

app.listen(port);