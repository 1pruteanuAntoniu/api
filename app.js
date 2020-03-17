var express = require('express');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use('/', routes);
app.use('/users', users);

module.exports = app;
app.listen(3000);