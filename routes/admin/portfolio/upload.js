var Busboy = require('busboy'),
dotenv = require('dotenv'),
fs = require('fs'),
Knox = require('knox'),
gm = require('gm'),
im = gm.subClass({ imageMagick: true }); 

if (fs.existsSync('.env')) { 
    dotenv.load();
}

module.exports = function(req, res, next) {
    var busboy = new Busboy({ headers: req.headers }),
        images = [],
        counter = 0,
        finished = false,
        fileCount = 0;

    req.files = {};

    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
        if (fieldname === "length") {
            fileCount = parseInt(val);
        }
    });

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        Knox.aws = Knox.createClient({
            bucket: process.env.BUCKETEER_BUCKET_NAME,
            secret: process.env.BUCKETEER_AWS_SECRET_ACCESS_KEY,
            key: process.env.BUCKETEER_AWS_ACCESS_KEY_ID,
            region: 'us-east-1'
        });

        im(file).resize(420, 260).stream(function(err, file, stderr) {
            var id = require("crypto").randomBytes(20).toString('hex'),
                extension = filename.split('.')[1];

            filename = id + '.' + extension;

            file.fileRead = [];

            file.on('data', function(data) {
                this.fileRead.push(data);
            });

            file.on('end', function() {
                var finalBuffer = Buffer.concat(this.fileRead),
                    datePrefix = require('moment')().format('YYYY[/]MM'),
                    path = '/public/' + datePrefix + '/' + filename;

                req.files[fieldname] = {
                    buffer: finalBuffer,
                    size: finalBuffer.length,
                    filename: filename,
                    mimetype: mimetype
                };

                var headers = {
                    'Content-Length': req.files[fieldname].size,
                    'Content-Type': req.files[fieldname].mimetype,
                    'x-amz-acl': 'public-read'
                };

                Knox.aws.putBuffer(req.files[fieldname].buffer, path, headers, function(err, response){
                    if (err) {
                        console.error('error streaming image: ', new Date(), err);
                        return next(err);
                    }

                    if (response.statusCode !== 200) {
                        console.error('error streaming image: ', new Date(), err);
                        return next(err);
                    }

                    console.log('Amazon response statusCode: ', response.statusCode);
                    console.log('Your file was uploaded');
                    images.push(response.req.url);
                    counter++;

                    if ((counter === fileCount) && finished) {
                        console.log('done');
                        res.statusCode = 200;
                        res.end(images.join());
                    }
                });
            });
        });
    });

    busboy.on('finish', function() {
        finished = true;
    });

    req.pipe(busboy);

};
