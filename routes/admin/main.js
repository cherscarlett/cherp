var navItems = require('../../private/menu.json'),
    layout = require('../../layouts/admin.marko'),
    mongoose = require('mongoose');

module.exports = function(req, res) { 
    mongoose.model('portfolioItem').find({}, function (err, portfolioItems) {
          if (err) {
              return console.error(err);
          } else {
              res.marko(layout, {
                title: 'Cher Stewart | Software Engineer | Admin',
                activeTab: 'admin',
                navItems: navItems,
                portfolioItems: portfolioItems
              });
          }     
    });
};
