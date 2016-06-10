require('marko/node-require').install();
require('marko/express'); //enable res.marko 

require('marko/browser-refresh').enable();

var express = require('express');
 
var app = express();

var enrouten = require('express-enrouten');

var serveStatic = require('serve-static');

app.use('/public', serveStatic(__dirname + '/public'));

app.use(enrouten({
    directory: 'routes'
}));
 
app.listen(8000);

module.exports = app;
