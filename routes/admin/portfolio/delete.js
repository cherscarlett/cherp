var mongoose = require('mongoose');; 

module.exports = function(req, res) { 
    mongoose.model('portfolioItem').findById(req.params.id, function (err, portfolioItem) {
        if (err) {
            return console.error(err);
        } else {
            portfolioItem.remove(function (err, portfolioItem) {
                if (err) {
                    return console.error(err);
                } else {
                    console.log('DELETE removing ID: ' + portfolioItem._id);
                }
            });
        }
    });
};
