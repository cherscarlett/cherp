var navItems = require('../../private/menu.json'),
    layout = require('../../layouts/main.marko'),
    ajax = require('../../views/_portfolio.marko'),
    mongoose = require('mongoose');

module.exports = function(req, res) {
    mongoose.model('portfolioItem').findOne({ slug: req.params.slug }, function(err, portfolioItem) {
        if (req.query.ajax) {
            res.marko(ajax, {
              title: 'Cher Stewart | Software Engineer | Portfolio',
              subTitle: 'Software Engineer',
              item: portfolioItem
            });
        }
        else {
            res.marko(layout, {
              title: 'Cher Stewart | Software Engineer | Portfolio',
              subTitle: 'Software Engineer',
              activeTab: 'portfolio',
              navItems: navItems,
              item: portfolioItem
            });
        }
    });
};
