var navItems = require('../../private/menu.json'),
    layout = require('../../layouts/main.marko'),
    ajax = require('../../partials/_portfolio.marko');

module.exports = function(req, res) {
    if (req.query.ajax) {
        res.marko(ajax, {
            title: 'Cher Stewart | Software Engineer | Portfolio',
            activeTab: 'portfolio'
        });
    }
    else {
        res.marko(layout, {
          title: 'Cher Stewart | Software Engineer | Portfolio',
          heading: 'Cher Stewart',
          subHeading: 'Software Engineer',
          activeTab: 'portfolio',
          navItems: navItems
        });
    }
};
