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
    s3 = require('./models/s3'),
    portfolioItems = require('./models/portfolioItems'),
    users = require('./models/users'),
    methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
// app.use(require('morgan')('combined'));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/public', serveStatic(__dirname + '/public'));

app.use(enrouten({
    directory: 'routes'
}));

app.listen(8000, () => {
    console.log('listening on 8000');
});
 
module.exports = app;
