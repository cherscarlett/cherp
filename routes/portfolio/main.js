var navItems = require('../../private/menu.json'),
    layout = require('../../layouts/main.marko'),
    ajax = require('../../views/_portfolio.marko'),
    mongoose = require('mongoose');

module.exports = function(req, res) {
  mongoose.model('portfolioItem').findOne().sort({order: -1}).exec(function (err, portfolioItem) {

    if (req.query.ajax) {
        res.marko(ajax, {
            title: 'Cher Stewart | Software Engineer | Portfolio',
            activeTab: 'portfolio',
            item: portfolioItem
        });
    }
    else {
        res.marko(layout, {
            title: 'Cher Stewart | Software Engineer | Portfolio',
            heading: 'Cher Stewart',
            subHeading: 'Software Engineer',
            activeTab: 'portfolio',
            navItems: navItems,
            item: portfolioItem
        });
    }
  });
};
