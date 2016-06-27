var navItems = require('../../private/menu.json'),
    layout = require('../../layouts/admin.marko'),
    mongoose = require('mongoose');

module.exports = function(req, res) { 
    mongoose.model('portfolioItem').find().sort({order: -1}).exec(function (err, portfolioItems) {
      mongoose.model('user').findById(req.session.passport.user, function(err, profile) {
        if (err) {
              return console.error(err);
        } else {
            res.marko(layout, {
              title: 'Cher Stewart | Software Engineer | Admin',
              activeTab: 'admin',
              navItems: navItems,
              portfolioItems: portfolioItems.reverse(),
              scripts: ['/public/javascripts/admin.js'],
              user: profile,
              newItemInteger: portfolioItems.length + 1
            });
          }  
      });       
    });
};
