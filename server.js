'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    session = require('express-session');

var app = express();
require('dotenv').load();
require('./app/config/passport')(passport);

    mongoose.connect(process.env.MONGO_URI);

    //makes /public a shortcut to the public directory
    app.use('/public', express.static(process.cwd() + '/public'));
    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
    app.use('/common', express.static(process.cwd() + '/app/common'));
    app.use(session({
        secret: "ILoveLoLo",
        resave: false,
        saveUninitialized: true
    }));

    app.use(passport.initialize());
    app.use(passport.session());


    routes(app, passport);

var port = process.env.PORT || 8080;

    app.listen(port, function() {
        console.log('Listening on port ' + port + '...');
});


