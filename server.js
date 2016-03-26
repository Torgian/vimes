'use strict';

var express = require('express'),
    http = require('http'),
    routes = require('./app/routes/index.js'),
    mongo = require('mongodb'),
    mongoose = require('mongoose');

var app = express();

//This line accounts for the C9.io dev environment's usage of the process.env.PORT variable to run apps.
//when not running on c9, it will default to port 3000
app.set('port', process.env.PORT || 3000);

mongoose.connect('mongodb://localhost:27017/fcc-taipei');

var db = mongoose.connection;
// create error handler code  db.on('error')

    //makes /public a shortcut to the public directory
app.use('/public', express.static(process.cwd() + '/public'));

routes(app, db);

//This can be changed to separate out Server into a separate module and simply use app.listen(port);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});


