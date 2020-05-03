var fs = require('fs');

var express = require('express');
var path = require('path');
var app = express();

var testController = require('./app/routes/nodeRoute');


app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/test', testController);

app.listen(8080);