var mongoose = require('mongoose'),
    dotenv = require('dotenv'),
    fs = require('fs'),
    mongo = {};

if (fs.existsSync('.env')) { 
    dotenv.load();
}

mongo.uri = process.env.MONGODB_URI;

mongoose.connect(mongo.uri);
