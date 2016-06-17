var layout = require('../../../partials/admin/_portfolio_items.marko'),
    mongoose = require('mongoose');

module.exports = function(req, res) { 
    mongoose.model('portfolioItem').find({}, function (err, portfolioItems) {
          if (err) {
              return console.error(err);
          } else {
              res.marko(layout, {
                portfolioItems: portfolioItems.reverse()
              });
          }     
    });
};
