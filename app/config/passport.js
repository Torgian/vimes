'use strict';

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var User = require('../models/users');
var configAuth = require('./auth');

module.exports = function (passport) {
    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        //User.findById(id, function(err, user){
        User.findOne(id, function(err, user){  //find out what in the name of fuck is going on here!!! Why does this shit work with Github ID and not Google ID?
            done(err, user);
        });
    });
    
    passport.use(new GoogleStrategy({
        clientID: configAuth.googleAuth.clientID,
        clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: "http://localhost:8080/auth/google/callback" //figure out WHAT THE FUCK IS GOING ON HERE!!!! What did I miss? Why will it not accept the data from configAuth??!  FAasdasd....23
        //calllbackURL: configAuth.googleAuth.callbackURL
    },
    function(token, refreshToken, profile, done){
        done(null, profile);
        process.nextTick(function() {            
            User.findOne({ 'google.id': profile.id }, function (err, user) {
            //User.find({ 'google.id': profile.id}, function (err, user) {
            if (err) {
                return done(err);
            }
            
            if (user) {
                return done(null, user);
            } else {
                var newUser = new User();
                
                newUser.google.id = profile.id;
                newUser.google.token = token;
                newUser.google.displayName = profile.displayName;
                newUser.google.email = profile.emails[0].value;
                
                newUser.save(function(err) {
                    if (err) throw err;
                    
                    return done(null, newUser);
                });
            
            }
            
            });
        
        });
    }));
};
