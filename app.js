require('marko/node-require').install();
require('marko/express'); //enable res.marko 

require('marko/browser-refresh').enable();

var express = require('express'),
    app = express(),
    enrouten = require('express-enrouten'),
    serveStatic = require('serve-static'),
    passport = require('passport'),
    GitHubStrategy = require('passport-github').Strategy;
 
// passport.use(new GitHubStrategy({
//     clientID: "c7280bf6b04f562c0fb3",
//     clientSecret: "c2a8b35a613ab49d9433760e75a7cfa57fb05cc4",
//     callbackURL: "/auth/github/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ githubId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });

// app.use(passport.initialize());
// app.use(passport.session());

app.use('/public', serveStatic(__dirname + '/public'));

app.use(enrouten({
    directory: 'routes'
}));
 
app.listen(8000);

module.exports = app;
