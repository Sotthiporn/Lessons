var express = require('express');
var app = express();
var todoController = require('./controllers/todoController');
var port = 3000;

//set up template engine
app.set('view-engine','ejs');

//static files
app.use('/public',express.static('./public'));

//fire controller
todoController(app);

app.listen(port);