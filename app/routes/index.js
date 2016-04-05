'use strict';

var path = process.cwd();

module.exports = function(app, passport) {
    
    function isLoggedIn (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/login');
        }
    }
    
    app.route('/')
    .get(isLoggedIn, function (req, res) {
        res.sendFile(path + '/public/index.html');
    });
    
    app.route('/login')
    .get(function (req, res) {
        res.sendFile(path + '/public/login.html');
    });
    
    app.route('/logout')
        .get(function (req, res) {
        req.logout();
        res.redirect('/login');
    });
    
    app.route('/profile')
        .get(isLoggedIn, function (req, res) {
        res.sendFile(path + '/public/profile.html');
    });
    
    app.route('/api/:id')
        .get(isLoggedIn, function (req, res) {
        res.json(req.user);
    }); 
    
    app.route('/auth/google')
        .get(passport.authenticate('google', { scope: ['profile', 'email']}));
        
    app.route('/auth/google/callback')
        .get(passport.authenticate('google', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    }));    
    
/*
    app.route('/api/:id/clicks')
        .get(isLoggedIn, clickHandler.getClicks)
        .post(isLoggedIn, clickHandler.addClick)
        .delete(isLoggedIn, clickHandler.resetClicks);
  
  app.route('/api/clicks')
            .get(clickHandler.getClicks)
            .post(clickHandler.addClick)
            .delete(clickHandler.resetClicks);

*/
};
