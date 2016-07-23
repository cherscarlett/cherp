require('marko/node-require').install();
require('marko/express'); //enable res.marko 

require('marko/browser-refresh').enable();

var express = require('express'),
    app = express(),
    enrouten = require('express-enrouten'),
    serveStatic = require('serve-static'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    dotenv = require('dotenv'),
    fs = require('fs'),
    db = require('./models/db'),
    github = require('./models/github'),
    portfolioItems = require('./models/portfolioItems'),
    users = require('./models/users'),
    methodOverride = require('method-override');
    LEX = require('letsencrypt-express').testing();

var DOMAIN = 'cherp.io';
var EMAIL = 'cher.stewart@gmail.com';

var lex = LEX.create({
  configDir: require('os').homedir() + '/letsencrypt/etc'
, approveRegistration: function (hostname, approve) { // leave `null` to disable automatic registration
    if (hostname === DOMAIN) { // Or check a database or list of allowed domains
      approve(null, {
        domains: [DOMAIN]
      , email: EMAIL
      , agreeTos: true
      });
    }
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/public', serveStatic(__dirname + '/public'));

app.use(enrouten({
    directory: 'routes'
}));

lex.onRequest = app;

app.listen(8000, () => {
    console.log('listening on 8000');
});

lex.listen([80], [443, 5001], function () {
  var protocol = ('requestCert' in this) ? 'https': 'http';
  console.log("Listening at " + protocol + '://localhost:' + this.address().port);
});
 
module.exports = app;
