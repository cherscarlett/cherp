var dotenv = require('dotenv'),
    fs = require('fs'),
    AWS = require('aws-sdk');

if (fs.existsSync('.env')) { 
    dotenv.load();
}

var s3  = new AWS.S3({
    accessKeyId: process.env.BUCKETEER_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.BUCKETEER_AWS_SECRET_ACCESS_KEY,
    region: 'us-west-1'
});
