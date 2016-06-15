require('marko/node-require').install();
require('marko/express'); //enable res.marko 

require('marko/browser-refresh').enable();

var express = require('express'),
    app = express(),
    enrouten = require('express-enrouten'),
    serveStatic = require('serve-static'),
    bodyParser= require('body-parser'),
    dotenv = require('dotenv'),
    fs = require('fs'),
    db = require('./models/db'),
    s3 = require('./models/s3'),
    portfolioItems = require('./models/portfolioItems');

app.use('/public', serveStatic(__dirname + '/public'));

app.use(enrouten({
    directory: 'routes'
}));

app.listen(8000, () => {
    console.log('listening on 8000');
});
 
module.exports = app;
