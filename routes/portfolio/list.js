var layout = require('../../views/_portfolio_list.marko'),
    mongoose = require('mongoose');

module.exports = function(req, res) { 
    mongoose.model('portfolioItem').find().sort({order: -1}).exec(function (err, portfolioItems) {
          if (err) {
              return console.error(err);
          } else {
              res.marko(layout, {
                portfolioItems: portfolioItems
              });
          }     
    });
};
